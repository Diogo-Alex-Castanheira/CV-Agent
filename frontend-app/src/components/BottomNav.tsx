import React from 'react';
import { Home, Briefcase, Hand, BarChart2, Lightbulb } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const BottomNav: React.FC = () => {
  const { currentScreen, setCurrentScreen } = useAppContext();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'roles', label: 'Roles', icon: Briefcase },
    { id: 'swipe', label: 'Swipe', icon: Hand },
    { id: 'compare', label: 'Compare', icon: BarChart2 },
    { id: 'insights', label: 'Insights', icon: Lightbulb },
  ] as const;

  return (
    <nav className="floating-nav w-[90%] max-w-md">
      {navItems.map(({ id, label, icon: Icon }) => {
        const isActive = currentScreen === id;
        return (
          <button
            key={id}
            onClick={() => setCurrentScreen(id)}
            className={`nav-item flex-1 ${isActive ? 'active' : ''}`}
          >
            <Icon size={20} className="mb-1" />
            <span className="text-[10px] uppercase tracking-wider font-bold">{label}</span>
          </button>
        );
      })}
    </nav>
  );
};
