export interface MatchBreakdown {
  technical: number;
  experience: number;
  seniority: number;
  softSkills: number;
  certificationsToolsLanguages: number;
  growthPotential: number;
}

export interface Candidate {
  id: string;
  cvId: number;
  roleId: number;
  rank: number;
  name: string;
  currentRole: string;
  location: string;
  yearsExp: number;
  matchScore: number;
  label: string;
  recommendation: 'Shortlist' | 'Hold' | 'Need More Info' | 'Reject';
  skills: string[];
  languages: string[];
  certifications: string[];
  reasonsToSwipeRight: string[];
  risks: string[];
  bestInterviewQuestion: string;
  suggestedAction: string;
  candidateExperienceTip: string;
  summary: string;
  matchBreakdown: MatchBreakdown;
}

export type PipelineHealth = 'Strong' | 'Moderate' | 'Weak';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Role {
  id: string;
  roleId: number;
  title: string;
  department: string;
  location: string;
  candidatesCount: number;
  topMatchScore: number;
  pipelineHealth: PipelineHealth;
  difficulty: Difficulty;
  candidates: Candidate[];
}

export type Decision = 'Shortlist' | 'Hold' | 'Need More Info' | 'Reject';

export type Screen = 'home' | 'roles' | 'swipe' | 'compare' | 'insights' | 'detail';
