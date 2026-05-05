import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Section({
  children,
  className,
  dark
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={cn(
        'relative py-20 md:py-28 lg:py-32',
        dark ? 'bg-ink-900 text-pearl' : 'bg-pearl text-ink-900',
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  light
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        'mb-14 md:mb-20 max-w-3xl',
        align === 'center' && 'mx-auto text-center'
      )}
    >
      {eyebrow && (
        <div className={cn('eyebrow mb-5', align === 'center' && 'flex items-center justify-center gap-3')}>
          {align === 'center' && <span className="h-px w-8 bg-platinum-500" />}
          <span>{eyebrow}</span>
          {align === 'center' && <span className="h-px w-8 bg-platinum-500" />}
        </div>
      )}
      <h2
        className={cn(
          'font-sans font-black text-display-md text-balance',
          light ? 'text-pearl' : 'text-ink-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-6 body-lg text-pretty',
            light ? 'text-ink-300' : 'text-ink-500'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
