#!/usr/bin/env python3
"""Local-first CV/JD pipeline for the EY AI Challenge.

The pipeline always produces frontend-ready JSON through deterministic parsing
and scoring. Ollama is optional and only used to improve selected structured
text fields, so personal CV data does not need to leave the machine.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import statistics
from pathlib import Path
from typing import Any

import fitz
import requests

ROOT = Path(__file__).resolve().parent
CV_DIR = ROOT / "CVs"
JD_DIR = ROOT / "JobDescriptions"
OUTPUT_DIR = ROOT / "output"
CACHE_DIR = ROOT / ".pipeline_cache"

SCORE_KEYS = [
    "relevant_experience",
    "technical_skills",
    "education",
    "language_proficiency",
    "soft_skills_leadership",
    "culture_motivation_fit",
]

SKILL_KEYWORDS = [
    "ai",
    "artificial intelligence",
    "machine learning",
    "data",
    "analytics",
    "strategy",
    "governance",
    "azure",
    "aws",
    "cloud",
    "python",
    "sql",
    "power bi",
    "tableau",
    "excel",
    "financial",
    "finance",
    "accounting",
    "forensic",
    "compliance",
    "investigation",
    "risk",
    "technology risk",
    "cybersecurity",
    "security",
    "vulnerability",
    "controls",
    "audit",
    "cisa",
    "cissp",
    "cfe",
    "cpa",
    "consulting",
    "transformation",
    "leadership",
    "stakeholder",
]


def natural_key(path: Path) -> tuple[str, int]:
    match = re.search(r"(\d+)", path.stem)
    return (re.sub(r"\d+", "", path.stem), int(match.group(1)) if match else 0)


def extract_text_from_pdf(pdf_path: Path) -> str:
    """Extract text from text-based PDFs using PyMuPDF."""
    doc = fitz.open(pdf_path)
    try:
        return "\n".join(page.get_text() for page in doc).strip()
    finally:
        doc.close()


def strip_json(text: str) -> str:
    """Recover a JSON object/array from model output that may include markdown."""
    text = (text or "").strip()
    if text.startswith("```json"):
        text = text[7:].strip()
    if text.startswith("```"):
        text = text[3:].strip()
    if text.endswith("```"):
        text = text[:-3].strip()

    starts = [i for i in [text.find("["), text.find("{")] if i >= 0]
    if starts:
        text = text[min(starts) :]

    end_square = text.rfind("]")
    end_curly = text.rfind("}")
    end = max(end_square, end_curly)
    if end >= 0:
        text = text[: end + 1]
    return text.strip()


def load_json(path: Path) -> Any | None:
    if path.exists():
        with path.open("r", encoding="utf-8") as f:
            return json.load(f)
    return None


def write_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")


class OllamaClient:
    """Small wrapper around the local Ollama HTTP API.

    CV data stays on the machine. If Ollama is unavailable or returns invalid
    JSON, the pipeline keeps going with deterministic local results.
    """

    def __init__(
        self,
        model_name: str = "phi4-mini:3.8b",
        host: str = "http://localhost:11434",
        timeout: int = 180,
    ):
        self.model_name = model_name
        self.host = host.rstrip("/")
        self.timeout = timeout
        self.enabled = self.is_available()

    def is_available(self) -> bool:
        try:
            response = requests.get(f"{self.host}/api/tags", timeout=5)
            response.raise_for_status()
            models = response.json().get("models", [])
            names = {model.get("name") for model in models}
            if self.model_name not in names:
                print(f"Ollama model {self.model_name} not found. Available: {', '.join(sorted(names))}")
                return False
            return True
        except Exception as exc:
            print(f"Ollama unavailable at {self.host}: {exc}")
            return False

    def call(self, prompt: str, retries: int = 1) -> str | None:
        if not self.enabled:
            return None

        # Qwen thinking models may need an explicit no-think instruction. Other
        # models ignore it less reliably, so keep their prompt direct.
        if self.model_name.lower().startswith("qwen"):
            prompt = f"/no_think\n{prompt}\nReturn final JSON only. Do not include markdown."
        else:
            prompt = f"{prompt}\nReturn final JSON only. Do not include markdown."
        payload = {
            "model": self.model_name,
            "prompt": prompt,
            "stream": False,
            "options": {
                "temperature": 0,
                "num_ctx": 16384,
                "num_predict": 800,
            },
        }
        for attempt in range(retries):
            try:
                response = requests.post(f"{self.host}/api/generate", json=payload, timeout=self.timeout)
                response.raise_for_status()
                text = response.json().get("response", "")
                return strip_json(text)
            except Exception as exc:
                print(f"Ollama call failed ({attempt + 1}/{retries}): {exc}")
        return None


class LocalClient:
    """Null AI client used for the fast deterministic path."""

    enabled = False
    model_name = "local"

    def call(self, prompt: str, retries: int = 0) -> str | None:
        return None


def extract_all_pdfs() -> tuple[dict[str, str], dict[str, str], list[str]]:
    cv_texts: dict[str, str] = {}
    jd_texts: dict[str, str] = {}
    skipped: list[str] = []

    print("Verifying first 3 CV text extractions:")
    for path in sorted(CV_DIR.glob("*.pdf"), key=natural_key):
        text = extract_text_from_pdf(path)
        if len(text) < 40:
            skipped.append(path.name)
            continue
        cv_texts[path.stem] = text
        if len(cv_texts) <= 3:
            preview = re.sub(r"\s+", " ", text[:700])
            print(f"\n--- {path.name} ({len(text)} chars) ---\n{preview}")

    for path in sorted(JD_DIR.glob("*.pdf"), key=natural_key):
        text = extract_text_from_pdf(path)
        if len(text) < 40:
            print(f"WARNING: empty/invalid job description skipped: {path.name}")
            continue
        jd_texts[path.stem] = text

    if skipped:
        print(f"\nWARNING: skipped {len(skipped)} CV(s) with empty/invalid text: {', '.join(skipped)}")
    print(f"Extracted {len(cv_texts)} CVs and {len(jd_texts)} job descriptions.")
    return cv_texts, jd_texts, skipped


def parse_job_prompt(jd_text: str) -> str:
    return f"""You are a structured data extractor. Given a job description, extract the following fields and return ONLY a valid JSON object, no markdown, no explanation.

