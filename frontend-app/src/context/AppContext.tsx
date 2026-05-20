import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Decision, Screen, Role } from '../types';
import { roles, allCandidates } from '../data/mockData';

interface AppContextType {
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
  selectedRole: Role | null;
  setSelectedRole: (role: Role | null) => void;
  decisions: Record<string, Decision>;
  makeDecision: (candidateId: string, decision: Decision) => void;
  getPendingCandidates: (roleId?: number) => typeof allCandidates;
  allRoles: typeof roles;
  selectedCandidate: typeof allCandidates[0] | null;
  setSelectedCandidate: (candidate: typeof allCandidates[0] | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<typeof allCandidates[0] | null>(null);
  const [decisions, setDecisions] = useState<Record<string, Decision>>({});

  const makeDecision = (candidateId: string, decision: Decision) => {
    setDecisions(prev => ({ ...prev, [candidateId]: decision }));
  };

  const getPendingCandidates = (roleId?: number) => {
    let candidates = allCandidates.filter(c => !decisions[c.id]);
    if (roleId) {
      candidates = candidates.filter(c => c.roleId === roleId);
    }
    return candidates.sort((a, b) => b.matchScore - a.matchScore);
  };

  return (
    <AppContext.Provider value={{
      currentScreen,
      setCurrentScreen,
      selectedRole,
      setSelectedRole,
      decisions,
      makeDecision,
      getPendingCandidates,
      allRoles: roles,
      selectedCandidate,
      setSelectedCandidate
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
