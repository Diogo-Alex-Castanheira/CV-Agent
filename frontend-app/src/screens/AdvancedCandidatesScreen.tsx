import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { MatchScoreCircle } from '../components/MatchScoreCircle';
import { Candidate } from '../types';
import { 
  ArrowLeft, Calendar, ArrowUpDown, Shield, 
  CheckCircle, AlertTriangle, Sparkles, TrendingUp 
} from 'lucide-react';

export const AdvancedCandidatesScreen: React.FC = () => {
  const { 
    selectedRole, 
    setCurrentScreen, 
    setSelectedRole, 
    getAdvancedCandidates,
    setSelectedCandidate
  } = useAppContext();

  const [activeFilter, setActiveFilter] = useState<'All' | 'Shortlist' | 'Need More Info' | 'Hold' | 'High Priority'>('All');
  const [activeSort, setActiveSort] = useState<'Score' | 'Priority' | 'Risk' | 'Recent'>('Score');

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

  // Fetch all advanced candidates (Shortlist, Hold, Need More Info) + rejected optionally
  let candidates = getAdvancedCandidates(role.roleId);

  // Filter candidates
  if (activeFilter === 'Shortlist') {
    candidates = candidates.filter(c => c.reviewStatus === 'Shortlisted');
  } else if (activeFilter === 'Need More Info') {
    candidates = candidates.filter(c => c.reviewStatus === 'Need More Info');
  } else if (activeFilter === 'Hold') {
    candidates = candidates.filter(c => c.reviewStatus === 'Hold');
  } else if (activeFilter === 'High Priority') {
    candidates = candidates.filter(c => c.interviewPriority === 'High');
  }

  // Sort candidates
  candidates = [...candidates].sort((a, b) => {
    if (activeSort === 'Score') {
      return b.matchScore - a.matchScore;
    }
    if (activeSort === 'Priority') {
      const priorityWeight = { High: 3, Medium: 2, Low: 1 };
      return (priorityWeight[b.interviewPriority || 'Medium'] || 0) - (priorityWeight[a.interviewPriority || 'Medium'] || 0);
    }
    if (activeSort === 'Risk') {
      // Risk order: sort by lowest number of risks first
      return (a.risks?.length || 0) - (b.risks?.length || 0);
    }
    // Default / Recent: rank order
    return a.rank - b.rank;
  });

  // Calculate statistics
  const readyCount = candidates.filter(c => c.reviewStatus === 'Shortlisted' || c.reviewStatus === 'Interview Scheduled').length;
  const clarificationCount = candidates.filter(c => c.reviewStatus === 'Need More Info').length;
  const highPriorityCount = candidates.filter(c => c.interviewPriority === 'High').length;

  // Handle Schedule click
  const handleScheduleClick = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setCurrentScreen('schedule');
  };

  // Styles based on Priority or Status
  const getCardStyle = (candidate: Candidate) => {
    if (candidate.reviewStatus === 'Need More Info') {
      return 'bg-gradient-to-br from-lavender/40 to-accent-purple/10 border-purple-200';
    }
    const priority = candidate.interviewPriority;
    if (priority === 'High') {
      return 'bg-gradient-to-br from-mint-green/40 to-accent-green/10 border-emerald-200';
    }
    if (priority === 'Medium') {
      return 'bg-gradient-to-br from-pastel-yellow/40 to-amber-500/10 border-amber-200';
    }
    return 'bg-gradient-to-br from-pastel-blue/40 to-accent-blue/10 border-blue-200';
  };

  const getPriorityBadgeStyle = (priority?: 'High' | 'Medium' | 'Low') => {
    if (priority === 'High') return 'bg-emerald-100 text-emerald-800';
    if (priority === 'Medium') return 'bg-amber-100 text-amber-800';
    return 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="pb-16 pt-2">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button 
          onClick={() => {
            setSelectedRole(null);
            setCurrentScreen('roles');
          }}
          className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-text-secondary"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-xl font-black leading-tight">Advanced Candidates</h2>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">
            {role.title}
          </p>
        </div>
      </div>

      {/* Summary metrics section */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white p-3 rounded-2xl shadow-neu text-center border border-gray-100">
          <span className="text-xl font-black text-dark">{readyCount}</span>
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mt-0.5">Ready</p>
        </div>
        <div className="bg-white p-3 rounded-2xl shadow-neu text-center border border-gray-100">
          <span className="text-xl font-black text-dark">{clarificationCount}</span>
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mt-0.5">Needs Info</p>
        </div>
        <div className="bg-white p-3 rounded-2xl shadow-neu text-center border border-gray-100">
          <span className="text-xl font-black text-dark">{highPriorityCount}</span>
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mt-0.5">High Priority</p>
        </div>
      </div>

      {/* AI Scheduling Insight */}
      <div className="pastel-card bg-gradient-to-r from-mint-green/30 to-pastel-blue/30 border border-mint-green/40 mb-6 flex gap-3 items-start">
        <div className="p-2 bg-white rounded-xl shadow-sm text-lg">💡</div>
        <div>
          <span className="text-xs font-black uppercase text-emerald-800 tracking-wider flex items-center gap-1">
            <Sparkles size={12} /> ThinkRight AI scheduling recommendation
          </span>
          <p className="text-xs text-emerald-950 font-semibold mt-1">
            We recommend scheduling interviews for <span className="font-bold">High Match</span> candidates within 48 hours to minimize competitive drop-off.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4 overflow-x-auto flex gap-2 pb-2 scrollbar-none">
        {(['All', 'Shortlist', 'Need More Info', 'Hold', 'High Priority'] as const).map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
              activeFilter === filter 
                ? 'bg-dark text-white' 
                : 'bg-white text-text-secondary border border-gray-100 hover:bg-gray-50'
            }`}
          >
            {filter === 'Shortlist' ? 'Shortlisted' : filter}
          </button>
        ))}
      </div>

      {/* Sorting Control */}
      <div className="flex justify-between items-center mb-4 px-1">
        <div className="flex items-center gap-1.5 text-xs text-text-secondary font-bold">
          <ArrowUpDown size={14} />
          <span>Sort:</span>
          <select 
            value={activeSort}
            onChange={(e) => setActiveSort(e.target.value as 'Score' | 'Priority' | 'Risk' | 'Recent')}
            className="bg-transparent border-none text-dark font-black focus:ring-0 cursor-pointer text-xs"
          >
            <option value="Score">Match Score</option>
            <option value="Priority">Priority</option>
            <option value="Risk">Lowest Risk</option>
            <option value="Recent">Recently Reviewed</option>
          </select>
        </div>
        
        <button 
          onClick={() => setCurrentScreen('schedule')}
          className="text-xs text-accent-purple font-black flex items-center gap-1 hover:underline"
        >
          <Calendar size={14} />
          Open Calendar View
        </button>
      </div>

      {/* Candidates List */}
      <div className="flex flex-col gap-4 mb-8">
        {candidates.length > 0 ? (
          candidates.map(candidate => {
            const isScheduled = candidate.reviewStatus === 'Interview Scheduled';
            return (
              <div 
                key={candidate.id}
                className={`pastel-card p-5 border shadow-sm relative transition-all duration-300 ${getCardStyle(candidate)}`}
              >
                {/* Priority & Match Score Header */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${getPriorityBadgeStyle(candidate.interviewPriority)}`}>
                        {candidate.interviewPriority} Priority
                      </span>
                      {isScheduled && (
                        <span className="text-[10px] font-black uppercase tracking-wider bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md flex items-center gap-1">
                          🗓️ Scheduled
                        </span>
                      )}
                    </div>
                    <h3 className="font-black text-lg text-dark mt-1 leading-tight">{candidate.name}</h3>
                    <p className="text-xs font-semibold text-text-secondary">{candidate.currentRole}</p>
                  </div>
                  <div className="w-12 h-12">
                    <MatchScoreCircle score={candidate.matchScore} size={48} strokeWidth={4} />
                  </div>
                </div>

                <hr className="border-gray-200/50 my-3" />

                {/* Key Insights (Strengths, Risks) */}
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-emerald-800 flex items-center gap-1">
                      <CheckCircle size={12} /> Main Strength
                    </span>
                    <p className="text-gray-700 font-medium ml-4 mt-0.5">{candidate.reasonsToSwipeRight[0] || 'Strong professional profile'}</p>
                  </div>
                  {candidate.risks && candidate.risks.length > 0 && (
                    <div>
                      <span className="font-bold text-amber-800 flex items-center gap-1">
                        <AlertTriangle size={12} /> Open Risk / Focus
                      </span>
                      <p className="text-gray-700 font-medium ml-4 mt-0.5">{candidate.risks[0]}</p>
                    </div>
                  )}
                  <div>
                    <span className="font-bold text-purple-800 flex items-center gap-1">
                      <TrendingUp size={12} /> Recommended Action
                    </span>
                    <p className="text-gray-700 font-medium ml-4 mt-0.5">{candidate.suggestedAction}</p>
                  </div>
                </div>

                {/* Recommended Interview Specifics */}
                <div className="mt-4 bg-white/60 rounded-xl p-3 border border-white/40 text-xs">
                  <div className="flex justify-between mb-1">
                    <span className="text-text-secondary font-bold">Suggested Format:</span>
                    <span className="font-black text-dark">{candidate.recommendedInterviewType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary font-bold">Recommended Focus:</span>
                    <span className="font-black text-dark text-right truncate max-w-[150px]">{candidate.suggestedInterviewFocus || 'General Fit'}</span>
                  </div>
                </div>

                {/* Scheduled details if applicable */}
                {isScheduled && candidate.scheduledInterview && (
                  <div className="mt-3 bg-purple-900/5 border border-purple-950/10 rounded-xl p-3 text-xs">
                    <p className="font-black text-purple-950 mb-1 flex items-center gap-1">
                      🗓️ Scheduled Interview Details
                    </p>
                    <p className="text-purple-900 font-semibold">
                      {candidate.scheduledInterview.interviewType} on <span className="font-black">{candidate.scheduledInterview.date}</span> at <span className="font-black">{candidate.scheduledInterview.time}</span> with {candidate.scheduledInterview.interviewer}
                    </p>
                  </div>
                )}

                {/* Schedule CTA */}
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => handleScheduleClick(candidate)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 ${
                      isScheduled 
                        ? 'bg-purple-900/10 text-purple-950 border border-purple-900/20 hover:bg-purple-900/20' 
                        : 'bg-dark text-white hover:bg-dark/90'
                    }`}
                  >
                    <Calendar size={14} />
                    {isScheduled ? 'Reschedule Interview' : 'Schedule Interview'}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-gray-100 shadow-neu">
            <span className="text-4xl">👥</span>
            <h3 className="text-lg font-black mt-3">No candidates found</h3>
            <p className="text-xs text-text-secondary font-semibold mt-1">Try adapting your filters or review more candidates.</p>
          </div>
        )}
      </div>

      {/* Responsible AI Notice */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex gap-3 items-start">
        <Shield className="text-accent-blue mt-0.5" size={18} />
        <div>
          <span className="text-xs font-black text-dark uppercase tracking-wider block">Responsible AI Guardrails</span>
          <p className="text-[11px] text-text-secondary font-medium mt-1 leading-relaxed">
            “The AI recommends. The recruiter decides.” You maintain full human-in-the-loop control. No candidate is auto-rejected or automatically processed without recruiter review. Suggestions are based purely on CV matching and skill requirements.
          </p>
        </div>
      </div>
    </div>
  );
};
