import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { MatchScoreCircle } from '../components/MatchScoreCircle';
import { Award, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ComparisonScreen: React.FC = () => {
  const { allRoles: rolesList, setSelectedCandidate, setCurrentScreen } = useAppContext();
  const [activeRoleId, setActiveRoleId] = useState<number>(1);

  const activeRole = rolesList.find(r => r.roleId === activeRoleId);
  
  // Get top 3 candidates for the selected role
  // We'll just take the top 3 sorted by score from the original role data, 
  // regardless of decisions, so the comparison is always useful.
  const topCandidates = activeRole?.candidates.slice(0, 3) || [];

  return (
    <div className="pb-24 pt-2">
      <div className="mb-6">
        <h2 className="text-3xl font-black mb-1">Compare Candidates</h2>
        <p className="text-text-secondary font-medium">Top 3 matches side-by-side.</p>
      </div>

      <div className="mb-6 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
        <div className="flex gap-2 w-max">
          {rolesList.map(role => (
            <button
              key={role.id}
              onClick={() => setActiveRoleId(role.roleId)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
                activeRoleId === role.roleId 
                  ? 'bg-dark text-white' 
                  : 'bg-white text-text-secondary hover:bg-gray-100'
              }`}
            >
              {role.title.length > 20 ? role.title.substring(0, 20) + '...' : role.title}
            </button>
          ))}
        </div>
      </div>

      {topCandidates.length > 0 ? (
        <div className="flex overflow-x-auto gap-4 pb-8 -mx-6 px-6 snap-x">
          {topCandidates.map((candidate, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={candidate.id} 
              className="min-w-[85vw] sm:min-w-[300px] bg-white rounded-3xl p-5 shadow-soft snap-center relative border border-gray-100"
            >
              {idx === 0 && (
                <div className="absolute -top-3 -right-3 bg-accent-amber text-amber-900 text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-full shadow-md flex items-center gap-1 z-10">
                  <Award size={12} /> Best Fit
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <div className="pr-2">
                  <h3 className="text-xl font-black mb-1 leading-tight">{candidate.name}</h3>
                  <p className="text-xs font-semibold text-text-secondary flex items-center gap-1">
                    <Briefcase size={12} /> {candidate.currentRole}
                  </p>
                </div>
                <MatchScoreCircle score={candidate.matchScore} size={50} />
              </div>

              <div className="bg-lavender/30 rounded-xl p-3 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-1 block">AI Recommendation</span>
                <span className="text-sm font-bold">{candidate.recommendation}</span>
              </div>

              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-2 block">Top Strength</span>
                <p className="text-sm font-medium text-emerald-700 bg-mint-green/20 p-2 rounded-lg">
                  {candidate.reasonsToSwipeRight[0] || 'Strong overall profile'}
                </p>
              </div>

              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-2 block">Main Risk</span>
                <p className="text-sm font-medium text-red-700 bg-pastel-pink/20 p-2 rounded-lg">
                  {candidate.risks[0] || 'No major risks identified'}
                </p>
              </div>

              <button 
                onClick={() => {
                  setSelectedCandidate(candidate);
                  setCurrentScreen('detail');
                }}
                className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-dark rounded-xl text-sm font-bold flex items-center justify-center gap-1 transition-colors"
              >
                View Full Profile <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center p-8 bg-white rounded-3xl shadow-soft">
          <p className="text-text-secondary font-medium">No candidates available for comparison.</p>
        </div>
      )}
    </div>
  );
};
