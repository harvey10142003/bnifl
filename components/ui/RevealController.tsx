'use client';

import { useEffect } from 'react';

export function RevealController() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!els.length) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) return; // 已經是 visible（沒加 .reveal-pending），直接結束

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

    const vh = window.innerHeight;
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < vh * 0.95 && rect.bottom > 0;
      // above-the-fold 元素：保持 server-rendered visible state，不觀察、不加 pending
      // below-the-fold 元素：加 pending（觸發 opacity:0 樣式），交給 IO 進場
      if (!inView) {
        el.classList.add('reveal-pending');
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, []);

  return null;
}
