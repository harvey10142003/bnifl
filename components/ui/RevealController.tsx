'use client';

import { useEffect } from 'react';

export function RevealController() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-reveal-visible])')
    );
    if (!els.length) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      els.forEach((el) => el.setAttribute('data-reveal-visible', ''));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = el.getAttribute('data-reveal-delay');
          if (delay) {
            el.style.transitionDelay = `${parseFloat(delay) * 1000}ms`;
          }
          el.setAttribute('data-reveal-visible', '');
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
