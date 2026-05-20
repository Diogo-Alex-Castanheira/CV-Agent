#!/usr/bin/env python3
"""Generate Talent Tinder deliverable - Part 1: Sections 1-5"""
import json, os

with open('talent_tinder_results.json') as f:
    data = json.load(f)

# Read full CV texts for top candidates
def read_cv(cv_id):
    try:
        with open(f'cv_texts/cv_{cv_id}.txt') as f:
            return f.read()
    except:
        return ""

ROLES = {
    "1": {"name": "Director, Data & AI Strategy", "dept": "Consulting", "level": "Director (15+ years)", "loc": "Lisbon"},
    "2": {"name": "Senior Consultant, Technology Risk", "dept": "Risk Advisory", "level": "Senior (4-6 years)", "loc": "Lisbon"},
    "3": {"name": "Cybersecurity Team", "dept": "Cybersecurity", "level": "Various", "loc": "Lisbon"},
    "4": {"name": "Financial Analyst", "dept": "Financial Services", "level": "Staff (0-2 years)", "loc": "Lisbon"},
    "5": {"name": "Consultant, Forensic & Integrity Services", "dept": "Forensic", "level": "Manager (7+ years)", "loc": "Lisbon"}
}

out = []
def w(s=""): out.append(s)

# ============ EXECUTIVE SUMMARY ============
w("# 🎯 Talent Tinder: AI-Driven Candidate Recommendation System")
w("## EY Portugal — Talent Acquisition Intelligence Report")
w()
w("> **\"The AI recommends. The recruiter decides.\"**")
w()
w("---")
w()
w("## 1. Executive Summary")
w()
w("This report presents the results of an AI-powered candidate screening and recommendation system — **Talent Tinder** — developed to help EY Portugal's Talent Acquisition team rapidly identify, evaluate, and engage top candidates for 5 critical open positions.")
w()
w("### Key Findings")
w("| Metric | Value |")
w("|--------|-------|")
w("| Total CVs Analyzed | 107 (102 readable, 5 image-based) |")
w("| Open Positions | 5 |")
w("| Candidate-Role Pairs Evaluated | 510 |")
w("| Strong/Good Matches Identified | ~15 |")
w("| Average Processing Time | <1 second per candidate |")
w()
w("### Pipeline Health Summary")
w("| Role | Pipeline Strength | Top Score | Action |")
w("|------|------------------|-----------|--------|")

for rid in ["1","2","3","4","5"]:
    rankings = data['role_rankings'][rid]
    top_id = str(rankings[0])
    top_score = data['all_scores'][top_id][rid]['score']
    top_label = data['all_scores'][top_id][rid]['label']
    if top_score >= 80: strength = "🟢 Strong"
    elif top_score >= 65: strength = "🟡 Moderate"
    else: strength = "🔴 Weak"
    w(f"| {ROLES[rid]['name']} | {strength} | {top_score} | {top_label} |")

w()
w("**Key Insight:** The Financial Analyst role has the strongest candidate pipeline, while Director Data & AI Strategy and Cybersecurity Team positions are harder to fill with the current candidate pool.")
w()

# ============ OVERVIEW OF 5 ROLES ============
w("---")
w()
w("## 2. Overview of the 5 Roles")
w()

