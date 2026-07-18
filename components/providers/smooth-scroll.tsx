'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from 'framer-motion';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      const href = anchor?.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -72 });
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, [reduceMotion]);

  return <>{children}</>;
}
