import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Award, Users, Repeat, TrendingUp, MapPin, Clock, ArrowRight, Check,
  Crown, Shield, BookOpen, Wallet, GraduationCap, UserCheck, Calendar
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { MapFacade } from '@/components/ui/MapFacade';
import { officers } from '@/lib/data/members';
import { roles, type RoleKey } from '@/lib/data/roles';
import { site } from '@/lib/data/site';

const ROLE_ICONS: Record<string, LucideIcon> = {
  Crown, Shield, BookOpen, Wallet, GraduationCap, UserCheck, Users, Calendar
};

export const metadata: Metadata = {
  title: '關於富聯',
  description: '認識 BNI 富聯白金分會的故事、領導團隊與例會資訊'
};

const values = [
  { icon: Award, title: 'Givers Gain®', desc: '付出者收穫，是 BNI 40 年驗證的核心精神。' },
  { icon: Users, title: '建立長期關係', desc: '每週見面建立信任，把陌生人變成家人。' },
  { icon: Repeat, title: '終身學習', desc: '每週主題簡報、季度培訓、年度大會持續精進。' },
  { icon: TrendingUp, title: '可衡量成果', desc: '所有引薦皆有金額追蹤，量化每位會員的貢獻。' }
];

const steps = [
  { num: '01', title: '預約參訪', desc: '線上填單登記，由訪客委員會聯繫確認席次。' },
  { num: '02', title: '出席例會', desc: '免費體驗早餐會 1–2 次，現場感受 BNI 文化。' },
  { num: '03', title: '提交申請', desc: '若認同分會理念，由會員提名後填寫入會申請書。' },
  { num: '04', title: '面試與入會', desc: '會員委員會審核產業重疊與背景，通過後入會。' }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT FULIAN"
        titleLines={['白金能量集結', '高雄商務家庭']}
        description="50 位企業主每週相聚 以 Givers Gain® 共寫商業故事"
      />

      {/* STORY */}
      <Section>
        <div className="container-bnifl grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-5">OUR STORY</div>
            <h2 className="font-sans font-black text-display-md text-balance mb-6">
              從一場早餐會，
              <br />
              到 50 家企業的信任網絡。
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-ink-500 leading-relaxed">
            <Reveal>
              <p>
                BNI 富聯白金分會於 2021 年在高雄成立，由一群相信「商業可以更溫暖」的企業主共同創立。
                我們選擇 BNI 全球體系作為運作框架，因為它在 75 個國家、30 萬會員身上驗證了一件事：
                <strong className="text-ink-900">最有效率的開發，從來不是冷拜訪，而是熱引薦。</strong>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                5 年來，我們秉持「白金」的初心 —— 純粹、長久、值得信賴。
                每週四清晨，我們在高雄福華大飯店相聚，帶著真實的引薦來，帶著彼此的事業願景離開。
                累計 2.85 億的引薦金額，背後是 1,240 筆真實的商業託付。
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                我們不追求最大的分會，但希望成為高雄最值得信賴的那一個。
                如果你正在尋找一群願意為你引薦、為你背書、為你長期投資的事業夥伴 ——
                <strong className="text-ink-900">歡迎走進富聯，與我們共寫下一個十年。</strong>
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* VALUES */}
      <Section className="bg-pearl-200">
        <div className="container-bnifl">
          <SectionHeader
            eyebrow="CORE VALUES"
            title="四大核心價值，撐起每一場早餐會。"
            align="center"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="bg-pearl border border-ink-100 p-8 rounded-2xl h-full hover:border-platinum-400 transition-colors group">
                  <div className="inline-flex h-14 w-14 items-center justify-center bg-gradient-platinum rounded-xl mb-6 group-hover:scale-110 transition-transform">
                    <v.icon className="h-6 w-6 text-ink-900" />
                  </div>
                  <h3 className="font-sans font-black text-2xl text-ink-900 mb-3">{v.title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* OFFICERS */}
      <Section className="cv-auto-tall">
        <div className="container-bnifl">
          <SectionHeader
            eyebrow="LEADERSHIP TEAM"
            title="八核執掌．由實戰企業家領航。"
            description="八位幹部分擔分會運作，從會員邀約、訪客接待到教育訓練，讓每一位夥伴都能在富聯獲得最大價值。"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {officers.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.06}>
                <Link
                  href={`/members/${m.slug}`}
                  className="block group border border-ink-100 hover:border-platinum-400 transition-all duration-500 bg-pearl"
                >
                  <div className="aspect-[4/5] bg-ink-900 relative overflow-hidden">
                    <Image
                      src={m.avatar}
                      alt={m.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      quality={70}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-platinum px-3 py-1 text-[11px] rounded-full tracking-widest-2 uppercase font-medium text-ink-900">
                      {m.role}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-sans font-black text-xl text-ink-900 mb-1">{m.name}</h3>
                    <p className="text-sm text-ink-500">{m.title}</p>
                    <p className="text-xs text-ink-400 mt-1">{m.company}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ROLE DUTIES */}
      <Section className="bg-pearl-200 cv-auto-tall">
        <div className="container-bnifl">
          <SectionHeader
            eyebrow="ROLES & DUTIES"
            title="每個位置在做什麼。"
            description="八個職位每半年輪替一次，所有會員都有機會擔任。這不是頭銜，是責任分擔。"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {roles.map((role, i) => {
              const Icon = ROLE_ICONS[role.icon] ?? Users;
              const officer = officers.find((m) => m.role === (role.key as RoleKey));
              return (
                <Reveal key={role.key} delay={(i % 4) * 0.05}>
                  <article className="card-flat p-8 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="icon-square h-12 w-12 bg-gradient-platinum text-ink-900 shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <h3 className="font-sans font-black text-xl text-ink-700">{role.key}</h3>
                          <span className="text-[11px] tracking-widest-2 uppercase text-teal-600">
                            {role.nameEn}
                          </span>
                        </div>
                        <p className="mt-1 text-ink-500 text-sm">{role.tagline}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6 flex-1">
                      {role.duties.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-ink-500 leading-relaxed">
                          <Check className="h-4 w-4 text-teal-600 mt-0.5 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    {officer ? (
                      <Link
                        href={`/members/${officer.slug}`}
                        className="mt-auto pt-5 border-t border-ink-100 flex items-center justify-between text-sm group/link"
                      >
                        <span className="text-ink-400">本屆擔任</span>
                        <span className="font-medium text-ink-700 group-hover/link:text-teal-600 transition-colors flex items-center gap-2">
                          {officer.name}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                    ) : (
                      <div className="mt-auto pt-5 border-t border-ink-100 text-sm text-ink-400">
                        本屆暫缺
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* MEETING */}
      <Section dark className="cv-auto">
        <div className="container-bnifl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="WEEKLY MEETING"
              title="每週四清晨，福華大飯店相見。"
              description="這是一場 2 小時的早餐會，但承載的是一整週的商業承諾。"
              light
            />
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-platinum-400 mt-1 shrink-0" />
                <div>
                  <div className="text-pearl font-medium mb-1">{site.meeting.day}</div>
                  <div className="text-ink-300 text-sm">{site.meeting.time}（含早餐）</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-platinum-400 mt-1 shrink-0" />
                <div>
                  <div className="text-pearl font-medium mb-1">{site.meeting.location}</div>
                  <div className="text-ink-300 text-sm">{site.meeting.address}</div>
                </div>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/visit" className="btn-platinum">
                預約參訪
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={site.meeting.mapUrl}
                target="_blank"
                rel="noopener"
                className="btn border border-pearl/30 text-pearl hover:bg-pearl hover:text-ink-900"
              >
                查看地圖
              </a>
            </div>
          </div>
          <div>
            <Reveal>
              <MapFacade
                label={site.meeting.location}
                embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.9!2d120.30!3d22.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!5e0!3m2!1szh-TW!2stw!4v1700000000"
                fallbackHref={site.meeting.mapUrl}
              />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* JOIN STEPS */}
      <Section className="cv-auto">
        <div className="container-bnifl">
          <SectionHeader
            eyebrow="JOIN PROCESS"
            title="加入富聯的 4 個步驟。"
            description="我們希望每位夥伴都是經過深思熟慮才加入；同時，我們也用心審核每位會員的產業適配性。"
            align="center"
          />
          <div className="grid gap-px bg-ink-100 border border-ink-100 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <div className="bg-pearl p-8 lg:p-10 h-full">
                  <div className="font-sans font-black text-platinum-500 text-3xl mb-4">{s.num}</div>
                  <h3 className="font-sans font-black text-xl text-ink-900 mb-3">{s.title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/visit" className="btn-platinum">
              開始第一步：預約參訪
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
