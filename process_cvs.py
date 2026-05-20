#!/usr/bin/env python3
"""
Talent Tinder - CV Analysis & Matching Engine
Processes 107 CVs against 5 Job Descriptions for EY AI Challenge
"""
import os
import json
import re

def extract_cv_info(text, cv_id):
    """Extract structured info from CV text."""
    if not text or len(text) < 20:
        return None
    
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    info = {'cv_id': cv_id, 'raw': text}
    
    # Extract name (usually 3rd or 4th line after metadata)
    for line in lines:
        if line and not line.endswith('.md') and not re.match(r'^\d{4}', line) and not re.match(r'^\d+ / \d+', line):
            info['name'] = line
            break
    
    # Extract title
    for line in lines:
        if line.startswith('Title:'):
            info['title'] = line.replace('Title:', '').strip()
            break
    
    # Extract location
    for line in lines:
        if line.startswith('Location:'):
            info['location'] = line.replace('Location:', '').strip()
            break
    
    # Extract summary
    summary_start = text.find('Summary')
    if summary_start >= 0:
        exp_start = text.find('Experience', summary_start + 7)
        if exp_start > summary_start:
            info['summary'] = text[summary_start+7:exp_start].strip()
    
    # Extract skills section
    skills_start = text.find('Skills')
    if skills_start >= 0:
        skills_text = text[skills_start+6:].strip()
        info['skills_raw'] = skills_text
    
    # Extract education
    edu_start = text.find('Education')
    if edu_start >= 0:
        skills_start2 = text.find('Skills', edu_start)
        if skills_start2 > edu_start:
            info['education'] = text[edu_start+9:skills_start2].strip()
        else:
            info['education'] = text[edu_start+9:edu_start+500].strip()
    
    # Extract experience section
    exp_start = text.find('Experience')
    if exp_start >= 0:
        edu_start2 = text.find('Education', exp_start)
        if edu_start2 > exp_start:
            info['experience_raw'] = text[exp_start+10:edu_start2].strip()
    
    # Infer years of experience from summary
    yoe_match = re.search(r'(\d+)\+?\s*years', text, re.IGNORECASE)
    info['years_exp'] = int(yoe_match.group(1)) if yoe_match else 0
    
    # Extract languages
    lang_patterns = []
    if 'Portuguese' in text: lang_patterns.append('Portuguese')
    if 'English' in text: lang_patterns.append('English')
    if 'French' in text: lang_patterns.append('French')
    if 'Spanish' in text: lang_patterns.append('Spanish')
    if 'German' in text: lang_patterns.append('German')
    info['languages'] = lang_patterns
    
    # Extract certifications
    certs = []
    cert_keywords = ['CISSP', 'CISA', 'CISM', 'CEH', 'CFA', 'CPA', 'CFE', 'CIA', 
                     'PMP', 'PMI', 'AWS', 'Azure', 'Google', 'ACCA', 'Lean Six Sigma',
                     'SHRM', 'TOGAF', 'ITIL', 'ISO', 'Scrum', 'Prince2', 'SAFe',
                     'Salesforce', 'Microsoft', 'Tableau', 'CSCP', 'APICS']
    for cert in cert_keywords:
        if cert in text:
            certs.append(cert)
    info['certifications'] = certs
    
    return info

