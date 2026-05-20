"""CV-to-JobDescription matcher using a local Ollama model with rubric scoring.

Rubric criteria:
- Domain/Task alignment: how well the CV's domain matches the role's domain
- Required Skills: coverage of must-have skills/tools listed in the JD
- Relevant Experience: years, seniority, sector relevance
"""
from __future__ import annotations

import json
import re
from typing import Literal

import ollama
from pydantic import BaseModel, Field, ValidationError

MODEL = "llama3.2:3b"
MAX_RETRIES = 2

def build_system_prompt(jd_text: str) -> str:
    """Build the system prompt for the matcher, with the JD interpolated.

    Kept as a function (not a constant) so it can be unit-tested, swapped per
    role/seniority, or instrumented with extra context without touching the
    call site in match_cv_to_jd.
    """
    return f"""You are an expert recruiter. Score how well a candidate's CV matches a job role.

You must score THREE criteria, each from 0 to 100, with one or two sentences of reasoning citing CV evidence:
1. domain_task_alignment - candidate's domain and tasks vs role's domain and responsibilities
2. required_skills - coverage of the role's must-have skills, tools, and certifications
3. relevant_experience - years of experience, seniority, sector relevance, progression

SCORING ANCHORS (use these to calibrate every score, including sub-scores):
- 80-100: Strong/excellent match. Direct evidence of all or nearly all key requirements.
- 60-79: Good match. Most requirements met with minor gaps.
- 40-59: Partial match. Some core requirements met but meaningful gaps remain.
- 20-39: Weak match. Indirect or transferable evidence only (adjacent domain, related soft skills, generic professional experience).
- 0-19: Almost no signal. Reserve for true absence of any transferable evidence.

CRITICAL: A sub-score of 0 is almost never correct. Even a candidate from a totally different domain typically brings transferable communication, analytical, leadership, or client-facing skills — those are worth at least 15-25 points in domain_task_alignment and relevant_experience. Use 0-10 only when the CV truly contains no relevant signal at all. Be strict about MISSING required skills, but do not collapse to 0 just because the candidate's primary domain differs.

Then provide:
- overall_score: weighted average (required_skills 40%, relevant_experience 35%, domain_task_alignment 25%), as integer
- verdict: one of "Strong match", "Good match", "Moderate match", "Weak match", "Not a match"
- key_gaps: 2 to 5 short bullet phrases identifying the most important gaps

JOB DESCRIPTION:
{jd_text}

Respond ONLY with a valid JSON object matching the required schema. Do not include any other text."""



class CriterionScore(BaseModel):
    score: int = Field(ge=0, le=100)
    reasoning: str


class CVMatch(BaseModel):
    domain_task_alignment: CriterionScore
    required_skills: CriterionScore
    relevant_experience: CriterionScore
    overall_score: int = Field(ge=0, le=100)
    verdict: Literal[
        "Strong match", "Good match", "Moderate match", "Weak match", "Not a match"
    ]
    key_gaps: list[str] = Field(min_length=2, max_length=5)


class MatcherError(Exception):
    """Raised when the model fails to produce a valid CVMatch after retries."""


def extract_jd_title(jd_text: str) -> str:
    """First non-empty line of the JD — the role title.

    JDs in this dataset open directly with the role title (e.g. "Senior
    Consultant, Technology Risk"), no metadata header.
    """
    for line in jd_text.split("\n"):
        line = line.strip()
        if line:
            return line
    return "Untitled role"


def extract_candidate_name(cv_text: str) -> str:
    """First non-metadata line in the CV — the candidate's name.

    Skips the filename header (e.g. "cv_1.md 2025-05-02") and page-number lines
    (e.g. "1 / 2"). Returns "Unknown" if the CV is empty or all-metadata.
    """
    for line in cv_text.split("\n"):
        line = line.strip()
        if not line:
            continue
        if re.search(r"\.md\b", line, re.IGNORECASE):
            continue
        if re.match(r"^\d+\s*/\s*\d+$", line):
            continue
        return line
    return "Unknown"


