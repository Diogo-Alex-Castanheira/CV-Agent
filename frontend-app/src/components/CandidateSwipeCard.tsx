import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { Candidate, Decision } from '../types';
import { MatchScoreCircle } from './MatchScoreCircle';
import { SkillTag } from './SkillTag';
import { MapPin, Briefcase } from 'lucide-react';

interface CandidateSwipeCardProps {
  candidate: Candidate;
  isFront: boolean;
  onSwipe: (decision: Decision) => void;
  index: number;
}

export const CandidateSwipeCard: React.FC<CandidateSwipeCardProps> = ({ 
  candidate, isFront, onSwipe, index 
}) => {
  const [exitX, setExitX] = useState(0);
  const [exitY, setExitY] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.95, 1, 0.95]);
  const rotate = useTransform(x, [-150, 0, 150], [-8, 0, 8]);
  
  const rightOpacity = useTransform(x, [20, 100], [0, 1]);
  const leftOpacity = useTransform(x, [-20, -100], [0, 1]);
  const upOpacity = useTransform(y, [-20, -100], [0, 1]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    const velocityThreshold = 500;

    if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      setExitX(300);
      onSwipe('Shortlist');
    } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      setExitX(-300);
      onSwipe('Reject');
    } else if (info.offset.y < -threshold || info.velocity.y < -velocityThreshold) {
      setExitY(-300);
      onSwipe('Hold');
    }
  };

  const isSecond = index === 1;
  const isThird = index === 2;

  if (index > 2) return null;

  const gradients = ['gradient-main', 'gradient-green-blue', 'gradient-orange-pink', 'gradient-purple-blue', 'gradient-yellow-green'];
  // Ensure pseudo-random but consistent gradient based on candidate ID/rank
  const gradientClass = gradients[(candidate.rank || candidate.cvId) % gradients.length];

  return (
    <motion.div
      style={{
        x: isFront ? x : 0,
        y: isFront ? y : (isSecond ? 15 : isThird ? 30 : 0),
        rotate: isFront ? rotate : 0,
        scale: isFront ? scale : (isSecond ? 0.95 : isThird ? 0.9 : 1),
        zIndex: 10 - index,
        position: 'absolute',
      }}
      drag={isFront ? true : false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      initial={false}
      animate={isFront && (exitX !== 0 || exitY !== 0) ? { 
        x: exitX, 
        y: exitY, 
        opacity: 0, 
        scale: 0.8 
      } : { 
        x: 0, y: isSecond ? 15 : isThird ? 30 : 0, scale: isSecond ? 0.95 : isThird ? 0.9 : 1 
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`w-full max-w-sm h-[600px] ${gradientClass} rounded-[2rem] shadow-neu flex flex-col overflow-hidden will-change-transform ${isFront ? 'cursor-grab active:cursor-grabbing' : ''}`}
    >
      <motion.div className="swipe-overlay shortlist-overlay" style={{ opacity: rightOpacity }}>
        <div className="swipe-overlay-stamp text-shortlist-strong border-shortlist-strong">SHORTLIST</div>
      </motion.div>
      <motion.div className="swipe-overlay reject-overlay" style={{ opacity: leftOpacity }}>
        <div className="swipe-overlay-stamp text-reject-strong border-reject-strong">REJECT</div>
      </motion.div>
      <motion.div className="swipe-overlay hold-overlay" style={{ opacity: upOpacity }}>
        <div className="swipe-overlay-stamp text-hold-strong border-hold-strong">HOLD</div>
      </motion.div>

      <div className="flex-1 p-5 flex flex-col gap-4 overflow-y-auto">
        <div className="glass-panel rounded-[1.5rem] p-5 flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-2xl font-black leading-none mb-1 text-ink">{candidate.name}</h3>
            <p className="text-sm font-bold text-ink-soft flex items-center gap-1 mb-1 opacity-90">
              <Briefcase size={14} /> {candidate.currentRole}
            </p>
            <p className="text-xs font-semibold text-ink-soft flex items-center gap-1 opacity-75">
              <MapPin size={14} /> {candidate.location} · {candidate.yearsExp}y exp
            </p>
          </div>
          <MatchScoreCircle score={candidate.matchScore} size={64} />
        </div>

        <div className="glass-panel rounded-2xl p-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-ink-soft mb-1 block opacity-75">AI Recommendation</span>
          <div className="flex items-center gap-2">
            <span className={`badge ${
              candidate.recommendation === 'Shortlist' ? 'badge-green' :
              candidate.recommendation === 'Reject' ? 'badge-red' :
              candidate.recommendation === 'Hold' ? 'badge-amber' : 'badge-blue'
            }`}>
              {candidate.recommendation}
            </span>
            <span className="text-sm font-bold text-ink">{candidate.label}</span>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-ink-soft mb-2 block opacity-75">Key Strengths</span>
          <ul className="space-y-1.5">
            {candidate.reasonsToSwipeRight.map((reason, i) => (
              <li key={i} className="text-sm flex items-start gap-2 font-bold text-ink">
                <span className="text-shortlist-strong mt-0.5">✓</span> {reason}
              </li>
            ))}
          </ul>
        </div>

        {candidate.risks.length > 0 && (
          <div className="glass-panel rounded-2xl p-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-ink-soft mb-2 block opacity-75">Risks / To Verify</span>
            <ul className="space-y-1.5">
              {candidate.risks.map((risk, i) => (
                <li key={i} className="text-sm flex items-start gap-2 font-bold text-ink">
                  <span className="text-reject-strong mt-0.5">!</span> {risk}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="glass-panel rounded-2xl p-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-ink-soft mb-2 block opacity-75">Top Skills</span>
          <div className="flex flex-wrap gap-2">
            {candidate.skills.slice(0, 5).map((skill, i) => (
              <SkillTag key={i} skill={skill} delay={isFront ? i * 0.1 : 0} />
            ))}
            {candidate.skills.length > 5 && (
              <span className="text-xs text-ink-soft self-center font-bold">+{candidate.skills.length - 5} more</span>
            )}
          </div>
        </div>
      </div>
      
      <div className="glass-panel border-t border-white/40 h-12 flex items-center justify-center pointer-events-none mt-auto">
        <span className="text-[10px] font-black text-ink/50 uppercase tracking-widest">Swipe to decide</span>
      </div>
    </motion.div>
  );
};