def classify_candidate(info):
    """Classify candidate into relevant domains."""
    if not info:
        return []
    
    text = info.get('raw', '').lower()
    title = info.get('title', '').lower()
    domains = []
    
    # Data & AI
    if any(k in text for k in ['data science', 'machine learning', 'artificial intelligence', 'ai ', 'deep learning',
                                'data analytics', 'data engineer', 'data strategy', 'analytics', 'nlp', 'neural',
                                'python', 'tensorflow', 'pytorch', 'data warehouse', 'power bi', 'tableau',
                                'big data', 'data governance', 'ai governance', 'data transformation']):
        domains.append('data_ai')
    
    # Technology Risk
    if any(k in text for k in ['technology risk', 'it risk', 'it audit', 'it controls', 'information security',
                                'compliance framework', 'risk management', 'risk advisory', 'cobit', 'sox',
                                'internal controls', 'technology controls', 'it governance']):
        domains.append('tech_risk')
    
    # Cybersecurity
    if any(k in text for k in ['cybersecurity', 'cyber security', 'information security', 'penetration test',
                                'vulnerability', 'soc ', 'siem', 'incident response', 'threat', 'malware',
                                'firewall', 'network security', 'security operations', 'cissp', 'cism', 'ceh',
                                'security awareness', 'security framework']):
        domains.append('cybersecurity')
    
    # Financial Analysis
    if any(k in text for k in ['financial analy', 'financial report', 'financial model', 'financial planning',
                                'accounting', 'finance', 'audit', 'ifrs', 'gaap', 'valuation', 'excel',
                                'forecasting', 'budgeting', 'financial statements', 'treasury']):
        domains.append('financial')
    
    # Forensic & Integrity
    if any(k in text for k in ['forensic', 'fraud', 'investigation', 'anti-money laundering', 'aml', 'compliance',
                                'financial crime', 'integrity', 'due diligence', 'suspicious', 'cfe',
                                'whistleblow', 'bribery', 'corruption', 'sanctions']):
        domains.append('forensic')
    
    return domains

