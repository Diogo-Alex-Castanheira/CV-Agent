import React from 'react';
import { useAppContext } from '../context/AppContext';
import { DashboardMetricCard } from '../components/DashboardMetricCard';
import { RoleCard } from '../components/RoleCard';

export const HomeScreen: React.FC = () => {
  const { allRoles, setSelectedRole, setCurrentScreen, decisions } = useAppContext();

  // Calculate metrics
  const totalRoles = allRoles.length;
  const totalCandidates = allRoles.reduce((sum, role) => sum + role.candidatesCount, 0);
  const reviewedCount = Object.keys(decisions).length;
  
  let strongMatches = 0;
  let highRisks = 0;
  allRoles.forEach(role => {
    role.candidates.forEach(c => {
      if (c.matchScore >= 80) strongMatches++;
      if (c.matchScore < 50) highRisks++;
    });
  });

  const handleRoleClick = (role: any) => {
    setSelectedRole(role);
    setCurrentScreen('swipe');
  };

  return (
    <div className="pb-10">
      <div className="mb-6">
        <h2 className="text-3xl font-black mb-1">Welcome back, Recruiter</h2>
        <p className="text-text-secondary font-medium">Here's your pipeline at a glance.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <DashboardMetricCard 
          title="Open Roles" 
          value={totalRoles} 
          subtitle="Actively hiring" 
          colorClass="bg-white" 
          delay={0.1} 
        />
        <DashboardMetricCard 
          title="Candidates" 
          value={totalCandidates} 
          subtitle={`${reviewedCount} reviewed`} 
          colorClass="bg-white" 
          delay={0.2} 
        />
        <DashboardMetricCard 
          title="Strong Matches" 
          value={strongMatches} 
          subtitle="Score > 80%" 
          colorClass="bg-mint-green/50" 
          delay={0.3} 
        />
        <DashboardMetricCard 
          title="High Risk" 
          value={highRisks} 
          subtitle="Needs review" 
          colorClass="bg-pastel-pink/50" 
          delay={0.4} 
        />
      </div>

      <div className="pastel-card bg-lavender/40 mb-8 border border-lavender/60">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg text-purple-900">Today's Hiring Focus</h3>
          <span className="text-2xl">🎯</span>
        </div>
        <p className="text-purple-800 text-sm font-medium mb-3">
          Director, Data & AI Strategy requires urgent review. You have 3 strong matches waiting in the pipeline.
        </p>
        <button 
          onClick={() => handleRoleClick(allRoles.find(r => r.roleId === 1))}
          className="bg-purple-900 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md w-full"
        >
          Review Priority Candidates
        </button>
      </div>

      <div className="mb-4 flex justify-between items-end">
        <h2 className="text-2xl font-black">Open Roles</h2>
        <button 
          onClick={() => setCurrentScreen('roles')}
          className="text-accent-purple font-bold text-sm hover:underline"
        >
          View all
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {allRoles.slice(0, 3).map((role, idx) => (
          <RoleCard 
            key={role.id} 
            role={role} 
            onClick={() => handleRoleClick(role)} 
            delay={0.5 + (idx * 0.1)} 
          />
        ))}
      </div>
    </div>
  );
};