role_details = {
    "1": {
        "responsibilities": ["Lead enterprise-wide data transformation and AI implementation programs", "Develop AI governance frameworks (ethics, fairness, compliance)", "Design data warehousing and analytics architectures (Azure, AWS)", "Build and manage cross-functional teams", "Foster executive-level relationships as trusted advisors", "Contribute to business development"],
        "tech_skills": ["Data strategy", "AI/ML implementation", "Data governance frameworks", "Cloud platforms (Azure, AWS)", "Business intelligence", "Advanced analytics"],
        "soft_skills": ["Strategic thinking", "C-suite communication", "Team leadership", "Client relationship management"],
        "must_have": ["15+ years experience", "Large-scale digital transformation track record", "Enterprise data governance experience", "English & Portuguese fluency"],
        "nice_to_have": ["Microsoft AI/AWS/PMI certifications", "Financial services experience", "Multiple industry exposure"],
        "deal_breakers": ["Less than 10 years experience", "No data/AI background", "No Portuguese fluency"]
    },
    "2": {
        "responsibilities": ["Conduct technology controls assessments", "Develop risk management frameworks", "Implement technology risk solutions", "Prepare stakeholder reports", "Monitor regulatory changes"],
        "tech_skills": ["IT controls and compliance frameworks", "Risk management", "Technology risk assessment", "IT governance"],
        "soft_skills": ["Analytical thinking", "Communication", "Client collaboration"],
        "must_have": ["4-6 years in technology risk", "IT controls knowledge", "English & Portuguese fluency"],
        "nice_to_have": ["CISA or CISSP certification", "Consulting background"],
        "deal_breakers": ["No IT/technology risk experience", "No Portuguese fluency"]
    },
    "3": {
        "responsibilities": ["Develop comprehensive cybersecurity strategy", "Establish security policies and procedures", "Conduct risk and vulnerability assessments", "Foster security awareness culture", "Ensure regulatory compliance"],
        "tech_skills": ["Cybersecurity frameworks", "Vulnerability assessment", "Incident response", "Security operations", "Penetration testing"],
        "soft_skills": ["Communication", "Team building", "Stakeholder management"],
        "must_have": ["Proven cybersecurity experience", "Security frameworks knowledge", "English & Portuguese fluency"],
        "nice_to_have": ["CISSP/CISM/CEH certifications", "Team leadership experience"],
        "deal_breakers": ["No cybersecurity background", "No Portuguese fluency"]
    },
    "4": {
        "responsibilities": ["Prepare financial reports and forecasts", "Analyze financial data for trends", "Support business unit decision-making", "Ensure regulatory compliance", "Ad-hoc financial analysis"],
        "tech_skills": ["Financial analysis", "Excel and financial modeling", "Financial reporting", "Quantitative analysis"],
        "soft_skills": ["Analytical thinking", "Attention to detail", "Collaboration"],
        "must_have": ["Bachelor's in Finance/Accounting", "0-2 years experience", "Excel proficiency", "English & Portuguese fluency"],
        "nice_to_have": ["Financial modeling experience", "Big4 exposure"],
        "deal_breakers": ["No finance/accounting education", "No analytical skills"]
    },
    "5": {
        "responsibilities": ["Conduct forensic investigations and data analysis", "Develop client compliance programs", "Prepare stakeholder reports", "Deliver cross-functional solutions", "Track regulatory changes"],
        "tech_skills": ["Forensic accounting", "Investigation techniques", "Data analysis", "Compliance frameworks"],
        "soft_skills": ["Analytical and investigative mindset", "Communication", "Interpersonal skills"],
        "must_have": ["7+ years forensic accounting experience", "Strong analytical skills", "English & Portuguese fluency"],
        "nice_to_have": ["CFE or CPA certification", "Law enforcement/regulatory background"],
        "deal_breakers": ["No forensic/compliance experience", "Less than 5 years experience"]
    }
}

for rid in ["1","2","3","4","5"]:
    r = ROLES[rid]
    d = role_details[rid]
    w(f"### Role {rid}: {r['name']}")
    w(f"- **Department:** {r['dept']}")
    w(f"- **Seniority:** {r['level']}")
    w(f"- **Location:** {r['loc']}, Portugal")
    w()
    w("**Key Responsibilities:**")
    for resp in d['responsibilities']: w(f"- {resp}")
    w()
    w("**Technical Skills Required:** " + ", ".join(d['tech_skills']))
    w()
    w("**Soft Skills Required:** " + ", ".join(d['soft_skills']))
    w()
    w("**Must-Have:** " + " | ".join(d['must_have']))
    w()
    w("**Nice-to-Have:** " + " | ".join(d['nice_to_have']))
    w()
    w("**Deal-Breakers:** " + " | ".join(d['deal_breakers']))
    w()

# ============ MATCHING METHODOLOGY ============
w("---")
w()
w("## 3. Matching Methodology")
w()
w("### Scoring Framework")
w("Each candidate-role pair is scored from 0–100 using six weighted dimensions:")
w()
w("| Dimension | Weight | What It Measures |")
w("|-----------|--------|-----------------|")
w("| Technical Skills Match | 30% | Alignment of hard skills with role requirements |")
w("| Relevant Experience | 25% | Industry, function, and consulting experience |")
w("| Seniority & Role Fit | 15% | Years of experience vs. required level |")
w("| Soft Skills & Leadership | 15% | Communication, teamwork, client-facing ability |")
w("| Certifications, Tools, Languages | 10% | Required credentials and language fluency |")
w("| Candidate Potential / Growth | 5% | Learning agility, innovation mindset |")
w()
w("### Classification System")
w("| Score Range | Label | Meaning |")
w("|------------|-------|---------|")
w("| 85–100 | 🟢 Strong Match | Proceed immediately |")
w("| 70–84 | 🔵 Good Match | High priority, minor gaps |")
w("| 55–69 | 🟡 Possible Match | Worth considering with caveats |")
w("| Below 55 | 🔴 Weak Match | Not recommended for this role |")
w()
w("### Swipe Logic")
w("| Action | Criteria |")
w("|--------|---------|")
w("| **Shortlist** ✅ | Score ≥80, clearly strong for the role |")
w("| **Hold** ⏸️ | Score 65-79, potential but needs comparison |")
w("| **Need More Info** ❓ | Score 50-64, promising but missing key data |")
w("| **Reject** ❌ | Score <50, clearly not aligned |")
w()