JOB DESCRIPTION TEXT:
{jd_text}

Return this exact JSON structure:
{{
  "title": "job title",
  "department": "department name",
  "location": "city, country",
  "experience_level": "e.g. Director (15+ years)",
  "required_skills": ["skill1", "skill2"],
  "required_experience_years": 15,
  "required_education": "description of education requirements",
  "required_languages": ["language1", "language2"],
  "key_responsibilities": ["resp1", "resp2"],
  "certifications_preferred": ["cert1", "cert2"]
}}"""


def first_line_value(text: str, label: str) -> str:
    match = re.search(rf"{re.escape(label)}:\s*(.+)", text, re.IGNORECASE)
    return match.group(1).strip() if match else ""


def section_after(text: str, label: str) -> str:
    match = re.search(
        rf"{re.escape(label)}:\s*(.*?)(?:\n\s*(?:Requirements|Education|Experience|Skills|Languages|Certifications|Key Responsibilities|About the Role):|\Z)",
        text,
        re.IGNORECASE | re.DOTALL,
    )
    return match.group(1).strip() if match else ""


def split_sentences(text: str, limit: int = 8) -> list[str]:
    cleaned = re.sub(r"\s+", " ", text).strip()
    parts = re.split(r"(?<=[.!?])\s+", cleaned)
    return [p.strip(" -•") for p in parts if len(p.strip()) > 8][:limit]


def format_skill(skill: str) -> str:
    acronyms = {
        "ai": "AI",
        "aws": "AWS",
        "azure": "Azure",
        "cisa": "CISA",
        "cissp": "CISSP",
        "cism": "CISM",
        "ceh": "CEH",
        "cfe": "CFE",
        "cpa": "CPA",
        "sql": "SQL",
        "power bi": "Power BI",
    }
    return acronyms.get(skill.lower(), skill.title())


def local_parse_job(jd_id: str, text: str, source_file: str) -> dict[str, Any]:
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    title = lines[0] if lines else jd_id
    location = first_line_value(text, "Location") or "Lisbon, Portugal"
    department = first_line_value(text, "Department") or "Unknown"
    experience_level = first_line_value(text, "Experience Level") or "N/A"

    years_match = re.search(r"(\d+)\s*\+?\s*(?:-|to)?\s*\d*\s*years", text, re.IGNORECASE)
    required_years = int(years_match.group(1)) if years_match else 0

    about_role = re.sub(r"\s+", " ", section_after(text, "About the Role")).strip()
    requirements = section_after(text, "Requirements")
    requirement_items = split_sentences(requirements, 12)
    responsibilities = split_sentences(section_after(text, "Key Responsibilities"), 10)
    combined = f"{title} {department} {requirements} {' '.join(responsibilities)}".lower()
    skills = sorted({format_skill(kw) for kw in SKILL_KEYWORDS if kw in combined})
    languages = []
    if "english" in text.lower():
        languages.append("English")
    if "portuguese" in text.lower():
        languages.append("Portuguese")

    certs = []
    for cert in ["CISA", "CISSP", "CISM", "CEH", "CFE", "CPA", "AWS", "Azure"]:
        if cert.lower() in text.lower():
            certs.append(cert)

    education = "Not specified"
    degree_match = re.search(r"\b(Bachelor'?s|Master'?s|PhD|MBA)\b[^.]*\.", text, re.IGNORECASE)
    if degree_match:
        education = degree_match.group(0).strip()

    return {
        "job_id": jd_id,
        "title": title,
        "department": department,
        "location": location,
        "experience_level": experience_level,
        "about_role": about_role,
        "required_skills": skills[:18],
        "required_experience_years": required_years,
        "required_education": education,
        "required_languages": languages,
        "requirements": requirement_items,
        "key_responsibilities": responsibilities,
        "certifications_preferred": certs,
        "source_file": source_file,
    }


def job_output_payload(job: dict[str, Any]) -> dict[str, Any]:
    """Fields the frontend can use for job cards and detail panels."""
    return {
        "job_id": job.get("job_id", ""),
        "title": job.get("title", ""),
        "department": job.get("department", ""),
        "location": job.get("location", ""),
        "experience_level": job.get("experience_level", ""),
        "about_role": job.get("about_role", ""),
        "required_skills": job.get("required_skills", []),
        "required_experience_years": job.get("required_experience_years", 0),
        "required_education": job.get("required_education", ""),
        "required_languages": job.get("required_languages", []),
        "requirements": job.get("requirements", []),
        "key_responsibilities": job.get("key_responsibilities", []),
        "certifications_preferred": job.get("certifications_preferred", []),
        "source_file": job.get("source_file", ""),
    }


def parse_jobs(jd_texts: dict[str, str], client: Any, use_ai: bool) -> list[dict[str, Any]]:
    cache_path = CACHE_DIR / "parsed_jobs.json"
    cached = load_json(cache_path)
    if cached:
        print("Loaded parsed jobs from cache.")
        return cached

    jobs = []
    for index, (jd_stem, text) in enumerate(sorted(jd_texts.items(), key=lambda item: natural_key(Path(item[0]))), 1):
        job_id = f"job_{index}"
        parsed = None
        raw = client.call(parse_job_prompt(text)) if use_ai else None
        if raw:
            try:
                parsed = json.loads(raw)
            except json.JSONDecodeError as exc:
                print(f"Could not parse AI job JSON for {jd_stem}: {exc}")
        if not isinstance(parsed, dict):
            parsed = local_parse_job(job_id, text, f"{jd_stem}.pdf")

        parsed["job_id"] = job_id
        parsed["source_file"] = f"{jd_stem}.pdf"
        jobs.append(parsed)

    write_json(cache_path, jobs)
    return jobs


def cv_batch_prompt(batch: list[tuple[str, str]]) -> str:
    joined = "\n\n".join(f"===== CANDIDATE {cid} =====\n{text}" for cid, text in batch)
    return f"""You are a structured data extractor for candidate CVs. I will give you multiple CVs separated by markers. For each CV, extract structured data and return a JSON array.

