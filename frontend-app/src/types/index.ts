export interface MatchBreakdown {
  technical: number;
  experience: number;
  seniority: number;
  softSkills: number;
  certificationsToolsLanguages: number;
  growthPotential: number;
}

export interface Interview {
  id: string;
  candidateId: string;
  candidateName: string;
  roleId: number;
  roleTitle: string;
  interviewType: string;
  interviewer: string;
  date: string;
  time: string;
  duration: number;
  notes: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
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
  reviewStatus?: 'Pending' | 'Shortlisted' | 'Hold' | 'Need More Info' | 'Rejected' | 'Interview Scheduled';
  interviewPriority?: 'High' | 'Medium' | 'Low';
  recommendedInterviewType?: 'HR Screening' | 'Technical Interview' | 'Case Interview' | 'Partner Interview' | 'Culture Fit Interview';
  suggestedInterviewer?: string;
  suggestedInterviewFocus?: string;
  scheduledInterview?: {
    date: string;
    time: string;
    duration: number;
    interviewer: string;
    interviewType: string;
    notes: string;
  };
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
  reviewedCount?: number;
  shortlistedCount?: number;
  holdCount?: number;
  rejectedCount?: number;
  scheduledInterviewsCount?: number;
  topMatchScore: number;
  pipelineHealth: PipelineHealth;
  difficulty: Difficulty;
  candidates: Candidate[];
}

export type Decision = 'Shortlist' | 'Hold' | 'Need More Info' | 'Reject';

export type Screen = 'home' | 'roles' | 'swipe' | 'compare' | 'insights' | 'detail' | 'review-completed' | 'advanced-candidates' | 'schedule';