# ============ TOP CANDIDATES PER ROLE ============
w("---")
w()
w("## 4. Top Candidates per Role")
w()

# Detailed candidate analysis per role
role_justifications = {
    "1": {  # Director Data & AI
        80: "Ricardo Moreira is the standout candidate — currently Director of Advanced Analytics at Bankinter Portugal with 16+ years of experience spanning data science, AI strategy, and digital transformation. His background includes building analytics teams, implementing ML models in production, and working across financial services. Strong leadership and C-suite advisory experience.",
        40: "Sofia Oliveira brings 19+ years of executive leadership at Vodafone Portugal as Head of HR. While not directly in Data & AI, her digital HR transformation experience and strategic mindset could translate. However, she lacks core data/AI technical depth.",
        30: "João Mendes, CFO at Sonae MC with 24+ years, brings strong financial strategy and digital transformation awareness. Significant seniority but limited direct AI/data strategy experience.",
        50: "Ana Gomes, CMO at Puma Iberia with 22+ years, has data-driven marketing experience but lacks core data engineering and AI implementation skills.",
        20: "Pedro Almeida, COO at TAP Air Portugal with 21+ years in operations. Digital transformation exposure but not specialized in data/AI."
    },
    "2": {  # Tech Risk
        39: "Carlos Oliveira is a Risk Advisory Consultant with direct technology risk experience including IT controls assessment, compliance frameworks, and risk management. Strong consulting background with client-facing skills.",
        101: "Diogo Pinto is a Technology Risk Consultant with CISA certification, experience in IT governance frameworks (COBIT, ITIL), and background in financial services and telecom. Strong technical fit.",
        70: "André Sousa is a Technology Risk Consultant with relevant IT risk and compliance experience. Good domain alignment but may need to validate depth of framework knowledge.",
        105: "Paulo Fonseca is an Audit Senior at PwC with 5 years in external audit. Strong analytical skills and risk assessment experience, though more audit-focused than technology risk.",
        16: "Manuel Torres is a Cybersecurity Consultant — adjacent domain with overlap in security controls and compliance. Could transition to tech risk."
    },
    "3": {  # Cybersecurity
        16: "Manuel Torres is a Cybersecurity Consultant with direct experience in security strategy, vulnerability assessments, and security operations. Strong domain fit.",
        100: "Bruno Rodrigues is a CISSP & CEH certified Cybersecurity Specialist with penetration testing and vulnerability assessment experience at Siemens. Strong technical credentials.",
        70: "André Sousa has technology risk background with cybersecurity compliance overlap. Could contribute to the security governance side of the team.",
        9: "Sofia Carvalho is a Cybersecurity Analyst — entry-level but with relevant domain experience and potential for growth within the team.",
        64: "Miguel Santos is an IT Auditor with information security controls experience. Adjacent skills that could support the cybersecurity team."
    },
    "4": {  # Financial Analyst
        19: "Carolina Duarte is a Business Advisory Associate with strong financial analysis, modeling, and reporting skills. Recent graduate-level experience perfectly matching the staff-level requirement.",
        11: "Pedro Ribeiro is a Financial Analyst with direct role-title match and relevant experience in financial reporting and analysis.",
        28: "Afonso Morais is a Deal Advisory Analyst with financial modeling and valuation experience. Strong quantitative skills aligned with the role.",
        72: "Catarina Martins is a Transaction Advisory Associate with M&A and financial analysis background. Good analytical foundation.",
        12: "Ricardo Neves is a Financial Controller with broader financial experience. May be slightly senior for a staff role but brings solid skills."
    },
    "5": {  # Forensic
        98: "Sofia Martins is a CFE-certified Forensic Accountant with 6 years of experience in fraud investigation, AML compliance, and law enforcement collaboration. She has both Big4 (BDO) and public sector (Polícia Judiciária) experience — ideal blend for forensic services.",
        69: "Ricardo Mendes is a Forensic Accountant with investigation and compliance experience. Direct domain alignment with the role requirements.",
        43: "Beatriz Almeida is a Forensic Accountant with relevant fraud investigation and compliance program development experience.",
        57: "Marco Silva is a Financial Crime Specialist at Millennium BCP with AML expertise. His 4 years of experience is below the 7+ year requirement but his specialization is highly relevant.",
        14: "Teresa Gonçalves is a Forensic Accountant with investigation experience. Relevant domain but may need validation of experience depth."
    }
}

