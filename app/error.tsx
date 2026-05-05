'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-ink-900 text-pearl min-h-[80vh] flex items-center">
      <div className="container-bnifl text-center py-20">
        <div className="font-serif text-[120px] md:text-[200px] leading-none platinum-text mb-6">
          500
        </div>
        <h1 className="font-serif text-display-md text-pearl mb-4">系統暫時忙線</h1>
        <p className="text-ink-300 mb-10 max-w-md mx-auto">
          頁面載入時發生了一點小狀況，您可以重試或回到首頁。
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={reset} className="btn-platinum">重新整理</button>
          <Link href="/" className="btn border border-pearl/30 text-pearl hover:bg-pearl hover:text-ink-900">返回首頁</Link>
        </div>
      </div>
    </section>
  );
}