def score_candidate_role(info, role_id):
    """Score a candidate against a specific role (0-100)."""
    if not info:
        return 0, {}
    
    text = info.get('raw', '').lower()
    title = info.get('title', '').lower()
    summary = info.get('summary', '').lower()
    years = info.get('years_exp', 0)
    certs = [c.lower() for c in info.get('certifications', [])]
    langs = info.get('languages', [])
    
    scores = {}
    
    if role_id == 1:  # Director, Data & AI Strategy (15+ years)
        # Technical skills (30%)
        tech = 0
        tech_keywords = {'data strategy': 5, 'ai ': 4, 'machine learning': 4, 'data governance': 5,
                        'analytics': 3, 'cloud': 3, 'azure': 3, 'aws': 3, 'data warehouse': 4,
                        'digital transformation': 4, 'python': 2, 'data science': 4, 'ai governance': 5,
                        'enterprise data': 5, 'advanced analytics': 4, 'business intelligence': 3}
        for kw, pts in tech_keywords.items():
            if kw in text: tech += pts
        scores['technical'] = min(30, tech * 30 / 35)
        
        # Experience (25%)
        exp = 0
        if years >= 15: exp += 12
        elif years >= 10: exp += 8
        elif years >= 7: exp += 5
        if 'director' in title or 'head' in title or 'chief' in title or 'vp' in title: exp += 5
        if 'consulting' in text or 'consultant' in text: exp += 3
        if 'client' in text: exp += 3
        if 'financial services' in text: exp += 2
        scores['experience'] = min(25, exp)
        
        # Seniority (15%)
        sen = 0
        if years >= 15: sen += 8
        elif years >= 10: sen += 5
        if any(t in title for t in ['director', 'head', 'chief', 'vp', 'managing']): sen += 7
        elif any(t in title for t in ['senior', 'lead', 'principal', 'manager']): sen += 4
        scores['seniority'] = min(15, sen)
        
        # Soft skills & leadership (15%)
        soft = 0
        if any(k in text for k in ['team', 'led', 'managed', 'leadership']): soft += 5
        if any(k in text for k in ['executive', 'c-level', 'c-suite', 'stakeholder']): soft += 4
        if any(k in text for k in ['communication', 'presentation', 'advisor']): soft += 3
        if 'cross-functional' in text: soft += 3
        scores['soft_skills'] = min(15, soft)
        
        # Certs, tools, languages (10%)
        ct = 0
        if 'Portuguese' in langs and 'English' in langs: ct += 4
        if any(c in certs for c in ['aws', 'azure', 'microsoft', 'pmi', 'pmp']): ct += 3
        if any(k in text for k in ['mba', 'phd', 'msc']): ct += 3
        scores['certs_tools'] = min(10, ct)
        
        # Potential (5%)
        pot = 0
        if any(k in text for k in ['innovation', 'emerging', 'trend', 'thought leader']): pot += 3
        if 'publication' in text or 'speaker' in text: pot += 2
        scores['potential'] = min(5, pot)
    
    elif role_id == 2:  # Senior Consultant, Technology Risk (4-6 years)
        tech = 0
        tech_kw = {'technology risk': 6, 'it risk': 5, 'risk management': 4, 'it controls': 5,
                   'compliance': 4, 'it audit': 4, 'sox': 3, 'cobit': 3, 'risk assessment': 4,
                   'information security': 3, 'it governance': 4, 'internal controls': 3,
                   'technology controls': 5, 'risk framework': 4}
        for kw, pts in tech_kw.items():
            if kw in text: tech += pts
        scores['technical'] = min(30, tech * 30 / 30)
        
        exp = 0
        if 4 <= years <= 8: exp += 12
        elif 2 <= years < 4: exp += 6
        elif years > 8: exp += 8
        if any(k in text for k in ['risk advisory', 'technology risk', 'it audit']): exp += 5
        if 'client' in text: exp += 3
        if 'consulting' in text or 'consultant' in text: exp += 3
        scores['experience'] = min(25, exp)
        
        sen = 0
        if 4 <= years <= 8: sen += 8
        elif years > 8: sen += 5
        if 'senior' in title: sen += 5
        elif 'consultant' in title: sen += 3
        scores['seniority'] = min(15, sen)
        
        soft = 0
        if any(k in text for k in ['communication', 'interpersonal']): soft += 4
        if any(k in text for k in ['analytical', 'problem-solving']): soft += 4
        if 'team' in text: soft += 3
        if 'client' in text or 'stakeholder' in text: soft += 4
        scores['soft_skills'] = min(15, soft)
        
        ct = 0
        if 'Portuguese' in langs and 'English' in langs: ct += 4
        if any(c.lower() in ' '.join(certs).lower() for c in ['cisa', 'cissp']): ct += 4
        if any(k in text for k in ['msc', 'master']): ct += 2
        scores['certs_tools'] = min(10, ct)
        
        pot = 0
        if any(k in text for k in ['growth', 'learning', 'development']): pot += 3
        if years < 6: pot += 2
        scores['potential'] = min(5, pot)
    
    elif role_id == 3:  # Cybersecurity Team (various levels)
        tech = 0
        tech_kw = {'cybersecurity': 6, 'cyber security': 6, 'information security': 5, 'penetration': 5,
                   'vulnerability': 4, 'siem': 4, 'soc': 3, 'incident response': 5, 'threat': 4,
                   'firewall': 3, 'network security': 4, 'security operations': 4, 'security framework': 4,
                   'encryption': 3, 'malware': 3, 'ids': 2, 'security awareness': 3, 'risk assessment': 3}
        for kw, pts in tech_kw.items():
            if kw in text: tech += pts
        scores['technical'] = min(30, tech * 30 / 30)
        
        exp = 0
        if years >= 3: exp += 8
        if years >= 5: exp += 4
        if any(k in text for k in ['cybersecurity', 'security']): exp += 5
        if 'consulting' in text or 'client' in text: exp += 3
        if 'team' in text: exp += 3
        scores['experience'] = min(25, exp)
        
        sen = 0
        if years >= 5: sen += 7
        elif years >= 3: sen += 5
        if any(t in title for t in ['manager', 'lead', 'senior', 'head']): sen += 5
        elif 'specialist' in title or 'analyst' in title: sen += 3
        scores['seniority'] = min(15, sen)
        
        soft = 0
        if any(k in text for k in ['communication', 'interpersonal']): soft += 4
        if any(k in text for k in ['team', 'leadership', 'led']): soft += 5
        if 'stakeholder' in text: soft += 3
        if 'awareness' in text or 'training' in text: soft += 3
        scores['soft_skills'] = min(15, soft)
        
        ct = 0
        if 'Portuguese' in langs and 'English' in langs: ct += 3
        if any(c.lower() in ' '.join(certs).lower() for c in ['cissp', 'cism', 'ceh']): ct += 5
        if any(k in text for k in ['msc', 'master', 'computer science', 'engineering']): ct += 2
        scores['certs_tools'] = min(10, ct)
        
        pot = 0
        if any(k in text for k in ['emerging', 'trend', 'innovation']): pot += 3
        if any(k in text for k in ['culture', 'awareness']): pot += 2
        scores['potential'] = min(5, pot)
    
    elif role_id == 4:  # Financial Analyst (0-2 years, Staff)
        tech = 0
        tech_kw = {'financial analysis': 5, 'financial report': 5, 'financial model': 5, 'excel': 4,
                   'forecasting': 4, 'budgeting': 3, 'financial planning': 5, 'accounting': 3,
                   'financial data': 4, 'financial statements': 4, 'variance': 3, 'trend': 2,
                   'quantitative': 3, 'financial regulation': 3}
        for kw, pts in tech_kw.items():
            if kw in text: tech += pts
        scores['technical'] = min(30, tech * 30 / 30)
        
        exp = 0
        if 0 <= years <= 3: exp += 12
        elif 3 < years <= 5: exp += 8
        elif years > 5: exp += 4
        if any(k in text for k in ['financial analy', 'finance', 'accounting']): exp += 5
        if 'bachelor' in text.lower() or 'bsc' in text.lower(): exp += 3
        scores['experience'] = min(25, exp)
        
        sen = 0
        if 0 <= years <= 3: sen += 10
        elif 3 < years <= 5: sen += 7
        elif years > 5: sen += 3
        if any(t in title for t in ['analyst', 'associate', 'junior']): sen += 5
        scores['seniority'] = min(15, sen)
        
        soft = 0
        if 'analytical' in text: soft += 5
        if 'communication' in text: soft += 3
        if 'team' in text or 'collaborat' in text: soft += 4
        if 'detail' in text: soft += 3
        scores['soft_skills'] = min(15, soft)
        
        ct = 0
        if 'Portuguese' in langs and 'English' in langs: ct += 4
        if any(k in text for k in ['finance', 'accounting', 'economics']): ct += 3
        if 'excel' in text: ct += 3
        scores['certs_tools'] = min(10, ct)
        
        pot = 0
        if years <= 2: pot += 3
        if any(k in text for k in ['eager', 'seeking', 'develop', 'growth', 'learning']): pot += 2
        scores['potential'] = min(5, pot)
    
    elif role_id == 5:  # Consultant, Forensic & Integrity (Manager, 7+ years)
        tech = 0
        tech_kw = {'forensic': 6, 'investigation': 5, 'fraud': 5, 'compliance': 4, 'aml': 4,
                   'anti-money': 4, 'financial crime': 5, 'due diligence': 4, 'data analysis': 3,
                   'integrity': 3, 'regulatory': 3, 'sanctions': 3, 'whistleblow': 3,
                   'forensic accounting': 6, 'suspicious': 3}
        for kw, pts in tech_kw.items():
            if kw in text: tech += pts
        scores['technical'] = min(30, tech * 30 / 30)
        
        exp = 0
        if years >= 7: exp += 12
        elif years >= 5: exp += 8
        elif years >= 3: exp += 4
        if any(k in text for k in ['forensic', 'investigation', 'compliance', 'financial crime']): exp += 5
        if 'consulting' in text or 'client' in text: exp += 3
        if 'report' in text or 'presentation' in text: exp += 3
        scores['experience'] = min(25, exp)
        
        sen = 0
        if years >= 7: sen += 8
        elif years >= 5: sen += 5
        if any(t in title for t in ['manager', 'senior', 'lead', 'head']): sen += 5
        elif 'specialist' in title: sen += 3
        scores['seniority'] = min(15, sen)
        
        soft = 0
        if any(k in text for k in ['communication', 'interpersonal']): soft += 4
        if any(k in text for k in ['team', 'cross-functional']): soft += 4
        if 'stakeholder' in text: soft += 3
        if any(k in text for k in ['analytical', 'investigative']): soft += 4
        scores['soft_skills'] = min(15, soft)
        
        ct = 0
        if 'Portuguese' in langs and 'English' in langs: ct += 4
        if any(c.lower() in ' '.join(certs).lower() for c in ['cfe', 'cpa']): ct += 4
        if any(k in text for k in ['law', 'criminology', 'accounting']): ct += 2
        scores['certs_tools'] = min(10, ct)
        
        pot = 0
        if any(k in text for k in ['trend', 'regulatory change', 'industry']): pot += 3
        if 'cross-functional' in text: pot += 2
        scores['potential'] = min(5, pot)
    
    total = sum(scores.values())
    return round(total, 1), scores