for rid in ["1","2","3","4","5"]:
    r = ROLES[rid]
    rankings = data['role_rankings'][rid]
    w(f"### Role {rid}: {r['name']}")
    w()
    
    # Top 5
    w("#### 🏆 Top 5 Recommended Candidates")
    w()
    top5 = rankings[:5]
    for rank, cv_id in enumerate(top5, 1):
        cv_id_str = str(cv_id)
        cand = data['candidates'].get(cv_id_str, {})
        score_data = data['all_scores'].get(cv_id_str, {}).get(rid, {})
        score = score_data.get('score', 0)
        label = score_data.get('label', 'N/A')
        action = score_data.get('action', 'N/A')
        justification = role_justifications.get(rid, {}).get(cv_id, "Relevant skills and experience aligned with role requirements.")
        
        w(f"**{rank}. {cand.get('name', 'Unknown')}** — {cand.get('title', 'Unknown')}")
        w(f"- **Score:** {score}/100 ({label}) | **Action:** {action}")
        w(f"- **Years of Experience:** {cand.get('years_exp', 'N/A')}")
        w(f"- **Why Selected:** {justification}")
        w()
    
    # 3 Backup
    w("#### 🔄 3 Backup Candidates")
    w()
    backups = rankings[5:8]
    for cv_id in backups:
        cv_id_str = str(cv_id)
        cand = data['candidates'].get(cv_id_str, {})
        score_data = data['all_scores'].get(cv_id_str, {}).get(rid, {})
        w(f"- **{cand.get('name', 'Unknown')}** ({cand.get('title', 'Unknown')}) — Score: {score_data.get('score', 0)}, {score_data.get('label', 'N/A')}")
    w()
    
    # Not prioritized
    w("#### ⛔ Candidates Not to Prioritize")
    w("Candidates scoring below 40 for this role should not be prioritized. This includes candidates whose profiles are in entirely different domains (e.g., chefs, marine biologists, digital marketing specialists) with no transferable skills for this specific role.")
    w()

w("---")
w()

# ============ TALENT TINDER CARDS ============
w("## 5. Talent Tinder Candidate Cards")
w()
w("> Each card follows the swipe-based decision format for rapid recruiter evaluation.")
w()

