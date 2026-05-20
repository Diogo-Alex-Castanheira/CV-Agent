import React from 'react';
import { BottomNav } from './BottomNav';
import { Sparkles } from 'lucide-react';

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen pb-24 relative overflow-hidden bg-cream">
      {/* Decorative Blobs */}
      <div className="blob-1"></div>
      <div className="blob-2"></div>
      <div className="blob-3"></div>

      <header className="px-6 py-8 relative z-10 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-dark flex items-center gap-2">
            ThinkRight <Sparkles className="text-accent-purple" size={24} />
          </h1>
          <p className="text-text-secondary text-sm font-medium mt-1">Intelligent Talent Matching</p>
        </div>
      </header>

      <main className="px-6 relative z-10">
        {children}
      </main>

      <BottomNav />
    </div>
  );
};
