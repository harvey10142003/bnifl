import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';

export function PageHero({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-pearl">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-[0.06] pointer-events-none mix-blend-screen hidden md:block">
        <Image
          src="/images/logo-vertical.png"
          alt=""
          fill
          className="object-contain"
          priority={false}
          aria-hidden="true"
        />
      </div>
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-teal-500/15 blur-3xl" />
      <div className="container-bnifl relative py-24 md:py-32">
        <Reveal>
          <div className="eyebrow text-teal-400 mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-teal-500" />
            <span>{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-sans font-black text-display-lg text-pearl text-balance max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl body-lg text-ink-200">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
