import React from 'react';
import { motion } from 'framer-motion';
import { Role } from '../types';
import { Users, Target, ArrowRight } from 'lucide-react';

interface RoleCardProps {
  role: Role;
  onClick: () => void;
  delay?: number;
}

export const RoleCard: React.FC<RoleCardProps> = ({ role, onClick, delay = 0 }) => {
  const getPipelineColor = (health: string) => {
    switch (health) {
      case 'Strong': return 'bg-shortlist-strong';
      case 'Moderate': return 'bg-hold-strong';
      case 'Weak': return 'bg-reject-strong';
      default: return 'bg-gray-400';
    }
  };

  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case 'Easy': return 'badge-green';
      case 'Medium': return 'badge-amber';
      case 'Hard': return 'badge-red';
      default: return 'badge-blue';
    }
  };

  const getRoleClass = (id: number) => {
    switch(id) {
      case 1: return 'ai-role text-ink';
      case 2: return 'sap-role text-ink';
      case 3: return 'cyber-role';
      case 4: return 'data-role text-ink';
      case 5: return 'tax-role text-ink';
      default: return 'gradient-main text-ink';
    }
  };

  const roleClass = getRoleClass(role.roleId);
  const isDark = roleClass.includes('cyber-role');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      onClick={onClick}
      className={`rounded-[2rem] p-5 cursor-pointer shadow-neu transition-all hover:scale-[1.02] ${roleClass}`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <span className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${isDark ? 'text-white/70' : 'text-ink/60'}`}>
            {role.department}
          </span>
          <h3 className="text-xl font-black leading-tight">{role.title}</h3>
        </div>
        <span className={`badge ${getDifficultyBadge(role.difficulty)}`}>
          {role.difficulty}
        </span>
      </div>

      <div className={`text-sm font-bold flex items-center gap-1 mb-4 ${isDark ? 'text-white/80' : 'text-ink/80'}`}>
        <span>📍 {role.location}</span>
      </div>

      <div className="glass-panel rounded-2xl p-4 mb-5 flex gap-4 text-ink">
        <div className="flex flex-col flex-1">
          <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-ink/60">
            <Users size={14} /> Candidates
          </span>
          <span className="text-2xl font-black">{role.candidatesCount}</span>
        </div>
        <div className="flex flex-col flex-1 border-l border-ink/10 pl-4">
          <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-ink/60">
            <Target size={14} /> Top Match
          </span>
          <span className="text-2xl font-black text-shortlist-strong">{role.topMatchScore}%</span>
        </div>
      </div>

      <div className="glass-panel rounded-2xl p-4 mb-4 text-ink">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-ink/60">Pipeline Health</span>
          <span className="text-xs font-black">{role.pipelineHealth}</span>
        </div>
        <div className="h-2 bg-ink/10 rounded-full overflow-hidden">
          <motion.div 
            className={`h-full rounded-full ${getPipelineColor(role.pipelineHealth)}`}
            initial={{ width: 0 }}
            animate={{ width: role.pipelineHealth === 'Strong' ? '90%' : role.pipelineHealth === 'Moderate' ? '60%' : '30%' }}
            transition={{ delay: delay + 0.2, duration: 1 }}
          />
        </div>
      </div>

      <button className={`${isDark ? 'secondary-btn' : 'primary-btn'} w-full py-3 flex items-center justify-center gap-2 group`}>
        Review Candidates
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};
