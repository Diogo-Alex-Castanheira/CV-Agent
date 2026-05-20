import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Candidate, Interview } from '../types';
import { 
  ArrowLeft, Calendar, 
  Sparkles, Play, ShieldAlert 
} from 'lucide-react';

export const SchedulingScreen: React.FC = () => {
  const { 
    selectedRole, 
    setCurrentScreen, 
    getAdvancedCandidates,
    interviews,
    scheduleInterview,
    autoSuggestSchedule
  } = useAppContext();

  // Selected Candidate for manual scheduling modal
  const [modalOpen, setModalOpen] = useState(false);
  const [targetCandidate, setTargetCandidate] = useState<Candidate | null>(null);
  
  // Modal Fields
  const [interviewType, setInterviewType] = useState<string>('HR Screening');
  const [interviewer, setInterviewer] = useState<string>('Hiring Manager');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('09:00');
  const [duration, setDuration] = useState<number>(30);
  const [notes, setNotes] = useState<string>('');
  const [experienceNote, setExperienceNote] = useState<string>('');
  
  // Toast notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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

  // Get advanced candidates waiting to be scheduled
  const advancedCandidates = getAdvancedCandidates(role.roleId);
  const unscheduledCandidates = advancedCandidates.filter(
    c => !interviews.some(i => i.candidateId === c.id)
  );

  // Time Slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', 
    '12:00', '14:00', '14:30', '15:00', '15:30', '16:00', 
    '16:30', '17:00'
  ];

  // Weekdays
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  // Calculate next week dates starting from upcoming Monday
  const getWeekDates = () => {
    const today = new Date();
    const monday = new Date(today);
    monday.setDate(today.getDate() + ((1 + 7 - today.getDay()) % 7 || 7));
    return days.map((day, index) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + index);
      return d.toISOString().split('T')[0];
    });
  };

  const weekDates = getWeekDates();

  // Helper to trigger toast
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Open Modal
  const openScheduleModal = (candidate: Candidate) => {
    setTargetCandidate(candidate);
    setInterviewType(candidate.recommendedInterviewType || 'HR Screening');
    setInterviewer(candidate.suggestedInterviewer || 'Hiring Manager');
    setDate(weekDates[0]); // Default to next Monday
    setTime('10:00');
    setDuration(
      candidate.recommendedInterviewType === 'Technical Interview' || candidate.recommendedInterviewType === 'Case Interview' 
        ? 45 
        : 30
    );
    setNotes(candidate.suggestedInterviewFocus || '');
    setExperienceNote(candidate.candidateExperienceTip || '');
    setModalOpen(true);
  };

  // Confirm schedule
  const handleConfirmSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetCandidate) return;

    const interviewData: Interview = {
      id: `int-${Date.now()}`,
      candidateId: targetCandidate.id,
      candidateName: targetCandidate.name,
      roleId: targetCandidate.roleId,
      roleTitle: role.title,
      interviewType,
      interviewer,
      date,
      time,
      duration,
      notes,
      status: 'Scheduled'
    };

    scheduleInterview(interviewData);
    setModalOpen(false);
    triggerToast(`Interview scheduled successfully with ${targetCandidate.name}!`);
  };

  // Trigger Bulk Auto-Suggest
  const handleAutoSuggest = () => {
    autoSuggestSchedule(role.roleId);
    triggerToast('Suggested interview schedule generated!');
  };

  // Get interview scheduled for a particular date & time slot
  const getInterviewAt = (dateStr: string, timeStr: string) => {
    return interviews.find(
      i => i.date === dateStr && i.time === timeStr && i.roleId === role.roleId
    );
  };

  return (
    <div className="pb-16 pt-2 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-purple-950 text-white text-xs font-black py-3 px-6 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce border border-purple-800">
          <Sparkles size={16} className="text-pastel-yellow" />
          {toastMessage}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button 
          onClick={() => setCurrentScreen('advanced-candidates')}
          className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-text-secondary"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-xl font-black leading-tight">Interview Planner</h2>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">
            {role.title}
          </p>
        </div>
      </div>

      {/* Grid with Auto-Suggest Trigger */}
      <div className="mb-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-neu flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="font-black text-sm text-dark flex items-center gap-1.5">
            <Sparkles size={16} className="text-accent-purple" />
            AI Bulk Scheduling Assistant
          </h3>
          <p className="text-xs text-text-secondary font-medium mt-1">
            Let ThinkRight analyze availability and automatically map candidates into optimized time slots.
          </p>
        </div>
        <button 
          onClick={handleAutoSuggest}
          disabled={unscheduledCandidates.length === 0}
          className="bg-purple-900 text-white font-black text-xs px-5 py-3 rounded-2xl shadow-md hover:bg-purple-950 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Play size={14} fill="white" />
          Auto-Suggest Schedule
        </button>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col gap-6">
        {/* Candidates waiting queue */}
        {unscheduledCandidates.length > 0 && (
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-neu">
            <h3 className="font-black text-xs uppercase tracking-wider text-text-secondary mb-3">
              Pending Candidates ({unscheduledCandidates.length})
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {unscheduledCandidates.map(c => (
                <div 
                  key={c.id}
                  onClick={() => openScheduleModal(c)}
                  className="flex-shrink-0 bg-lavender/30 border border-lavender/50 rounded-2xl p-4 flex flex-col justify-between w-44 hover:bg-lavender/50 cursor-pointer transition-all"
                >
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-purple-900 bg-white/70 px-2 py-0.5 rounded-md">
                      {c.interviewPriority} Priority
                    </span>
                    <h4 className="font-black text-sm mt-2 text-dark truncate">{c.name}</h4>
                    <p className="text-[10px] text-text-secondary font-semibold truncate">{c.currentRole}</p>
                  </div>
                  <button 
                    className="w-full mt-3 py-2 bg-dark text-white rounded-xl text-[10px] font-bold"
                  >
                    Schedule
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Weekly Calendar Grid */}
        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-neu overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-black text-sm text-dark flex items-center gap-1.5">
              <Calendar size={16} className="text-text-secondary" />
              Weekly Schedule
            </h3>
            <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-xl px-2 py-1 text-[11px] font-bold text-text-secondary">
              <span>Next Week (Mon-Fri)</span>
            </div>
          </div>

          {/* Calendar slots */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr>
                  <th className="p-2 border-b border-gray-100 text-[10px] font-black uppercase tracking-wider text-text-secondary w-16">Time</th>
                  {days.map((day, idx) => (
                    <th key={day} className="p-2 border-b border-gray-100 text-[10px] font-black uppercase tracking-wider text-text-secondary">
                      {day} <span className="text-[9px] font-semibold text-gray-400 block">{weekDates[idx]}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map(timeStr => (
                  <tr key={timeStr}>
                    <td className="p-2 border-b border-gray-50 text-[11px] font-bold text-gray-500">{timeStr}</td>
                    {weekDates.map(dateStr => {
                      const matched = getInterviewAt(dateStr, timeStr);
                      return (
                        <td key={dateStr} className="p-1 border-b border-gray-50">
                          {matched ? (
                            <div className="bg-gradient-to-tr from-purple-900 to-indigo-950 text-white rounded-xl p-2 text-[10px] shadow-sm">
                              <p className="font-black truncate">{matched.candidateName}</p>
                              <p className="opacity-80 truncate">{matched.interviewType}</p>
                              <p className="opacity-60 truncate mt-0.5">{matched.interviewer}</p>
                            </div>
                          ) : (
                            <div className="bg-gray-50/50 border border-dashed border-gray-200 rounded-xl p-2 text-center text-[9px] font-bold text-gray-400 min-h-[40px] flex items-center justify-center">
                              Available
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Scheduling Guardrails disclaimer */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex gap-3 items-start mt-6">
        <ShieldAlert className="text-purple-800 mt-0.5 flex-shrink-0" size={18} />
        <div>
          <span className="text-xs font-black text-dark uppercase tracking-wider block">Recruiter Ownership Clause</span>
          <p className="text-[11px] text-text-secondary font-medium mt-1 leading-relaxed">
            Every AI schedule mapping is a draft. You can reschedule slots manually anytime by clicking candidates. Candidate communication is protected; no interview invites will be dispatched without your confirmation.
          </p>
        </div>
      </div>

      {/* Manual Schedule Modal */}
      {modalOpen && targetCandidate && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 animate-scaleIn border border-gray-100">
            <h3 className="font-black text-lg text-dark mb-1">Schedule Interview</h3>
            <p className="text-xs text-text-secondary font-medium mb-4">
              Planning next steps for <span className="font-bold text-dark">{targetCandidate.name}</span>
            </p>

            <form onSubmit={handleConfirmSchedule} className="space-y-4 text-xs">
              <div>
                <label className="block text-text-secondary font-bold mb-1">Interview Format</label>
                <select
                  value={interviewType}
                  onChange={(e) => {
                    setInterviewType(e.target.value);
                    setDuration(e.target.value === 'Technical Interview' || e.target.value === 'Case Interview' ? 45 : 30);
                  }}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 font-bold"
                >
                  <option value="HR Screening">HR Screening (30 mins)</option>
                  <option value="Technical Interview">Technical Interview (45 mins)</option>
                  <option value="Case Interview">Case Interview (60 mins)</option>
                  <option value="Partner Interview">Partner Interview (45 mins)</option>
                  <option value="Culture Fit Interview">Culture Fit Interview (30 mins)</option>
                </select>
              </div>

              <div>
                <label className="block text-text-secondary font-bold mb-1">Interviewer</label>
                <input 
                  type="text"
                  value={interviewer}
                  onChange={(e) => setInterviewer(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 font-bold"
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-text-secondary font-bold mb-1">Date</label>
                  <select
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 font-bold"
                  >
                    {days.map((day, idx) => (
                      <option key={day} value={weekDates[idx]}>{day} ({weekDates[idx]})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-text-secondary font-bold mb-1">Time</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 font-bold"
                  >
                    {timeSlots.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {experienceNote && (
                <div className="bg-emerald-50 text-emerald-900 p-3 rounded-xl border border-emerald-100">
                  <span className="font-black block uppercase text-[10px] tracking-wider text-emerald-800">Candidate Experience Focus</span>
                  <p className="mt-0.5 font-medium leading-relaxed">{experienceNote}</p>
                </div>
              )}

              <div>
                <label className="block text-text-secondary font-bold mb-1">Interview Prep / Focus Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 font-bold"
                  placeholder="Focus topics, case studies, open questions..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 py-3 border border-gray-200 text-dark rounded-xl font-bold hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-dark text-white rounded-xl font-bold hover:bg-dark/95"
                >
                  Confirm Interview
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