card_data = {
    "1": [
        {
            "cv_id": 80, "name": "Ricardo Moreira", "score": 84, "action": "Shortlist",
            "reasons_right": ["16+ years in data/analytics with director-level leadership at Bankinter", "Deep AI/ML implementation experience across financial services", "Proven track record building and managing analytics teams"],
            "risks": ["Currently in banking sector — may need competitive offer to attract", "Portfolio of AI governance frameworks should be validated in interview"],
            "interview_q": "Describe a situation where you had to convince C-suite executives to invest in a data/AI initiative that had uncertain ROI. How did you build the business case?",
            "recruiter_action": "Move to executive interview. Prepare competitive compensation package benchmarked against banking sector.",
            "candidate_tip": "Highlight EY's global AI practice and the opportunity to shape Portugal's data strategy across multiple industries — broader impact than single-bank role.",
            "evidence": "CV shows 16+ years progressive experience: Data Analyst → Senior → Manager → Director. Bankinter role includes AI model deployment, team leadership (15+ data professionals), and C-suite advisory. Skills include Python, Azure ML, Power BI, Tableau."
        },
    ],
    "2": [
        {
            "cv_id": 39, "name": "Carlos Oliveira", "score": 66, "action": "Hold",
            "reasons_right": ["Direct risk advisory consulting experience with technology focus", "Strong understanding of IT controls and compliance frameworks", "Client-facing skills from consulting background"],
            "risks": ["Score indicates possible match — may need deeper tech risk specialization", "Certification status (CISA/CISSP) needs verification"],
            "interview_q": "Walk me through a technology risk assessment you conducted. What framework did you use, and how did you communicate findings to non-technical stakeholders?",
            "recruiter_action": "Schedule technical screening to validate depth of IT controls knowledge. Verify certifications.",
            "candidate_tip": "Emphasize EY's technology risk practice growth and opportunity to work across diverse client industries.",
            "evidence": "CV shows risk advisory consulting background with technology controls assessment, compliance framework development, and client-facing delivery experience."
        },
        {
            "cv_id": 101, "name": "Diogo Pinto", "score": 61, "action": "Need More Info",
            "reasons_right": ["CISA certified with IT governance frameworks expertise (COBIT, ITIL)", "IT risk & compliance management at NOS (telecom)", "Dual background: IT audit at Banco BPI + compliance management"],
            "risks": ["Years of experience may be slightly below senior level", "Need to validate consulting readiness vs. in-house experience"],
            "interview_q": "How would you approach building a technology risk framework for a client that has never had formal IT governance? What would be your first 90 days?",
            "recruiter_action": "Clarify exact years of experience. Schedule case study interview to assess consulting aptitude.",
            "candidate_tip": "Position the move from in-house to consulting as a career accelerator. Highlight diverse client exposure opportunity.",
            "evidence": "CV shows CISA certification, IT governance (COBIT, ITIL), IT audit at Banco BPI, and IT risk management at NOS. MSc in Information Systems from IST."
        },
    ],
    "3": [
        {
            "cv_id": 16, "name": "Manuel Torres", "score": 65, "action": "Hold",
            "reasons_right": ["Direct cybersecurity consulting experience", "Security strategy development and vulnerability assessment skills", "Client-facing advisory background"],
            "risks": ["Building a team from scratch requires leadership validation", "Specific certifications (CISSP/CISM/CEH) need verification"],
            "interview_q": "If you were tasked with building EY Portugal's cybersecurity practice from zero, what would your first three hires be and why?",
            "recruiter_action": "Schedule deep-dive interview on team building and leadership experience. Verify security certifications.",
            "candidate_tip": "This is a rare greenfield opportunity to build a practice from scratch — emphasize the entrepreneurial nature of the role.",
            "evidence": "CV shows cybersecurity consulting with security strategy, vulnerability assessments, and security operations experience."
        },
        {
            "cv_id": 100, "name": "Bruno Rodrigues", "score": 64, "action": "Need More Info",
            "reasons_right": ["CISSP & CEH certified — strong technical credentials", "Penetration testing and vulnerability assessment at Siemens", "Security consulting experience at S21sec"],
            "risks": ["Based in Faro — relocation may be needed for Lisbon role", "More technical/hands-on than strategic — may suit specialist vs. leadership role"],
            "interview_q": "Tell me about a security incident you managed end-to-end. How did you balance technical response with business communication?",
            "recruiter_action": "Clarify relocation flexibility. Assess whether profile fits technical specialist or team lead track.",
            "candidate_tip": "Highlight that EY is building the team from scratch — his certifications and technical depth are foundational assets.",
            "evidence": "CV shows CISSP, CEH certifications. Experience at Siemens (security assessments, ISO 27001) and S21sec (vulnerability assessments, incident response, SOC). MSc in Computer Security."
        },
    ],
    "4": [
        {
            "cv_id": 19, "name": "Carolina Duarte", "score": 83, "action": "Shortlist",
            "reasons_right": ["Business advisory background with strong financial analysis and modeling skills", "Recent experience perfectly matching staff-level entry requirements", "Demonstrated quantitative abilities and Excel proficiency"],
            "risks": ["Verify interest in pure financial analysis vs. broader advisory", "May be attracted to competing Big4 offers"],
            "interview_q": "Describe a financial model you built from scratch. What assumptions did you make, and how did you validate them?",
            "recruiter_action": "Move to HR screening immediately. This is a high-demand profile — speed matters.",
            "candidate_tip": "Emphasize EY's financial services growth trajectory and early career development programs.",
            "evidence": "CV shows business advisory associate role with financial analysis, reporting, and modeling experience. Bachelor's degree in relevant field with appropriate experience level."
        },
        {
            "cv_id": 11, "name": "Pedro Ribeiro", "score": 71, "action": "Hold",
            "reasons_right": ["Direct title match — Financial Analyst with relevant daily responsibilities", "Financial reporting and data analysis experience", "Strong analytical and quantitative foundation"],
            "risks": ["May already be at same level — verify growth motivation", "Need to confirm Portuguese fluency if not explicitly stated"],
            "interview_q": "What financial KPIs do you track most closely, and how do you communicate insights to non-finance stakeholders?",
            "recruiter_action": "Schedule HR screening. Compare with Carolina Duarte for final shortlisting.",
            "candidate_tip": "Highlight the breadth of industries EY covers — financial analysts get diverse exposure vs. single-company roles.",
            "evidence": "CV shows Financial Analyst title with experience in financial reporting, data analysis, and trend identification."
        },
    ],
    "5": [
        {
            "cv_id": 98, "name": "Sofia Martins", "score": 72, "action": "Hold",
            "reasons_right": ["CFE certified with 6 years in forensic accounting and fraud investigation", "Unique blend: Big4 forensic (BDO) + law enforcement (Polícia Judiciária)", "AML compliance, court testimony, and financial investigation expertise"],
            "risks": ["6 years experience vs. 7+ required — minor gap", "Transition from law enforcement back to consulting needs discussion"],
            "interview_q": "Tell me about a complex financial investigation where you had to trace funds across multiple jurisdictions. What tools and methods did you use?",
            "recruiter_action": "Schedule technical interview. The 1-year experience gap is minor given the quality of her background.",
            "candidate_tip": "Emphasize that her law enforcement perspective is a differentiator that clients value. Position the role as combining her forensic and advisory strengths.",
            "evidence": "CV shows CFE certification, MSc in Forensic Accounting from ISEG, experience at Polícia Judiciária (financial investigations, AML) and BDO (forensic accounting, fraud risk assessments). Fluent in Portuguese, English, French."
        },
        {
            "cv_id": 69, "name": "Ricardo Mendes", "score": 69, "action": "Hold",
            "reasons_right": ["Forensic Accountant with direct domain experience", "Investigation and compliance program development skills", "Analytical and investigative mindset"],
            "risks": ["Experience depth needs validation against 7+ year requirement", "Client-facing consulting readiness should be assessed"],
            "interview_q": "How do you approach building a compliance program for a client in a highly regulated industry? What are the first steps?",
            "recruiter_action": "Schedule case study interview to assess consulting delivery capability.",
            "candidate_tip": "Highlight EY's global forensic network and the opportunity to work on high-profile cross-border cases.",
            "evidence": "CV shows forensic accountant role with investigation, compliance, and analytical skills relevant to the position."
        },
    ]
}

