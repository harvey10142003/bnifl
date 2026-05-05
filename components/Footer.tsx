import Link from 'next/link';
import Image from 'next/image';
import { site, navItems } from '@/lib/data/site';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink-700 text-pearl-200">
      <div className="container-bnifl grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-block bg-pearl px-4 py-3 mb-6">
            <Image
              src="/images/logo-horizontal.png"
              alt={site.name}
              width={220}
              height={56}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm leading-relaxed text-ink-100/80 mb-6 max-w-xs">{site.description}</p>
          <div className="flex gap-3">
            <a
              href={site.contact.facebook}
              className="flex h-10 w-10 items-center justify-center border border-ink-500 rounded-xl text-ink-100 hover:border-teal-400 hover:text-teal-300 transition-colors"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06z" />
              </svg>
            </a>
            <a
              href={site.contact.instagram}
              className="flex h-10 w-10 items-center justify-center border border-ink-500 rounded-xl text-ink-100 hover:border-teal-400 hover:text-teal-300 transition-colors"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 01-1.38-.9 3.71 3.71 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07S4.9.31 4.14.6a5.55 5.55 0 00-2.01 1.31A5.55 5.55 0 00.82 3.92C.53 4.68.34 5.55.28 6.83.22 8.11.21 8.52.21 11.78s.01 3.67.07 4.95c.06 1.28.25 2.15.54 2.91a5.55 5.55 0 001.31 2.01 5.55 5.55 0 002.01 1.31c.76.29 1.63.48 2.91.54 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.25 2.91-.54a5.55 5.55 0 002.01-1.31 5.55 5.55 0 001.31-2.01c.29-.76.48-1.63.54-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.25-2.15-.54-2.91a5.55 5.55 0 00-1.31-2.01A5.55 5.55 0 0019.86.6c-.76-.29-1.63-.48-2.91-.54C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
              </svg>
            </a>
            <a
              href={site.contact.lineUrl}
              className="flex h-10 w-10 items-center justify-center border border-ink-500 rounded-xl text-ink-100 hover:border-teal-400 hover:text-teal-300 transition-colors"
              aria-label="LINE"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596a.626.626 0 01-.197.033.616.616 0 01-.51-.252l-2.443-3.317v2.94a.63.63 0 01-.629.626.626.626 0 01-.626-.626V8.108a.625.625 0 01.59-.624.71.71 0 01.214 0 .618.618 0 01.51.252l2.443 3.318V8.108a.628.628 0 01.625-.625c.346 0 .628.282.628.625v4.771zm-5.741 0a.626.626 0 01-.626.626.625.625 0 01-.626-.626V8.108c0-.345.282-.626.626-.626.345 0 .626.281.626.626v4.771zm-2.466.626H4.917a.624.624 0 01-.626-.626V8.108c0-.345.282-.626.626-.626.345 0 .626.281.626.626v4.141h1.756c.346 0 .627.283.627.629a.62.62 0 01-.629.627M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <div className="eyebrow text-teal-400 mb-5">網站導覽</div>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-100/80 hover:text-teal-300 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow text-teal-400 mb-5">例會資訊</div>
          <ul className="space-y-3 text-sm text-ink-100/80">
            <li className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
              <span>
                {site.meeting.day}
                <br />
                {site.meeting.time}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
              <span>
                {site.meeting.location}
                <br />
                {site.meeting.address}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-teal-400 mb-5">聯絡我們</div>
          <ul className="space-y-3 text-sm text-ink-100/80">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-teal-400 shrink-0" />
              <a href={`tel:${site.contact.phone}`} className="hover:text-teal-300 transition-colors">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-teal-400 shrink-0" />
              <a
                href={`mailto:${site.contact.email}`}
                className="hover:text-teal-300 transition-colors break-all"
              >
                {site.contact.email}
              </a>
            </li>
          </ul>
          <Link href="/visit" className="btn-teal mt-6 w-full">
            預約參訪
          </Link>
        </div>
      </div>

      <div className="border-t border-ink-500/40">
        <div className="container-bnifl flex flex-col md:flex-row items-center justify-between py-6 gap-3">
          <p className="text-xs text-ink-200/70">
            © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>
          <p className="text-[10px] tracking-widest-2 uppercase text-ink-200/70">
            Givers Gain<sup>®</sup> · Powered by Ugomk
          </p>
        </div>
      </div>
    </footer>
  );
}
