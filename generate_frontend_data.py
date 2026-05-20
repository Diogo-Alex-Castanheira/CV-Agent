#!/usr/bin/env python3
"""Generate data.js for the Talent Tinder frontend"""
import json

with open('talent_tinder_results.json') as f:
    data = json.load(f)

ROLES = {
    "1": "Director, Data & AI Strategy",
    "2": "Senior Consultant, Technology Risk",
    "3": "Cybersecurity Team",
    "4": "Financial Analyst",
    "5": "Consultant, Forensic & Integrity Services"
}

# Build cards for frontend
cards = []
for rid in ["1","2","3","4","5"]:
    rankings = data['role_rankings'][rid]
    for rank, cv_id in enumerate(rankings[:10], 1):
        cv_str = str(cv_id)
        cand = data['candidates'].get(cv_str, {})
        sd = data['all_scores'].get(cv_str, {}).get(rid, {})
        breakdown = sd.get('breakdown', {})
        cards.append({
            "role": ROLES[rid],
            "roleId": int(rid),
            "rank": rank,
            "cvId": cv_id,
            "name": cand.get('name', 'Unknown'),
            "title": cand.get('title', 'Unknown'),
            "location": cand.get('location', 'Unknown'),
            "yearsExp": cand.get('years_exp', 0),
            "languages": cand.get('languages', []),
            "certifications": cand.get('certifications', []),
            "score": sd.get('score', 0),
            "label": sd.get('label', 'N/A'),
            "action": sd.get('action', 'N/A'),
            "breakdown": breakdown,
            "summary": cand.get('summary', '')[:200],
            "skills": cand.get('skills_raw', '')[:200],
        })

js = f"const TALENT_DATA = {json.dumps(cards, indent=2)};\n\nconst ROLES = {json.dumps(ROLES, indent=2)};\n"

with open('frontend/data.js', 'w') as f:
    f.write(js)

print(f"Generated data.js with {len(cards)} cards")
