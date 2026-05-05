import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Users, ArrowRight, Quote } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';
import { successStories, monthlyResults } from '@/lib/data/results';
import { site } from '@/lib/data/site';

export const metadata: Metadata = {
  title: '引薦戰績',
  description: '富聯白金分會 5 年累計 2.85 億元引薦金額，1240+ 筆真實商業託付。'
};

export default function ResultsPage() {
  const maxAmount = Math.max(...monthlyResults.map((r) => r.amount));

  return (
    <>
      <PageHero
        eyebrow="REFERRAL RESULTS"
        title="2.85 億的累計引薦金額，是信任的回聲。"
        description="這不是業績統計，而是 1,240 次真實的商業託付。每一筆引薦背後，都是一段故事、一份信任。"
      />

      {/* BIG STATS */}
      <Section>
        <div className="container-bnifl">
          <div className="grid gap-px bg-ink-100 border border-ink-100 lg:grid-cols-3">
            <div className="bg-pearl p-10 lg:p-14">
              <div className="eyebrow mb-4 text-platinum-600">CUMULATIVE</div>
              <div className="font-sans font-black text-6xl lg:text-7xl text-ink-900 mb-2">
                <Counter to={site.stats.referralAmount / 100_000_000} decimals={2} />
                <span className="text-3xl ml-2">億</span>
              </div>
              <div className="text-sm text-ink-500">累計引薦金額（NT$）</div>
            </div>
            <div className="bg-pearl p-10 lg:p-14">
              <div className="eyebrow mb-4 text-platinum-600">REFERRALS</div>
              <div className="font-sans font-black text-6xl lg:text-7xl text-ink-900 mb-2">
                <Counter to={site.stats.referralCount} />
                <span className="text-3xl ml-2">筆</span>
              </div>
              <div className="text-sm text-ink-500">真實引薦案件</div>
            </div>
            <div className="bg-pearl p-10 lg:p-14">
              <div className="eyebrow mb-4 text-platinum-600">AVG / MEMBER</div>
              <div className="font-sans font-black text-6xl lg:text-7xl text-ink-900 mb-2">
                <Counter to={Math.round(site.stats.referralAmount / site.stats.members / 10_000)} />
                <span className="text-3xl ml-2">萬</span>
              </div>
              <div className="text-sm text-ink-500">每位會員平均獲得</div>
            </div>
          </div>
        </div>
      </Section>

      {/* MONTHLY CHART */}
      <Section className="bg-pearl-200">
        <div className="container-bnifl">
          <SectionHeader
            eyebrow="MONTHLY REFERRALS"
            title="近 6 個月引薦金額成長軌跡。"
            description="我們的數字每週公開、每月結算、每季度檢視。透明度本身就是品質保證。"
          />
          <Reveal>
            <div className="bg-pearl border border-ink-100 p-8 lg:p-12">
              <div className="grid grid-cols-6 gap-4 lg:gap-8 items-end h-64 mb-6">
                {monthlyResults.map((r, i) => {
                  const heightPct = (r.amount / maxAmount) * 100;
                  return (
                    <div key={r.month} className="flex flex-col items-center gap-3">
                      <div className="w-full flex flex-col items-center gap-2">
                        <div className="text-xs font-sans font-black text-ink-700">
                          {(r.amount / 10_000_000).toFixed(1)}千萬
                        </div>
                        <div
                          className="w-full bg-gradient-platinum transition-all duration-1000"
                          style={{ height: `${heightPct * 2}px`, animationDelay: `${i * 100}ms` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-6 gap-4 lg:gap-8 border-t border-ink-100 pt-4">
                {monthlyResults.map((r) => (
                  <div key={r.month} className="text-center">
                    <div className="text-xs text-ink-500">{r.month.slice(2).replace('-', '/')}</div>
                    <div className="text-[10px] text-ink-400 mt-1">{r.count} 筆</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SUCCESS STORIES */}
      <Section>
        <div className="container-bnifl">
          <SectionHeader
            eyebrow="SUCCESS STORIES"
            title="每一筆引薦背後，都有一段故事。"
            description="精選會員之間的真實合作案例，看看富聯如何把一杯咖啡的相遇，變成數百萬的事業突破。"
          />
          <div className="space-y-12">
            {successStories.map((story, i) => (
              <Reveal key={story.slug} delay={i * 0.05}>
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-16 border-t border-ink-100 pt-12">
                  <div className="lg:col-span-4">
                    <div className="font-sans font-black text-platinum-500 text-5xl mb-4">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="text-xs tracking-widest-2 uppercase text-platinum-600 mb-3">
                      {story.year}
                    </div>
                    <div className="font-sans font-black text-3xl text-ink-900 mb-4">{story.amount}</div>
                    <div className="text-sm text-ink-500">引薦金額</div>
                  </div>
                  <div className="lg:col-span-8">
                    <h3 className="font-sans font-black text-2xl md:text-3xl text-ink-900 mb-6 text-balance">
                      {story.title}
                    </h3>
                    <p className="text-ink-500 leading-relaxed mb-8">{story.story}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <div>
                        <div className="text-xs text-ink-400 mb-1">引薦人</div>
                        <div className="font-medium text-ink-900">{story.fromMember}</div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-platinum-500" />
                      <div>
                        <div className="text-xs text-ink-400 mb-1">受薦人</div>
                        <div className="font-medium text-ink-900">{story.toMember}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark className="text-center">
        <div className="container-bnifl">
          <Reveal>
            <Quote className="h-10 w-10 text-platinum-400 mx-auto mb-6" />
            <p className="font-sans font-black text-2xl md:text-3xl text-pearl text-balance max-w-3xl mx-auto leading-relaxed">
              「商業最遠的距離，不是地理，
              <br />
              而是缺少一位真正願意為你引薦的朋友。」
            </p>
            <div className="mt-12 flex justify-center flex-wrap gap-4">
              <Link href="/visit" className="btn-platinum">
                預約參訪
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/members"
                className="btn border border-pearl/30 text-pearl hover:bg-pearl hover:text-ink-900"
              >
                認識會員
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
