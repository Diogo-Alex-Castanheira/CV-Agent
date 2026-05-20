import React from 'react';
import { motion } from 'framer-motion';

interface MatchScoreCircleProps {
  score: number;
  size?: number;
}

export const MatchScoreCircle: React.FC<MatchScoreCircleProps> = ({ score, size = 64 }) => {
  const getGradientId = (s: number) => {
    if (s >= 80) return 'grad-strong';
    if (s >= 60) return 'grad-medium';
    return 'grad-weak';
  };

  const getScoreBg = (s: number) => {
    if (s >= 80) return 'text-shortlist/30';
    if (s >= 60) return 'text-hold/30';
    return 'text-reject/30';
  };

  const strokeWidth = size * 0.1;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  const gradId = getGradientId(score);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <defs>
          <linearGradient id="grad-strong" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B8F7A6" />
            <stop offset="100%" stopColor="#A8F0FF" />
          </linearGradient>
          <linearGradient id="grad-medium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="100%" stopColor="#FF9F6E" />
          </linearGradient>
          <linearGradient id="grad-weak" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7D7D" />
            <stop offset="100%" stopColor="#F8A7D8" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          strokeWidth={strokeWidth}
          className={`${getScoreBg(score)}`}
          stroke="currentColor"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          strokeWidth={strokeWidth}
          stroke={`url(#${gradId})`}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="drop-shadow-sm"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <motion.span 
          className="font-black tracking-tighter text-ink"
          style={{ fontSize: size * 0.35 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          {score}
        </motion.span>
      </div>
    </div>
  );
};
