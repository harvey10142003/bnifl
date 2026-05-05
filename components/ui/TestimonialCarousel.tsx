'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Member } from '@/lib/data/members';
import type { Testimonial } from '@/lib/data/testimonials';
import type { Industry } from '@/lib/data/industries';

type Item = Testimonial & { member: Member; industry?: Industry };

export function TestimonialCarousel({
  items,
  autoplayMs = 6000
}: {
  items: Item[];
  autoplayMs?: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Autoplay
  useEffect(() => {
    if (paused || items.length < 2) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % items.length), autoplayMs);
    return () => clearTimeout(t);
  }, [active, paused, autoplayMs, items.length]);

  const go = (delta: number) =>
    setActive((i) => (i + delta + items.length) % items.length);

  if (items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      className="relative"
      role="region"
      aria-label="會員推薦語錄輪播"
    >
      <div className="relative overflow-hidden rounded-2xl bg-pearl border border-ink-100">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.memberSlug}
              className="min-w-full p-8 md:p-14 lg:p-16 grid gap-8 lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-3 flex lg:justify-center">
                <Link
                  href={`/members/${item.member.slug}`}
                  className="group relative block w-32 h-40 md:w-40 md:h-52 overflow-hidden rounded-2xl bg-ink-700"
                >
                  <Image
                    src={item.member.avatar}
                    alt={item.member.name}
                    fill
                    sizes="160px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
              </div>
              <div className="lg:col-span-9">
                <Quote className="h-10 w-10 text-teal-500 mb-4" />
                <blockquote className="text-xl md:text-2xl text-ink-700 leading-relaxed text-balance mb-6 font-medium">
                  「{item.quote}」
                </blockquote>
                <div className="flex flex-wrap items-baseline gap-3 text-sm">
                  <Link
                    href={`/members/${item.member.slug}`}
                    className="font-sans font-bold text-base text-ink-700 hover:text-teal-700 transition-colors"
                  >
                    {item.member.name}
                  </Link>
                  <span className="text-ink-400">·</span>
                  <span className="text-ink-500">{item.member.title} ／ {item.member.company}</span>
                  {item.industry && (
                    <>
                      <span className="text-ink-400">·</span>
                      <span className="badge-outline">{item.industry.name}</span>
                    </>
                  )}
                  <span className="text-ink-400">·</span>
                  <span className="text-teal-600">入會 {item.yearsAsMember} 年</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {items.length > 1 && (
        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2" role="tablist" aria-label="推薦語錄分頁">
            {items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`第 ${i + 1} 則`}
                onClick={() => setActive(i)}
                className={cn(
                  'h-2 rounded-full transition-all duration-500',
                  i === active ? 'w-10 bg-teal-500' : 'w-2 bg-ink-200 hover:bg-ink-300'
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="上一則"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-700 hover:border-teal-500 hover:text-teal-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="下一則"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-700 hover:border-teal-500 hover:text-teal-600 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
