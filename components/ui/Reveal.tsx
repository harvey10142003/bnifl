import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Reveal({
  children,
  delay = 0,
  className
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      data-reveal=""
      data-reveal-delay={delay > 0 ? delay : undefined}
      className={cn('reveal-init', className)}
    >
      {children}
    </div>
  );
}
