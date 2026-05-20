"""Extract text from all CVs and Job Descriptions into JSON files."""
from __future__ import annotations

import json
import re
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent.parent
CVS_DIR = ROOT / "CVs"
JDS_DIR = ROOT / "JobDescriptions"
OUT_DIR = ROOT / "data" / "processed"


def clean(text: str) -> str:
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def extract(pdf_path: Path) -> str:
    reader = PdfReader(str(pdf_path))
    pages = [page.extract_text() or "" for page in reader.pages]
    return clean("\n".join(pages))


def extract_folder(folder: Path) -> dict[str, str]:
    out: dict[str, str] = {}
    for pdf in sorted(folder.glob("*.pdf"), key=lambda p: natural_key(p.stem)):
        out[pdf.stem] = extract(pdf)
    return out


def natural_key(name: str) -> tuple:
    return tuple(int(c) if c.isdigit() else c.lower() for c in re.split(r"(\d+)", name))


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    cvs = extract_folder(CVS_DIR)
    jds = extract_folder(JDS_DIR)

    (OUT_DIR / "cvs.json").write_text(json.dumps(cvs, ensure_ascii=False, indent=2))
    (OUT_DIR / "jds.json").write_text(json.dumps(jds, ensure_ascii=False, indent=2))

    print(f"Extracted {len(cvs)} CVs -> {OUT_DIR / 'cvs.json'}")
    print(f"Extracted {len(jds)} JDs -> {OUT_DIR / 'jds.json'}")
    print(f"avg CV chars: {sum(len(v) for v in cvs.values()) // max(len(cvs), 1)}")
    print(f"avg JD chars: {sum(len(v) for v in jds.values()) // max(len(jds), 1)}")


if __name__ == "__main__":
    main()
