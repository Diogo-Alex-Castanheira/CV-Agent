import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { CandidateSwipeCard } from '../components/CandidateSwipeCard';
import { Decision } from '../types';
import { X, Check, Pause, HelpCircle, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ActionButton = ({ onClick, icon: Icon, label, customClass }: { onClick: () => void; icon: React.ElementType; label: string; customClass: string }) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className={`action-btn ${customClass}`}
  >
    <Icon size={24} />
    <span className="text-[10px] font-black mt-1 opacity-90">{label}</span>
  </motion.button>
);

export const SwipeScreen: React.FC = () => {
  const { selectedRole, setSelectedRole, getPendingCandidates, makeDecision, setCurrentScreen } = useAppContext();
  const [candidates, setCandidates] = useState(getPendingCandidates(selectedRole?.roleId));

  useEffect(() => {
    const pending = getPendingCandidates(selectedRole?.roleId);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCandidates(pending);
    if (pending.length === 0 && selectedRole) {
      setCurrentScreen('review-completed');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRole]);

  const handleSwipe = (decision: Decision) => {
    if (candidates.length === 0) return;
    
    const current = candidates[0];
    makeDecision(current.id, decision);
    
    // Remove current card after animation
    setTimeout(() => {
      setCandidates(prev => {
        const next = prev.slice(1);
        if (next.length === 0) {
          setCurrentScreen('review-completed');
        }
        return next;
      });
    }, 300);
  };



  return (
    <div className="h-[80vh] flex flex-col relative pt-2">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        {selectedRole ? (
          <button 
            onClick={() => setSelectedRole(null)}
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-text-secondary"
          >
            <ArrowLeft size={20} />
          </button>
        ) : (
          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-text-secondary font-bold text-sm">
            All
          </div>
        )}
        <div>
          <h2 className="text-lg font-black leading-tight">
            {selectedRole ? selectedRole.title : 'All Roles'}
          </h2>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">
            {candidates.length} candidates left
          </p>
        </div>
      </div>

      {/* Card Stack */}
      <div className="flex-1 relative flex justify-center items-center perspective-1000">
        <AnimatePresence>
          {candidates.length > 0 ? (
            candidates.slice(0, 3).map((candidate, index) => (
              <CandidateSwipeCard
                key={candidate.id}
                candidate={candidate}
                index={index}
                isFront={index === 0}
                onSwipe={handleSwipe}
              />
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center bg-white p-8 rounded-[2rem] shadow-neu max-w-sm w-full"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-black mb-2">You're all caught up!</h3>
              <p className="text-text-secondary font-medium mb-6">You have reviewed all candidates for this selection.</p>
              <button 
                onClick={() => setCurrentScreen('home')}
                className="w-full py-3 bg-dark text-white rounded-xl font-bold"
              >
                Back to Dashboard
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action Buttons */}
      {candidates.length > 0 && (
        <div className="flex justify-center gap-4 mt-8 pb-4">
          <ActionButton onClick={() => handleSwipe('Reject')} icon={X} label="Reject" customClass="reject-button text-white" />
          <ActionButton onClick={() => handleSwipe('Need More Info')} icon={HelpCircle} label="More Info" customClass="info-button" />
          <ActionButton onClick={() => handleSwipe('Hold')} icon={Pause} label="Hold" customClass="hold-button" />
          <ActionButton onClick={() => handleSwipe('Shortlist')} icon={Check} label="Shortlist" customClass="shortlist-button text-ink" />
        </div>
      )}
    </div>
  );
};
