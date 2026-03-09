import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface ProgressState {
  queHacemosUnlocked: boolean;
  moduloSSTUnlocked: boolean;
  modulo3Unlocked: boolean;
  completedProcessModules: number[];
  completedSupportModules: number[];
}

interface ProgressContextType extends ProgressState {
  setQueHacemosUnlocked: (v: boolean) => void;
  setModuloSSTUnlocked: (v: boolean) => void;
  setModulo3Unlocked: (v: boolean) => void;
  setCompletedProcessModules: React.Dispatch<React.SetStateAction<number[]>>;
  setCompletedSupportModules: React.Dispatch<React.SetStateAction<number[]>>;
  addCompletedProcessModule: (id: number) => void;
  addCompletedSupportModule: (id: number) => void;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
};

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [queHacemosUnlocked, setQueHacemosUnlocked] = useState(false);
  const [moduloSSTUnlocked, setModuloSSTUnlocked] = useState(false);
  const [modulo3Unlocked, setModulo3Unlocked] = useState(false);
  const [completedProcessModules, setCompletedProcessModules] = useState<number[]>([]);
  const [completedSupportModules, setCompletedSupportModules] = useState<number[]>([]);

  // Restore from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('userProgress');
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress);
        setQueHacemosUnlocked(progress.queHacemosUnlocked || false);
        setModuloSSTUnlocked(progress.moduloSSTUnlocked || false);
        setModulo3Unlocked(progress.modulo3Unlocked || false);
        setCompletedProcessModules(progress.completedProcessModules || []);
        setCompletedSupportModules(progress.completedSupportModules || []);
      } catch {
        // Corrupted data, start fresh
      }
    }
  }, []);

  // Save to localStorage on changes
  useEffect(() => {
    const progress: ProgressState = {
      queHacemosUnlocked,
      moduloSSTUnlocked,
      modulo3Unlocked,
      completedProcessModules,
      completedSupportModules,
    };
    localStorage.setItem('userProgress', JSON.stringify(progress));
  }, [queHacemosUnlocked, moduloSSTUnlocked, modulo3Unlocked, completedProcessModules, completedSupportModules]);

  const addCompletedProcessModule = useCallback((id: number) => {
    setCompletedProcessModules(prev => prev.includes(id) ? prev : [...prev, id]);
  }, []);

  const addCompletedSupportModule = useCallback((id: number) => {
    setCompletedSupportModules(prev => prev.includes(id) ? prev : [...prev, id]);
  }, []);

  return (
    <ProgressContext.Provider value={{
      queHacemosUnlocked, setQueHacemosUnlocked,
      moduloSSTUnlocked, setModuloSSTUnlocked,
      modulo3Unlocked, setModulo3Unlocked,
      completedProcessModules, setCompletedProcessModules,
      completedSupportModules, setCompletedSupportModules,
      addCompletedProcessModule,
      addCompletedSupportModule,
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
