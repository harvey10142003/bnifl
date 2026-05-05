import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="bg-ink-900 text-pearl min-h-[80vh] flex items-center">
      <div className="container-bnifl text-center py-20">
        <div className="font-serif text-[120px] md:text-[200px] leading-none platinum-text mb-6">
          404
        </div>
        <h1 className="font-serif text-display-md text-pearl mb-4">頁面走丟了</h1>
        <p className="text-ink-300 mb-10 max-w-md mx-auto">
          這個頁面可能已經移動或不存在，回到首頁繼續探索富聯白金分會吧。
        </p>
        <Link href="/" className="btn-platinum">
          <ArrowLeft className="h-4 w-4" />
          返回首頁
        </Link>
      </div>
    </section>
  );
}
