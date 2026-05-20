import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, AlertCircle, Zap } from 'lucide-react';

export const InsightsScreen: React.FC = () => {
  return (
    <div className="pb-24 pt-2">
      <div className="mb-6">
        <h2 className="text-3xl font-black mb-1">Strategic Insights</h2>
        <p className="text-text-secondary font-medium">AI-powered pipeline intelligence.</p>
      </div>

      <div className="flex flex-col gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-soft"
        >
          <div className="flex items-center gap-3 mb-3 text-emerald-600">
            <Zap size={24} />
            <h3 className="text-lg font-black">Time-to-Hire Impact</h3>
          </div>
          <p className="text-sm font-medium leading-relaxed opacity-90 mb-3">
            AI screening processed 107 CVs in <strong>&lt;1 second</strong> versus an estimated 5-10 hours manually.
          </p>
          <div className="bg-emerald-50 rounded-xl p-3 flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Est. Time Saved</span>
            <span className="text-lg font-black text-emerald-600">65%</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-soft"
        >
          <div className="flex items-center gap-3 mb-3 text-accent-purple">
            <TrendingUp size={24} />
            <h3 className="text-lg font-black">Strongest Pipeline</h3>
          </div>
          <p className="text-sm font-medium leading-relaxed opacity-90 mb-3">
            <strong>Financial Analyst</strong> has the strongest talent pool with multiple candidates scoring 70+. Junior finance talent is abundant in the local Big4 ecosystem.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-pastel-pink/30 rounded-3xl p-6 shadow-soft border border-pastel-pink/50"
        >
          <div className="flex items-center gap-3 mb-3 text-red-600">
            <AlertCircle size={24} />
            <h3 className="text-lg font-black">Hardest to Fill</h3>
          </div>
          <p className="text-sm font-medium leading-relaxed opacity-90 text-red-900">
            <strong>Director, Data & AI Strategy:</strong> Only 1 candidate above 70%. The 15+ year AI requirement is extremely demanding.
            <br/><br/>
            <strong>Cybersecurity Team:</strong> No candidates above 70%. Thin talent pool competing with global tech.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-dark text-white rounded-3xl p-6 shadow-neu mt-4"
        >
          <div className="flex items-center gap-3 mb-3 text-accent-amber">
            <ShieldCheck size={24} />
            <h3 className="text-lg font-black">Responsible AI Status</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm font-medium opacity-90">
              <span className="text-accent-amber mt-0.5">✓</span>
              Zero protected characteristics used in evaluation
            </li>
            <li className="flex items-start gap-2 text-sm font-medium opacity-90">
              <span className="text-accent-amber mt-0.5">✓</span>
              100% explainable scoring methodology
            </li>
            <li className="flex items-start gap-2 text-sm font-medium opacity-90">
              <span className="text-accent-amber mt-0.5">✓</span>
              Human recruiter retains final decision authority
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
