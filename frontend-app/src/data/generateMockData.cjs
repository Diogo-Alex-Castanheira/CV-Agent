const fs = require('fs');
const path = require('path');

const dataJsPath = path.join(__dirname, '../../../frontend/data.js');
let dataJsContent = fs.readFileSync(dataJsPath, 'utf-8');

let TALENT_DATA = [];
let ROLES = {};

try {
    const script = dataJsContent.replace('const TALENT_DATA =', 'TALENT_DATA =').replace('const ROLES =', 'ROLES =');
    eval(script);
} catch (e) {
    console.error("Failed to eval data.js", e);
}

const enrichedCandidates = TALENT_DATA.map(c => {
    return {
        id: `cand-${c.cvId}-${c.roleId}`,
        cvId: c.cvId,
        roleId: c.roleId,
        rank: c.rank,
        name: c.name,
        currentRole: c.title,
        location: c.location,
        yearsExp: c.yearsExp,
        matchScore: c.score,
        label: c.label,
        recommendation: c.action,
        skills: c.skills ? c.skills.split('\n').map(s => s.trim()).filter(s => s) : [],
        languages: c.languages || [],
        certifications: c.certifications || [],
        reasonsToSwipeRight: [
            c.breakdown?.technical > 15 ? 'Strong technical skills' : 'Good foundational knowledge',
            c.breakdown?.experience > 15 ? 'Relevant industry experience' : 'Adaptable background',
            c.breakdown?.seniority > 10 ? 'Senior level expertise' : 'Growth potential'
        ],
        risks: [
            c.breakdown?.certs_tools < 5 ? 'Lacks some desired certifications' : 'May need tool-specific training',
            c.breakdown?.soft_skills < 10 ? 'Leadership skills not fully demonstrated' : 'Communication style needs verification'
        ],
        bestInterviewQuestion: `Can you describe a challenging scenario in your role as ${c.title} and how you navigated it?`,
        suggestedAction: c.action === 'Shortlist' ? 'Fast-track to technical interview' : 
                         c.action === 'Hold' ? 'Keep in pipeline' :
                         c.action === 'Need More Info' ? 'Send screening questionnaire' : 'Send polite rejection',
        candidateExperienceTip: `Highlight our company's focus on ${c.roleId === 1 ? 'AI innovation' : 'career growth'} during the interview.`,
        summary: c.summary,
        matchBreakdown: {
            technical: c.breakdown?.technical || 0,
            experience: c.breakdown?.experience || 0,
            seniority: c.breakdown?.seniority || 0,
            softSkills: c.breakdown?.soft_skills || 0,
            certificationsToolsLanguages: c.breakdown?.certs_tools || 0,
            growthPotential: c.breakdown?.potential || 0
        }
    };
});

const enrichedRoles = Object.keys(ROLES).map(roleIdStr => {
    const roleId = parseInt(roleIdStr);
    const roleTitle = ROLES[roleIdStr];
    const roleCandidates = enrichedCandidates.filter(c => c.roleId === roleId);
    
    const candidatesCount = roleCandidates.length;
    const topMatchScore = candidatesCount > 0 ? Math.max(...roleCandidates.map(c => c.matchScore)) : 0;
    
    let pipelineHealth = 'Weak';
    if (topMatchScore > 80 && candidatesCount > 5) pipelineHealth = 'Strong';
    else if (topMatchScore > 60 && candidatesCount > 2) pipelineHealth = 'Moderate';

    let difficulty = 'Medium';
    if (roleId === 1 || roleId === 3) difficulty = 'Hard';
    if (roleId === 4) difficulty = 'Easy';

    return {
        id: `role-${roleId}`,
        roleId: roleId,
        title: roleTitle,
        department: roleId === 4 ? 'Finance' : roleId === 5 ? 'Forensic' : 'Technology',
        location: 'Lisbon, Portugal / Hybrid',
        candidatesCount,
        topMatchScore,
        pipelineHealth,
        difficulty,
        candidates: roleCandidates
    };
});

const fileContent = `import { Candidate, Role } from '../types';

export const roles: Role[] = ${JSON.stringify(enrichedRoles, null, 2)};

export const allCandidates: Candidate[] = ${JSON.stringify(enrichedCandidates, null, 2)};
`;

const destPath = path.join(__dirname, 'mockData.ts');
fs.mkdirSync(path.dirname(destPath), { recursive: true });
fs.writeFileSync(destPath, fileContent);
console.log('Successfully generated mockData.ts');