def get_match_label(score):
    if score >= 85: return "Strong Match"
    elif score >= 70: return "Good Match"
    elif score >= 55: return "Possible Match"
    else: return "Weak Match"

def get_swipe_action(score, info, role_id):
    if score >= 80: return "Shortlist"
    elif score >= 65: return "Hold"
    elif score >= 50:
        missing = []
        if not info.get('certifications'): missing.append('certifications')
        if info.get('years_exp', 0) == 0: missing.append('years of experience')
        if not info.get('education'): missing.append('education')
        if missing: return "Need More Info"
        return "Hold"
    else: return "Reject"

ROLE_NAMES = {
    1: "Director, Data & AI Strategy",
    2: "Senior Consultant, Technology Risk",
    3: "Cybersecurity Team",
    4: "Financial Analyst",
    5: "Consultant, Forensic & Integrity Services"
}

def main():
    # Load all CVs
    cv_dir = 'cv_texts'
    candidates = {}
    
    for i in range(1, 108):
        filepath = os.path.join(cv_dir, f'cv_{i}.txt')
        with open(filepath) as f:
            text = f.read()
        info = extract_cv_info(text, i)
        if info:
            info['domains'] = classify_candidate(info)
            candidates[i] = info
    
    print(f"Processed {len(candidates)} candidates")
    
    # Score all candidates against all roles
    all_scores = {}
    for cv_id, info in candidates.items():
        all_scores[cv_id] = {}
        for role_id in range(1, 6):
            score, breakdown = score_candidate_role(info, role_id)
            all_scores[cv_id][role_id] = {
                'score': score,
                'breakdown': breakdown,
                'label': get_match_label(score),
                'action': get_swipe_action(score, info, role_id)
            }
    
    # For each role, find top candidates
    role_rankings = {}
    for role_id in range(1, 6):
        ranked = sorted(all_scores.keys(), 
                       key=lambda x: all_scores[x][role_id]['score'], 
                       reverse=True)
        role_rankings[role_id] = ranked
    
    # Save results
    results = {
        'candidates': {},
        'role_rankings': {},
        'all_scores': {}
    }
    
    for cv_id, info in candidates.items():
        results['candidates'][cv_id] = {
            'name': info.get('name', 'Unknown'),
            'title': info.get('title', 'Unknown'),
            'location': info.get('location', 'Unknown'),
            'years_exp': info.get('years_exp', 0),
            'languages': info.get('languages', []),
            'certifications': info.get('certifications', []),
            'domains': info.get('domains', []),
            'summary': info.get('summary', '')[:300],
            'skills_raw': info.get('skills_raw', '')[:300],
            'education': info.get('education', '')[:300],
            'experience_raw': info.get('experience_raw', '')[:500]
        }
    
    for role_id, ranked in role_rankings.items():
        results['role_rankings'][role_id] = ranked[:20]
    
    for cv_id in all_scores:
        results['all_scores'][str(cv_id)] = {}
        for role_id in all_scores[cv_id]:
            results['all_scores'][str(cv_id)][str(role_id)] = all_scores[cv_id][role_id]
    
    with open('talent_tinder_results.json', 'w') as f:
        json.dump(results, f, indent=2, default=str)
    
    print("Results saved to talent_tinder_results.json")
    
    # Print summary
    for role_id in range(1, 6):
        print(f"\n=== {ROLE_NAMES[role_id]} ===")
        top = role_rankings[role_id][:8]
        for rank, cv_id in enumerate(top, 1):
            s = all_scores[cv_id][role_id]
            c = candidates[cv_id]
            print(f"  {rank}. CV{cv_id} {c.get('name','?')} ({c.get('title','?')}) "
                  f"- Score: {s['score']}, {s['label']}, {s['action']}")

if __name__ == '__main__':
    main()
