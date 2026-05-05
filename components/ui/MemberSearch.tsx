'use client';

import { useEffect, useState, useTransition } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Search, X } from 'lucide-react';

export function MemberSearch({ placeholder = '搜尋姓名、公司、服務項目...' }: { placeholder?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams?.get('q') ?? '');
  const [, startTransition] = useTransition();

  // 跟 URL 同步：當 ?q= 改變時更新本地 state
  useEffect(() => {
    setValue(searchParams?.get('q') ?? '');
  }, [searchParams]);

  // 輸入時 debounce 更新 URL
  useEffect(() => {
    const t = setTimeout(() => {
      const params = new URLSearchParams(searchParams?.toString() ?? '');
      if (value.trim()) params.set('q', value.trim());
      else params.delete('q');
      const next = `${pathname}${params.toString() ? '?' + params.toString() : ''}`;
      startTransition(() => router.replace(next, { scroll: false }));
    }, 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-300 pointer-events-none" />
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label="搜尋會員"
        className="w-full pl-11 pr-10 py-3 bg-pearl border border-ink-200 text-sm text-ink-700 placeholder:text-ink-300 focus:border-teal-500 focus:outline-none transition-colors"
      />
      {value && (
        <button
          type="button"
          onClick={() => setValue('')}
          aria-label="清除搜尋"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-ink-500 hover:bg-ink-200 transition-colors"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
