import type { Metadata, Viewport } from 'next';
import { Inter, Noto_Sans_TC } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { organizationLd, websiteLd, localBusinessLd } from '@/lib/jsonld';
import { site } from '@/lib/data/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap'
});
const notoSansTC = Noto_Sans_TC({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans-tc',
  display: 'swap'
});

export const dynamic = 'force-dynamic';

export const viewport: Viewport = {
  themeColor: '#1F2D3D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}｜${site.tagline}`, template: `%s｜${site.name}` },
  description: site.description,
  keywords: ['BNI', '富聯白金', '高雄商會', '商務引薦', '人脈', 'Givers Gain', '商務社團'],
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: site.name }]
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    images: ['/og-image.png']
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant-TW" className={`${inter.variable} ${notoSansTC.variable}`}>
      <body className="min-h-screen flex flex-col">
        <JsonLd data={[organizationLd, websiteLd, localBusinessLd]} />
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
