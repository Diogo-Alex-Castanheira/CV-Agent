import React from 'react';
import { useAppContext } from './context/AppContext';
import { AppShell } from './components/AppShell';
// Placeholder imports for screens
import { HomeScreen } from './screens/HomeScreen';
import { RolesScreen } from './screens/RolesScreen';
import { SwipeScreen } from './screens/SwipeScreen';
import { CandidateDetailScreen } from './screens/CandidateDetailScreen';
import { ComparisonScreen } from './screens/ComparisonScreen';
import { InsightsScreen } from './screens/InsightsScreen';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const { currentScreen } = useAppContext();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <HomeScreen />;
      case 'roles': return <RolesScreen />;
      case 'swipe': return <SwipeScreen />;
      case 'detail': return <CandidateDetailScreen />;
      case 'compare': return <ComparisonScreen />;
      case 'insights': return <InsightsScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </AppShell>
  );
}

export default App;
