import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { News } from '@/lib/data/news';

export function NewsCard({ item, featured }: { item: News; featured?: boolean }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className={`group block overflow-hidden ${featured ? 'lg:grid lg:grid-cols-2 lg:gap-12' : ''}`}
    >
      <div
        className={`relative overflow-hidden bg-ink-900 ${
          featured ? 'aspect-[4/3] lg:aspect-[5/4]' : 'aspect-[16/10]'
        }`}
      >
        <Image
          src={item.cover}
          alt={item.title}
          fill
          sizes={featured ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-pearl px-3 py-1 text-[11px] tracking-widest-2 uppercase font-medium text-ink-900">
          {item.category}
        </div>
      </div>
      <div className={featured ? 'pt-8 lg:pt-0 lg:flex lg:flex-col lg:justify-center' : 'pt-6'}>
        <div className="flex items-center gap-3 text-xs text-ink-400 mb-3">
          <time>{formatDate(item.publishedAt)}</time>
          {item.week && <span className="text-platinum-600">第 {item.week} 週</span>}
        </div>
        <h3
          className={`font-serif text-balance text-ink-900 transition-colors group-hover:text-platinum-700 mb-3 ${
            featured ? 'text-display-sm' : 'text-xl md:text-2xl'
          }`}
        >
          {item.title}
        </h3>
        <p className="text-ink-500 line-clamp-2">{item.excerpt}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-platinum-700">
          閱讀更多
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
