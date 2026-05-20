import React from 'react';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, CheckCircle2, PauseCircle, XCircle } from 'lucide-react';

export const ReviewCompletedScreen: React.FC = () => {
  const { selectedRole, setCurrentScreen, setSelectedRole } = useAppContext();

  // Selected role is necessary for stats. Fallback if null.
  const role = selectedRole;
  if (!role) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center p-6">
        <h3 className="text-xl font-bold">No role selected</h3>
        <button onClick={() => setCurrentScreen('home')} className="mt-4 px-4 py-2 bg-dark text-white rounded-xl">
          Go Home
        </button>
      </div>
    );
  }

  // Calculate statistics from the role's count variables in context
  const totalReviewed = role.reviewedCount || 0;
  const shortlistedCount = role.shortlistedCount || 0;
  const holdCount = role.holdCount || 0;
  const rejectedCount = role.rejectedCount || 0;

  return (
    <div className="min-h-[75vh] flex flex-col justify-between py-4 relative overflow-hidden">
      {/* Floating Blob Background Animations */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-pastel-pink/30 rounded-full blur-3xl animate-blob -z-10" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-pastel-blue/30 rounded-full blur-3xl animate-blob animation-delay-2000 -z-10" />
      <div className="absolute top-1/2 right-10 w-52 h-52 bg-lavender/30 rounded-full blur-3xl animate-blob animation-delay-4000 -z-10" />

      {/* Celebratory Header */}
      <div className="text-center pt-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-mint-green to-pastel-blue rounded-[2rem] shadow-neu mb-6 text-4xl"
        >
          🎉
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-black mb-2 text-dark"
        >
          Review Completed!
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary font-medium px-6"
        >
          Great job! You've reviewed all candidates for <span className="font-bold text-dark">{role.title}</span>.
        </motion.p>
      </div>

      {/* Summary Cards */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 gap-4 my-8 px-2"
      >
        <div className="glass-panel p-5 text-center flex flex-col items-center justify-center shadow-neu">
          <Briefcase className="text-accent-blue mb-2" size={24} />
          <span className="text-2xl font-black text-dark">{totalReviewed}</span>
          <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider mt-1">Reviewed</span>
        </div>
        <div className="glass-panel p-5 text-center flex flex-col items-center justify-center shadow-neu border-mint-green/30 bg-mint-green/5">
          <CheckCircle2 className="text-accent-green mb-2" size={24} />
          <span className="text-2xl font-black text-dark">{shortlistedCount}</span>
          <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider mt-1">Shortlisted</span>
        </div>
        <div className="glass-panel p-5 text-center flex flex-col items-center justify-center shadow-neu border-pastel-yellow/30 bg-pastel-yellow/5">
          <PauseCircle className="text-amber-500 mb-2" size={24} />
          <span className="text-2xl font-black text-dark">{holdCount}</span>
          <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider mt-1">On Hold</span>
        </div>
        <div className="glass-panel p-5 text-center flex flex-col items-center justify-center shadow-neu border-pastel-pink/30 bg-pastel-pink/5">
          <XCircle className="text-accent-coral mb-2" size={24} />
          <span className="text-2xl font-black text-dark">{rejectedCount}</span>
          <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider mt-1">Rejected</span>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col gap-3 px-2 pb-6"
      >
        <button
          onClick={() => setCurrentScreen('advanced-candidates')}
          className="w-full py-4 bg-dark text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-dark/95 transition-all"
        >
          View Advanced Candidates
          <ArrowRight size={18} />
        </button>
        <button
          onClick={() => {
            setSelectedRole(null);
            setCurrentScreen('roles');
          }}
          className="w-full py-4 bg-white border border-gray-200 text-dark rounded-2xl font-bold hover:bg-gray-50 transition-all text-center"
        >
          Go back to roles
        </button>
      </motion.div>
    </div>
  );
};