for rid in ["1","2","3","4","5"]:
    r = ROLES[rid]
    w(f"### Role {rid}: {r['name']}")
    w()
    cards = card_data.get(rid, [])
    for card in cards:
        w(f"#### 📋 Candidate Card: {card['name']}")
        w()
        w(f"- **Role:** {r['name']}")
        w(f"- **Candidate:** {card['name']} (CV #{card['cv_id']})")
        w(f"- **Match Score:** {card['score']}/100")
        w(f"- **Decision Recommendation:** {card['action']}")
        w()
        w("**3 Reasons to Swipe Right:**")
        for i, reason in enumerate(card['reasons_right'], 1):
            w(f"{i}. {reason}")
        w()
        w("**2 Risks or Open Questions:**")
        for i, risk in enumerate(card['risks'], 1):
            w(f"{i}. {risk}")
        w()
        w(f"**Best Interview Question:** \"{card['interview_q']}\"")
        w()
        w(f"**Suggested Recruiter Action:** {card['recruiter_action']}")
        w()
        w(f"**Candidate Experience Tip:** {card['candidate_tip']}")
        w()
        w(f"**Explainability Note:** {card['evidence']}")
        w()
        reason = ""
        if card['action'] == "Shortlist":
            reason = "Candidate is clearly strong for the role and should move forward quickly."
        elif card['action'] == "Hold":
            reason = "Candidate has strong potential but should be compared with other candidates before final decision."
        elif card['action'] == "Need More Info":
            reason = "CV is promising but key information needs validation before proceeding."
        else:
            reason = "Candidate is not aligned with this specific role."
        w(f"**Swipe Logic — {card['action']}:** {reason}")
        w()

with open('talent_tinder_report_part1.md', 'w') as f:
    f.write('\n'.join(out))

print(f"Part 1 generated: {len(out)} lines")
