import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Quote, Sparkles } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';
import { MemberCard } from '@/components/ui/MemberCard';
import { NewsCard } from '@/components/ui/NewsCard';
import { site } from '@/lib/data/site';
import { members, officers } from '@/lib/data/members';
import { news } from '@/lib/data/news';
import { industries } from '@/lib/data/industries';
import { successStories } from '@/lib/data/results';

export default function HomePage() {
  const featuredMembers = officers.slice(0, 4);
  const latestNews = news.slice(0, 3);
  const featuredStory = successStories[0];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-900 text-pearl">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-platinum-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-platinum-700/10 blur-3xl" />

        <div className="container-bnifl relative grid gap-16 py-24 lg:grid-cols-12 lg:py-36">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal>
              <div className="eyebrow text-platinum-400 mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-platinum-500" />
                <span>BNI Fulian Platinum Chapter · Kaohsiung</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-serif text-display-xl text-pearl leading-[1.05] text-balance">
                在高雄
                <br />
                <span className="platinum-text">建立信任</span>，
                <br />
                串聯一輩子的商機。
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-200">
                {site.description}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/visit" className="btn-platinum">
                  預約參訪
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="btn border border-pearl/30 text-pearl hover:bg-pearl hover:text-ink-900"
                >
                  了解富聯
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 gap-px bg-ink-700/50 border border-ink-700/50">
                {[
                  { value: site.stats.members, label: '專業會員', suffix: ' 位' },
                  { value: site.stats.industries, label: '產業類別', suffix: ' 組' },
                  { value: site.stats.referralAmount / 10000, label: '累計引薦金額', suffix: ' 萬' },
                  { value: site.stats.yearsActive, label: '深耕高雄', suffix: ' 年' }
                ].map((stat) => (
                  <div key={stat.label} className="bg-ink-900 p-6 lg:p-8">
                    <div className="font-serif text-4xl lg:text-5xl text-platinum-400">
                      <Counter to={stat.value} />
                      <span className="text-xl ml-1">{stat.suffix}</span>
                    </div>
                    <div className="mt-3 text-xs tracking-widest-2 uppercase text-ink-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-platinum-400 animate-shimmer">
          <Sparkles className="h-5 w-5" />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <Section>
        <div className="container-bnifl grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="OUR PHILOSOPHY"
              title="只有合作，沒有競爭。"
              description="我們相信，最持久的商業關係建立在信任之上。每位富聯會員每週例會帶著真實引薦來，也帶著彼此的事業願景離開。"
            />
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-sm font-medium tracking-wider uppercase text-ink-900 border-b border-platinum-500 pb-1 hover:text-platinum-700 transition-colors"
            >
              認識富聯故事
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid gap-px bg-ink-100 border border-ink-100 sm:grid-cols-2">
            {[
              {
                num: '01',
                title: '付出者收穫',
                desc: 'Givers Gain® 不是口號，而是 40 年驗證的商業真理。'
              },
              {
                num: '02',
                title: '高信任低壓力',
                desc: '每週例會深度交流，讓商機在自然的關係中發生。'
              },
              {
                num: '03',
                title: '產業互不重疊',
                desc: '一個產業一席會員，避免內部競爭，專注合作。'
              },
              {
                num: '04',
                title: '可衡量的成果',
                desc: '每筆引薦、每張感謝卡、每位轉介紹皆可追蹤量化。'
              }
            ].map((item) => (
              <Reveal key={item.num}>
                <div className="bg-pearl p-8 lg:p-10 h-full">
                  <div className="font-serif text-platinum-500 text-2xl mb-4">— {item.num}</div>
                  <h3 className="font-serif text-2xl text-ink-900 mb-3">{item.title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section dark className="overflow-hidden">
        <div className="container-bnifl">
          <SectionHeader
            eyebrow="INDUSTRIES"
            title="14 個產業，一個信任網絡。"
            description="從財務金融到生活美學，富聯白金分會橫跨高雄主流產業；不重疊、不競爭，只專注於彼此的成長。"
            light
          />
          <div className="grid gap-px bg-ink-700/50 border border-ink-700/50 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.04}>
                <Link
                  href={`/members?industry=${ind.slug}`}
                  className="block bg-ink-900 p-8 hover:bg-ink-700 transition-colors h-full group"
                >
                  <div className="font-serif text-platinum-400 text-sm mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-serif text-xl text-pearl mb-2 group-hover:text-platinum-400 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-ink-300 leading-relaxed">{ind.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* OFFICERS */}
      <Section>
        <div className="container-bnifl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 md:mb-20 gap-6">
            <div className="max-w-2xl">
              <div className="eyebrow mb-5">OUR LEADERS</div>
              <h2 className="font-serif text-display-md text-balance">
                由經驗豐富的領導團隊，為您引介可靠的合作夥伴。
              </h2>
            </div>
            <Link href="/members" className="btn-outline self-start">
              全體會員
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredMembers.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.08}>
                <MemberCard member={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SUCCESS STORY */}
      <Section className="bg-pearl-200">
        <div className="container-bnifl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="REFERRAL STORIES"
                title="每一個引薦，都是真實的商業故事。"
                description="這不是業績，這是信任的回聲。"
              />
              <Link href="/results" className="btn-outline">
                看更多戰績
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <div className="relative bg-pearl border border-ink-100 p-10 md:p-14">
                  <Quote className="absolute -top-5 -left-5 h-12 w-12 bg-gradient-platinum p-3 text-ink-900" />
                  <div className="text-xs tracking-widest-2 uppercase text-platinum-600 mb-4">
                    {featuredStory.year} ／ 引薦金額 {featuredStory.amount}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-ink-900 mb-6 text-balance">
                    {featuredStory.title}
                  </h3>
                  <p className="text-ink-500 leading-relaxed mb-8">{featuredStory.story}</p>
                  <div className="flex items-center justify-between border-t border-ink-100 pt-6 text-sm">
                    <div>
                      <div className="text-ink-400 text-xs mb-1">引薦人</div>
                      <div className="font-medium text-ink-900">{featuredStory.fromMember}</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-platinum-500" />
                    <div className="text-right">
                      <div className="text-ink-400 text-xs mb-1">受薦人</div>
                      <div className="font-medium text-ink-900">{featuredStory.toMember}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* NEWS */}
      <Section>
        <div className="container-bnifl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 md:mb-20 gap-6">
            <div className="max-w-2xl">
              <div className="eyebrow mb-5">LATEST INSIGHTS</div>
              <h2 className="font-serif text-display-md text-balance">
                最新消息與每週主題簡報。
              </h2>
            </div>
            <Link href="/news" className="btn-outline self-start">
              所有消息
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-12 lg:grid-cols-3">
            {latestNews.map((n, i) => (
              <Reveal key={n.slug} delay={i * 0.08}>
                <NewsCard item={n} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative bg-ink-900 text-pearl overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-platinum-500/10 blur-3xl" />
        <div className="container-bnifl relative py-24 md:py-32 text-center">
          <Reveal>
            <div className="eyebrow text-platinum-400 mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-platinum-500" />
              <span>JOIN US</span>
              <span className="h-px w-10 bg-platinum-500" />
            </div>
            <h2 className="font-serif text-display-lg text-pearl text-balance max-w-3xl mx-auto">
              來一場早餐會，
              <br />
              讓你的事業更大、更好、更輕鬆。
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-ink-200">
              {site.meeting.day} {site.meeting.time}　·　{site.meeting.location}
            </p>
            <div className="mt-10 flex justify-center flex-wrap gap-4">
              <Link href="/visit" className="btn-platinum">
                預約參訪
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="btn border border-pearl/30 text-pearl hover:bg-pearl hover:text-ink-900"
              >
                聯絡我們
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
