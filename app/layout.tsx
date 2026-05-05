import type { Metadata } from 'next';
import { Inter, Playfair_Display, Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/data/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap'
});
const notoSansTC = Noto_Sans_TC({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-tc',
  display: 'swap'
});
const notoSerifTC = Noto_Serif_TC({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-serif-tc',
  display: 'swap'
});

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}｜${site.tagline}`, template: `%s｜${site.name}` },
  description: site.description,
  keywords: ['BNI', '富聯白金', '高雄商會', '商務引薦', '人脈', 'Givers Gain', '商務社團'],
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="zh-Hant-TW"
      className={`${inter.variable} ${playfair.variable} ${notoSansTC.variable} ${notoSerifTC.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
