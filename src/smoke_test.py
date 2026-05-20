"""Smoke test: score one CV against one JD using local Ollama model."""
from __future__ import annotations

import json
import sys
import time
from pathlib import Path

from matcher import match_cv_to_jd

ROOT = Path(__file__).resolve().parent.parent
PROCESSED = ROOT / "data" / "processed"


def main() -> int:
    cvs = json.loads((PROCESSED / "cvs.json").read_text())
    jds = json.loads((PROCESSED / "jds.json").read_text())

    cv_id = sys.argv[1] if len(sys.argv) > 1 else "cv_1"
    jd_id = sys.argv[2] if len(sys.argv) > 2 else "JobDescription1"

    if cv_id not in cvs:
        print(f"CV '{cv_id}' not found. Available: {list(cvs)[:5]}...", file=sys.stderr)
        return 1
    if jd_id not in jds:
        print(f"JD '{jd_id}' not found. Available: {list(jds)}", file=sys.stderr)
        return 1

    print(f"Matching {cv_id} against {jd_id} (this may take 5-15 seconds)...\n")
    t0 = time.time()
    result = match_cv_to_jd(
        cv_text=cvs[cv_id],
        jd_text=jds[jd_id],
        cv_id=cv_id,
        jd_id=jd_id,
    )
    elapsed = time.time() - t0

    print(f"Overall score: {result.overall_score}/100  -  {result.verdict}")
    print(f"({elapsed:.1f}s)\n")
    print(f"  Domain/Task alignment: {result.domain_task_alignment.score}/100")
    print(f"    {result.domain_task_alignment.reasoning}\n")
    print(f"  Required skills:       {result.required_skills.score}/100")
    print(f"    {result.required_skills.reasoning}\n")
    print(f"  Relevant experience:   {result.relevant_experience.score}/100")
    print(f"    {result.relevant_experience.reasoning}\n")
    print("Key gaps:")
    for gap in result.key_gaps:
        print(f"  - {gap}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
