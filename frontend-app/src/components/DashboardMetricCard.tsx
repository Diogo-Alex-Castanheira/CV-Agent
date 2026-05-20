import React from 'react';
import { motion } from 'framer-motion';

interface DashboardMetricCardProps {
  title: string;
  value: number | string;
  subtitle: string;
  colorClass: string;
  delay?: number;
}

export const DashboardMetricCard: React.FC<DashboardMetricCardProps> = ({ 
  title, value, subtitle, colorClass, delay = 0 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={`pastel-card flex flex-col items-start ${colorClass}`}
    >
      <span className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-1">{title}</span>
      <span className="text-4xl font-black tracking-tight mb-1">{value}</span>
      <span className="text-xs font-medium opacity-70">{subtitle}</span>
    </motion.div>
  );
};
