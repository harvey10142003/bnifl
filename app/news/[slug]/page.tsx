import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { NewsCard } from '@/components/ui/NewsCard';
import { news, newsBySlug } from '@/lib/data/news';
import { formatDate } from '@/lib/utils';

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const n = newsBySlug(params.slug);
  if (!n) return { title: '消息' };
  return { title: n.title, description: n.excerpt };
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const item = newsBySlug(params.slug);
  if (!item) notFound();
  const more = news.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink-900 text-pearl overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-bnifl relative py-20 md:py-28">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-platinum-400 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            返回最新消息
          </Link>
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gradient-platinum px-3 py-1 text-[11px] rounded-full tracking-widest-2 uppercase font-medium text-ink-900">
                {item.category}
              </span>
              {item.week && (
                <span className="text-xs text-platinum-400">第 {item.week} 週</span>
              )}
            </div>
            <h1 className="font-sans font-black text-display-lg text-pearl text-balance max-w-4xl">
              {item.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-ink-300">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formatDate(item.publishedAt)}
              </span>
              {item.author && (
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {item.author}
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* COVER */}
      <div className="bg-pearl border-b border-ink-100">
        <div className="container-bnifl py-12">
          <div className="aspect-[2/1] overflow-hidden bg-ink-900 rounded-2xl">
            <img src={item.cover} alt={item.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <Section>
        <div className="container-bnifl max-w-3xl">
          <p className="text-xl leading-relaxed text-ink-700 font-sans font-black mb-10 text-pretty border-l-2 border-teal-500 pl-6 rounded-r-md">
            {item.excerpt}
          </p>
          <div className="prose prose-lg max-w-none text-ink-700 leading-loose whitespace-pre-line">
            {item.content}
          </div>
          <div className="mt-16 pt-8 border-t border-ink-100 flex flex-wrap gap-4">
            <Link href="/news" className="btn-outline">
              <ArrowLeft className="h-4 w-4" />
              所有消息
            </Link>
            <Link href="/visit" className="btn-platinum">
              預約參訪
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* MORE */}
      <Section className="bg-pearl-200">
        <div className="container-bnifl">
          <div className="flex items-end justify-between mb-12 gap-6">
            <h2 className="font-sans font-black text-display-sm">更多消息</h2>
            <Link href="/news" className="btn-ghost">
              查看全部
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-12 lg:grid-cols-3">
            {more.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
