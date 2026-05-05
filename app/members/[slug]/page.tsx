import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Mail, Phone, Globe, MessageCircle, Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { MemberCard } from '@/components/ui/MemberCard';
import { members, memberBySlug } from '@/lib/data/members';
import { industries } from '@/lib/data/industries';

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = memberBySlug(params.slug);
  if (!m) return { title: '會員' };
  return {
    title: `${m.name}｜${m.company}`,
    description: m.bio
  };
}

export default function MemberDetailPage({ params }: { params: { slug: string } }) {
  const member = memberBySlug(params.slug);
  if (!member) notFound();
  const industry = industries.find((i) => i.slug === member.industry);
  const related = members
    .filter((m) => m.industry === member.industry && m.slug !== member.slug)
    .slice(0, 4);
  const fallback = related.length === 0 ? members.filter((m) => m.slug !== member.slug).slice(0, 4) : related;

  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink-900 text-pearl overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-bnifl relative grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="aspect-[4/5] relative overflow-hidden bg-ink-700 rounded-2xl max-w-md">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                  className="object-cover"
                />
                {member.role && (
                  <div className="absolute top-4 left-4 bg-gradient-platinum px-3 py-1 text-[11px] rounded-full tracking-widest-2 uppercase font-medium text-ink-900">
                    {member.role}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal>
              <Link
                href="/members"
                className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-platinum-400 mb-8 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                返回會員列表
              </Link>
              <div className="eyebrow text-platinum-400 mb-5">{industry?.name}</div>
              <h1 className="font-sans font-black text-display-lg text-pearl mb-4">{member.name}</h1>
              <p className="text-xl text-ink-200 mb-2">{member.title}</p>
              <p className="text-lg text-platinum-400">{member.company}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                {member.lineId && (
                  <a
                    href={`https://line.me/R/ti/p/${member.lineId}`}
                    target="_blank"
                    rel="noopener"
                    className="btn-platinum"
                  >
                    <MessageCircle className="h-4 w-4" />
                    加入 LINE
                  </a>
                )}
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="btn border border-pearl/30 text-pearl hover:bg-pearl hover:text-ink-900"
                  >
                    <Phone className="h-4 w-4" />
                    {member.phone}
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BIO + SERVICES */}
      <Section>
        <div className="container-bnifl grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">PROFILE</div>
            <h2 className="font-sans font-black text-display-sm mb-8">關於 {member.name}</h2>
            <p className="body-base text-pretty whitespace-pre-line">{member.bio}</p>

            <div className="mt-12 grid grid-cols-2 gap-px bg-ink-100 border border-ink-100">
              <div className="bg-pearl p-6">
                <div className="eyebrow mb-2">入會年份</div>
                <div className="font-sans font-black text-2xl text-ink-900">{member.joinedYear}</div>
              </div>
              <div className="bg-pearl p-6">
                <div className="eyebrow mb-2">產業類別</div>
                <div className="font-sans font-black text-2xl text-ink-900">{industry?.name}</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-pearl-200 border border-ink-100 p-8 rounded-2xl lg:p-10">
              <div className="eyebrow mb-5">提供服務</div>
              <h3 className="font-sans font-black text-2xl mb-6">能為您解決的事</h3>
              <ul className="space-y-3">
                {member.services.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-ink-500">
                    <Check className="h-5 w-5 text-platinum-600 mt-0.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-ink-100 space-y-3">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-sm text-ink-700 hover:text-platinum-700 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                )}
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-3 text-sm text-ink-700 hover:text-platinum-700 transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    {member.website}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* RELATED */}
      <Section className="bg-pearl-200">
        <div className="container-bnifl">
          <div className="flex items-end justify-between mb-12 gap-6">
            <h2 className="font-sans font-black text-display-sm">
              {related.length > 0 ? `更多${industry?.name}會員` : '推薦其他會員'}
            </h2>
            <Link href="/members" className="btn-ghost">
              全體會員
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fallback.map((m) => (
              <MemberCard key={m.slug} member={m} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
