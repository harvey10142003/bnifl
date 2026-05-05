'use client';

import Link from 'next/link';
import Image from 'next/image';
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
          ? 'bg-pearl/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(31,45,61,0.08)]'
          : 'bg-pearl/80 backdrop-blur-sm'
      )}
    >
      <div className="container-bnifl flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Image
            src="/images/logo-horizontal.png"
            alt={site.name}
            width={220}
            height={56}
            priority
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group relative text-sm font-semibold tracking-wider transition-colors',
                  active ? 'text-ink-700' : 'text-ink-500 hover:text-ink-700'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px bg-teal-500 transition-all duration-300',
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/visit" className="btn-teal">
            預約參訪
          </Link>
        </div>

        <button
          aria-label={open ? '關閉選單' : '開啟選單'}
          className="lg:hidden p-2 text-ink-700"
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
                    'py-3 text-base font-semibold border-l-2 pl-4 transition-colors',
                    active
                      ? 'border-teal-500 text-ink-700'
                      : 'border-transparent text-ink-500 hover:border-teal-300 hover:text-ink-700'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/visit" className="btn-teal mt-4 w-full">
              預約參訪
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
