import React from 'react';
import { useAppContext } from '../context/AppContext';
import { MatchScoreCircle } from '../components/MatchScoreCircle';
import { SkillTag } from '../components/SkillTag';
import { ShieldAlert, ArrowLeft, Lightbulb, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
// @ts-ignore
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

export const CandidateDetailScreen: React.FC = () => {
  // For this demo, we'll just show the first pending candidate if there's no explicitly selected candidate
  const { getPendingCandidates, setCurrentScreen, selectedCandidate } = useAppContext();
  const candidate = selectedCandidate || getPendingCandidates()[0];

  if (!candidate) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-text-secondary font-medium">No candidate selected.</p>
      </div>
    );
  }

  const breakdownData = [
    { subject: 'Technical', A: candidate.matchBreakdown.technical, fullMark: 30 },
    { subject: 'Experience', A: candidate.matchBreakdown.experience, fullMark: 25 },
    { subject: 'Seniority', A: candidate.matchBreakdown.seniority, fullMark: 15 },
    { subject: 'Soft Skills', A: candidate.matchBreakdown.softSkills, fullMark: 15 },
    { subject: 'Certs/Tools', A: candidate.matchBreakdown.certificationsToolsLanguages, fullMark: 10 },
    { subject: 'Potential', A: candidate.matchBreakdown.growthPotential, fullMark: 5 },
  ];

  return (
    <div className="pb-10 pt-2 h-[80vh] overflow-y-auto">
      <div className="flex items-center gap-3 mb-6 sticky top-0 bg-cream/80 backdrop-blur-md py-2 z-10">
        <button 
          onClick={() => setCurrentScreen('swipe')}
          className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-text-secondary"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-xl font-black">Candidate Deep Dive</h2>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-soft mb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-black mb-1">{candidate.name}</h3>
            <p className="font-semibold text-text-secondary flex items-center gap-1 mb-1">
              <Briefcase size={16} /> {candidate.currentRole}
            </p>
            <p className="text-sm font-medium text-text-secondary flex items-center gap-1">
              <MapPin size={16} /> {candidate.location} · {candidate.yearsExp}y exp
            </p>
          </div>
          <MatchScoreCircle score={candidate.matchScore} size={80} />
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-text-secondary mb-2">Summary</h4>
          <p className="text-sm leading-relaxed font-medium opacity-90">{candidate.summary}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-text-secondary mb-3">Match Radar</h4>
          <div className="h-[250px] w-full bg-slate-50 rounded-2xl flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={breakdownData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 10, fontWeight: 600 }} />
                <Radar name="Match" dataKey="A" stroke="#A78BFA" fill="#E8E0FF" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-text-secondary mb-2">Top Skills</h4>
          <div className="flex flex-wrap gap-2">
            {candidate.skills.map((skill, i) => (
              <SkillTag key={i} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-mint-green/30 border border-mint-green rounded-3xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-2 text-emerald-800">
          <Lightbulb size={20} />
          <h4 className="font-bold">Suggested Interview Question</h4>
        </div>
        <p className="text-sm font-medium text-emerald-900 leading-relaxed italic">
          "{candidate.bestInterviewQuestion}"
        </p>
      </div>

      {candidate.risks.length > 0 && (
        <div className="bg-pastel-pink/30 border border-pastel-pink rounded-3xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-3 text-red-800">
            <ShieldAlert size={20} />
            <h4 className="font-bold">Identified Risks</h4>
          </div>
          <ul className="space-y-2">
            {candidate.risks.map((risk, i) => (
              <li key={i} className="text-sm font-medium text-red-900 flex items-start gap-2">
                <span className="mt-0.5">•</span> {risk}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="text-center bg-dark text-white p-6 rounded-3xl shadow-neu">
        <h4 className="font-black text-lg mb-2">Responsible AI</h4>
        <p className="text-sm opacity-80 font-medium leading-relaxed">
          The AI recommends. <strong className="text-accent-amber">The recruiter decides.</strong>
          <br/>
          This score is fully explainable and does not use protected characteristics.
        </p>
      </div>
    </div>
  );
};
