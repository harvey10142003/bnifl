'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navItems, site } from '@/lib/data/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open
          ? 'bg-pearl/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,20,38,0.06)]'
          : 'bg-transparent'
      )}
    >
      <div className="container-bnifl flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center bg-gradient-platinum">
            <span className="font-serif text-lg font-bold text-ink-900">福</span>
            <div className="absolute -inset-px border border-platinum-600/30" />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-base font-semibold text-ink-900">{site.shortName}</div>
            <div className="text-[10px] tracking-widest-2 uppercase text-ink-400">BNI Platinum</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group relative text-sm font-medium tracking-wider transition-colors',
                  active ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px bg-platinum-500 transition-all duration-300',
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/visit" className="btn-platinum">
            預約參訪
          </Link>
        </div>

        <button
          aria-label={open ? '關閉選單' : '開啟選單'}
          className="lg:hidden p-2 text-ink-900"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-100 bg-pearl">
          <nav className="container-bnifl flex flex-col py-6 gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'py-3 text-base font-medium border-l-2 pl-4 transition-colors',
                    active
                      ? 'border-platinum-500 text-ink-900'
                      : 'border-transparent text-ink-500 hover:border-platinum-300 hover:text-ink-900'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/visit" className="btn-platinum mt-4 w-full">
              預約參訪
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
