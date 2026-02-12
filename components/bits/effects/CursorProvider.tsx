'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { TargetCursor } from '@/components/bits/TargetCursor';

interface CursorContextType {
  registerZone: (id: string) => void;
  unregisterZone: (id: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  registerZone: () => {},
  unregisterZone: () => {},
});

export function CursorProvider({ children }: { children: ReactNode }) {
  const [activeZones, setActiveZones] = useState<Set<string>>(new Set());

  const registerZone = useCallback((id: string) => {
    setActiveZones((prev) => new Set(prev).add(id));
  }, []);

  const unregisterZone = useCallback((id: string) => {
    setActiveZones((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const isActive = activeZones.size > 0;

  return (
    <CursorContext.Provider value={{ registerZone, unregisterZone }}>
      {children}
      {isActive && (
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
      )}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within CursorProvider');
  }
  return context;
}