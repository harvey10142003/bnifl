import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { site } from '@/lib/data/site';

export const metadata: Metadata = {
  title: '聯絡我們',
  description: '聯絡 BNI 富聯白金分會：例會地點、LINE、Email、電話'
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        titleLines={['有任何問題', '我們都樂意回覆']}
        description="認識富聯 合作邀約 媒體採訪 都歡迎來信來電"
      />

      <Section>
        <div className="container-bnifl grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-5">REACH US</div>
            <h2 className="font-sans font-black text-display-sm text-balance mb-10">
              四種方式找到我們。
            </h2>

            <ul className="space-y-px bg-ink-100 border border-ink-100">
              <li className="bg-pearl p-6 flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center bg-gradient-platinum rounded-xl shrink-0">
                  <MessageCircle className="h-5 w-5 text-ink-900" />
                </div>
                <div>
                  <div className="text-xs tracking-widest-2 uppercase text-platinum-600 mb-1">LINE 官方帳號</div>
                  <a href={site.contact.lineUrl} className="font-sans font-black text-xl text-ink-900 hover:text-platinum-700 transition-colors">
                    {site.contact.line}
                  </a>
                  <p className="text-xs text-ink-500 mt-1">最快回覆 · 即時諮詢</p>
                </div>
              </li>
              <li className="bg-pearl p-6 flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center bg-gradient-platinum rounded-xl shrink-0">
                  <Phone className="h-5 w-5 text-ink-900" />
                </div>
                <div>
                  <div className="text-xs tracking-widest-2 uppercase text-platinum-600 mb-1">電話</div>
                  <a
                    href={`tel:${site.contact.phone}`}
                    className="font-sans font-black text-xl text-ink-900 hover:text-platinum-700 transition-colors"
                  >
                    {site.contact.phone}
                  </a>
                  <p className="text-xs text-ink-500 mt-1">週一至週五 09:00 – 18:00</p>
                </div>
              </li>
              <li className="bg-pearl p-6 flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center bg-gradient-platinum rounded-xl shrink-0">
                  <Mail className="h-5 w-5 text-ink-900" />
                </div>
                <div>
                  <div className="text-xs tracking-widest-2 uppercase text-platinum-600 mb-1">Email</div>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="font-sans font-black text-xl text-ink-900 hover:text-platinum-700 transition-colors break-all"
                  >
                    {site.contact.email}
                  </a>
                  <p className="text-xs text-ink-500 mt-1">合作邀約 · 媒體採訪</p>
                </div>
              </li>
              <li className="bg-pearl p-6 flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center bg-gradient-platinum rounded-xl shrink-0">
                  <MapPin className="h-5 w-5 text-ink-900" />
                </div>
                <div>
                  <div className="text-xs tracking-widest-2 uppercase text-platinum-600 mb-1">例會地點</div>
                  <div className="font-sans font-black text-xl text-ink-900">{site.meeting.location}</div>
                  <p className="text-xs text-ink-500 mt-1">{site.meeting.address}</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 p-6 bg-ink-900 text-pearl">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="h-5 w-5 text-platinum-400 mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-pearl mb-1">每週二例會</div>
                  <div className="text-sm text-ink-300">{site.meeting.time}</div>
                </div>
              </div>
              <Link href="/visit" className="btn-platinum w-full mt-4">
                預約參訪
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="bg-pearl-200 border border-ink-100 p-8 rounded-2xl md:p-12">
                <div className="eyebrow mb-3">SEND MESSAGE</div>
                <h3 className="font-sans font-black text-2xl md:text-3xl mb-2">寫封訊息給我們</h3>
                <p className="text-ink-500 text-sm mb-8">
                  我們會在 1–2 個工作日內回覆，急件請直接 LINE。
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* MAP */}
      <section className="bg-ink-900">
        <div className="aspect-[16/9] md:aspect-[21/9] bg-ink-700 overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.9!2d120.30!3d22.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!5e0!3m2!1szh-TW!2stw!4v1700000000"
            width="100%"
            height="100%"
            loading="lazy"
            className="grayscale"
            title="例會地點地圖"
          />
        </div>
      </section>
    </>
  );
}
