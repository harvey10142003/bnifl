'use client';

import { useState } from 'react';
import { MapPin, Play } from 'lucide-react';

export function MapFacade({
  title = '例會地點地圖',
  embedSrc,
  fallbackHref,
  label
}: {
  title?: string;
  embedSrc: string;
  fallbackHref: string;
  label: string;
}) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="aspect-[4/3] bg-ink-700 border border-ink-700 overflow-hidden">
        <iframe
          src={embedSrc}
          width="100%"
          height="100%"
          loading="lazy"
          className="grayscale"
          title={title}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      onMouseEnter={() => {
        if (typeof window !== 'undefined') {
          const link = document.createElement('link');
          link.rel = 'preconnect';
          link.href = 'https://www.google.com';
          document.head.appendChild(link);
        }
      }}
      aria-label={`載入${title}`}
      className="group aspect-[4/3] w-full bg-ink-700 border border-ink-700 overflow-hidden relative flex items-center justify-center text-pearl cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500"
    >
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-ink-700 to-ink-900"
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-4 text-center px-6">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/20 group-hover:bg-teal-500/30 transition-colors">
          <MapPin className="h-6 w-6 text-teal-400" />
        </div>
        <div>
          <div className="font-sans font-black text-lg mb-1">{label}</div>
          <div className="text-sm text-ink-200 flex items-center gap-2 justify-center">
            <Play className="h-3 w-3 fill-current" />
            點擊載入互動地圖
          </div>
        </div>
        <a
          href={fallbackHref}
          target="_blank"
          rel="noopener"
          onClick={(e) => e.stopPropagation()}
          className="text-xs text-teal-400 hover:text-teal-300 underline-offset-4 hover:underline"
        >
          或在 Google Maps 開啟 →
        </a>
      </div>
    </button>
  );
}
