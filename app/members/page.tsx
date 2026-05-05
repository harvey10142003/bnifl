import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { MemberCard } from '@/components/ui/MemberCard';
import { members } from '@/lib/data/members';
import { industries } from '@/lib/data/industries';

export const metadata: Metadata = {
  title: '會員專區',
  description: '富聯白金分會會員產業介紹與專業服務'
};

export default function MembersPage({
  searchParams
}: {
  searchParams: { industry?: string };
}) {
  const filterIndustry = searchParams.industry;
  const filtered = filterIndustry
    ? members.filter((m) => m.industry === filterIndustry)
    : members;
  const activeIndustry = industries.find((i) => i.slug === filterIndustry);

  return (
    <>
      <PageHero
        eyebrow="MEMBERS"
        title={activeIndustry ? `${activeIndustry.name}產業會員` : '14 個產業．60+ 位專業會員'}
        description={
          activeIndustry?.description ??
          '從財務金融到生活美學，富聯白金分會匯聚高雄各產業菁英，為你提供全方位專業服務。'
        }
      />

      {/* FILTER */}
      <section className="border-b border-ink-100 bg-pearl-100 sticky top-20 z-40 backdrop-blur">
        <div className="container-bnifl py-5">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            <Link
              href="/members"
              className={`px-4 py-2 text-sm whitespace-nowrap border transition-all ${
                !filterIndustry
                  ? 'bg-ink-900 text-pearl border-ink-900'
                  : 'border-ink-200 text-ink-500 hover:border-ink-900 hover:text-ink-900'
              }`}
            >
              全部會員（{members.length}）
            </Link>
            {industries.map((ind) => {
              const count = members.filter((m) => m.industry === ind.slug).length;
              if (count === 0) return null;
              const active = filterIndustry === ind.slug;
              return (
                <Link
                  key={ind.slug}
                  href={`/members?industry=${ind.slug}`}
                  className={`px-4 py-2 text-sm whitespace-nowrap border transition-all ${
                    active
                      ? 'bg-ink-900 text-pearl border-ink-900'
                      : 'border-ink-200 text-ink-500 hover:border-ink-900 hover:text-ink-900'
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
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-ink-500">此產業目前虛位以待，期待你的加入。</p>
              <Link href="/visit" className="btn-platinum mt-6">
                預約參訪
              </Link>
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
