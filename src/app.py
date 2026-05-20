"""Streamlit UI for the EY CV Matcher.

Two views:
- Candidate: upload a CV (or pick an existing one) and rank it against all 5 JDs.
- Recruiter: pick a JD and see the ranked shortlist from the calibration dataset.

Run from the project root:
    .venv/bin/streamlit run src/app.py
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

import streamlit as st
from pypdf import PdfReader

sys.path.insert(0, str(Path(__file__).resolve().parent))
from matcher import (
    extract_candidate_name,
    extract_jd_title,
    match_cv_to_all_jds,
    match_cv_to_jd,
    to_flat_record,
)

ROOT = Path(__file__).resolve().parent.parent
PROCESSED = ROOT / "data" / "processed"
MATCHES_DIR = ROOT / "data" / "results" / "matches"


@st.cache_data
def load_jds() -> dict[str, str]:
    return json.loads((PROCESSED / "jds.json").read_text())


@st.cache_data
def load_cvs() -> dict[str, str]:
    return json.loads((PROCESSED / "cvs.json").read_text())


def load_all_matches() -> list[dict]:
    """Read every flat match record from data/results/matches/. Not cached so the
    recruiter view picks up newly-written matches as calibration progresses."""
    if not MATCHES_DIR.exists():
        return []
    return [json.loads(f.read_text()) for f in MATCHES_DIR.glob("*.json")]


def extract_pdf_text(file) -> str:
    reader = PdfReader(file)
    return "\n".join(p.extract_text() or "" for p in reader.pages)


def render_match(r: dict) -> None:
    """Render one flat match record in a structured layout."""
    c1, c2, c3, c4 = st.columns(4)
    c1.metric("Overall", f"{r['overall_score']}/100")
    c2.metric("Domain", f"{r['domain_task_alignment_score']}/100")
    c3.metric("Skills", f"{r['required_skills_score']}/100")
    c4.metric("Experience", f"{r['relevant_experience_score']}/100")

    st.markdown(f"**Domain / Task alignment** — {r['domain_task_alignment_reasoning']}")
    st.markdown(f"**Required skills** — {r['required_skills_reasoning']}")
    st.markdown(f"**Relevant experience** — {r['relevant_experience_reasoning']}")
    st.markdown("**Key gaps**")
    for g in r["key_gaps"]:
        st.markdown(f"- {g}")


# ---------------------------------------------------------------------------
# UI
# ---------------------------------------------------------------------------
st.set_page_config(
    page_title="EY CV Candidate Analysis Support System",
    layout="wide",
    page_icon="📄",
)
st.title("EY AI Challenge — CV Candidate Analysis Support System")
st.caption("Powered by llama3.2:3b via Ollama (local)")

candidate_tab, recruiter_tab = st.tabs(["Candidate", "Recruiter"])

# ---------------------------------------------------------------------------
# Candidate view
# ---------------------------------------------------------------------------
with candidate_tab:
    st.subheader("Upload your CV and find the best role")

    # --- CV source ---
    cv_source = st.radio(
        "CV source",
        ["Upload PDF", "Pick from dataset"],
        horizontal=True,
        key="cv_source",
    )

    cv_text: str | None = None
    cv_id_hint = "uploaded"

    if cv_source == "Upload PDF":
        uploaded_cv = st.file_uploader("CV (PDF)", type="pdf", key="cv_upload")
        if uploaded_cv:
            cv_text = extract_pdf_text(uploaded_cv)
            cv_id_hint = uploaded_cv.name.removesuffix(".pdf")
    else:
        cvs = load_cvs()
        cv_id = st.selectbox("Select a CV", sorted(cvs.keys()), key="cv_select")
        cv_text = cvs[cv_id]
        cv_id_hint = cv_id

    st.divider()

    # --- JD source ---
    jd_source = st.radio(
        "Job description source",
        ["All 5 default roles", "Upload custom Job Description"],
        horizontal=True,
        key="jd_source",
    )

    custom_jd_text: str | None = None
    custom_jd_id = "custom_jd"

    if jd_source == "Upload custom Job Description":
        uploaded_jd = st.file_uploader("Job Description (PDF)", type="pdf", key="jd_upload")
        if uploaded_jd:
            custom_jd_text = extract_pdf_text(uploaded_jd)
            custom_jd_id = uploaded_jd.name.removesuffix(".pdf")
            if not custom_jd_text.strip():
                st.error("This JD has no extractable text (likely a scanned image).")
            else:
                with st.expander("JD preview (first 500 chars)"):
                    st.text(custom_jd_text[:500])

    st.divider()

    # --- Match ---
    if cv_text:
        if not cv_text.strip():
            st.error("This CV has no extractable text (likely a scanned image).")
        else:
            name = extract_candidate_name(cv_text)
            st.success(f"Candidate detected: **{name}**")
            with st.expander("CV preview (first 500 chars)"):
                st.text(cv_text[:500])

            if jd_source == "All 5 default roles":
                if st.button("Match against all 5 roles", type="primary"):
                    jds = load_jds()
                    with st.spinner(f"Matching against {len(jds)} roles (40-75s)..."):
                        results = match_cv_to_all_jds(cv_text, jds, cv_id=cv_id_hint)

                    best = results[0]
                    st.markdown(
                        f"### Best fit: `{best['jd_id']}` — {best['overall_score']}/100 ({best['verdict']})"
                    )
                    render_match(best)

                    st.divider()
                    st.markdown("### All roles, ranked")
                    for r in results:
                        with st.expander(f"`{r['jd_id']}` — {r['overall_score']}/100 — {r['verdict']}"):
                            render_match(r)
            else:
                if custom_jd_text and custom_jd_text.strip():
                    if st.button("Match against this role", type="primary"):
                        with st.spinner("Matching (5-15s)..."):
                            match_obj = match_cv_to_jd(
                                cv_text,
                                custom_jd_text,
                                cv_id=cv_id_hint,
                                jd_id=custom_jd_id,
                            )
                            record = to_flat_record(
                                match_obj,
                                name=name,
                                cv_id=cv_id_hint,
                                jd_id=custom_jd_id,
                            )
                        st.markdown(
                            f"### Result: {record['overall_score']}/100 ({record['verdict']})"
                        )
                        render_match(record)
                else:
                    st.info("Upload a Job Description PDF above to enable matching.")

# ---------------------------------------------------------------------------
# Recruiter view
# ---------------------------------------------------------------------------
with recruiter_tab:
    st.subheader("Shortlist by role")
    matches = load_all_matches()

    if not matches:
        st.info("No calibration data yet. Run `src/calibrate.py` to populate.")
    else:
        jds = load_jds()
        jd_ids = sorted({m["jd_id"] for m in matches})
        # Map each jd_id to its role title for display; fall back to the id if the
        # JD isn't in jds.json (e.g. a custom JD persisted from elsewhere).
        id_to_title = {
            jd_id: extract_jd_title(jds[jd_id]) if jd_id in jds else jd_id
            for jd_id in jd_ids
        }
        selected_title = st.selectbox(
            "Role", [id_to_title[jd_id] for jd_id in jd_ids]
        )
        selected_jd = next(jd_id for jd_id, title in id_to_title.items() if title == selected_title)
        for_jd = [m for m in matches if m["jd_id"] == selected_jd]
        for_jd.sort(key=lambda m: m["overall_score"], reverse=True)

        c1, c2, c3 = st.columns(3)
        c1.metric("Candidates scored", len(for_jd))
        c2.metric("Top score", f"{for_jd[0]['overall_score']}/100" if for_jd else "—")
        c3.metric("Median score", f"{sorted(m['overall_score'] for m in for_jd)[len(for_jd)//2]}/100" if for_jd else "—")

        st.dataframe(
            [
                {
                    "Rank": i + 1,
                    "Name": m["name"],
                    "CV": m["cv_id"],
                    "Score": m["overall_score"],
                    "Verdict": m["verdict"],
                }
                for i, m in enumerate(for_jd)
            ],
            use_container_width=True,
            hide_index=True,
        )

        st.divider()
        st.markdown("### Inspect a candidate")
        if for_jd:
            options = [f"{m['name']} ({m['cv_id']}) — {m['overall_score']}/100" for m in for_jd]
            choice = st.selectbox("Candidate", options)
            chosen = for_jd[options.index(choice)]
            render_match(chosen)