Return ONLY a valid JSON array. No markdown, no explanation, no extra text.

Each object in the array must have:
{{
  "candidate_id": "the ID from the marker",
  "name": "full name",
  "current_title": "most recent job title",
  "years_experience": estimated total years of professional experience as integer,
  "skills": ["skill1", "skill2"],
  "education_level": "PhD/MSc/BSc/Other",
  "field_of_study": "main field",
  "languages": ["language1 (level)", "language2 (level)"],
  "industries": ["industry1", "industry2"],
  "notable_achievements": ["achievement1", "achievement2"]
}}

Here are the CVs:

{joined}"""


def estimate_years(text: str) -> int:
    explicit = re.findall(r"(\d+)\s*\+?\s*years?", text, re.IGNORECASE)
    if explicit:
        return max(int(x) for x in explicit)

    years = [int(y) for y in re.findall(r"\b(19\d{2}|20\d{2})\b", text)]
    years = [y for y in years if 1970 <= y <= 2026]
    if years:
        return max(0, min(40, 2026 - min(years)))
    return 0


def detect_education(text: str) -> tuple[str, str]:
    lower = text.lower()
    level = "Other"
    if "phd" in lower or "doctorate" in lower:
        level = "PhD"
    elif "master" in lower or "msc" in lower or "mba" in lower:
        level = "MSc"
    elif "bachelor" in lower or "bsc" in lower or "licenciatura" in lower:
        level = "BSc"

    field = "Not specified"
    edu = section_after(text, "Education")
    if edu:
        field_match = re.search(
            r"(?:in|of)\s+([A-Za-zÀ-ÿ &,/.-]+?)(?:\n|,|\.|$)",
            edu,
            re.IGNORECASE,
        )
        if field_match:
            field = field_match.group(1).strip()
    return level, field


def looks_like_candidate_name(line: str, candidate_id: str) -> bool:
    lower = line.lower().strip()
    if (
        not line
        or lower.startswith(candidate_id.lower())
        or lower.endswith((".md", ".pdf", ".docx", ".txt"))
        or "cv" in lower and ("_" in lower or "." in lower)
        or re.fullmatch(r"\d{4}-\d{2}-\d{2}", line)
        or re.fullmatch(r"\d+\s*/\s*\d+", line)
        or ":" in line
        or "@" in line
        or re.search(r"\d", line)
    ):
        return False

    words = line.split()
    if not 2 <= len(words) <= 5:
        return False

    name_word = re.compile(r"^[A-ZÀ-ÖØ-Þ][A-Za-zÀ-ÖØ-öø-ÿ'’-]+$")
    return all(name_word.match(word) for word in words)


def local_parse_cv(candidate_id: str, text: str) -> dict[str, Any]:
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    name = "Unknown"
    for line in lines[:12]:
        if looks_like_candidate_name(line, candidate_id):
            name = line
            break

    current_title = first_line_value(text, "Title") or "Unknown"
    lower = text.lower()
    skills = sorted({kw.title() for kw in SKILL_KEYWORDS if kw in lower})
    languages = []
    for lang in ["English", "Portuguese", "Spanish", "French", "German"]:
        if lang.lower() in lower:
            level_match = re.search(rf"{lang}\s*\(([^)]+)\)", text, re.IGNORECASE)
            languages.append(f"{lang} ({level_match.group(1)})" if level_match else lang)

    industries = []
    for industry in [
        "Consulting",
        "Financial Services",
        "Banking",
        "Technology",
        "Cybersecurity",
        "Forensic",
        "Tax",
        "Healthcare",
        "Public Sector",
        "Energy",
    ]:
        if industry.lower() in lower:
            industries.append(industry)

    level, field = detect_education(text)
    achievements = [
        sentence
        for sentence in split_sentences(text, 12)
        if re.search(r"\b(led|managed|delivered|built|implemented|saved|reduced|improved|created|developed)\b", sentence, re.IGNORECASE)
    ][:4]

    return {
        "candidate_id": candidate_id,
        "name": name,
        "current_title": current_title,
        "years_experience": estimate_years(text),
        "skills": skills,
        "education_level": level,
        "field_of_study": field,
        "languages": languages,
        "industries": industries,
        "notable_achievements": achievements,
    }


def extract_candidates(cv_texts: dict[str, str], client: Any, batch_size: int, use_ai: bool) -> dict[str, dict[str, Any]]:
    cache_path = CACHE_DIR / "candidates.json"
    cached = load_json(cache_path)
    if cached:
        print("Loaded candidate extractions from cache.")
        return cached

    items = sorted(cv_texts.items(), key=lambda item: natural_key(Path(item[0])))
    candidates: dict[str, dict[str, Any]] = {}
    for start in range(0, len(items), batch_size):
        batch = items[start : start + batch_size]
        parsed_batch = None
        raw = client.call(cv_batch_prompt(batch)) if use_ai else None
        if raw:
            try:
                parsed_batch = json.loads(raw)
            except json.JSONDecodeError as exc:
                print(f"Could not parse AI candidate batch {start // batch_size + 1}: {exc}")

        if isinstance(parsed_batch, list):
            for candidate in parsed_batch:
                if isinstance(candidate, dict) and candidate.get("candidate_id"):
                    candidates[candidate["candidate_id"]] = candidate

            expected = {cid for cid, _ in batch}
            returned = set(candidates) & expected
            missing = sorted(expected - returned, key=lambda cid: natural_key(Path(cid)))
            if missing:
                print(f"Batch missing {len(missing)} candidates; using local fallback for: {', '.join(missing)}")
                for cid, text in batch:
                    if cid in missing:
                        candidates[cid] = local_parse_cv(cid, text)
        else:
            for cid, text in batch:
                candidates[cid] = local_parse_cv(cid, text)

        print(f"Extracted candidates: {len(candidates)}/{len(items)}")

    write_json(cache_path, candidates)
    return candidates


def scoring_prompt(job: dict[str, Any], candidates: dict[str, dict[str, Any]]) -> str:
    return f"""You are an expert talent acquisition AI. You will evaluate candidates against a specific job opening.

