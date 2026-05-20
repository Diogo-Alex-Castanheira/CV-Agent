import React from 'react';
import { motion } from 'framer-motion';

interface SkillTagProps {
  skill: string;
  delay?: number;
}

export const SkillTag: React.FC<SkillTagProps> = ({ skill, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="inline-block px-3 py-1.5 bg-white/60 border border-white/80 rounded-lg text-xs font-semibold shadow-sm whitespace-nowrap text-dark"
    >
      {skill}
    </motion.span>
  );
};
