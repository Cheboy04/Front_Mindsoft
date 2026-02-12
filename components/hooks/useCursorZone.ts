'use client';

import { useEffect, useRef } from 'react';
import { useCursor } from '@/components/bits/effects/CursorProvider';

export function useCursorZone(zoneId: string) {
  const { registerZone, unregisterZone } = useCursor();
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      registerZone(zoneId);
    };

    const handleMouseLeave = () => {
      unregisterZone(zoneId);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      unregisterZone(zoneId);
    };
  }, [zoneId, registerZone, unregisterZone]);

  return elementRef;
}