def to_flat_record(
    match: CVMatch, name: str, cv_id: str, jd_id: str, elapsed_seconds: float | None = None
) -> dict:
    """Convert a CVMatch into a flat dict ready for SQLite ingest."""
    record = {
        "name": name,
        "cv_id": cv_id,
        "jd_id": jd_id,
        "overall_score": match.overall_score,
        "verdict": match.verdict,
        "domain_task_alignment_score": match.domain_task_alignment.score,
        "domain_task_alignment_reasoning": match.domain_task_alignment.reasoning,
        "required_skills_score": match.required_skills.score,
        "required_skills_reasoning": match.required_skills.reasoning,
        "relevant_experience_score": match.relevant_experience.score,
        "relevant_experience_reasoning": match.relevant_experience.reasoning,
        "key_gaps": match.key_gaps,
    }
    if elapsed_seconds is not None:
        record["elapsed_seconds"] = round(elapsed_seconds, 1)
    return record


SCORE_FLOOR = 5


def _apply_score_floor(match: CVMatch) -> CVMatch:
    """Floor sub-scores at SCORE_FLOOR when reasoning is non-empty, then recompute overall.

    Small models (3B) tend to collapse to literal 0 on cross-domain mismatches even
    when the CV shows transferable technical or professional signal. A floor of 5
    reflects 'some transferable signal' over 'nothing', matches the prompt's anchors,
    and keeps the pitch defensible (no '0/100' shown to recruiters).
    """
    for criterion_name in ("domain_task_alignment", "required_skills", "relevant_experience"):
        crit: CriterionScore = getattr(match, criterion_name)
        if crit.reasoning.strip() and crit.score < SCORE_FLOOR:
            crit.score = SCORE_FLOOR

    match.overall_score = round(
        match.required_skills.score * 0.40
        + match.relevant_experience.score * 0.35
        + match.domain_task_alignment.score * 0.25
    )
    return match


def match_cv_to_jd(
    cv_text: str,
    jd_text: str,
    cv_id: str | None = None,
    jd_id: str | None = None,
    model: str = MODEL,
) -> CVMatch:
    """Score a single CV against a single JD using a local Ollama model.

    Retries up to MAX_RETRIES times on JSON/validation errors, since 3B models
    occasionally emit malformed output.
    """
    schema = CVMatch.model_json_schema()
    system = build_system_prompt(jd_text)
    user_msg = (
        f"Score this candidate against the role above.\n\n"
        f"CANDIDATE CV ({cv_id or 'unknown'}):\n{cv_text}"
    )

    last_error: Exception | None = None
    for attempt in range(MAX_RETRIES + 1):
        try:
            response = ollama.chat(
                model=model,
                messages=[
                    {"role": "system", "content": system},
                    {"role": "user", "content": user_msg},
                ],
                format=schema,
                options={"temperature": 0, "num_predict": 1500},
            )
            content = response["message"]["content"]
            match = CVMatch.model_validate_json(content)
            return _apply_score_floor(match)
        except (ValidationError, json.JSONDecodeError) as e:
            last_error = e
            continue

    raise MatcherError(
        f"Failed to get valid CVMatch after {MAX_RETRIES + 1} attempts. "
        f"Last error: {last_error}"
    )


def match_cv_to_all_jds(
    cv_text: str,
    jds: dict[str, str],
    cv_id: str = "uploaded",
    model: str = MODEL,
) -> list[dict]:
    """Match a single CV against every JD. Returns flat records sorted by score desc.

    Use this when a candidate uploads a CV and the UI must decide which of the
    open roles fits best. Sequential — expect ~5 x 8-15s = 40-75s total.
    """
    name = extract_candidate_name(cv_text)
    results: list[dict] = []
    for jd_id, jd_text in jds.items():
        match = match_cv_to_jd(cv_text, jd_text, cv_id=cv_id, jd_id=jd_id, model=model)
        results.append(to_flat_record(match, name=name, cv_id=cv_id, jd_id=jd_id))
    results.sort(key=lambda r: r["overall_score"], reverse=True)
    return results


def match_jd_to_all_cvs(
    jd_text: str,
    cvs: dict[str, str],
    jd_id: str = "new_jd",
    model: str = MODEL,
) -> list[dict]:
    """Match a single JD against every CV. Returns flat records sorted by score desc.

    Use this when a recruiter adds a new role and needs the shortlist of best-fit
    candidates from the existing pool. Sequential — expect ~107 x 8-15s = 14-27 min,
    so trigger as a background job rather than a synchronous UI call.
    """
    results: list[dict] = []
    for cv_id, cv_text in cvs.items():
        name = extract_candidate_name(cv_text)
        match = match_cv_to_jd(cv_text, jd_text, cv_id=cv_id, jd_id=jd_id, model=model)
        results.append(to_flat_record(match, name=name, cv_id=cv_id, jd_id=jd_id))
    results.sort(key=lambda r: r["overall_score"], reverse=True)
    return results
