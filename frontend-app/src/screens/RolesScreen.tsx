import React from 'react';
import { useAppContext } from '../context/AppContext';
import { RoleCard } from '../components/RoleCard';
import { motion } from 'framer-motion';
import { Role } from '../types';

export const RolesScreen: React.FC = () => {
  const { allRoles, setSelectedRole, setCurrentScreen } = useAppContext();

  const handleRoleClick = (role: Role) => {
    setSelectedRole(role);
    setCurrentScreen('swipe');
  };

  return (
    <div className="pb-10">
      <div className="mb-6">
        <h2 className="text-3xl font-black mb-1">Open Roles</h2>
        <p className="text-text-secondary font-medium">Select a role to review candidates.</p>
      </div>

      <div className="flex flex-col gap-5">
        {allRoles.map((role, idx) => (
          <RoleCard 
            key={role.id} 
            role={role} 
            onClick={() => handleRoleClick(role)} 
            delay={idx * 0.1} 
          />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="text-xs text-text-secondary font-medium uppercase tracking-widest">End of list</p>
      </motion.div>
    </div>
  );
};
