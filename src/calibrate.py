"""Calibration: score CVs against JDs and persist each result as its own JSON file.

Output layout:
    data/results/matches/{cv_id}__{jd_id}.json

Runs resumable — if a result file already exists for a (cv_id, jd_id) pair, it
is skipped. Re-running picks up where it left off. Each file is written
atomically (write to .tmp, then rename) so an interrupted match cannot leave a
half-written file behind.

Usage:
    python src/calibrate.py             # default: all 107 CVs x 5 JDs (full grid)
    python src/calibrate.py --n 20      # first 20 CVs x all 5 JDs
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path

from matcher import MatcherError, extract_candidate_name, match_cv_to_jd, to_flat_record

ROOT = Path(__file__).resolve().parent.parent
PROCESSED = ROOT / "data" / "processed"
MATCHES_DIR = ROOT / "data" / "results" / "matches"


def natural_key(name: str) -> tuple:
    return tuple(int(c) if c.isdigit() else c.lower() for c in re.split(r"(\d+)", name))


def match_path(cv_id: str, jd_id: str) -> Path:
    return MATCHES_DIR / f"{cv_id}__{jd_id}.json"


def save_match_atomic(path: Path, data: dict) -> None:
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2))
    os.replace(tmp, path)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--n", type=int, default=None, help="Number of CVs to sample (sorted). Default: all.")
    args = parser.parse_args()

    cvs = json.loads((PROCESSED / "cvs.json").read_text())
    jds = json.loads((PROCESSED / "jds.json").read_text())

    cv_ids = sorted(cvs.keys(), key=natural_key)
    if args.n is not None:
        cv_ids = cv_ids[: args.n]
    jd_ids = sorted(jds.keys(), key=natural_key)

    MATCHES_DIR.mkdir(parents=True, exist_ok=True)

    total = len(cv_ids) * len(jd_ids)
    pairs = [(cv, jd) for cv in cv_ids for jd in jd_ids if not match_path(cv, jd).exists()]
    already_done = total - len(pairs)

    print(f"Calibration plan: {len(cv_ids)} CVs x {len(jd_ids)} JDs = {total} matches")
    print(f"Already done: {already_done}  |  Remaining: {len(pairs)}")
    print(f"Output -> {MATCHES_DIR}/\n")

    if not pairs:
        print("Nothing to do.")
        return 0

    t_start = time.time()
    for i, (cv_id, jd_id) in enumerate(pairs, start=1):
        t0 = time.time()
        try:
            match = match_cv_to_jd(
                cv_text=cvs[cv_id],
                jd_text=jds[jd_id],
                cv_id=cv_id,
                jd_id=jd_id,
            )
            elapsed = time.time() - t0
            record = to_flat_record(
                match=match,
                name=extract_candidate_name(cvs[cv_id]),
                cv_id=cv_id,
                jd_id=jd_id,
                elapsed_seconds=elapsed,
            )
            save_match_atomic(match_path(cv_id, jd_id), record)
            done = already_done + i
            avg = (time.time() - t_start) / i
            eta_min = (len(pairs) - i) * avg / 60
            print(
                f"[{done}/{total}] {cv_id} vs {jd_id} -> {match.overall_score:3d}  "
                f"{match.verdict:<18s} ({elapsed:.1f}s)  ETA {eta_min:.1f}min",
                flush=True,
            )
        except MatcherError as e:
            print(f"[{i}] {cv_id} vs {jd_id} FAILED: {e}", file=sys.stderr, flush=True)
            continue
        except KeyboardInterrupt:
            print("\nInterrupted. Progress saved (per-file).", file=sys.stderr)
            return 130

    total_min = (time.time() - t_start) / 60
    print(f"\nDone. {len(pairs)} matches in {total_min:.1f} min.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
