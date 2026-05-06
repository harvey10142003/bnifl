import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { MemberCard } from '@/components/ui/MemberCard';
import { MemberSearch } from '@/components/ui/MemberSearch';
import { members } from '@/lib/data/members';
import { industries } from '@/lib/data/industries';

export const metadata: Metadata = {
  title: '會員專區',
  description: '富聯白金分會會員產業介紹與專業服務'
};

function matchSearch(m: (typeof members)[number], q: string) {
  const haystack = [
    m.name,
    m.title,
    m.company,
    ...(m.services ?? []),
    industries.find((i) => i.slug === m.industry)?.name ?? ''
  ]
    .join(' ')
    .toLowerCase();
  return haystack.includes(q.toLowerCase());
}

export default function MembersPage({
  searchParams
}: {
  searchParams: { industry?: string; q?: string };
}) {
  const filterIndustry = searchParams.industry;
  const query = searchParams.q?.trim() ?? '';

  let filtered = members;
  if (filterIndustry) filtered = filtered.filter((m) => m.industry === filterIndustry);
  if (query) filtered = filtered.filter((m) => matchSearch(m, query));

  const activeIndustry = industries.find((i) => i.slug === filterIndustry);

  return (
    <>
      <PageHero
        eyebrow="MEMBERS"
        titleLines={
          activeIndustry
            ? [`${activeIndustry.name}產業`, '富聯專業會員']
            : ['14 個產業匯流', '60+ 位專業會員']
        }
        description={
          activeIndustry?.description ??
          '從財務金融到生活美學 高雄產業菁英全方位專業服務'
        }
      />

      {/* FILTER + SEARCH */}
      <section className="border-b border-ink-100 bg-pearl-100 sticky top-20 z-40 backdrop-blur">
        <div className="container-bnifl py-5 space-y-3">
          <Suspense fallback={<div className="h-12" />}>
            <MemberSearch />
          </Suspense>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            <Link
              href={query ? `/members?q=${encodeURIComponent(query)}` : '/members'}
              className={`px-4 py-2 text-sm whitespace-nowrap rounded-full border transition-all ${
                !filterIndustry
                  ? 'bg-ink-700 text-pearl border-ink-700'
                  : 'border-ink-200 text-ink-500 hover:border-ink-700 hover:text-ink-700'
              }`}
            >
              全部會員（{members.length}）
            </Link>
            {industries.map((ind) => {
              const count = members.filter((m) => m.industry === ind.slug).length;
              if (count === 0) return null;
              const active = filterIndustry === ind.slug;
              const params = new URLSearchParams();
              params.set('industry', ind.slug);
              if (query) params.set('q', query);
              return (
                <Link
                  key={ind.slug}
                  href={`/members?${params.toString()}`}
                  className={`px-4 py-2 text-sm whitespace-nowrap rounded-full border transition-all ${
                    active
                      ? 'bg-ink-700 text-pearl border-ink-700'
                      : 'border-ink-200 text-ink-500 hover:border-ink-700 hover:text-ink-700'
                  }`}
                >
                  {ind.name}（{count}）
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Section>
        <div className="container-bnifl">
          {(query || filterIndustry) && (
            <p className="mb-8 text-sm text-ink-500">
              {filtered.length > 0
                ? `找到 ${filtered.length} 位會員${query ? ` 符合「${query}」` : ''}${activeIndustry ? `（${activeIndustry.name}）` : ''}`
                : `找不到符合條件的會員${query ? `（「${query}」）` : ''}`}
            </p>
          )}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-ink-500 mb-2">
                {query
                  ? '換個關鍵字試試，或瀏覽全部會員。'
                  : '此產業目前虛位以待，期待你的加入。'}
              </p>
              <div className="mt-6 flex justify-center gap-4">
                {query && (
                  <Link href="/members" className="btn-outline">
                    清除篩選
                  </Link>
                )}
                <Link href="/visit" className="btn-teal">
                  預約參訪
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((m, i) => (
                <Reveal key={m.slug} delay={(i % 8) * 0.05}>
                  <MemberCard member={m} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
