import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Member } from '@/lib/data/members';
import { industries } from '@/lib/data/industries';

export function MemberCard({ member }: { member: Member }) {
  const industry = industries.find((i) => i.slug === member.industry);
  return (
    <Link
      href={`/members/${member.slug}`}
      className="group relative block overflow-hidden border border-ink-100 bg-pearl-100 transition-all duration-500 hover:border-platinum-400 hover:shadow-xl hover:shadow-ink-900/5"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-900 rounded-2xl">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
        {member.role && (
          <div className="absolute top-4 left-4 bg-gradient-platinum px-3 py-1 text-[11px] rounded-full tracking-widest-2 uppercase font-medium text-ink-900">
            {member.role}
          </div>
        )}
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-pearl text-ink-900 transition-all duration-500 group-hover:bg-platinum-400">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
      <div className="p-5">
        <div className="text-[11px] tracking-widest-2 uppercase text-platinum-600 mb-2">
          {industry?.name ?? '—'}
        </div>
        <h3 className="font-sans font-black text-xl text-ink-900 mb-1">{member.name}</h3>
        <p className="text-sm text-ink-500">{member.title}．{member.company}</p>
      </div>
    </Link>
  );
}
