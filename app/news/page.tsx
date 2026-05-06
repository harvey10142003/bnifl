import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { NewsCard } from '@/components/ui/NewsCard';
import { news } from '@/lib/data/news';

export const metadata: Metadata = {
  title: '最新消息',
  description: '富聯白金分會主題簡報、會員專訪、活動公告與媒體報導。'
};

const categories = ['全部', '主題簡報', '會員專訪', '活動公告', '媒體報導'] as const;

export default function NewsPage({
  searchParams
}: {
  searchParams: { c?: string };
}) {
  const cat = searchParams.c;
  const filtered = cat && cat !== '全部' ? news.filter((n) => n.category === cat) : news;
  const [featured, ...rest] = filtered;

  return (
    <>
      <PageHero
        eyebrow="LATEST INSIGHTS"
        titleLines={['每週主題沉澱', '每場故事傳遞']}
        description="從週四清晨的主題簡報 到鏡頭外的真實會員故事"
      />

      {/* CATEGORY FILTER */}
      <section className="border-b border-ink-100 bg-pearl-100">
        <div className="container-bnifl py-5">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((c) => {
              const active = (cat ?? '全部') === c;
              return (
                <a
                  key={c}
                  href={c === '全部' ? '/news' : `/news?c=${c}`}
                  className={`px-4 py-2 text-sm whitespace-nowrap border transition-all ${
                    active
                      ? 'bg-ink-900 text-pearl border-ink-900'
                      : 'border-ink-200 text-ink-500 hover:border-ink-900 hover:text-ink-900'
                  }`}
                >
                  {c}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <Section>
          <div className="container-bnifl">
            <Reveal>
              <NewsCard item={featured} featured />
            </Reveal>
          </div>
        </Section>
      )}

      {/* GRID */}
      {rest.length > 0 && (
        <Section className="bg-pearl-200 pt-0">
          <div className="container-bnifl pt-20">
            <div className="grid gap-12 lg:grid-cols-3">
              {rest.map((n, i) => (
                <Reveal key={n.slug} delay={(i % 6) * 0.06}>
                  <NewsCard item={n} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