SCORING DIMENSIONS (each scored 1-5):
- relevant_experience: How well does the candidate's work history match this role? (1=no relevant experience, 3=some transferable experience, 5=directly relevant senior experience)
- technical_skills: How well do the candidate's skills match the required skills? (1=no overlap, 3=partial overlap, 5=meets or exceeds all technical requirements)
- education: How well does the candidate's education align? (1=completely unrelated field, 3=related but different field, 5=exact match to requirements)
- language_proficiency: Does the candidate meet language requirements? (1=doesn't speak required languages, 3=partial match, 5=fluent in all required languages)
- soft_skills_leadership: Evidence of leadership, communication, team management? (1=no evidence, 3=some evidence, 5=strong demonstrated leadership)
- culture_motivation_fit: Does the candidate seem aligned with the role's industry, company type, and level? (1=completely misaligned, 3=somewhat aligned, 5=strong alignment)

TIER ASSIGNMENT:
- "strong_match": overall average >= 3.5 AND no critical dimension is 1 (except language which can be compensated)
- "possible_match": overall average >= 2.5 OR has at least 2 dimensions >= 4
- "not_a_fit": everything else

IMPORTANT RULES:
- If a candidate is clearly not a fit, assign all relevant dimensions 1, set tier to "not_a_fit", leave strengths and interview_questions as empty arrays, and write polite feedback.
- Do NOT inflate scores. Be strict on the experience years requirement.

JOB REQUIREMENTS:
{json.dumps(job, ensure_ascii=False)}

CANDIDATES (structured data):
{json.dumps(list(candidates.values()), ensure_ascii=False)}

Return ONLY a valid JSON array of objects, one per candidate. No markdown, no explanation.
Each object must have exactly these fields:
{{
  "candidate_id": "cv_X",
  "name": "full name",
  "tier": "strong_match|possible_match|not_a_fit",
  "scores": {{
    "relevant_experience": 1,
    "technical_skills": 1,
    "education": 1,
    "language_proficiency": 1,
    "soft_skills_leadership": 1,
    "culture_motivation_fit": 1
  }},
  "summary": "2-3 sentence assessment",
  "strengths": ["strength1", "strength2"],
  "gaps": ["gap1"],
  "interview_questions": ["question1", "question2"],
  "feedback_draft": "2-3 sentence feedback for the candidate"
}}"""


def clamp_score(value: int | float) -> int:
    return max(1, min(5, int(round(value))))


def overlap_count(left: list[str], right: list[str]) -> int:
    left_words = {item.lower() for item in left}
    right_words = {item.lower() for item in right}
    return len(left_words & right_words)


def score_from_overlap(matches: int, required_count: int) -> int:
    if required_count <= 0:
        return 3
    ratio = matches / required_count
    if ratio >= 0.75:
        return 5
    if ratio >= 0.45:
        return 4
    if ratio >= 0.2:
        return 3
    if matches:
        return 2
    return 1


def local_score_candidate(job: dict[str, Any], candidate: dict[str, Any]) -> dict[str, Any]:
    required_years = int(job.get("required_experience_years") or 0)
    years = int(candidate.get("years_experience") or 0)
    candidate_skills = candidate.get("skills") or []
    required_skills = job.get("required_skills") or []
    candidate_blob = " ".join(
        str(x)
        for x in [
            candidate.get("current_title", ""),
            candidate.get("field_of_study", ""),
            " ".join(candidate_skills),
            " ".join(candidate.get("industries") or []),
            " ".join(candidate.get("notable_achievements") or []),
        ]
    ).lower()
    job_blob = " ".join(
        str(x)
        for x in [
            job.get("title", ""),
            job.get("department", ""),
            " ".join(required_skills),
            " ".join(job.get("key_responsibilities") or []),
        ]
    ).lower()

    exp_score = 3
    if required_years:
        ratio = years / required_years
        exp_score = 5 if ratio >= 1.15 else 4 if ratio >= 0.85 else 3 if ratio >= 0.55 else 2 if ratio >= 0.3 else 1
    elif years >= 7:
        exp_score = 5
    elif years >= 4:
        exp_score = 4
    elif years >= 1:
        exp_score = 3
    else:
        exp_score = 2

    matches = overlap_count(candidate_skills, required_skills)
    technical_score = score_from_overlap(matches, max(1, min(8, len(required_skills))))

    education_score = 3
    field = (candidate.get("field_of_study") or "").lower()
    if any(word in field for word in ["finance", "accounting", "computer", "engineering", "data", "business", "management", "economics", "law"]):
        education_score = 4
    if any(word in field for word in ["marine", "biology", "arts", "music"]) and not any(word in job_blob for word in field.split()):
        education_score = 1

    required_langs = [lang.lower() for lang in job.get("required_languages") or []]
    candidate_langs = " ".join(candidate.get("languages") or []).lower()
    if not required_langs:
        language_score = 4
    else:
        lang_matches = sum(1 for lang in required_langs if lang in candidate_langs)
        language_score = score_from_overlap(lang_matches, len(required_langs))

    leadership_terms = ["lead", "led", "manager", "managed", "director", "team", "stakeholder", "c-level", "pmo"]
    soft_score = 1 + min(4, sum(1 for term in leadership_terms if term in candidate_blob))

    job_terms = {term for term in re.findall(r"[a-z]{4,}", job_blob)}
    candidate_terms = {term for term in re.findall(r"[a-z]{4,}", candidate_blob)}
    common_terms = job_terms & candidate_terms
    culture_score = 5 if len(common_terms) >= 10 else 4 if len(common_terms) >= 6 else 3 if len(common_terms) >= 3 else 2 if common_terms else 1

    scores = {
        "relevant_experience": clamp_score(exp_score),
        "technical_skills": clamp_score(technical_score),
        "education": clamp_score(education_score),
        "language_proficiency": clamp_score(language_score),
        "soft_skills_leadership": clamp_score(soft_score),
        "culture_motivation_fit": clamp_score(culture_score),
    }
    avg = round(statistics.mean(scores.values()), 1)
    critical_scores = [v for k, v in scores.items() if k != "language_proficiency"]
    if avg >= 3.5 and min(critical_scores) > 1:
        tier = "strong_match"
    elif avg >= 2.5 or sum(1 for value in scores.values() if value >= 4) >= 2:
        tier = "possible_match"
    else:
        tier = "not_a_fit"

    name = candidate.get("name") or "Unknown"
    title = candidate.get("current_title") or "candidate"
    strengths = []
    if tier != "not_a_fit":
        if years:
            strengths.append(f"{years} years of professional experience")
        if matches:
            strengths.append(f"Skill overlap with role requirements: {matches} matched area(s)")
        strengths.extend((candidate.get("notable_achievements") or [])[: max(0, 5 - len(strengths))])
    strengths = strengths[:5]

    gaps = []
    if required_years and years < required_years:
        gaps.append(f"Below the requested {required_years}+ years of experience")
    if technical_score <= 2:
        gaps.append("Limited explicit overlap with the required technical skills")
    if language_score <= 2:
        gaps.append("Required language proficiency is not clearly demonstrated")
    if not gaps:
        gaps.append("Validate depth of experience and recent project impact in interview")

    if tier == "not_a_fit":
        questions: list[str] = []
        strengths = []
    else:
        questions = [
            f"Can you walk us through the most relevant project you have delivered for a {job.get('title', 'similar')} role?",
            "Which measurable outcomes from your recent work best demonstrate your fit for this position?",
        ]

    if tier == "strong_match":
        summary = f"{name} is a strong match for {job.get('title')} with relevant experience as {title}. The profile shows useful overlap with the role requirements and enough seniority to justify interview priority."
    elif tier == "possible_match":
        summary = f"{name} has a partially aligned profile for {job.get('title')}. The candidate shows some relevant signals, but the gaps should be validated before advancing."
    else:
        summary = f"{name} does not currently appear aligned with {job.get('title')}. The profile lacks enough evidence against the core experience or skill requirements."

    feedback = (
        f"Thank you for your application, {name}. After reviewing your profile against the {job.get('title')} role, "
        f"we {'would like to explore your experience further' if tier != 'not_a_fit' else 'do not see a close match with the current requirements'}. "
        "We appreciate your interest in EY Portugal."
    )

    return {
        "candidate_id": candidate["candidate_id"],
        "name": name,
        "tier": tier,
        "scores": scores,
        "summary": summary,
        "strengths": strengths,
        "gaps": gaps[:5],
        "interview_questions": questions[:2],
        "feedback_draft": feedback,
    }


def validate_scored_candidate(item: dict[str, Any], source: dict[str, Any]) -> dict[str, Any]:
    item["candidate_id"] = str(item.get("candidate_id") or source["candidate_id"])
    item["name"] = str(item.get("name") or source.get("name") or "Unknown")
    if item.get("tier") not in {"strong_match", "possible_match", "not_a_fit"}:
        item["tier"] = "not_a_fit"

    scores = item.get("scores") if isinstance(item.get("scores"), dict) else {}
    item["scores"] = {key: clamp_score(scores.get(key, 1)) for key in SCORE_KEYS}
    for field, default in [
        ("summary", ""),
        ("feedback_draft", ""),
    ]:
        if not isinstance(item.get(field), str):
            item[field] = default
    for field in ["strengths", "gaps", "interview_questions"]:
        if not isinstance(item.get(field), list):
            item[field] = []
        item[field] = [str(x) for x in item[field]][: 5 if field != "interview_questions" else 2]
    if item["tier"] == "not_a_fit":
        item["strengths"] = []
        item["interview_questions"] = []
    item["overall_score"] = round(statistics.mean(item["scores"].values()), 1)
    return item


def polish_candidate_prompt(job: dict[str, Any], candidate: dict[str, Any], result: dict[str, Any]) -> str:
    return f"""You are improving recruiter-facing notes for one candidate. Keep the existing scores and tier unchanged.

Return ONLY a valid JSON object with exactly these fields:
{{
  "summary": "2 concise sentences assessing fit",
  "strengths": ["0-5 short strengths; empty if not_a_fit"],
  "gaps": ["1-5 short gaps"],
  "interview_questions": ["0-2 role-specific questions; empty if not_a_fit"],
  "feedback_draft": "2 polite sentences a recruiter could send"
}}

JOB:
{json.dumps(job, ensure_ascii=False)}

CANDIDATE:
{json.dumps(candidate, ensure_ascii=False)}

CURRENT ASSESSMENT:
{json.dumps(result, ensure_ascii=False)}
"""


def polish_top_candidates(
    jobs: list[dict[str, Any]],
    candidates: dict[str, dict[str, Any]],
    scored: dict[str, list[dict[str, Any]]],
    client: Any,
    top_n: int,
) -> dict[str, list[dict[str, Any]]]:
    if top_n <= 0 or not getattr(client, "enabled", False):
        return scored

    for job in jobs:
        job_id = job["job_id"]
        cache_path = CACHE_DIR / f"{job_id}_polished_{getattr(client, 'model_name', 'ai').replace(':', '_')}_{top_n}.json"
        cached = load_json(cache_path)
        if cached:
            print(f"Loaded polished notes for {job_id} from cache.")
            scored[job_id] = cached
            continue

        print(f"Polishing top {min(top_n, len(scored[job_id]))} candidates for {job_id} with {client.model_name}.")
        updated = list(scored[job_id])
        for index, result in enumerate(updated[:top_n], 1):
            cid = result["candidate_id"]
            raw = client.call(polish_candidate_prompt(job, candidates[cid], result))
            if not raw:
                continue
            try:
                polished = json.loads(raw)
            except json.JSONDecodeError as exc:
                print(f"Could not parse polish JSON for {job_id}/{cid}: {exc}")
                continue
            if not isinstance(polished, dict):
                continue
            for field in ["summary", "feedback_draft"]:
                if isinstance(polished.get(field), str) and polished[field].strip():
                    result[field] = polished[field].strip()
            for field in ["strengths", "gaps", "interview_questions"]:
                if isinstance(polished.get(field), list):
                    limit = 2 if field == "interview_questions" else 5
                    result[field] = [str(item) for item in polished[field]][:limit]
            result = validate_scored_candidate(result, candidates[cid])
            updated[index - 1] = result
            print(f"  polished {job_id} {index}/{min(top_n, len(updated))}: {cid}")

        write_json(cache_path, updated)
        scored[job_id] = updated
    return scored


def score_jobs(
    jobs: list[dict[str, Any]],
    candidates: dict[str, dict[str, Any]],
    client: Any,
    use_ai_scoring: bool,
) -> dict[str, list[dict[str, Any]]]:
    all_results: dict[str, list[dict[str, Any]]] = {}
    for job in jobs:
        cache_path = CACHE_DIR / f"{job['job_id']}_scored_candidates.json"
        cached = load_json(cache_path)
        if cached:
            print(f"Loaded scores for {job['job_id']} from cache.")
            all_results[job["job_id"]] = cached
            continue

        scored_by_id: dict[str, dict[str, Any]] = {}
        raw = client.call(scoring_prompt(job, candidates)) if use_ai_scoring else None
        parsed = None
        if raw:
            try:
                parsed = json.loads(raw)
            except json.JSONDecodeError as exc:
                print(f"Could not parse AI scores for {job['job_id']}: {exc}")

        if isinstance(parsed, list):
            for item in parsed:
                if isinstance(item, dict) and item.get("candidate_id") in candidates:
                    cid = item["candidate_id"]
                    scored_by_id[cid] = validate_scored_candidate(item, candidates[cid])

        missing = sorted(set(candidates) - set(scored_by_id), key=lambda cid: natural_key(Path(cid)))
        if missing:
            if scored_by_id:
                print(f"{job['job_id']} missing {len(missing)} AI scores; using local fallback for missing candidates.")
            for cid in missing:
                scored_by_id[cid] = validate_scored_candidate(local_score_candidate(job, candidates[cid]), candidates[cid])

        result = sorted(scored_by_id.values(), key=lambda item: (-item["overall_score"], natural_key(Path(item["candidate_id"]))))
        write_json(cache_path, result)
        all_results[job["job_id"]] = result
        print(f"Scored {len(result)} candidates for {job['job_id']}.")
    return all_results


def write_outputs(jobs: list[dict[str, Any]], scored: dict[str, list[dict[str, Any]]]) -> None:
    metadata = [job_output_payload(job) for job in jobs]
    write_json(OUTPUT_DIR / "jobs_metadata.json", metadata)

    for job in jobs:
        payload = {
            "job_id": job["job_id"],
            "title": job.get("title", ""),
            "job": job_output_payload(job),
            "candidates": scored[job["job_id"]],
        }
        write_json(OUTPUT_DIR / f"{job['job_id']}_results.json", payload)

    print("\nSummary:")
    for job in jobs:
        counts = {"strong_match": 0, "possible_match": 0, "not_a_fit": 0}
        for candidate in scored[job["job_id"]]:
            counts[candidate["tier"]] += 1
        print(
            f"{job['job_id']} | {job.get('title')} | "
            f"strong={counts['strong_match']} possible={counts['possible_match']} not_fit={counts['not_a_fit']}"
        )


def main() -> None:
    parser = argparse.ArgumentParser(description="Build recruiter dashboard JSON outputs from CV/JD PDFs.")
    parser.add_argument(
        "--ai-backend",
        choices=["local", "ollama"],
        default="local",
        help="AI backend to use. local is fastest; ollama keeps personal data on this machine.",
    )
    parser.add_argument("--ollama-model", default=os.getenv("OLLAMA_MODEL", "phi4-mini:3.8b"))
    parser.add_argument("--ollama-host", default=os.getenv("OLLAMA_HOST", "http://localhost:11434"))
    parser.add_argument("--ollama-timeout", type=int, default=180)
    parser.add_argument(
        "--ai-job-parse",
        action="store_true",
        help="Use the selected AI backend for job description parsing.",
    )
    parser.add_argument(
        "--ai-cv-extract",
        action="store_true",
        help="Use the selected AI backend for batched CV extraction. Slower, but more semantic.",
    )
    parser.add_argument(
        "--ai-score-all",
        action="store_true",
        help="Use the selected AI backend to score all candidates per job. This can be slow with Ollama.",
    )
    parser.add_argument(
        "--ai-polish-top-n",
        type=int,
        default=0,
        help="Use the selected AI backend to polish summaries/questions/feedback for the top N candidates per job.",
    )
    parser.add_argument("--batch-size", type=int, default=15)
    parser.add_argument("--clear-cache", action="store_true")
    args = parser.parse_args()

    OUTPUT_DIR.mkdir(exist_ok=True)
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    if args.clear_cache:
        for path in CACHE_DIR.glob("*.json"):
            path.unlink()

    cv_texts, jd_texts, skipped = extract_all_pdfs()
    write_json(CACHE_DIR / "skipped_cvs.json", skipped)

    if args.ai_backend == "ollama":
        client = OllamaClient(args.ollama_model, args.ollama_host, args.ollama_timeout)
    else:
        client = LocalClient()

    if getattr(client, "enabled", False):
        print(f"Using {args.ai_backend} model: {client.model_name}")
    else:
        print("AI backend not enabled; using local fallback extraction/scoring.")

    jobs = parse_jobs(jd_texts, client, args.ai_job_parse)
    candidates = extract_candidates(cv_texts, client, args.batch_size, args.ai_cv_extract)
    scored = score_jobs(jobs, candidates, client, args.ai_score_all)
    scored = polish_top_candidates(jobs, candidates, scored, client, args.ai_polish_top_n)
    write_outputs(jobs, scored)
    print(f"\nOutput ready in: {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
