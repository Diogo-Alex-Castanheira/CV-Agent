import { Candidate, Role } from '../types';

export const roles: Role[] = [
  {
    "id": "role-1",
    "roleId": 1,
    "title": "Director, Data & AI Strategy",
    "department": "Technology",
    "location": "Lisbon, Portugal / Hybrid",
    "candidatesCount": 10,
    "topMatchScore": 84,
    "pipelineHealth": "Strong",
    "difficulty": "Hard",
    "candidates": [
      {
        "id": "cand-80-1",
        "cvId": 80,
        "roleId": 1,
        "rank": 1,
        "name": "Ricardo Moreira",
        "currentRole": "Director of Advanced Analytics, Bankinter Portugal",
        "location": "Portugal",
        "yearsExp": 20,
        "matchScore": 84,
        "label": "Good Match",
        "recommendation": "Shortlist",
        "skills": [
          "Data Governance & Regulatory Compliance",
          "Platforms: Azure Data Lake, SQL Server, Power BI, Purview",
          "Tools: PowerCenter, Microstrategy, SAP BI",
          "Data Modeling & KPI Design",
          "ricardo_moreira_cv_final.md",
          "2025-"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French",
          "Spanish"
        ],
        "certifications": [
          "Azure",
          "Microsoft"
        ],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Director of Advanced Analytics, Bankinter Portugal and how you navigated it?",
        "suggestedAction": "Fast-track to technical interview",
        "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
        "summary": "Director of Advanced Analytics with 20+ years of experience in data engineering, business intelligence, and AI\ngovernance. Delivers results by translating strategic goals into data-driven frameworks t",
        "matchBreakdown": {
          "technical": 30,
          "experience": 17,
          "seniority": 15,
          "softSkills": 12,
          "certificationsToolsLanguages": 7,
          "growthPotential": 3
        }
      },
      {
        "id": "cand-40-1",
        "cvId": 40,
        "roleId": 1,
        "rank": 2,
        "name": "Sofia Oliveira",
        "currentRole": "Head of Human Resources, Vodafone Portugal",
        "location": "Portugal",
        "yearsExp": 19,
        "matchScore": 57,
        "label": "Possible Match",
        "recommendation": "Hold",
        "skills": [
          "Organizational Development & Change Management",
          "Talent Acquisition & Retention Strategies",
          "Employee Experience Design",
          "Performance Management Systems",
          "HR Analytics & Workforce Planning",
          "Native in Portugues"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "certifications": [
          "SHRM"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "Lacks some desired certifications",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Head of Human Resources, Vodafone Portugal and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
        "summary": "HR executive with 19+ years of experience in talent management, organizational development, and employee\nexperience. Delivers results by translating business objectives into people-centered strategies",
        "matchBreakdown": {
          "technical": 6,
          "experience": 20,
          "seniority": 15,
          "softSkills": 12,
          "certificationsToolsLanguages": 4,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-30-1",
        "cvId": 30,
        "roleId": 1,
        "rank": 3,
        "name": "João Mendes",
        "currentRole": "Chief Financial Officer, Sonae MC",
        "location": "Portugal",
        "yearsExp": 24,
        "matchScore": 54,
        "label": "Weak Match",
        "recommendation": "Hold",
        "skills": [
          "Financial Strategy & Planning",
          "M&A Due Diligence & Integration",
          "Capital Structure Optimization",
          "Investor Relations & Financial Communication",
          "Risk Management & Compliance",
          "Native in Portuguese; fluent in E"
        ],
        "languages": [
          "Portuguese",
          "English",
          "German"
        ],
        "certifications": [
          "CFA"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Chief Financial Officer, Sonae MC and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
        "summary": "Senior finance executive with 24+ years of experience in financial strategy, M&A, and treasury management.\nDelivers results by optimizing financial operations, implementing strategic planning framewor",
        "matchBreakdown": {
          "technical": 0,
          "experience": 17,
          "seniority": 15,
          "softSkills": 12,
          "certificationsToolsLanguages": 7,
          "growthPotential": 3
        }
      },
      {
        "id": "cand-50-1",
        "cvId": 50,
        "roleId": 1,
        "rank": 4,
        "name": "Ana Gomes",
        "currentRole": "Chief Marketing Officer, Puma Iberia",
        "location": "Portugal",
        "yearsExp": 22,
        "matchScore": 53.1,
        "label": "Weak Match",
        "recommendation": "Hold",
        "skills": [
          "Brand Strategy & Positioning",
          "Integrated Marketing Campaigns",
          "Digital Marketing & Social Media",
          "Customer Journey Mapping",
          "Marketing Analytics & ROI Measurement",
          "Native in Portuguese; fluent in English and"
        ],
        "languages": [
          "Portuguese",
          "English",
          "Spanish"
        ],
        "certifications": [
          "Google",
          "Salesforce"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "Lacks some desired certifications",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Chief Marketing Officer, Puma Iberia and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
        "summary": "Senior marketing executive with 22+ years of experience across digital marketing, brand strategy, and\ncustomer experience. Proven track record in developing integrated marketing campaigns, managing gl",
        "matchBreakdown": {
          "technical": 5.142857142857143,
          "experience": 17,
          "seniority": 15,
          "softSkills": 12,
          "certificationsToolsLanguages": 4,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-20-1",
        "cvId": 20,
        "roleId": 1,
        "rank": 5,
        "name": "Pedro Almeida",
        "currentRole": "Chief Operations Officer, TAP Air Portugal",
        "location": "Portugal",
        "yearsExp": 21,
        "matchScore": 51.4,
        "label": "Weak Match",
        "recommendation": "Hold",
        "skills": [
          "Supply Chain Optimization & Network Design",
          "Lean Manufacturing & Six Sigma",
          "S&OP & Integrated Business Planning",
          "Operational Excellence & Continuous Improvement",
          "Digital Operations Transformation",
          "Native i"
        ],
        "languages": [
          "Portuguese",
          "English",
          "Spanish"
        ],
        "certifications": [
          "Lean Six Sigma",
          "CSCP",
          "APICS"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Chief Operations Officer, TAP Air Portugal and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
        "summary": "Operations executive with 21+ years of experience in supply chain management, process optimization, and\noperational excellence. Delivers results by implementing lean methodologies, digital transformat",
        "matchBreakdown": {
          "technical": 3.4285714285714284,
          "experience": 17,
          "seniority": 15,
          "softSkills": 9,
          "certificationsToolsLanguages": 7,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-7-1",
        "cvId": 7,
        "roleId": 1,
        "rank": 6,
        "name": "Maria Ferreira",
        "currentRole": "Senior Data Analyst",
        "location": "Lisbon, Portugal",
        "yearsExp": 6,
        "matchScore": 45.6,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "cv_7.md",
          "2025-05-02",
          "2 / 2",
          "Python, SQL, R, Power BI",
          "Machine Learning (Scikit-learn, XGBoost)",
          "ETL and data modeling",
          "Financial reporting knowledge",
          "Fluent in Portuguese and English"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Senior Data Analyst and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
        "summary": "Senior Data Analyst with over 6 years of experience in advanced analytics, data visualization, and business\nintelligence. Proven ability to translate complex data into actionable insights for decision",
        "matchBreakdown": {
          "technical": 14.571428571428571,
          "experience": 6,
          "seniority": 4,
          "softSkills": 11,
          "certificationsToolsLanguages": 7,
          "growthPotential": 3
        }
      },
      {
        "id": "cand-10-1",
        "cvId": 10,
        "roleId": 1,
        "rank": 7,
        "name": "Carlos Ferreira",
        "currentRole": "General Counsel, Jerónimo Martins Group",
        "location": "Portugal",
        "yearsExp": 23,
        "matchScore": 42.4,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "Corporate Governance & Compliance",
          "Mergers & Acquisitions",
          "Commercial Contract Negotiation",
          "Intellectual Property Protection",
          "Regulatory Affairs & Government Relations",
          "Native in Portuguese; fluent in Engl"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "Lacks some desired certifications",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as General Counsel, Jerónimo Martins Group and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
        "summary": "Legal executive with 23+ years of experience in corporate law, regulatory compliance, and international\nbusiness transactions. Delivers results by providing strategic legal guidance that balances risk",
        "matchBreakdown": {
          "technical": 3.4285714285714284,
          "experience": 12,
          "seniority": 8,
          "softSkills": 12,
          "certificationsToolsLanguages": 4,
          "growthPotential": 3
        }
      },
      {
        "id": "cand-26-1",
        "cvId": 26,
        "roleId": 1,
        "rank": 8,
        "name": "Rodrigo Alves",
        "currentRole": "Technology Consulting Manager",
        "location": "Lisbon, Portugal",
        "yearsExp": 8,
        "matchScore": 41,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "Digital transformation, IT strategy",
          "Project management, Agile methodologies",
          "Cloud computing, System integration",
          "Portuguese (native), English (fluent)",
          "PMP, ITIL v4 certified"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [
          "PMP",
          "ITIL"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Technology Consulting Manager and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
        "summary": "Technology consultant with 8 years of experience in digital transformation and IT strategy. Strong track record\nin delivering complex technology projects for financial services and retail clients.",
        "matchBreakdown": {
          "technical": 6,
          "experience": 13,
          "seniority": 4,
          "softSkills": 8,
          "certificationsToolsLanguages": 10,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-25-1",
        "cvId": 25,
        "roleId": 1,
        "rank": 9,
        "name": "Filipa Santos",
        "currentRole": "Wine Producer & Viticulturist",
        "location": "Douro Valley, Portugal",
        "yearsExp": 15,
        "matchScore": 32,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "Viticulture, Winemaking",
          "Wine blending, Sensory analysis",
          "Sustainable vineyard management",
          "Portuguese (native), English (fluent), French (intermediate)",
          "Wine export regulations",
          "Wine competition judge"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Wine Producer & Viticulturist and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
        "summary": "Passionate winemaker with 15 years of experience in viticulture and wine production. Expert in traditional\nPortuguese grape varieties and production methods, with special focus on Douro Valley wines.",
        "matchBreakdown": {
          "technical": 0,
          "experience": 12,
          "seniority": 8,
          "softSkills": 5,
          "certificationsToolsLanguages": 7,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-59-1",
        "cvId": 59,
        "roleId": 1,
        "rank": 10,
        "name": "Raquel Pereira",
        "currentRole": "Project Management Consultant",
        "location": "Braga, Portugal",
        "yearsExp": 5,
        "matchScore": 31.4,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "Project management methodologies (PMP, Agile, PRINCE2)",
          "cv_59.md",
          "2025-05-02",
          "2 / 2",
          "Stakeholder management and communication",
          "MS Project, Jira, Trello",
          "Change management frameworks",
          "Portuguese (native), Eng"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [
          "PMP"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Project Management Consultant and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
        "summary": "Project management professional with 5 years of experience in leading complex business transformation\ninitiatives. Expertise in agile methodologies and change management. Strong leadership skills with",
        "matchBreakdown": {
          "technical": 3.4285714285714284,
          "experience": 3,
          "seniority": 0,
          "softSkills": 15,
          "certificationsToolsLanguages": 10,
          "growthPotential": 0
        }
      }
    ]
  },
  {
    "id": "role-2",
    "roleId": 2,
    "title": "Senior Consultant, Technology Risk",
    "department": "Technology",
    "location": "Lisbon, Portugal / Hybrid",
    "candidatesCount": 10,
    "topMatchScore": 66,
    "pipelineHealth": "Moderate",
    "difficulty": "Medium",
    "candidates": [
      {
        "id": "cand-39-2",
        "cvId": 39,
        "roleId": 2,
        "rank": 1,
        "name": "Carlos Oliveira",
        "currentRole": "Risk Advisory Consultant",
        "location": "Lisbon, Portugal",
        "yearsExp": 5,
        "matchScore": 66,
        "label": "Possible Match",
        "recommendation": "Hold",
        "skills": [
          "Risk assessment and management",
          "Basel III, GDPR, AML compliance",
          "SAS, R, Excel (advanced)",
          "Portuguese (native), English (fluent), French (intermediate)",
          "FRM (Financial Risk Manager) certification"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Risk Advisory Consultant and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Risk management professional with 5 years of experience in financial risk, compliance, and internal controls.\nStrong expertise in regulatory frameworks including Basel III, GDPR, and AML directives.",
        "matchBreakdown": {
          "technical": 20,
          "experience": 23,
          "seniority": 11,
          "softSkills": 4,
          "certificationsToolsLanguages": 6,
          "growthPotential": 2
        }
      },
      {
        "id": "cand-101-2",
        "cvId": 101,
        "roleId": 2,
        "rank": 2,
        "name": "Diogo Pinto",
        "currentRole": "Technology Risk Consultant",
        "location": "Lisbon, Portugal",
        "yearsExp": 0,
        "matchScore": 61,
        "label": "Possible Match",
        "recommendation": "Need More Info",
        "skills": [
          "CISA, CRISC certifications",
          "cv_90.md",
          "2025-05-02",
          "2 / 2",
          "IT governance frameworks (COBIT, ITIL)",
          "Cybersecurity and data privacy compliance",
          "Portuguese (native), English (fluent)",
          "Strong analytical and commun"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [
          "CISA",
          "ITIL",
          "ISO"
        ],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Technology Risk Consultant and how you navigated it?",
        "suggestedAction": "Send screening questionnaire",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "IT professional specialized in technology risk management, IT audit, and cybersecurity compliance. CISA\ncertified with experience in financial services and telecommunications industries. Looking to jo",
        "matchBreakdown": {
          "technical": 30,
          "experience": 8,
          "seniority": 3,
          "softSkills": 8,
          "certificationsToolsLanguages": 10,
          "growthPotential": 2
        }
      },
      {
        "id": "cand-70-2",
        "cvId": 70,
        "roleId": 2,
        "rank": 3,
        "name": "André Sousa",
        "currentRole": "Technology Risk Consultant",
        "location": "Lisbon, Portugal",
        "yearsExp": 0,
        "matchScore": 56,
        "label": "Possible Match",
        "recommendation": "Need More Info",
        "skills": [
          "IT risk assessment methodologies",
          "cv_70.md",
          "2025-05-02",
          "2 / 2",
          "Security frameworks (ISO 27001, NIST, CIS)",
          "Vulnerability assessment tools",
          "Cloud security (AWS, Azure)",
          "Portuguese (native), English (fluent)",
          "C"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [
          "CISSP",
          "CISM",
          "AWS",
          "Azure",
          "ISO"
        ],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Technology Risk Consultant and how you navigated it?",
        "suggestedAction": "Send screening questionnaire",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Technology risk professional with strong background in cybersecurity and IT governance.",
        "matchBreakdown": {
          "technical": 26,
          "experience": 11,
          "seniority": 3,
          "softSkills": 4,
          "certificationsToolsLanguages": 10,
          "growthPotential": 2
        }
      },
      {
        "id": "cand-105-2",
        "cvId": 105,
        "roleId": 2,
        "rank": 4,
        "name": "Paulo Fonseca",
        "currentRole": "Audit Senior",
        "location": "Porto, Portugal",
        "yearsExp": 5,
        "matchScore": 55,
        "label": "Possible Match",
        "recommendation": "Need More Info",
        "skills": [
          "External audit, Financial reporting",
          "IFRS, Portuguese GAAP",
          "Audit software, Excel (advanced)",
          "Portuguese (native), English (fluent), Spanish (basic)",
          "Member of the Portuguese Chartered Accountants Order"
        ],
        "languages": [
          "Portuguese",
          "English",
          "Spanish"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Adaptable background",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Audit Senior and how you navigated it?",
        "suggestedAction": "Send screening questionnaire",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "",
        "matchBreakdown": {
          "technical": 8,
          "experience": 15,
          "seniority": 13,
          "softSkills": 11,
          "certificationsToolsLanguages": 6,
          "growthPotential": 2
        }
      },
      {
        "id": "cand-16-2",
        "cvId": 16,
        "roleId": 2,
        "rank": 5,
        "name": "Manuel Torres",
        "currentRole": "Cybersecurity Consultant",
        "location": "Porto, Portugal",
        "yearsExp": 6,
        "matchScore": 54,
        "label": "Weak Match",
        "recommendation": "Hold",
        "skills": [
          "Penetration testing, Vulnerability assessment",
          "Security architecture, Risk management",
          "NIST, ISO 27001, GDPR compliance",
          "Portuguese (native), English (fluent)",
          "CISSP, CEH certifications",
          "Python, Metasploit"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [
          "CISSP",
          "CEH",
          "ISO"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Cybersecurity Consultant and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Cybersecurity professional with 6 years of experience in information security, vulnerability assessment, and\npenetration testing. Strong technical skills with expertise in security architecture and co",
        "matchBreakdown": {
          "technical": 11,
          "experience": 18,
          "seniority": 11,
          "softSkills": 4,
          "certificationsToolsLanguages": 10,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-4-2",
        "cvId": 4,
        "roleId": 2,
        "rank": 6,
        "name": "Inês Carvalho",
        "currentRole": "Senior Auditor",
        "location": "Porto, Portugal",
        "yearsExp": 5,
        "matchScore": 50,
        "label": "Weak Match",
        "recommendation": "Need More Info",
        "skills": [
          "IFRS, GAAP, SAP",
          "Audit methodologies and compliance",
          "cv_4.md",
          "2025-05-02",
          "2 / 2",
          "Caseware, Excel advanced",
          "Fluent in English and Portuguese"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Adaptable background",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Senior Auditor and how you navigated it?",
        "suggestedAction": "Send screening questionnaire",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Senior Auditor with 5+ years of experience leading financial audits across the healthcare, tech, and retail\nsectors. Strong knowledge of IFRS, Portuguese GAAP, and internal controls. Adept at managing",
        "matchBreakdown": {
          "technical": 7,
          "experience": 15,
          "seniority": 13,
          "softSkills": 7,
          "certificationsToolsLanguages": 6,
          "growthPotential": 2
        }
      },
      {
        "id": "cand-32-2",
        "cvId": 32,
        "roleId": 2,
        "rank": 7,
        "name": "Tomás Santos",
        "currentRole": "Strategy Consultant",
        "location": "Lisbon, Portugal",
        "yearsExp": 6,
        "matchScore": 49,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "Strategy development, Business planning",
          "Financial modeling, Market analysis",
          "Project management, Team leadership",
          "Portuguese (native), English (fluent), French (professional)",
          "PowerPoint, Excel (advanced"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Strategy Consultant and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Strategy consultant with 6 years of experience in management consulting and corporate strategy. Strong track\nrecord of delivering high-impact projects for clients across financial services, telecommun",
        "matchBreakdown": {
          "technical": 0,
          "experience": 18,
          "seniority": 11,
          "softSkills": 11,
          "certificationsToolsLanguages": 6,
          "growthPotential": 3
        }
      },
      {
        "id": "cand-54-2",
        "cvId": 54,
        "roleId": 2,
        "rank": 8,
        "name": "Daniel Gomes",
        "currentRole": "Internal Audit Specialist",
        "location": "Lisbon, Portugal",
        "yearsExp": 6,
        "matchScore": 49,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "Internal audit methodologies",
          "Risk assessment and control evaluation",
          "IIA standards and COSO framework",
          "Audit management software",
          "Portuguese (native), English (fluent)",
          "CIA (Certified Internal Auditor)"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [
          "CIA"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Internal Audit Specialist and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Internal audit professional with 6 years of experience in risk assessment, control evaluation, and compliance\ntesting. Strong knowledge of internal audit methodologies and international standards. See",
        "matchBreakdown": {
          "technical": 11,
          "experience": 20,
          "seniority": 8,
          "softSkills": 4,
          "certificationsToolsLanguages": 6,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-15-2",
        "cvId": 15,
        "roleId": 2,
        "rank": 9,
        "name": "Rita Sousa",
        "currentRole": "Financial Advisory Consultant",
        "location": "Lisbon, Portugal",
        "yearsExp": 4,
        "matchScore": 48,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "Financial modeling, Business valuation",
          "Due diligence, M&A advisory",
          "Excel (advanced), PowerPoint, Bloomberg Terminal",
          "Portuguese (native), English (fluent), Spanish (intermediate)",
          "CFA Level II Candidate"
        ],
        "languages": [
          "Portuguese",
          "English",
          "Spanish"
        ],
        "certifications": [
          "CFA"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Financial Advisory Consultant and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Financial advisory professional with 4 years of experience in M&A transactions, business valuation, and\ncorporate restructuring. Strong analytical skills with expertise in financial modeling and due d",
        "matchBreakdown": {
          "technical": 0,
          "experience": 18,
          "seniority": 11,
          "softSkills": 11,
          "certificationsToolsLanguages": 6,
          "growthPotential": 2
        }
      },
      {
        "id": "cand-17-2",
        "cvId": 17,
        "roleId": 2,
        "rank": 10,
        "name": "Luísa Pereira",
        "currentRole": "ESG Consultant",
        "location": "Lisbon, Portugal",
        "yearsExp": 5,
        "matchScore": 48,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "ESG reporting, Sustainable finance",
          "GRI, SASB, TCFD frameworks",
          "Carbon accounting, Climate risk assessment",
          "Portuguese (native), English (fluent), French (intermediate)",
          "GRI certified sustainability profe"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as ESG Consultant and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Sustainability professional with 5 years of experience in ESG reporting, sustainable finance, and corporate\nsocial responsibility. Expertise in ESG frameworks and sustainable business strategies.",
        "matchBreakdown": {
          "technical": 4,
          "experience": 18,
          "seniority": 11,
          "softSkills": 4,
          "certificationsToolsLanguages": 6,
          "growthPotential": 5
        }
      }
    ]
  },
  {
    "id": "role-3",
    "roleId": 3,
    "title": "Cybersecurity Team",
    "department": "Technology",
    "location": "Lisbon, Portugal / Hybrid",
    "candidatesCount": 10,
    "topMatchScore": 65,
    "pipelineHealth": "Moderate",
    "difficulty": "Hard",
    "candidates": [
      {
        "id": "cand-16-3",
        "cvId": 16,
        "roleId": 3,
        "rank": 1,
        "name": "Manuel Torres",
        "currentRole": "Cybersecurity Consultant",
        "location": "Porto, Portugal",
        "yearsExp": 6,
        "matchScore": 65,
        "label": "Possible Match",
        "recommendation": "Hold",
        "skills": [
          "Penetration testing, Vulnerability assessment",
          "Security architecture, Risk management",
          "NIST, ISO 27001, GDPR compliance",
          "Portuguese (native), English (fluent)",
          "CISSP, CEH certifications",
          "Python, Metasploit"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [
          "CISSP",
          "CEH",
          "ISO"
        ],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Relevant industry experience",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Cybersecurity Consultant and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Cybersecurity professional with 6 years of experience in information security, vulnerability assessment, and\npenetration testing. Strong technical skills with expertise in security architecture and co",
        "matchBreakdown": {
          "technical": 23,
          "experience": 20,
          "seniority": 7,
          "softSkills": 3,
          "certificationsToolsLanguages": 10,
          "growthPotential": 2
        }
      },
      {
        "id": "cand-100-3",
        "cvId": 100,
        "roleId": 3,
        "rank": 2,
        "name": "Bruno Rodrigues",
        "currentRole": "Cybersecurity Specialist",
        "location": "Faro, Portugal",
        "yearsExp": 0,
        "matchScore": 64,
        "label": "Possible Match",
        "recommendation": "Need More Info",
        "skills": [
          "CISSP, CEH certifications",
          "cv_100.md",
          "2025-05-02",
          "2 / 2",
          "Vulnerability assessment and penetration testing",
          "Security frameworks (NIST, ISO 27001)",
          "Portuguese (native), English (fluent)",
          "Strong technical docum"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [
          "CISSP",
          "CEH",
          "ISO"
        ],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Cybersecurity Specialist and how you navigated it?",
        "suggestedAction": "Send screening questionnaire",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Information security professional with expertise in vulnerability assessment, penetration testing, and security\narchitecture. CISSP certified with experience in financial and healthcare sectors. Looki",
        "matchBreakdown": {
          "technical": 30,
          "experience": 11,
          "seniority": 3,
          "softSkills": 8,
          "certificationsToolsLanguages": 10,
          "growthPotential": 2
        }
      },
      {
        "id": "cand-70-3",
        "cvId": 70,
        "roleId": 3,
        "rank": 3,
        "name": "André Sousa",
        "currentRole": "Technology Risk Consultant",
        "location": "Lisbon, Portugal",
        "yearsExp": 0,
        "matchScore": 53,
        "label": "Weak Match",
        "recommendation": "Need More Info",
        "skills": [
          "IT risk assessment methodologies",
          "cv_70.md",
          "2025-05-02",
          "2 / 2",
          "Security frameworks (ISO 27001, NIST, CIS)",
          "Vulnerability assessment tools",
          "Cloud security (AWS, Azure)",
          "Portuguese (native), English (fluent)",
          "C"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [
          "CISSP",
          "CISM",
          "AWS",
          "Azure",
          "ISO"
        ],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Technology Risk Consultant and how you navigated it?",
        "suggestedAction": "Send screening questionnaire",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Technology risk professional with strong background in cybersecurity and IT governance.",
        "matchBreakdown": {
          "technical": 30,
          "experience": 8,
          "seniority": 0,
          "softSkills": 5,
          "certificationsToolsLanguages": 10,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-9-3",
        "cvId": 9,
        "roleId": 3,
        "rank": 4,
        "name": "Sofia Carvalho",
        "currentRole": "Cybersecurity Analyst",
        "location": "Braga, Portugal",
        "yearsExp": 0,
        "matchScore": 50,
        "label": "Weak Match",
        "recommendation": "Need More Info",
        "skills": [
          "NIST, ISO 27001, GDPR",
          "Kali Linux, Wireshark, Splunk",
          "cv_9.md",
          "2025-05-02",
          "2 / 2",
          "Python, Bash scripting",
          "Fluent in Portuguese and English"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [
          "ISO"
        ],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Cybersecurity Analyst and how you navigated it?",
        "suggestedAction": "Send screening questionnaire",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Cybersecurity professional with experience in threat detection, GRC frameworks, and secure architecture\nassessments. Passionate about improving the security posture of large-scale enterprise systems a",
        "matchBreakdown": {
          "technical": 29,
          "experience": 8,
          "seniority": 3,
          "softSkills": 3,
          "certificationsToolsLanguages": 5,
          "growthPotential": 2
        }
      },
      {
        "id": "cand-64-3",
        "cvId": 64,
        "roleId": 3,
        "rank": 5,
        "name": "Miguel Santos",
        "currentRole": "IT Auditor",
        "location": "Braga, Portugal",
        "yearsExp": 0,
        "matchScore": 47,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "IT Audit methodologies (COBIT, ITIL)",
          "cv_64.md",
          "2025-05-02",
          "2 / 2",
          "Security frameworks (ISO 27001, NIST)",
          "SQL, Python (basic)",
          "Vulnerability assessment tools",
          "Portuguese (native), English (fluent)",
          "CISA certi"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [
          "CISA",
          "ITIL",
          "ISO"
        ],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as IT Auditor and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "IT Auditor with expertise in cybersecurity frameworks and compliance standards.",
        "matchBreakdown": {
          "technical": 29,
          "experience": 8,
          "seniority": 0,
          "softSkills": 3,
          "certificationsToolsLanguages": 5,
          "growthPotential": 2
        }
      },
      {
        "id": "cand-40-3",
        "cvId": 40,
        "roleId": 3,
        "rank": 6,
        "name": "Sofia Oliveira",
        "currentRole": "Head of Human Resources, Vodafone Portugal",
        "location": "Portugal",
        "yearsExp": 19,
        "matchScore": 46,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "Organizational Development & Change Management",
          "Talent Acquisition & Retention Strategies",
          "Employee Experience Design",
          "Performance Management Systems",
          "HR Analytics & Workforce Planning",
          "Native in Portugues"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "certifications": [
          "SHRM"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Adaptable background",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Head of Human Resources, Vodafone Portugal and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "HR executive with 19+ years of experience in talent management, organizational development, and employee\nexperience. Delivers results by translating business objectives into people-centered strategies",
        "matchBreakdown": {
          "technical": 0,
          "experience": 15,
          "seniority": 12,
          "softSkills": 12,
          "certificationsToolsLanguages": 5,
          "growthPotential": 2
        }
      },
      {
        "id": "cand-105-3",
        "cvId": 105,
        "roleId": 3,
        "rank": 7,
        "name": "Paulo Fonseca",
        "currentRole": "Audit Senior",
        "location": "Porto, Portugal",
        "yearsExp": 5,
        "matchScore": 46,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "External audit, Financial reporting",
          "IFRS, Portuguese GAAP",
          "Audit software, Excel (advanced)",
          "Portuguese (native), English (fluent), Spanish (basic)",
          "Member of the Portuguese Chartered Accountants Order"
        ],
        "languages": [
          "Portuguese",
          "English",
          "Spanish"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Audit Senior and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "",
        "matchBreakdown": {
          "technical": 6,
          "experience": 18,
          "seniority": 12,
          "softSkills": 5,
          "certificationsToolsLanguages": 5,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-32-3",
        "cvId": 32,
        "roleId": 3,
        "rank": 8,
        "name": "Tomás Santos",
        "currentRole": "Strategy Consultant",
        "location": "Lisbon, Portugal",
        "yearsExp": 6,
        "matchScore": 45,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "Strategy development, Business planning",
          "Financial modeling, Market analysis",
          "Project management, Team leadership",
          "Portuguese (native), English (fluent), French (professional)",
          "PowerPoint, Excel (advanced"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Strategy Consultant and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Strategy consultant with 6 years of experience in management consulting and corporate strategy. Strong track\nrecord of delivering high-impact projects for clients across financial services, telecommun",
        "matchBreakdown": {
          "technical": 3,
          "experience": 18,
          "seniority": 7,
          "softSkills": 9,
          "certificationsToolsLanguages": 5,
          "growthPotential": 3
        }
      },
      {
        "id": "cand-80-3",
        "cvId": 80,
        "roleId": 3,
        "rank": 9,
        "name": "Ricardo Moreira",
        "currentRole": "Director of Advanced Analytics, Bankinter Portugal",
        "location": "Portugal",
        "yearsExp": 20,
        "matchScore": 45,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "Data Governance & Regulatory Compliance",
          "Platforms: Azure Data Lake, SQL Server, Power BI, Purview",
          "Tools: PowerCenter, Microstrategy, SAP BI",
          "Data Modeling & KPI Design",
          "ricardo_moreira_cv_final.md",
          "2025-"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French",
          "Spanish"
        ],
        "certifications": [
          "Azure",
          "Microsoft"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Director of Advanced Analytics, Bankinter Portugal and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Director of Advanced Analytics with 20+ years of experience in data engineering, business intelligence, and AI\ngovernance. Delivers results by translating strategic goals into data-driven frameworks t",
        "matchBreakdown": {
          "technical": 0,
          "experience": 15,
          "seniority": 7,
          "softSkills": 15,
          "certificationsToolsLanguages": 5,
          "growthPotential": 3
        }
      },
      {
        "id": "cand-10-3",
        "cvId": 10,
        "roleId": 3,
        "rank": 10,
        "name": "Carlos Ferreira",
        "currentRole": "General Counsel, Jerónimo Martins Group",
        "location": "Portugal",
        "yearsExp": 23,
        "matchScore": 44,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "Corporate Governance & Compliance",
          "Mergers & Acquisitions",
          "Commercial Contract Negotiation",
          "Intellectual Property Protection",
          "Regulatory Affairs & Government Relations",
          "Native in Portuguese; fluent in Engl"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as General Counsel, Jerónimo Martins Group and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Legal executive with 23+ years of experience in corporate law, regulatory compliance, and international\nbusiness transactions. Delivers results by providing strategic legal guidance that balances risk",
        "matchBreakdown": {
          "technical": 6,
          "experience": 15,
          "seniority": 7,
          "softSkills": 8,
          "certificationsToolsLanguages": 5,
          "growthPotential": 3
        }
      }
    ]
  },
  {
    "id": "role-4",
    "roleId": 4,
    "title": "Financial Analyst",
    "department": "Finance",
    "location": "Lisbon, Portugal / Hybrid",
    "candidatesCount": 10,
    "topMatchScore": 83,
    "pipelineHealth": "Strong",
    "difficulty": "Easy",
    "candidates": [
      {
        "id": "cand-19-4",
        "cvId": 19,
        "roleId": 4,
        "rank": 1,
        "name": "Carolina Duarte",
        "currentRole": "Business Advisory Associate",
        "location": "Lisbon, Portugal",
        "yearsExp": 0,
        "matchScore": 83,
        "label": "Good Match",
        "recommendation": "Shortlist",
        "skills": [
          "Financial analysis, Financial modeling",
          "Excel (advanced), PowerPoint, Bloomberg Terminal",
          "Portuguese (native), English (fluent), German (intermediate)",
          "CFA Level I Candidate"
        ],
        "languages": [
          "Portuguese",
          "English",
          "German"
        ],
        "certifications": [
          "CFA"
        ],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Business Advisory Associate and how you navigated it?",
        "suggestedAction": "Fast-track to technical interview",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Recent graduate with a strong academic background in finance and accounting. Eager to leverage analytical\nskills and academic excellence in a Big4 advisory role.",
        "matchBreakdown": {
          "technical": 28,
          "experience": 20,
          "seniority": 15,
          "softSkills": 5,
          "certificationsToolsLanguages": 10,
          "growthPotential": 5
        }
      },
      {
        "id": "cand-11-4",
        "cvId": 11,
        "roleId": 4,
        "rank": 2,
        "name": "Pedro Ribeiro",
        "currentRole": "Financial Analyst",
        "location": "Coimbra, Portugal",
        "yearsExp": 3,
        "matchScore": 71,
        "label": "Good Match",
        "recommendation": "Hold",
        "skills": [
          "Financial modeling, Valuation",
          "Excel, PowerPoint, Bloomberg Terminal",
          "Portuguese (native), English (fluent)",
          "cv_11.md",
          "2025-05-02",
          "2 / 2",
          "Strong attention to detail"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Financial Analyst and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Financial Analyst with 3 years of experience in corporate finance and financial modeling. Strong background in\nvaluation, budgeting, and financial forecasting. Seeking to leverage analytical skills in",
        "matchBreakdown": {
          "technical": 16,
          "experience": 20,
          "seniority": 15,
          "softSkills": 8,
          "certificationsToolsLanguages": 10,
          "growthPotential": 2
        }
      },
      {
        "id": "cand-28-4",
        "cvId": 28,
        "roleId": 4,
        "rank": 3,
        "name": "Afonso Morais",
        "currentRole": "Deal Advisory Analyst",
        "location": "Lisbon, Portugal",
        "yearsExp": 3,
        "matchScore": 70,
        "label": "Good Match",
        "recommendation": "Hold",
        "skills": [
          "Financial due diligence, M&A advisory",
          "Valuation, Financial modeling",
          "Excel (advanced), PowerPoint, Bloomberg Terminal",
          "Portuguese (native), English (fluent), Spanish (intermediate)",
          "CFA Level II Candidat"
        ],
        "languages": [
          "Portuguese",
          "English",
          "Spanish"
        ],
        "certifications": [
          "CFA"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Deal Advisory Analyst and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Finance professional with 3 years of experience in deal advisory and corporate finance. Strong analytical skills\nwith expertise in valuation, financial modeling, and due diligence processes.",
        "matchBreakdown": {
          "technical": 14,
          "experience": 20,
          "seniority": 15,
          "softSkills": 9,
          "certificationsToolsLanguages": 10,
          "growthPotential": 2
        }
      },
      {
        "id": "cand-72-4",
        "cvId": 72,
        "roleId": 4,
        "rank": 4,
        "name": "Catarina Martins",
        "currentRole": "Transaction Advisory Associate",
        "location": "Lisbon, Portugal",
        "yearsExp": 0,
        "matchScore": 70,
        "label": "Good Match",
        "recommendation": "Hold",
        "skills": [
          "Financial modeling and valuation",
          "cv_72.md",
          "2025-05-02",
          "2 / 2",
          "Due diligence procedures",
          "M&A transaction processes",
          "Excel, PowerPoint, Capital IQ",
          "Portuguese (native), English (fluent), French (intermediate)"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "certifications": [
          "CFA"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Transaction Advisory Associate and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Finance professional with expertise in M&A transactions and financial due diligence.",
        "matchBreakdown": {
          "technical": 14,
          "experience": 20,
          "seniority": 15,
          "softSkills": 8,
          "certificationsToolsLanguages": 10,
          "growthPotential": 3
        }
      },
      {
        "id": "cand-12-4",
        "cvId": 12,
        "roleId": 4,
        "rank": 5,
        "name": "Ricardo Neves",
        "currentRole": "Financial Controller",
        "location": "Lisbon, Portugal",
        "yearsExp": 0,
        "matchScore": 69,
        "label": "Possible Match",
        "recommendation": "Hold",
        "skills": [
          "Financial reporting, Budgeting",
          "SAP FI/CO, Excel advanced",
          "US GAAP, IFRS",
          "cv_12.md",
          "2025-05-02",
          "2 / 2",
          "Portuguese (native), English (fluent)"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Relevant industry experience",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Financial Controller and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "",
        "matchBreakdown": {
          "technical": 24,
          "experience": 20,
          "seniority": 10,
          "softSkills": 0,
          "certificationsToolsLanguages": 10,
          "growthPotential": 5
        }
      },
      {
        "id": "cand-67-4",
        "cvId": 67,
        "roleId": 4,
        "rank": 6,
        "name": "João Oliveira",
        "currentRole": "Audit Associate",
        "location": "Faro, Portugal",
        "yearsExp": 0,
        "matchScore": 69,
        "label": "Possible Match",
        "recommendation": "Hold",
        "skills": [
          "Financial statement analysis",
          "cv_67.md",
          "2025-05-02",
          "2 / 2",
          "Audit procedures and methodologies",
          "Excel, SAP (basic), Audit software",
          "Portuguese (native), English (proficient)",
          "Detail-oriented with analytical m"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Audit Associate and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Recent accounting graduate with internship experience in financial audit. Strong foundation in accounting\nprinciples and audit methodologies. Eager to develop career in a Big4 firm with opportunities ",
        "matchBreakdown": {
          "technical": 7,
          "experience": 20,
          "seniority": 15,
          "softSkills": 12,
          "certificationsToolsLanguages": 10,
          "growthPotential": 5
        }
      },
      {
        "id": "cand-102-4",
        "cvId": 102,
        "roleId": 4,
        "rank": 7,
        "name": "Tiago Mendes",
        "currentRole": "Transaction Advisory Associate",
        "location": "Coimbra, Portugal",
        "yearsExp": 0,
        "matchScore": 66,
        "label": "Possible Match",
        "recommendation": "Hold",
        "skills": [
          "Financial modeling and valuation",
          "cv_80.md",
          "2025-05-02",
          "2 / 2",
          "M&A due diligence",
          "Capital markets and deal structuring",
          "Portuguese (native), English (fluent), Spanish (basic)",
          "Advanced Excel and PowerPoint"
        ],
        "languages": [
          "Portuguese",
          "English",
          "Spanish"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Transaction Advisory Associate and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Finance professional with experience in M&A due diligence, valuation, and financial modeling. Background in\ninvestment banking and corporate development. Seeking to leverage transaction advisory skill",
        "matchBreakdown": {
          "technical": 16,
          "experience": 20,
          "seniority": 15,
          "softSkills": 0,
          "certificationsToolsLanguages": 10,
          "growthPotential": 5
        }
      },
      {
        "id": "cand-24-4",
        "cvId": 24,
        "roleId": 4,
        "rank": 8,
        "name": "Daniel Fernandes",
        "currentRole": "Assurance Associate",
        "location": "Porto, Portugal",
        "yearsExp": 2,
        "matchScore": 65,
        "label": "Possible Match",
        "recommendation": "Hold",
        "skills": [
          "External audit, Financial reporting",
          "Portuguese accounting standards, IFRS",
          "Audit software, Excel (advanced)",
          "Portuguese (native), English (fluent)",
          "Member of the Portuguese Chamber of Certified Accountan"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Assurance Associate and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Audit professional with 2 years of experience in external audit and assurance services. Strong background in\nfinancial reporting and auditing procedures with expertise in manufacturing and retail sect",
        "matchBreakdown": {
          "technical": 12,
          "experience": 20,
          "seniority": 15,
          "softSkills": 5,
          "certificationsToolsLanguages": 10,
          "growthPotential": 3
        }
      },
      {
        "id": "cand-35-4",
        "cvId": 35,
        "roleId": 4,
        "rank": 9,
        "name": "João Silva",
        "currentRole": "Audit Associate",
        "location": "Porto, Portugal",
        "yearsExp": 2,
        "matchScore": 63,
        "label": "Possible Match",
        "recommendation": "Need More Info",
        "skills": [
          "IFRS, Portuguese GAAP",
          "Audit methodology and procedures",
          "cv_35.md",
          "2025-05-02",
          "2 / 2",
          "SAP, Excel, PowerPoint",
          "Portuguese (native), English (fluent), Spanish (intermediate)"
        ],
        "languages": [
          "Portuguese",
          "English",
          "Spanish"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Audit Associate and how you navigated it?",
        "suggestedAction": "Send screening questionnaire",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Detail-oriented accounting professional with 2 years of experience in external audit. Strong knowledge of IFRS\nand Portuguese accounting standards. Looking to grow in a challenging Big4 environment.",
        "matchBreakdown": {
          "technical": 7,
          "experience": 20,
          "seniority": 15,
          "softSkills": 8,
          "certificationsToolsLanguages": 10,
          "growthPotential": 3
        }
      },
      {
        "id": "cand-76-4",
        "cvId": 76,
        "roleId": 4,
        "rank": 10,
        "name": "Lucia Carvalho",
        "currentRole": "Actuarial Analyst",
        "location": "Lisbon, Portugal",
        "yearsExp": 0,
        "matchScore": 63,
        "label": "Possible Match",
        "recommendation": "Need More Info",
        "skills": [
          "Actuarial modeling and calculations",
          "cv_76.md",
          "2025-05-02",
          "2 / 2",
          "Statistical analysis and probability theory",
          "Excel, R, SAS, Prophet",
          "Solvency II requirements",
          "Portuguese (native), English (fluent)",
          "Pursuing"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Adaptable background",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Actuarial Analyst and how you navigated it?",
        "suggestedAction": "Send screening questionnaire",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Actuarial professional with experience in risk assessment and statistical modeling for insurance products.\nStrong mathematical and analytical skills with expertise in actuarial software and methodolog",
        "matchBreakdown": {
          "technical": 9,
          "experience": 15,
          "seniority": 15,
          "softSkills": 9,
          "certificationsToolsLanguages": 10,
          "growthPotential": 5
        }
      }
    ]
  },
  {
    "id": "role-5",
    "roleId": 5,
    "title": "Consultant, Forensic & Integrity Services",
    "department": "Forensic",
    "location": "Lisbon, Portugal / Hybrid",
    "candidatesCount": 10,
    "topMatchScore": 72,
    "pipelineHealth": "Moderate",
    "difficulty": "Medium",
    "candidates": [
      {
        "id": "cand-98-5",
        "cvId": 98,
        "roleId": 5,
        "rank": 1,
        "name": "Sofia Martins",
        "currentRole": "Forensic Accountant",
        "location": "Lisbon, Portugal",
        "yearsExp": 6,
        "matchScore": 72,
        "label": "Good Match",
        "recommendation": "Hold",
        "skills": [
          "Certified Fraud Examiner (CFE)",
          "cv_98.md",
          "2025-05-02",
          "2 / 2",
          "Anti-Money Laundering (AML) compliance",
          "Forensic data analytics (IDEA, ACL)",
          "Portuguese (native), English (fluent), French (intermediate)",
          "Investi"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "certifications": [
          "CFE"
        ],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Relevant industry experience",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Forensic Accountant and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Certified Fraud Examiner with 6 years of experience in fraud investigation, litigation support, and anti-money\nlaundering compliance. Background in both public accounting and law enforcement. Seeking ",
        "matchBreakdown": {
          "technical": 30,
          "experience": 19,
          "seniority": 5,
          "softSkills": 8,
          "certificationsToolsLanguages": 10,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-69-5",
        "cvId": 69,
        "roleId": 5,
        "rank": 2,
        "name": "Ricardo Mendes",
        "currentRole": "Forensic Accountant",
        "location": "Lisbon, Portugal",
        "yearsExp": 5,
        "matchScore": 69,
        "label": "Possible Match",
        "recommendation": "Hold",
        "skills": [
          "Fraud investigation techniques",
          "cv_69.md",
          "2025-05-02",
          "2 / 2",
          "Financial statement analysis",
          "Data analytics and forensic tools",
          "Expert witness testimony preparation",
          "Portuguese (native), English (fluent), Span"
        ],
        "languages": [
          "Portuguese",
          "English",
          "Spanish"
        ],
        "certifications": [
          "CFE"
        ],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Relevant industry experience",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Forensic Accountant and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Detail-oriented forensic accountant with 5 years of experience in fraud investigation and litigation support.\nExpert in financial data analysis and evidence gathering. Seeking to leverage investigativ",
        "matchBreakdown": {
          "technical": 30,
          "experience": 16,
          "seniority": 5,
          "softSkills": 8,
          "certificationsToolsLanguages": 10,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-43-5",
        "cvId": 43,
        "roleId": 5,
        "rank": 3,
        "name": "Beatriz Almeida",
        "currentRole": "Forensic Accountant",
        "location": "Lisbon, Portugal",
        "yearsExp": 5,
        "matchScore": 64,
        "label": "Possible Match",
        "recommendation": "Hold",
        "skills": [
          "Fraud investigation, Financial analysis",
          "Data analytics, IDEA, ACL",
          "Expert witness testimony",
          "Portuguese (native), English (fluent), French (intermediate)",
          "Certified Fraud Examiner (CFE)",
          "Chartered Account"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "certifications": [
          "CFE"
        ],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Relevant industry experience",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Forensic Accountant and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Forensic accounting professional with 5 years of experience in fraud investigation and litigation support.\nStrong analytical skills with expertise in financial statement analysis and fraud detection t",
        "matchBreakdown": {
          "technical": 26,
          "experience": 19,
          "seniority": 5,
          "softSkills": 4,
          "certificationsToolsLanguages": 10,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-30-5",
        "cvId": 30,
        "roleId": 5,
        "rank": 4,
        "name": "João Mendes",
        "currentRole": "Chief Financial Officer, Sonae MC",
        "location": "Portugal",
        "yearsExp": 24,
        "matchScore": 60,
        "label": "Possible Match",
        "recommendation": "Hold",
        "skills": [
          "Financial Strategy & Planning",
          "M&A Due Diligence & Integration",
          "Capital Structure Optimization",
          "Investor Relations & Financial Communication",
          "Risk Management & Compliance",
          "Native in Portuguese; fluent in E"
        ],
        "languages": [
          "Portuguese",
          "English",
          "German"
        ],
        "certifications": [
          "CFA"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Chief Financial Officer, Sonae MC and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Senior finance executive with 24+ years of experience in financial strategy, M&A, and treasury management.\nDelivers results by optimizing financial operations, implementing strategic planning framewor",
        "matchBreakdown": {
          "technical": 11,
          "experience": 20,
          "seniority": 8,
          "softSkills": 15,
          "certificationsToolsLanguages": 6,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-14-5",
        "cvId": 14,
        "roleId": 5,
        "rank": 5,
        "name": "Teresa Gonçalves",
        "currentRole": "Forensic Accountant",
        "location": "Porto, Portugal",
        "yearsExp": 6,
        "matchScore": 55,
        "label": "Possible Match",
        "recommendation": "Need More Info",
        "skills": [
          "Financial investigation, Fraud detection",
          "Asset tracing, Expert testimony",
          "IDEA, ACL, Excel advanced",
          "cv_14.md",
          "2025-05-02",
          "2 / 2",
          "Portuguese (native), English (fluent)"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Relevant industry experience",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Forensic Accountant and how you navigated it?",
        "suggestedAction": "Send screening questionnaire",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Forensic Accountant with 6+ years of experience investigating financial fraud and conducting litigation\nsupport. Skilled in analyzing complex financial data and preparing expert reports for legal proc",
        "matchBreakdown": {
          "technical": 25,
          "experience": 19,
          "seniority": 5,
          "softSkills": 0,
          "certificationsToolsLanguages": 6,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-57-5",
        "cvId": 57,
        "roleId": 5,
        "rank": 6,
        "name": "Marco Silva",
        "currentRole": "Financial Crime Specialist",
        "location": "Lisbon, Portugal",
        "yearsExp": 4,
        "matchScore": 55,
        "label": "Possible Match",
        "recommendation": "Need More Info",
        "skills": [
          "AML/CFT regulations and best practices",
          "cv_57.md",
          "2025-05-02",
          "2 / 2",
          "Financial investigation techniques",
          "Transaction monitoring systems",
          "Compliance case management software",
          "Portuguese (native), English (flu"
        ],
        "languages": [
          "Portuguese",
          "English",
          "Spanish"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Strong technical skills",
          "Adaptable background",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Financial Crime Specialist and how you navigated it?",
        "suggestedAction": "Send screening questionnaire",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Compliance professional with 4 years of experience in financial crime prevention and anti-money laundering.\nExpertise in developing and implementing AML/CFT programs and conducting financial investiga",
        "matchBreakdown": {
          "technical": 30,
          "experience": 12,
          "seniority": 3,
          "softSkills": 4,
          "certificationsToolsLanguages": 6,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-80-5",
        "cvId": 80,
        "roleId": 5,
        "rank": 7,
        "name": "Ricardo Moreira",
        "currentRole": "Director of Advanced Analytics, Bankinter Portugal",
        "location": "Portugal",
        "yearsExp": 20,
        "matchScore": 53,
        "label": "Weak Match",
        "recommendation": "Hold",
        "skills": [
          "Data Governance & Regulatory Compliance",
          "Platforms: Azure Data Lake, SQL Server, Power BI, Purview",
          "Tools: PowerCenter, Microstrategy, SAP BI",
          "Data Modeling & KPI Design",
          "ricardo_moreira_cv_final.md",
          "2025-"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French",
          "Spanish"
        ],
        "certifications": [
          "Azure",
          "Microsoft"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Growth potential"
        ],
        "risks": [
          "Lacks some desired certifications",
          "Communication style needs verification"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Director of Advanced Analytics, Bankinter Portugal and how you navigated it?",
        "suggestedAction": "Keep in pipeline",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Director of Advanced Analytics with 20+ years of experience in data engineering, business intelligence, and AI\ngovernance. Delivers results by translating strategic goals into data-driven frameworks t",
        "matchBreakdown": {
          "technical": 7,
          "experience": 20,
          "seniority": 8,
          "softSkills": 11,
          "certificationsToolsLanguages": 4,
          "growthPotential": 3
        }
      },
      {
        "id": "cand-10-5",
        "cvId": 10,
        "roleId": 5,
        "rank": 8,
        "name": "Carlos Ferreira",
        "currentRole": "General Counsel, Jerónimo Martins Group",
        "location": "Portugal",
        "yearsExp": 23,
        "matchScore": 52,
        "label": "Weak Match",
        "recommendation": "Need More Info",
        "skills": [
          "Corporate Governance & Compliance",
          "Mergers & Acquisitions",
          "Commercial Contract Negotiation",
          "Intellectual Property Protection",
          "Regulatory Affairs & Government Relations",
          "Native in Portuguese; fluent in Engl"
        ],
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "certifications": [],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Growth potential"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as General Counsel, Jerónimo Martins Group and how you navigated it?",
        "suggestedAction": "Send screening questionnaire",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Legal executive with 23+ years of experience in corporate law, regulatory compliance, and international\nbusiness transactions. Delivers results by providing strategic legal guidance that balances risk",
        "matchBreakdown": {
          "technical": 14,
          "experience": 17,
          "seniority": 8,
          "softSkills": 4,
          "certificationsToolsLanguages": 6,
          "growthPotential": 3
        }
      },
      {
        "id": "cand-49-5",
        "cvId": 49,
        "roleId": 5,
        "rank": 9,
        "name": "Clara Ferreira",
        "currentRole": "IFRS Reporting Specialist",
        "location": "Braga, Portugal",
        "yearsExp": 7,
        "matchScore": 48,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "IFRS technical knowledge",
          "Consolidation procedures",
          "Financial statement preparation",
          "SAP, Excel, accounting software",
          "Portuguese (native), English (fluent)",
          "CPA certification"
        ],
        "languages": [
          "Portuguese",
          "English"
        ],
        "certifications": [
          "CPA"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as IFRS Reporting Specialist and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "Accounting professional with 7 years of experience in financial reporting and IFRS implementation. Strong\nexpertise in technical accounting matters and complex financial instruments. Seeking to levera",
        "matchBreakdown": {
          "technical": 4,
          "experience": 23,
          "seniority": 11,
          "softSkills": 0,
          "certificationsToolsLanguages": 10,
          "growthPotential": 0
        }
      },
      {
        "id": "cand-103-5",
        "cvId": 103,
        "roleId": 5,
        "rank": 10,
        "name": "Tiago Ramos",
        "currentRole": "Audit Manager",
        "location": "Porto, Portugal",
        "yearsExp": 8,
        "matchScore": 47,
        "label": "Weak Match",
        "recommendation": "Reject",
        "skills": [
          "IFRS, GAAP, SAP",
          "Caseware, Audit Command Language (ACL)",
          "cv_10.md",
          "2025-05-02",
          "2 / 2",
          "Risk assessment and internal control testing",
          "Portuguese CPA (ROC) license",
          "Fluent in Portuguese, English, and Spanish"
        ],
        "languages": [
          "Portuguese",
          "English",
          "Spanish"
        ],
        "certifications": [
          "CPA"
        ],
        "reasonsToSwipeRight": [
          "Good foundational knowledge",
          "Relevant industry experience",
          "Senior level expertise"
        ],
        "risks": [
          "May need tool-specific training",
          "Leadership skills not fully demonstrated"
        ],
        "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Audit Manager and how you navigated it?",
        "suggestedAction": "Send polite rejection",
        "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
        "summary": "CPA-certified Audit Manager with 8+ years of experience auditing clients in financial services, insurance, and\nmanufacturing.",
        "matchBreakdown": {
          "technical": 4,
          "experience": 20,
          "seniority": 13,
          "softSkills": 0,
          "certificationsToolsLanguages": 10,
          "growthPotential": 0
        }
      }
    ]
  }
];

export const allCandidates: Candidate[] = [
  {
    "id": "cand-80-1",
    "cvId": 80,
    "roleId": 1,
    "rank": 1,
    "name": "Ricardo Moreira",
    "currentRole": "Director of Advanced Analytics, Bankinter Portugal",
    "location": "Portugal",
    "yearsExp": 20,
    "matchScore": 84,
    "label": "Good Match",
    "recommendation": "Shortlist",
    "skills": [
      "Data Governance & Regulatory Compliance",
      "Platforms: Azure Data Lake, SQL Server, Power BI, Purview",
      "Tools: PowerCenter, Microstrategy, SAP BI",
      "Data Modeling & KPI Design",
      "ricardo_moreira_cv_final.md",
      "2025-"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French",
      "Spanish"
    ],
    "certifications": [
      "Azure",
      "Microsoft"
    ],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Director of Advanced Analytics, Bankinter Portugal and how you navigated it?",
    "suggestedAction": "Fast-track to technical interview",
    "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
    "summary": "Director of Advanced Analytics with 20+ years of experience in data engineering, business intelligence, and AI\ngovernance. Delivers results by translating strategic goals into data-driven frameworks t",
    "matchBreakdown": {
      "technical": 30,
      "experience": 17,
      "seniority": 15,
      "softSkills": 12,
      "certificationsToolsLanguages": 7,
      "growthPotential": 3
    }
  },
  {
    "id": "cand-40-1",
    "cvId": 40,
    "roleId": 1,
    "rank": 2,
    "name": "Sofia Oliveira",
    "currentRole": "Head of Human Resources, Vodafone Portugal",
    "location": "Portugal",
    "yearsExp": 19,
    "matchScore": 57,
    "label": "Possible Match",
    "recommendation": "Hold",
    "skills": [
      "Organizational Development & Change Management",
      "Talent Acquisition & Retention Strategies",
      "Employee Experience Design",
      "Performance Management Systems",
      "HR Analytics & Workforce Planning",
      "Native in Portugues"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French"
    ],
    "certifications": [
      "SHRM"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "Lacks some desired certifications",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Head of Human Resources, Vodafone Portugal and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
    "summary": "HR executive with 19+ years of experience in talent management, organizational development, and employee\nexperience. Delivers results by translating business objectives into people-centered strategies",
    "matchBreakdown": {
      "technical": 6,
      "experience": 20,
      "seniority": 15,
      "softSkills": 12,
      "certificationsToolsLanguages": 4,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-30-1",
    "cvId": 30,
    "roleId": 1,
    "rank": 3,
    "name": "João Mendes",
    "currentRole": "Chief Financial Officer, Sonae MC",
    "location": "Portugal",
    "yearsExp": 24,
    "matchScore": 54,
    "label": "Weak Match",
    "recommendation": "Hold",
    "skills": [
      "Financial Strategy & Planning",
      "M&A Due Diligence & Integration",
      "Capital Structure Optimization",
      "Investor Relations & Financial Communication",
      "Risk Management & Compliance",
      "Native in Portuguese; fluent in E"
    ],
    "languages": [
      "Portuguese",
      "English",
      "German"
    ],
    "certifications": [
      "CFA"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Chief Financial Officer, Sonae MC and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
    "summary": "Senior finance executive with 24+ years of experience in financial strategy, M&A, and treasury management.\nDelivers results by optimizing financial operations, implementing strategic planning framewor",
    "matchBreakdown": {
      "technical": 0,
      "experience": 17,
      "seniority": 15,
      "softSkills": 12,
      "certificationsToolsLanguages": 7,
      "growthPotential": 3
    }
  },
  {
    "id": "cand-50-1",
    "cvId": 50,
    "roleId": 1,
    "rank": 4,
    "name": "Ana Gomes",
    "currentRole": "Chief Marketing Officer, Puma Iberia",
    "location": "Portugal",
    "yearsExp": 22,
    "matchScore": 53.1,
    "label": "Weak Match",
    "recommendation": "Hold",
    "skills": [
      "Brand Strategy & Positioning",
      "Integrated Marketing Campaigns",
      "Digital Marketing & Social Media",
      "Customer Journey Mapping",
      "Marketing Analytics & ROI Measurement",
      "Native in Portuguese; fluent in English and"
    ],
    "languages": [
      "Portuguese",
      "English",
      "Spanish"
    ],
    "certifications": [
      "Google",
      "Salesforce"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "Lacks some desired certifications",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Chief Marketing Officer, Puma Iberia and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
    "summary": "Senior marketing executive with 22+ years of experience across digital marketing, brand strategy, and\ncustomer experience. Proven track record in developing integrated marketing campaigns, managing gl",
    "matchBreakdown": {
      "technical": 5.142857142857143,
      "experience": 17,
      "seniority": 15,
      "softSkills": 12,
      "certificationsToolsLanguages": 4,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-20-1",
    "cvId": 20,
    "roleId": 1,
    "rank": 5,
    "name": "Pedro Almeida",
    "currentRole": "Chief Operations Officer, TAP Air Portugal",
    "location": "Portugal",
    "yearsExp": 21,
    "matchScore": 51.4,
    "label": "Weak Match",
    "recommendation": "Hold",
    "skills": [
      "Supply Chain Optimization & Network Design",
      "Lean Manufacturing & Six Sigma",
      "S&OP & Integrated Business Planning",
      "Operational Excellence & Continuous Improvement",
      "Digital Operations Transformation",
      "Native i"
    ],
    "languages": [
      "Portuguese",
      "English",
      "Spanish"
    ],
    "certifications": [
      "Lean Six Sigma",
      "CSCP",
      "APICS"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Chief Operations Officer, TAP Air Portugal and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
    "summary": "Operations executive with 21+ years of experience in supply chain management, process optimization, and\noperational excellence. Delivers results by implementing lean methodologies, digital transformat",
    "matchBreakdown": {
      "technical": 3.4285714285714284,
      "experience": 17,
      "seniority": 15,
      "softSkills": 9,
      "certificationsToolsLanguages": 7,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-7-1",
    "cvId": 7,
    "roleId": 1,
    "rank": 6,
    "name": "Maria Ferreira",
    "currentRole": "Senior Data Analyst",
    "location": "Lisbon, Portugal",
    "yearsExp": 6,
    "matchScore": 45.6,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "cv_7.md",
      "2025-05-02",
      "2 / 2",
      "Python, SQL, R, Power BI",
      "Machine Learning (Scikit-learn, XGBoost)",
      "ETL and data modeling",
      "Financial reporting knowledge",
      "Fluent in Portuguese and English"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Senior Data Analyst and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
    "summary": "Senior Data Analyst with over 6 years of experience in advanced analytics, data visualization, and business\nintelligence. Proven ability to translate complex data into actionable insights for decision",
    "matchBreakdown": {
      "technical": 14.571428571428571,
      "experience": 6,
      "seniority": 4,
      "softSkills": 11,
      "certificationsToolsLanguages": 7,
      "growthPotential": 3
    }
  },
  {
    "id": "cand-10-1",
    "cvId": 10,
    "roleId": 1,
    "rank": 7,
    "name": "Carlos Ferreira",
    "currentRole": "General Counsel, Jerónimo Martins Group",
    "location": "Portugal",
    "yearsExp": 23,
    "matchScore": 42.4,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "Corporate Governance & Compliance",
      "Mergers & Acquisitions",
      "Commercial Contract Negotiation",
      "Intellectual Property Protection",
      "Regulatory Affairs & Government Relations",
      "Native in Portuguese; fluent in Engl"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "Lacks some desired certifications",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as General Counsel, Jerónimo Martins Group and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
    "summary": "Legal executive with 23+ years of experience in corporate law, regulatory compliance, and international\nbusiness transactions. Delivers results by providing strategic legal guidance that balances risk",
    "matchBreakdown": {
      "technical": 3.4285714285714284,
      "experience": 12,
      "seniority": 8,
      "softSkills": 12,
      "certificationsToolsLanguages": 4,
      "growthPotential": 3
    }
  },
  {
    "id": "cand-26-1",
    "cvId": 26,
    "roleId": 1,
    "rank": 8,
    "name": "Rodrigo Alves",
    "currentRole": "Technology Consulting Manager",
    "location": "Lisbon, Portugal",
    "yearsExp": 8,
    "matchScore": 41,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "Digital transformation, IT strategy",
      "Project management, Agile methodologies",
      "Cloud computing, System integration",
      "Portuguese (native), English (fluent)",
      "PMP, ITIL v4 certified"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [
      "PMP",
      "ITIL"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Technology Consulting Manager and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
    "summary": "Technology consultant with 8 years of experience in digital transformation and IT strategy. Strong track record\nin delivering complex technology projects for financial services and retail clients.",
    "matchBreakdown": {
      "technical": 6,
      "experience": 13,
      "seniority": 4,
      "softSkills": 8,
      "certificationsToolsLanguages": 10,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-25-1",
    "cvId": 25,
    "roleId": 1,
    "rank": 9,
    "name": "Filipa Santos",
    "currentRole": "Wine Producer & Viticulturist",
    "location": "Douro Valley, Portugal",
    "yearsExp": 15,
    "matchScore": 32,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "Viticulture, Winemaking",
      "Wine blending, Sensory analysis",
      "Sustainable vineyard management",
      "Portuguese (native), English (fluent), French (intermediate)",
      "Wine export regulations",
      "Wine competition judge"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Wine Producer & Viticulturist and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
    "summary": "Passionate winemaker with 15 years of experience in viticulture and wine production. Expert in traditional\nPortuguese grape varieties and production methods, with special focus on Douro Valley wines.",
    "matchBreakdown": {
      "technical": 0,
      "experience": 12,
      "seniority": 8,
      "softSkills": 5,
      "certificationsToolsLanguages": 7,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-59-1",
    "cvId": 59,
    "roleId": 1,
    "rank": 10,
    "name": "Raquel Pereira",
    "currentRole": "Project Management Consultant",
    "location": "Braga, Portugal",
    "yearsExp": 5,
    "matchScore": 31.4,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "Project management methodologies (PMP, Agile, PRINCE2)",
      "cv_59.md",
      "2025-05-02",
      "2 / 2",
      "Stakeholder management and communication",
      "MS Project, Jira, Trello",
      "Change management frameworks",
      "Portuguese (native), Eng"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [
      "PMP"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Project Management Consultant and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on AI innovation during the interview.",
    "summary": "Project management professional with 5 years of experience in leading complex business transformation\ninitiatives. Expertise in agile methodologies and change management. Strong leadership skills with",
    "matchBreakdown": {
      "technical": 3.4285714285714284,
      "experience": 3,
      "seniority": 0,
      "softSkills": 15,
      "certificationsToolsLanguages": 10,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-39-2",
    "cvId": 39,
    "roleId": 2,
    "rank": 1,
    "name": "Carlos Oliveira",
    "currentRole": "Risk Advisory Consultant",
    "location": "Lisbon, Portugal",
    "yearsExp": 5,
    "matchScore": 66,
    "label": "Possible Match",
    "recommendation": "Hold",
    "skills": [
      "Risk assessment and management",
      "Basel III, GDPR, AML compliance",
      "SAS, R, Excel (advanced)",
      "Portuguese (native), English (fluent), French (intermediate)",
      "FRM (Financial Risk Manager) certification"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Risk Advisory Consultant and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Risk management professional with 5 years of experience in financial risk, compliance, and internal controls.\nStrong expertise in regulatory frameworks including Basel III, GDPR, and AML directives.",
    "matchBreakdown": {
      "technical": 20,
      "experience": 23,
      "seniority": 11,
      "softSkills": 4,
      "certificationsToolsLanguages": 6,
      "growthPotential": 2
    }
  },
  {
    "id": "cand-101-2",
    "cvId": 101,
    "roleId": 2,
    "rank": 2,
    "name": "Diogo Pinto",
    "currentRole": "Technology Risk Consultant",
    "location": "Lisbon, Portugal",
    "yearsExp": 0,
    "matchScore": 61,
    "label": "Possible Match",
    "recommendation": "Need More Info",
    "skills": [
      "CISA, CRISC certifications",
      "cv_90.md",
      "2025-05-02",
      "2 / 2",
      "IT governance frameworks (COBIT, ITIL)",
      "Cybersecurity and data privacy compliance",
      "Portuguese (native), English (fluent)",
      "Strong analytical and commun"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [
      "CISA",
      "ITIL",
      "ISO"
    ],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Technology Risk Consultant and how you navigated it?",
    "suggestedAction": "Send screening questionnaire",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "IT professional specialized in technology risk management, IT audit, and cybersecurity compliance. CISA\ncertified with experience in financial services and telecommunications industries. Looking to jo",
    "matchBreakdown": {
      "technical": 30,
      "experience": 8,
      "seniority": 3,
      "softSkills": 8,
      "certificationsToolsLanguages": 10,
      "growthPotential": 2
    }
  },
  {
    "id": "cand-70-2",
    "cvId": 70,
    "roleId": 2,
    "rank": 3,
    "name": "André Sousa",
    "currentRole": "Technology Risk Consultant",
    "location": "Lisbon, Portugal",
    "yearsExp": 0,
    "matchScore": 56,
    "label": "Possible Match",
    "recommendation": "Need More Info",
    "skills": [
      "IT risk assessment methodologies",
      "cv_70.md",
      "2025-05-02",
      "2 / 2",
      "Security frameworks (ISO 27001, NIST, CIS)",
      "Vulnerability assessment tools",
      "Cloud security (AWS, Azure)",
      "Portuguese (native), English (fluent)",
      "C"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [
      "CISSP",
      "CISM",
      "AWS",
      "Azure",
      "ISO"
    ],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Technology Risk Consultant and how you navigated it?",
    "suggestedAction": "Send screening questionnaire",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Technology risk professional with strong background in cybersecurity and IT governance.",
    "matchBreakdown": {
      "technical": 26,
      "experience": 11,
      "seniority": 3,
      "softSkills": 4,
      "certificationsToolsLanguages": 10,
      "growthPotential": 2
    }
  },
  {
    "id": "cand-105-2",
    "cvId": 105,
    "roleId": 2,
    "rank": 4,
    "name": "Paulo Fonseca",
    "currentRole": "Audit Senior",
    "location": "Porto, Portugal",
    "yearsExp": 5,
    "matchScore": 55,
    "label": "Possible Match",
    "recommendation": "Need More Info",
    "skills": [
      "External audit, Financial reporting",
      "IFRS, Portuguese GAAP",
      "Audit software, Excel (advanced)",
      "Portuguese (native), English (fluent), Spanish (basic)",
      "Member of the Portuguese Chartered Accountants Order"
    ],
    "languages": [
      "Portuguese",
      "English",
      "Spanish"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Adaptable background",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Audit Senior and how you navigated it?",
    "suggestedAction": "Send screening questionnaire",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "",
    "matchBreakdown": {
      "technical": 8,
      "experience": 15,
      "seniority": 13,
      "softSkills": 11,
      "certificationsToolsLanguages": 6,
      "growthPotential": 2
    }
  },
  {
    "id": "cand-16-2",
    "cvId": 16,
    "roleId": 2,
    "rank": 5,
    "name": "Manuel Torres",
    "currentRole": "Cybersecurity Consultant",
    "location": "Porto, Portugal",
    "yearsExp": 6,
    "matchScore": 54,
    "label": "Weak Match",
    "recommendation": "Hold",
    "skills": [
      "Penetration testing, Vulnerability assessment",
      "Security architecture, Risk management",
      "NIST, ISO 27001, GDPR compliance",
      "Portuguese (native), English (fluent)",
      "CISSP, CEH certifications",
      "Python, Metasploit"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [
      "CISSP",
      "CEH",
      "ISO"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Cybersecurity Consultant and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Cybersecurity professional with 6 years of experience in information security, vulnerability assessment, and\npenetration testing. Strong technical skills with expertise in security architecture and co",
    "matchBreakdown": {
      "technical": 11,
      "experience": 18,
      "seniority": 11,
      "softSkills": 4,
      "certificationsToolsLanguages": 10,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-4-2",
    "cvId": 4,
    "roleId": 2,
    "rank": 6,
    "name": "Inês Carvalho",
    "currentRole": "Senior Auditor",
    "location": "Porto, Portugal",
    "yearsExp": 5,
    "matchScore": 50,
    "label": "Weak Match",
    "recommendation": "Need More Info",
    "skills": [
      "IFRS, GAAP, SAP",
      "Audit methodologies and compliance",
      "cv_4.md",
      "2025-05-02",
      "2 / 2",
      "Caseware, Excel advanced",
      "Fluent in English and Portuguese"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Adaptable background",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Senior Auditor and how you navigated it?",
    "suggestedAction": "Send screening questionnaire",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Senior Auditor with 5+ years of experience leading financial audits across the healthcare, tech, and retail\nsectors. Strong knowledge of IFRS, Portuguese GAAP, and internal controls. Adept at managing",
    "matchBreakdown": {
      "technical": 7,
      "experience": 15,
      "seniority": 13,
      "softSkills": 7,
      "certificationsToolsLanguages": 6,
      "growthPotential": 2
    }
  },
  {
    "id": "cand-32-2",
    "cvId": 32,
    "roleId": 2,
    "rank": 7,
    "name": "Tomás Santos",
    "currentRole": "Strategy Consultant",
    "location": "Lisbon, Portugal",
    "yearsExp": 6,
    "matchScore": 49,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "Strategy development, Business planning",
      "Financial modeling, Market analysis",
      "Project management, Team leadership",
      "Portuguese (native), English (fluent), French (professional)",
      "PowerPoint, Excel (advanced"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Strategy Consultant and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Strategy consultant with 6 years of experience in management consulting and corporate strategy. Strong track\nrecord of delivering high-impact projects for clients across financial services, telecommun",
    "matchBreakdown": {
      "technical": 0,
      "experience": 18,
      "seniority": 11,
      "softSkills": 11,
      "certificationsToolsLanguages": 6,
      "growthPotential": 3
    }
  },
  {
    "id": "cand-54-2",
    "cvId": 54,
    "roleId": 2,
    "rank": 8,
    "name": "Daniel Gomes",
    "currentRole": "Internal Audit Specialist",
    "location": "Lisbon, Portugal",
    "yearsExp": 6,
    "matchScore": 49,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "Internal audit methodologies",
      "Risk assessment and control evaluation",
      "IIA standards and COSO framework",
      "Audit management software",
      "Portuguese (native), English (fluent)",
      "CIA (Certified Internal Auditor)"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [
      "CIA"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Internal Audit Specialist and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Internal audit professional with 6 years of experience in risk assessment, control evaluation, and compliance\ntesting. Strong knowledge of internal audit methodologies and international standards. See",
    "matchBreakdown": {
      "technical": 11,
      "experience": 20,
      "seniority": 8,
      "softSkills": 4,
      "certificationsToolsLanguages": 6,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-15-2",
    "cvId": 15,
    "roleId": 2,
    "rank": 9,
    "name": "Rita Sousa",
    "currentRole": "Financial Advisory Consultant",
    "location": "Lisbon, Portugal",
    "yearsExp": 4,
    "matchScore": 48,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "Financial modeling, Business valuation",
      "Due diligence, M&A advisory",
      "Excel (advanced), PowerPoint, Bloomberg Terminal",
      "Portuguese (native), English (fluent), Spanish (intermediate)",
      "CFA Level II Candidate"
    ],
    "languages": [
      "Portuguese",
      "English",
      "Spanish"
    ],
    "certifications": [
      "CFA"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Financial Advisory Consultant and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Financial advisory professional with 4 years of experience in M&A transactions, business valuation, and\ncorporate restructuring. Strong analytical skills with expertise in financial modeling and due d",
    "matchBreakdown": {
      "technical": 0,
      "experience": 18,
      "seniority": 11,
      "softSkills": 11,
      "certificationsToolsLanguages": 6,
      "growthPotential": 2
    }
  },
  {
    "id": "cand-17-2",
    "cvId": 17,
    "roleId": 2,
    "rank": 10,
    "name": "Luísa Pereira",
    "currentRole": "ESG Consultant",
    "location": "Lisbon, Portugal",
    "yearsExp": 5,
    "matchScore": 48,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "ESG reporting, Sustainable finance",
      "GRI, SASB, TCFD frameworks",
      "Carbon accounting, Climate risk assessment",
      "Portuguese (native), English (fluent), French (intermediate)",
      "GRI certified sustainability profe"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as ESG Consultant and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Sustainability professional with 5 years of experience in ESG reporting, sustainable finance, and corporate\nsocial responsibility. Expertise in ESG frameworks and sustainable business strategies.",
    "matchBreakdown": {
      "technical": 4,
      "experience": 18,
      "seniority": 11,
      "softSkills": 4,
      "certificationsToolsLanguages": 6,
      "growthPotential": 5
    }
  },
  {
    "id": "cand-16-3",
    "cvId": 16,
    "roleId": 3,
    "rank": 1,
    "name": "Manuel Torres",
    "currentRole": "Cybersecurity Consultant",
    "location": "Porto, Portugal",
    "yearsExp": 6,
    "matchScore": 65,
    "label": "Possible Match",
    "recommendation": "Hold",
    "skills": [
      "Penetration testing, Vulnerability assessment",
      "Security architecture, Risk management",
      "NIST, ISO 27001, GDPR compliance",
      "Portuguese (native), English (fluent)",
      "CISSP, CEH certifications",
      "Python, Metasploit"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [
      "CISSP",
      "CEH",
      "ISO"
    ],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Relevant industry experience",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Cybersecurity Consultant and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Cybersecurity professional with 6 years of experience in information security, vulnerability assessment, and\npenetration testing. Strong technical skills with expertise in security architecture and co",
    "matchBreakdown": {
      "technical": 23,
      "experience": 20,
      "seniority": 7,
      "softSkills": 3,
      "certificationsToolsLanguages": 10,
      "growthPotential": 2
    }
  },
  {
    "id": "cand-100-3",
    "cvId": 100,
    "roleId": 3,
    "rank": 2,
    "name": "Bruno Rodrigues",
    "currentRole": "Cybersecurity Specialist",
    "location": "Faro, Portugal",
    "yearsExp": 0,
    "matchScore": 64,
    "label": "Possible Match",
    "recommendation": "Need More Info",
    "skills": [
      "CISSP, CEH certifications",
      "cv_100.md",
      "2025-05-02",
      "2 / 2",
      "Vulnerability assessment and penetration testing",
      "Security frameworks (NIST, ISO 27001)",
      "Portuguese (native), English (fluent)",
      "Strong technical docum"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [
      "CISSP",
      "CEH",
      "ISO"
    ],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Cybersecurity Specialist and how you navigated it?",
    "suggestedAction": "Send screening questionnaire",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Information security professional with expertise in vulnerability assessment, penetration testing, and security\narchitecture. CISSP certified with experience in financial and healthcare sectors. Looki",
    "matchBreakdown": {
      "technical": 30,
      "experience": 11,
      "seniority": 3,
      "softSkills": 8,
      "certificationsToolsLanguages": 10,
      "growthPotential": 2
    }
  },
  {
    "id": "cand-70-3",
    "cvId": 70,
    "roleId": 3,
    "rank": 3,
    "name": "André Sousa",
    "currentRole": "Technology Risk Consultant",
    "location": "Lisbon, Portugal",
    "yearsExp": 0,
    "matchScore": 53,
    "label": "Weak Match",
    "recommendation": "Need More Info",
    "skills": [
      "IT risk assessment methodologies",
      "cv_70.md",
      "2025-05-02",
      "2 / 2",
      "Security frameworks (ISO 27001, NIST, CIS)",
      "Vulnerability assessment tools",
      "Cloud security (AWS, Azure)",
      "Portuguese (native), English (fluent)",
      "C"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [
      "CISSP",
      "CISM",
      "AWS",
      "Azure",
      "ISO"
    ],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Technology Risk Consultant and how you navigated it?",
    "suggestedAction": "Send screening questionnaire",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Technology risk professional with strong background in cybersecurity and IT governance.",
    "matchBreakdown": {
      "technical": 30,
      "experience": 8,
      "seniority": 0,
      "softSkills": 5,
      "certificationsToolsLanguages": 10,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-9-3",
    "cvId": 9,
    "roleId": 3,
    "rank": 4,
    "name": "Sofia Carvalho",
    "currentRole": "Cybersecurity Analyst",
    "location": "Braga, Portugal",
    "yearsExp": 0,
    "matchScore": 50,
    "label": "Weak Match",
    "recommendation": "Need More Info",
    "skills": [
      "NIST, ISO 27001, GDPR",
      "Kali Linux, Wireshark, Splunk",
      "cv_9.md",
      "2025-05-02",
      "2 / 2",
      "Python, Bash scripting",
      "Fluent in Portuguese and English"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [
      "ISO"
    ],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Cybersecurity Analyst and how you navigated it?",
    "suggestedAction": "Send screening questionnaire",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Cybersecurity professional with experience in threat detection, GRC frameworks, and secure architecture\nassessments. Passionate about improving the security posture of large-scale enterprise systems a",
    "matchBreakdown": {
      "technical": 29,
      "experience": 8,
      "seniority": 3,
      "softSkills": 3,
      "certificationsToolsLanguages": 5,
      "growthPotential": 2
    }
  },
  {
    "id": "cand-64-3",
    "cvId": 64,
    "roleId": 3,
    "rank": 5,
    "name": "Miguel Santos",
    "currentRole": "IT Auditor",
    "location": "Braga, Portugal",
    "yearsExp": 0,
    "matchScore": 47,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "IT Audit methodologies (COBIT, ITIL)",
      "cv_64.md",
      "2025-05-02",
      "2 / 2",
      "Security frameworks (ISO 27001, NIST)",
      "SQL, Python (basic)",
      "Vulnerability assessment tools",
      "Portuguese (native), English (fluent)",
      "CISA certi"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [
      "CISA",
      "ITIL",
      "ISO"
    ],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as IT Auditor and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "IT Auditor with expertise in cybersecurity frameworks and compliance standards.",
    "matchBreakdown": {
      "technical": 29,
      "experience": 8,
      "seniority": 0,
      "softSkills": 3,
      "certificationsToolsLanguages": 5,
      "growthPotential": 2
    }
  },
  {
    "id": "cand-40-3",
    "cvId": 40,
    "roleId": 3,
    "rank": 6,
    "name": "Sofia Oliveira",
    "currentRole": "Head of Human Resources, Vodafone Portugal",
    "location": "Portugal",
    "yearsExp": 19,
    "matchScore": 46,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "Organizational Development & Change Management",
      "Talent Acquisition & Retention Strategies",
      "Employee Experience Design",
      "Performance Management Systems",
      "HR Analytics & Workforce Planning",
      "Native in Portugues"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French"
    ],
    "certifications": [
      "SHRM"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Adaptable background",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Head of Human Resources, Vodafone Portugal and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "HR executive with 19+ years of experience in talent management, organizational development, and employee\nexperience. Delivers results by translating business objectives into people-centered strategies",
    "matchBreakdown": {
      "technical": 0,
      "experience": 15,
      "seniority": 12,
      "softSkills": 12,
      "certificationsToolsLanguages": 5,
      "growthPotential": 2
    }
  },
  {
    "id": "cand-105-3",
    "cvId": 105,
    "roleId": 3,
    "rank": 7,
    "name": "Paulo Fonseca",
    "currentRole": "Audit Senior",
    "location": "Porto, Portugal",
    "yearsExp": 5,
    "matchScore": 46,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "External audit, Financial reporting",
      "IFRS, Portuguese GAAP",
      "Audit software, Excel (advanced)",
      "Portuguese (native), English (fluent), Spanish (basic)",
      "Member of the Portuguese Chartered Accountants Order"
    ],
    "languages": [
      "Portuguese",
      "English",
      "Spanish"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Audit Senior and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "",
    "matchBreakdown": {
      "technical": 6,
      "experience": 18,
      "seniority": 12,
      "softSkills": 5,
      "certificationsToolsLanguages": 5,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-32-3",
    "cvId": 32,
    "roleId": 3,
    "rank": 8,
    "name": "Tomás Santos",
    "currentRole": "Strategy Consultant",
    "location": "Lisbon, Portugal",
    "yearsExp": 6,
    "matchScore": 45,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "Strategy development, Business planning",
      "Financial modeling, Market analysis",
      "Project management, Team leadership",
      "Portuguese (native), English (fluent), French (professional)",
      "PowerPoint, Excel (advanced"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Strategy Consultant and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Strategy consultant with 6 years of experience in management consulting and corporate strategy. Strong track\nrecord of delivering high-impact projects for clients across financial services, telecommun",
    "matchBreakdown": {
      "technical": 3,
      "experience": 18,
      "seniority": 7,
      "softSkills": 9,
      "certificationsToolsLanguages": 5,
      "growthPotential": 3
    }
  },
  {
    "id": "cand-80-3",
    "cvId": 80,
    "roleId": 3,
    "rank": 9,
    "name": "Ricardo Moreira",
    "currentRole": "Director of Advanced Analytics, Bankinter Portugal",
    "location": "Portugal",
    "yearsExp": 20,
    "matchScore": 45,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "Data Governance & Regulatory Compliance",
      "Platforms: Azure Data Lake, SQL Server, Power BI, Purview",
      "Tools: PowerCenter, Microstrategy, SAP BI",
      "Data Modeling & KPI Design",
      "ricardo_moreira_cv_final.md",
      "2025-"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French",
      "Spanish"
    ],
    "certifications": [
      "Azure",
      "Microsoft"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Director of Advanced Analytics, Bankinter Portugal and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Director of Advanced Analytics with 20+ years of experience in data engineering, business intelligence, and AI\ngovernance. Delivers results by translating strategic goals into data-driven frameworks t",
    "matchBreakdown": {
      "technical": 0,
      "experience": 15,
      "seniority": 7,
      "softSkills": 15,
      "certificationsToolsLanguages": 5,
      "growthPotential": 3
    }
  },
  {
    "id": "cand-10-3",
    "cvId": 10,
    "roleId": 3,
    "rank": 10,
    "name": "Carlos Ferreira",
    "currentRole": "General Counsel, Jerónimo Martins Group",
    "location": "Portugal",
    "yearsExp": 23,
    "matchScore": 44,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "Corporate Governance & Compliance",
      "Mergers & Acquisitions",
      "Commercial Contract Negotiation",
      "Intellectual Property Protection",
      "Regulatory Affairs & Government Relations",
      "Native in Portuguese; fluent in Engl"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as General Counsel, Jerónimo Martins Group and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Legal executive with 23+ years of experience in corporate law, regulatory compliance, and international\nbusiness transactions. Delivers results by providing strategic legal guidance that balances risk",
    "matchBreakdown": {
      "technical": 6,
      "experience": 15,
      "seniority": 7,
      "softSkills": 8,
      "certificationsToolsLanguages": 5,
      "growthPotential": 3
    }
  },
  {
    "id": "cand-19-4",
    "cvId": 19,
    "roleId": 4,
    "rank": 1,
    "name": "Carolina Duarte",
    "currentRole": "Business Advisory Associate",
    "location": "Lisbon, Portugal",
    "yearsExp": 0,
    "matchScore": 83,
    "label": "Good Match",
    "recommendation": "Shortlist",
    "skills": [
      "Financial analysis, Financial modeling",
      "Excel (advanced), PowerPoint, Bloomberg Terminal",
      "Portuguese (native), English (fluent), German (intermediate)",
      "CFA Level I Candidate"
    ],
    "languages": [
      "Portuguese",
      "English",
      "German"
    ],
    "certifications": [
      "CFA"
    ],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Business Advisory Associate and how you navigated it?",
    "suggestedAction": "Fast-track to technical interview",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Recent graduate with a strong academic background in finance and accounting. Eager to leverage analytical\nskills and academic excellence in a Big4 advisory role.",
    "matchBreakdown": {
      "technical": 28,
      "experience": 20,
      "seniority": 15,
      "softSkills": 5,
      "certificationsToolsLanguages": 10,
      "growthPotential": 5
    }
  },
  {
    "id": "cand-11-4",
    "cvId": 11,
    "roleId": 4,
    "rank": 2,
    "name": "Pedro Ribeiro",
    "currentRole": "Financial Analyst",
    "location": "Coimbra, Portugal",
    "yearsExp": 3,
    "matchScore": 71,
    "label": "Good Match",
    "recommendation": "Hold",
    "skills": [
      "Financial modeling, Valuation",
      "Excel, PowerPoint, Bloomberg Terminal",
      "Portuguese (native), English (fluent)",
      "cv_11.md",
      "2025-05-02",
      "2 / 2",
      "Strong attention to detail"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Financial Analyst and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Financial Analyst with 3 years of experience in corporate finance and financial modeling. Strong background in\nvaluation, budgeting, and financial forecasting. Seeking to leverage analytical skills in",
    "matchBreakdown": {
      "technical": 16,
      "experience": 20,
      "seniority": 15,
      "softSkills": 8,
      "certificationsToolsLanguages": 10,
      "growthPotential": 2
    }
  },
  {
    "id": "cand-28-4",
    "cvId": 28,
    "roleId": 4,
    "rank": 3,
    "name": "Afonso Morais",
    "currentRole": "Deal Advisory Analyst",
    "location": "Lisbon, Portugal",
    "yearsExp": 3,
    "matchScore": 70,
    "label": "Good Match",
    "recommendation": "Hold",
    "skills": [
      "Financial due diligence, M&A advisory",
      "Valuation, Financial modeling",
      "Excel (advanced), PowerPoint, Bloomberg Terminal",
      "Portuguese (native), English (fluent), Spanish (intermediate)",
      "CFA Level II Candidat"
    ],
    "languages": [
      "Portuguese",
      "English",
      "Spanish"
    ],
    "certifications": [
      "CFA"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Deal Advisory Analyst and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Finance professional with 3 years of experience in deal advisory and corporate finance. Strong analytical skills\nwith expertise in valuation, financial modeling, and due diligence processes.",
    "matchBreakdown": {
      "technical": 14,
      "experience": 20,
      "seniority": 15,
      "softSkills": 9,
      "certificationsToolsLanguages": 10,
      "growthPotential": 2
    }
  },
  {
    "id": "cand-72-4",
    "cvId": 72,
    "roleId": 4,
    "rank": 4,
    "name": "Catarina Martins",
    "currentRole": "Transaction Advisory Associate",
    "location": "Lisbon, Portugal",
    "yearsExp": 0,
    "matchScore": 70,
    "label": "Good Match",
    "recommendation": "Hold",
    "skills": [
      "Financial modeling and valuation",
      "cv_72.md",
      "2025-05-02",
      "2 / 2",
      "Due diligence procedures",
      "M&A transaction processes",
      "Excel, PowerPoint, Capital IQ",
      "Portuguese (native), English (fluent), French (intermediate)"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French"
    ],
    "certifications": [
      "CFA"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Transaction Advisory Associate and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Finance professional with expertise in M&A transactions and financial due diligence.",
    "matchBreakdown": {
      "technical": 14,
      "experience": 20,
      "seniority": 15,
      "softSkills": 8,
      "certificationsToolsLanguages": 10,
      "growthPotential": 3
    }
  },
  {
    "id": "cand-12-4",
    "cvId": 12,
    "roleId": 4,
    "rank": 5,
    "name": "Ricardo Neves",
    "currentRole": "Financial Controller",
    "location": "Lisbon, Portugal",
    "yearsExp": 0,
    "matchScore": 69,
    "label": "Possible Match",
    "recommendation": "Hold",
    "skills": [
      "Financial reporting, Budgeting",
      "SAP FI/CO, Excel advanced",
      "US GAAP, IFRS",
      "cv_12.md",
      "2025-05-02",
      "2 / 2",
      "Portuguese (native), English (fluent)"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Relevant industry experience",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Financial Controller and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "",
    "matchBreakdown": {
      "technical": 24,
      "experience": 20,
      "seniority": 10,
      "softSkills": 0,
      "certificationsToolsLanguages": 10,
      "growthPotential": 5
    }
  },
  {
    "id": "cand-67-4",
    "cvId": 67,
    "roleId": 4,
    "rank": 6,
    "name": "João Oliveira",
    "currentRole": "Audit Associate",
    "location": "Faro, Portugal",
    "yearsExp": 0,
    "matchScore": 69,
    "label": "Possible Match",
    "recommendation": "Hold",
    "skills": [
      "Financial statement analysis",
      "cv_67.md",
      "2025-05-02",
      "2 / 2",
      "Audit procedures and methodologies",
      "Excel, SAP (basic), Audit software",
      "Portuguese (native), English (proficient)",
      "Detail-oriented with analytical m"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Audit Associate and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Recent accounting graduate with internship experience in financial audit. Strong foundation in accounting\nprinciples and audit methodologies. Eager to develop career in a Big4 firm with opportunities ",
    "matchBreakdown": {
      "technical": 7,
      "experience": 20,
      "seniority": 15,
      "softSkills": 12,
      "certificationsToolsLanguages": 10,
      "growthPotential": 5
    }
  },
  {
    "id": "cand-102-4",
    "cvId": 102,
    "roleId": 4,
    "rank": 7,
    "name": "Tiago Mendes",
    "currentRole": "Transaction Advisory Associate",
    "location": "Coimbra, Portugal",
    "yearsExp": 0,
    "matchScore": 66,
    "label": "Possible Match",
    "recommendation": "Hold",
    "skills": [
      "Financial modeling and valuation",
      "cv_80.md",
      "2025-05-02",
      "2 / 2",
      "M&A due diligence",
      "Capital markets and deal structuring",
      "Portuguese (native), English (fluent), Spanish (basic)",
      "Advanced Excel and PowerPoint"
    ],
    "languages": [
      "Portuguese",
      "English",
      "Spanish"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Transaction Advisory Associate and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Finance professional with experience in M&A due diligence, valuation, and financial modeling. Background in\ninvestment banking and corporate development. Seeking to leverage transaction advisory skill",
    "matchBreakdown": {
      "technical": 16,
      "experience": 20,
      "seniority": 15,
      "softSkills": 0,
      "certificationsToolsLanguages": 10,
      "growthPotential": 5
    }
  },
  {
    "id": "cand-24-4",
    "cvId": 24,
    "roleId": 4,
    "rank": 8,
    "name": "Daniel Fernandes",
    "currentRole": "Assurance Associate",
    "location": "Porto, Portugal",
    "yearsExp": 2,
    "matchScore": 65,
    "label": "Possible Match",
    "recommendation": "Hold",
    "skills": [
      "External audit, Financial reporting",
      "Portuguese accounting standards, IFRS",
      "Audit software, Excel (advanced)",
      "Portuguese (native), English (fluent)",
      "Member of the Portuguese Chamber of Certified Accountan"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Assurance Associate and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Audit professional with 2 years of experience in external audit and assurance services. Strong background in\nfinancial reporting and auditing procedures with expertise in manufacturing and retail sect",
    "matchBreakdown": {
      "technical": 12,
      "experience": 20,
      "seniority": 15,
      "softSkills": 5,
      "certificationsToolsLanguages": 10,
      "growthPotential": 3
    }
  },
  {
    "id": "cand-35-4",
    "cvId": 35,
    "roleId": 4,
    "rank": 9,
    "name": "João Silva",
    "currentRole": "Audit Associate",
    "location": "Porto, Portugal",
    "yearsExp": 2,
    "matchScore": 63,
    "label": "Possible Match",
    "recommendation": "Need More Info",
    "skills": [
      "IFRS, Portuguese GAAP",
      "Audit methodology and procedures",
      "cv_35.md",
      "2025-05-02",
      "2 / 2",
      "SAP, Excel, PowerPoint",
      "Portuguese (native), English (fluent), Spanish (intermediate)"
    ],
    "languages": [
      "Portuguese",
      "English",
      "Spanish"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Audit Associate and how you navigated it?",
    "suggestedAction": "Send screening questionnaire",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Detail-oriented accounting professional with 2 years of experience in external audit. Strong knowledge of IFRS\nand Portuguese accounting standards. Looking to grow in a challenging Big4 environment.",
    "matchBreakdown": {
      "technical": 7,
      "experience": 20,
      "seniority": 15,
      "softSkills": 8,
      "certificationsToolsLanguages": 10,
      "growthPotential": 3
    }
  },
  {
    "id": "cand-76-4",
    "cvId": 76,
    "roleId": 4,
    "rank": 10,
    "name": "Lucia Carvalho",
    "currentRole": "Actuarial Analyst",
    "location": "Lisbon, Portugal",
    "yearsExp": 0,
    "matchScore": 63,
    "label": "Possible Match",
    "recommendation": "Need More Info",
    "skills": [
      "Actuarial modeling and calculations",
      "cv_76.md",
      "2025-05-02",
      "2 / 2",
      "Statistical analysis and probability theory",
      "Excel, R, SAS, Prophet",
      "Solvency II requirements",
      "Portuguese (native), English (fluent)",
      "Pursuing"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Adaptable background",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Actuarial Analyst and how you navigated it?",
    "suggestedAction": "Send screening questionnaire",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Actuarial professional with experience in risk assessment and statistical modeling for insurance products.\nStrong mathematical and analytical skills with expertise in actuarial software and methodolog",
    "matchBreakdown": {
      "technical": 9,
      "experience": 15,
      "seniority": 15,
      "softSkills": 9,
      "certificationsToolsLanguages": 10,
      "growthPotential": 5
    }
  },
  {
    "id": "cand-98-5",
    "cvId": 98,
    "roleId": 5,
    "rank": 1,
    "name": "Sofia Martins",
    "currentRole": "Forensic Accountant",
    "location": "Lisbon, Portugal",
    "yearsExp": 6,
    "matchScore": 72,
    "label": "Good Match",
    "recommendation": "Hold",
    "skills": [
      "Certified Fraud Examiner (CFE)",
      "cv_98.md",
      "2025-05-02",
      "2 / 2",
      "Anti-Money Laundering (AML) compliance",
      "Forensic data analytics (IDEA, ACL)",
      "Portuguese (native), English (fluent), French (intermediate)",
      "Investi"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French"
    ],
    "certifications": [
      "CFE"
    ],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Relevant industry experience",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Forensic Accountant and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Certified Fraud Examiner with 6 years of experience in fraud investigation, litigation support, and anti-money\nlaundering compliance. Background in both public accounting and law enforcement. Seeking ",
    "matchBreakdown": {
      "technical": 30,
      "experience": 19,
      "seniority": 5,
      "softSkills": 8,
      "certificationsToolsLanguages": 10,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-69-5",
    "cvId": 69,
    "roleId": 5,
    "rank": 2,
    "name": "Ricardo Mendes",
    "currentRole": "Forensic Accountant",
    "location": "Lisbon, Portugal",
    "yearsExp": 5,
    "matchScore": 69,
    "label": "Possible Match",
    "recommendation": "Hold",
    "skills": [
      "Fraud investigation techniques",
      "cv_69.md",
      "2025-05-02",
      "2 / 2",
      "Financial statement analysis",
      "Data analytics and forensic tools",
      "Expert witness testimony preparation",
      "Portuguese (native), English (fluent), Span"
    ],
    "languages": [
      "Portuguese",
      "English",
      "Spanish"
    ],
    "certifications": [
      "CFE"
    ],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Relevant industry experience",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Forensic Accountant and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Detail-oriented forensic accountant with 5 years of experience in fraud investigation and litigation support.\nExpert in financial data analysis and evidence gathering. Seeking to leverage investigativ",
    "matchBreakdown": {
      "technical": 30,
      "experience": 16,
      "seniority": 5,
      "softSkills": 8,
      "certificationsToolsLanguages": 10,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-43-5",
    "cvId": 43,
    "roleId": 5,
    "rank": 3,
    "name": "Beatriz Almeida",
    "currentRole": "Forensic Accountant",
    "location": "Lisbon, Portugal",
    "yearsExp": 5,
    "matchScore": 64,
    "label": "Possible Match",
    "recommendation": "Hold",
    "skills": [
      "Fraud investigation, Financial analysis",
      "Data analytics, IDEA, ACL",
      "Expert witness testimony",
      "Portuguese (native), English (fluent), French (intermediate)",
      "Certified Fraud Examiner (CFE)",
      "Chartered Account"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French"
    ],
    "certifications": [
      "CFE"
    ],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Relevant industry experience",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Forensic Accountant and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Forensic accounting professional with 5 years of experience in fraud investigation and litigation support.\nStrong analytical skills with expertise in financial statement analysis and fraud detection t",
    "matchBreakdown": {
      "technical": 26,
      "experience": 19,
      "seniority": 5,
      "softSkills": 4,
      "certificationsToolsLanguages": 10,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-30-5",
    "cvId": 30,
    "roleId": 5,
    "rank": 4,
    "name": "João Mendes",
    "currentRole": "Chief Financial Officer, Sonae MC",
    "location": "Portugal",
    "yearsExp": 24,
    "matchScore": 60,
    "label": "Possible Match",
    "recommendation": "Hold",
    "skills": [
      "Financial Strategy & Planning",
      "M&A Due Diligence & Integration",
      "Capital Structure Optimization",
      "Investor Relations & Financial Communication",
      "Risk Management & Compliance",
      "Native in Portuguese; fluent in E"
    ],
    "languages": [
      "Portuguese",
      "English",
      "German"
    ],
    "certifications": [
      "CFA"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Chief Financial Officer, Sonae MC and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Senior finance executive with 24+ years of experience in financial strategy, M&A, and treasury management.\nDelivers results by optimizing financial operations, implementing strategic planning framewor",
    "matchBreakdown": {
      "technical": 11,
      "experience": 20,
      "seniority": 8,
      "softSkills": 15,
      "certificationsToolsLanguages": 6,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-14-5",
    "cvId": 14,
    "roleId": 5,
    "rank": 5,
    "name": "Teresa Gonçalves",
    "currentRole": "Forensic Accountant",
    "location": "Porto, Portugal",
    "yearsExp": 6,
    "matchScore": 55,
    "label": "Possible Match",
    "recommendation": "Need More Info",
    "skills": [
      "Financial investigation, Fraud detection",
      "Asset tracing, Expert testimony",
      "IDEA, ACL, Excel advanced",
      "cv_14.md",
      "2025-05-02",
      "2 / 2",
      "Portuguese (native), English (fluent)"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Relevant industry experience",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Forensic Accountant and how you navigated it?",
    "suggestedAction": "Send screening questionnaire",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Forensic Accountant with 6+ years of experience investigating financial fraud and conducting litigation\nsupport. Skilled in analyzing complex financial data and preparing expert reports for legal proc",
    "matchBreakdown": {
      "technical": 25,
      "experience": 19,
      "seniority": 5,
      "softSkills": 0,
      "certificationsToolsLanguages": 6,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-57-5",
    "cvId": 57,
    "roleId": 5,
    "rank": 6,
    "name": "Marco Silva",
    "currentRole": "Financial Crime Specialist",
    "location": "Lisbon, Portugal",
    "yearsExp": 4,
    "matchScore": 55,
    "label": "Possible Match",
    "recommendation": "Need More Info",
    "skills": [
      "AML/CFT regulations and best practices",
      "cv_57.md",
      "2025-05-02",
      "2 / 2",
      "Financial investigation techniques",
      "Transaction monitoring systems",
      "Compliance case management software",
      "Portuguese (native), English (flu"
    ],
    "languages": [
      "Portuguese",
      "English",
      "Spanish"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Strong technical skills",
      "Adaptable background",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Financial Crime Specialist and how you navigated it?",
    "suggestedAction": "Send screening questionnaire",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Compliance professional with 4 years of experience in financial crime prevention and anti-money laundering.\nExpertise in developing and implementing AML/CFT programs and conducting financial investiga",
    "matchBreakdown": {
      "technical": 30,
      "experience": 12,
      "seniority": 3,
      "softSkills": 4,
      "certificationsToolsLanguages": 6,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-80-5",
    "cvId": 80,
    "roleId": 5,
    "rank": 7,
    "name": "Ricardo Moreira",
    "currentRole": "Director of Advanced Analytics, Bankinter Portugal",
    "location": "Portugal",
    "yearsExp": 20,
    "matchScore": 53,
    "label": "Weak Match",
    "recommendation": "Hold",
    "skills": [
      "Data Governance & Regulatory Compliance",
      "Platforms: Azure Data Lake, SQL Server, Power BI, Purview",
      "Tools: PowerCenter, Microstrategy, SAP BI",
      "Data Modeling & KPI Design",
      "ricardo_moreira_cv_final.md",
      "2025-"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French",
      "Spanish"
    ],
    "certifications": [
      "Azure",
      "Microsoft"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Growth potential"
    ],
    "risks": [
      "Lacks some desired certifications",
      "Communication style needs verification"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Director of Advanced Analytics, Bankinter Portugal and how you navigated it?",
    "suggestedAction": "Keep in pipeline",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Director of Advanced Analytics with 20+ years of experience in data engineering, business intelligence, and AI\ngovernance. Delivers results by translating strategic goals into data-driven frameworks t",
    "matchBreakdown": {
      "technical": 7,
      "experience": 20,
      "seniority": 8,
      "softSkills": 11,
      "certificationsToolsLanguages": 4,
      "growthPotential": 3
    }
  },
  {
    "id": "cand-10-5",
    "cvId": 10,
    "roleId": 5,
    "rank": 8,
    "name": "Carlos Ferreira",
    "currentRole": "General Counsel, Jerónimo Martins Group",
    "location": "Portugal",
    "yearsExp": 23,
    "matchScore": 52,
    "label": "Weak Match",
    "recommendation": "Need More Info",
    "skills": [
      "Corporate Governance & Compliance",
      "Mergers & Acquisitions",
      "Commercial Contract Negotiation",
      "Intellectual Property Protection",
      "Regulatory Affairs & Government Relations",
      "Native in Portuguese; fluent in Engl"
    ],
    "languages": [
      "Portuguese",
      "English",
      "French"
    ],
    "certifications": [],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Growth potential"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as General Counsel, Jerónimo Martins Group and how you navigated it?",
    "suggestedAction": "Send screening questionnaire",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Legal executive with 23+ years of experience in corporate law, regulatory compliance, and international\nbusiness transactions. Delivers results by providing strategic legal guidance that balances risk",
    "matchBreakdown": {
      "technical": 14,
      "experience": 17,
      "seniority": 8,
      "softSkills": 4,
      "certificationsToolsLanguages": 6,
      "growthPotential": 3
    }
  },
  {
    "id": "cand-49-5",
    "cvId": 49,
    "roleId": 5,
    "rank": 9,
    "name": "Clara Ferreira",
    "currentRole": "IFRS Reporting Specialist",
    "location": "Braga, Portugal",
    "yearsExp": 7,
    "matchScore": 48,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "IFRS technical knowledge",
      "Consolidation procedures",
      "Financial statement preparation",
      "SAP, Excel, accounting software",
      "Portuguese (native), English (fluent)",
      "CPA certification"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "certifications": [
      "CPA"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as IFRS Reporting Specialist and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "Accounting professional with 7 years of experience in financial reporting and IFRS implementation. Strong\nexpertise in technical accounting matters and complex financial instruments. Seeking to levera",
    "matchBreakdown": {
      "technical": 4,
      "experience": 23,
      "seniority": 11,
      "softSkills": 0,
      "certificationsToolsLanguages": 10,
      "growthPotential": 0
    }
  },
  {
    "id": "cand-103-5",
    "cvId": 103,
    "roleId": 5,
    "rank": 10,
    "name": "Tiago Ramos",
    "currentRole": "Audit Manager",
    "location": "Porto, Portugal",
    "yearsExp": 8,
    "matchScore": 47,
    "label": "Weak Match",
    "recommendation": "Reject",
    "skills": [
      "IFRS, GAAP, SAP",
      "Caseware, Audit Command Language (ACL)",
      "cv_10.md",
      "2025-05-02",
      "2 / 2",
      "Risk assessment and internal control testing",
      "Portuguese CPA (ROC) license",
      "Fluent in Portuguese, English, and Spanish"
    ],
    "languages": [
      "Portuguese",
      "English",
      "Spanish"
    ],
    "certifications": [
      "CPA"
    ],
    "reasonsToSwipeRight": [
      "Good foundational knowledge",
      "Relevant industry experience",
      "Senior level expertise"
    ],
    "risks": [
      "May need tool-specific training",
      "Leadership skills not fully demonstrated"
    ],
    "bestInterviewQuestion": "Can you describe a challenging scenario in your role as Audit Manager and how you navigated it?",
    "suggestedAction": "Send polite rejection",
    "candidateExperienceTip": "Highlight our company's focus on career growth during the interview.",
    "summary": "CPA-certified Audit Manager with 8+ years of experience auditing clients in financial services, insurance, and\nmanufacturing.",
    "matchBreakdown": {
      "technical": 4,
      "experience": 20,
      "seniority": 13,
      "softSkills": 0,
      "certificationsToolsLanguages": 10,
      "growthPotential": 0
    }
  }
];
