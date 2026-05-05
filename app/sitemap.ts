import type { MetadataRoute } from 'next';
import { site } from '@/lib/data/site';
import { members } from '@/lib/data/members';
import { news } from '@/lib/data/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();
  const staticPages = ['', '/about', '/members', '/results', '/news', '/visit', '/contact'].map(
    (p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: p === '' ? 1 : 0.8
    })
  );
  const memberPages = members.map((m) => ({
    url: `${base}/members/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));
  const newsPages = news.map((n) => ({
    url: `${base}/news/${n.slug}`,
    lastModified: new Date(n.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.5
  }));
  return [...staticPages, ...memberPages, ...newsPages];
}
