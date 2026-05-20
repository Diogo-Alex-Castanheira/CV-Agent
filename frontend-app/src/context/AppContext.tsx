import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Decision, Screen, Role, Interview, Candidate } from '../types';
import { roles as rawRoles, allCandidates as rawCandidates } from '../data/mockData';

// Inject mock AI data into raw candidates for the new features
const enrichedCandidates = rawCandidates.map(c => {
  let priority: 'High' | 'Medium' | 'Low' = 'Medium';
  if (c.matchScore >= 75) priority = 'High';
  else if (c.matchScore < 50) priority = 'Low';

  const types = ['HR Screening', 'Technical Interview', 'Case Interview', 'Partner Interview', 'Culture Fit Interview'] as const;
  
  return {
    ...c,
    interviewPriority: priority,
    recommendedInterviewType: types[c.cvId % types.length],
    suggestedInterviewer: 'Hiring Manager',
    suggestedInterviewFocus: `Validate experience related to ${c.skills[0]}`,
  } as Candidate;
});

interface AppContextType {
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
  selectedRole: Role | null;
  setSelectedRole: (role: Role | null) => void;
  decisions: Record<string, Decision>;
  makeDecision: (candidateId: string, decision: Decision) => void;
  getPendingCandidates: (roleId?: number) => typeof enrichedCandidates;
  getAdvancedCandidates: (roleId?: number) => typeof enrichedCandidates;
  allRoles: Role[];
  selectedCandidate: typeof enrichedCandidates[0] | null;
  setSelectedCandidate: (candidate: typeof enrichedCandidates[0] | null) => void;
  interviews: Interview[];
  scheduleInterview: (interview: Interview) => void;
  autoSuggestSchedule: (roleId: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<typeof enrichedCandidates[0] | null>(null);
  const [decisions, setDecisions] = useState<Record<string, Decision>>({});
  const [interviews, setInterviews] = useState<Interview[]>([]);

  const makeDecision = (candidateId: string, decision: Decision) => {
    setDecisions(prev => ({ ...prev, [candidateId]: decision }));
  };

  const getPendingCandidates = (roleId?: number) => {
    let candidates = enrichedCandidates.filter(c => !decisions[c.id]);
    if (roleId) {
      candidates = candidates.filter(c => c.roleId === roleId);
    }
    return candidates.sort((a, b) => b.matchScore - a.matchScore);
  };

  const getAdvancedCandidates = (roleId?: number) => {
    let candidates = enrichedCandidates.filter(c => 
      decisions[c.id] && decisions[c.id] !== 'Reject'
    );
    if (roleId) {
      candidates = candidates.filter(c => c.roleId === roleId);
    }
    // Inject dynamic reviewStatus and scheduledInterview
    return candidates.map(c => {
      const scheduled = interviews.find(i => i.candidateId === c.id);
      return {
        ...c,
        reviewStatus: scheduled ? 'Interview Scheduled' : decisions[c.id] === 'Shortlist' ? 'Shortlisted' : decisions[c.id],
        scheduledInterview: scheduled ? {
          date: scheduled.date,
          time: scheduled.time,
          duration: scheduled.duration,
          interviewer: scheduled.interviewer,
          interviewType: scheduled.interviewType,
          notes: scheduled.notes
        } : undefined
      };
    }).sort((a, b) => b.matchScore - a.matchScore);
  };

  const scheduleInterview = (interview: Interview) => {
    setInterviews(prev => [...prev.filter(i => i.candidateId !== interview.candidateId), interview]);
  };

  const autoSuggestSchedule = (roleId: number) => {
    const advanced = getAdvancedCandidates(roleId).filter(c => !interviews.some(i => i.candidateId === c.id));
    
    // Mock logic: schedule starting next Monday
    const nextMonday = new Date();
    nextMonday.setDate(nextMonday.getDate() + ((1 + 7 - nextMonday.getDay()) % 7 || 7));
    let hour = 9;
    let dayOffset = 0;

    const newInterviews: Interview[] = advanced.map((c, i) => {
      const dateStr = new Date(nextMonday.getTime() + dayOffset * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      const timeStr = `${hour.toString().padStart(2, '0')}:00`;
      
      const duration = c.recommendedInterviewType === 'Technical Interview' || c.recommendedInterviewType === 'Case Interview' ? 60 : 30;
      
      hour += Math.ceil(duration / 60);
      if (hour > 16) {
        hour = 9;
        dayOffset++;
      }

      return {
        id: `int-${Date.now()}-${i}`,
        candidateId: c.id,
        candidateName: c.name,
        roleId: c.roleId,
        roleTitle: rawRoles.find(r => r.roleId === c.roleId)?.title || 'Role',
        interviewType: c.recommendedInterviewType || 'HR Screening',
        interviewer: c.suggestedInterviewer || 'Hiring Manager',
        date: dateStr,
        time: timeStr,
        duration,
        notes: 'Auto-suggested based on priority and match score.',
        status: 'Scheduled'
      };
    });

    setInterviews(prev => [...prev, ...newInterviews]);
  };

  const enrichedRoles: Role[] = rawRoles.map(r => {
    const roleCands = enrichedCandidates.filter(c => c.roleId === r.roleId);
    const reviewedCount = roleCands.filter(c => decisions[c.id]).length;
    const shortlistedCount = roleCands.filter(c => decisions[c.id] === 'Shortlist').length;
    const holdCount = roleCands.filter(c => decisions[c.id] === 'Hold').length;
    const rejectedCount = roleCands.filter(c => decisions[c.id] === 'Reject').length;
    const scheduledInterviewsCount = roleCands.filter(c => interviews.some(i => i.candidateId === c.id)).length;
    
    return {
      ...r,
      reviewedCount,
      shortlistedCount,
      holdCount,
      rejectedCount,
      scheduledInterviewsCount,
      candidates: roleCands
    };
  });

  return (
    <AppContext.Provider value={{
      currentScreen,
      setCurrentScreen,
      selectedRole,
      setSelectedRole,
      decisions,
      makeDecision,
      getPendingCandidates,
      getAdvancedCandidates,
      allRoles: enrichedRoles,
      selectedCandidate,
      setSelectedCandidate,
      interviews,
      scheduleInterview,
      autoSuggestSchedule
    }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
