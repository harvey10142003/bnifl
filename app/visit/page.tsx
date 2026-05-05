import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, MapPin, Coffee, Users, MessageCircle, Check, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { VisitForm } from '@/components/VisitForm';
import { site } from '@/lib/data/site';

export const metadata: Metadata = {
  title: '預約參訪',
  description: '線上預約參訪 BNI 富聯白金分會早餐例會，免費體驗 2 小時的高雄商務社交。'
};

const expects = [
  { icon: Coffee, title: '豐盛早餐', desc: '飯店等級的精緻自助早餐，含咖啡與飲品。' },
  { icon: Users, title: '60 位企業主', desc: '一次認識橫跨 14 個產業的高雄商務菁英。' },
  { icon: MessageCircle, title: '60 秒簡報', desc: '聽到每位會員以 60 秒分享自己的事業精華。' },
  { icon: Check, title: '無壓力體驗', desc: '純體驗、不強迫加入，依你的步調認識富聯。' }
];

const faqs = [
  {
    q: '參訪需要費用嗎？',
    a: '完全免費，包含一份早餐。一位訪客可以在同一個分會體驗 2 次，或不同分會各 1 次。'
  },
  {
    q: '我可以帶同事或合作夥伴一起來嗎？',
    a: '當然歡迎，但因席次有限，請每位來賓都個別填寫表單，方便我們提前準備。'
  },
  {
    q: '我穿著需要正式嗎？',
    a: '建議商務休閒（Business Casual）以上，會場大多為西裝、套裝為主。'
  },
  {
    q: '我的產業已經有人了還能參訪嗎？',
    a: '可以！參訪不等於入會，仍歡迎你來認識會員，未來若有其他分會或產業空缺再做討論。'
  },
  {
    q: '萬一當天我臨時不能來？',
    a: '請至少 24 小時前來訊告知訪客委員會，我們會安排其他週次。連續兩次未到將需重新申請。'
  }
];

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="VISIT US"
        title="一場 2 小時的早餐會，可能改變你 10 年的事業軌跡。"
        description="不用提案、不用簡報，只要帶一張名片、一顆好奇的心，就能體驗高雄最具影響力的商務引薦圈。"
      />

      {/* MEETING INFO + FORM */}
      <Section>
        <div className="container-bnifl grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="eyebrow mb-5">MEETING DETAILS</div>
              <h2 className="font-sans font-black text-display-sm text-balance mb-8">
                每週四清晨，
                <br />
                高雄福華大飯店相見。
              </h2>
              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-platinum-600 mt-1 shrink-0" />
                  <div>
                    <div className="font-medium text-ink-900 mb-1">{site.meeting.day}</div>
                    <div className="text-sm text-ink-500">
                      {site.meeting.time}（建議提前 15 分鐘入席）
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-platinum-600 mt-1 shrink-0" />
                  <div>
                    <div className="font-medium text-ink-900 mb-1">{site.meeting.location}</div>
                    <div className="text-sm text-ink-500">{site.meeting.address}</div>
                    <a
                      href={site.meeting.mapUrl}
                      target="_blank"
                      rel="noopener"
                      className="text-sm text-platinum-700 underline mt-1 inline-block"
                    >
                      Google Maps 導航
                    </a>
                  </div>
                </li>
              </ul>
              <div className="border-t border-ink-100 pt-8">
                <p className="text-sm text-ink-500 mb-4">如不便填寫表單，亦可直接 LINE 聯繫</p>
                <a href={site.contact.lineUrl} className="btn-outline w-full" target="_blank" rel="noopener">
                  <MessageCircle className="h-4 w-4" />
                  加入 {site.contact.line}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-pearl-200 border border-ink-100 p-8 md:p-12">
              <div className="eyebrow mb-3">RSVP FORM</div>
              <h3 className="font-sans font-black text-2xl md:text-3xl mb-2">線上參訪預約</h3>
              <p className="text-ink-500 text-sm mb-8">
                送出後將由訪客委員會於 24 小時內聯繫您，確認席次與當週狀況。
              </p>
              <VisitForm />
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT TO EXPECT */}
      <Section className="bg-pearl-200">
        <div className="container-bnifl">
          <SectionHeader
            eyebrow="WHAT TO EXPECT"
            title="你將會體驗到的早餐會。"
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expects.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06}>
                <div className="bg-pearl border border-ink-100 p-8 h-full hover:border-platinum-400 transition-colors">
                  <div className="inline-flex h-12 w-12 items-center justify-center bg-gradient-platinum mb-5">
                    <e.icon className="h-5 w-5 text-ink-900" />
                  </div>
                  <h3 className="font-sans font-black text-xl text-ink-900 mb-3">{e.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="container-bnifl max-w-3xl">
          <SectionHeader
            eyebrow="VISITOR FAQ"
            title="參訪常見問題。"
            align="center"
          />
          <div className="space-y-px bg-ink-100 border border-ink-100">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-pearl">
                <summary className="cursor-pointer list-none p-6 md:p-8 flex items-start justify-between gap-6 hover:bg-pearl-200 transition-colors">
                  <h3 className="font-sans font-black text-lg md:text-xl text-ink-900 pr-4">
                    Q. {f.q}
                  </h3>
                  <span className="flex h-8 w-8 items-center justify-center bg-ink-100 group-open:bg-gradient-platinum text-ink-900 transition-all shrink-0">
                    <span className="block h-px w-3 bg-current relative">
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-px bg-current group-open:opacity-0 transition-opacity" />
                    </span>
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-8 text-ink-500 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark className="text-center">
        <div className="container-bnifl">
          <Reveal>
            <h2 className="font-sans font-black text-display-md text-pearl text-balance max-w-3xl mx-auto">
              還在猶豫？讓 LINE 來幫你預約。
            </h2>
            <p className="mt-6 text-ink-200">直接掃 QR Code 或點擊加入，由訪客委員會即時為您服務。</p>
            <div className="mt-10">
              <a href={site.contact.lineUrl} className="btn-platinum" target="_blank" rel="noopener">
                <MessageCircle className="h-4 w-4" />
                加入 LINE 預約
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
