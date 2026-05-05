import Link from 'next/link';

export default function Custom404() {
  return (
    <main style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0B1426',
      color: '#FAFAF7',
      fontFamily: '"Noto Sans TC", system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center', padding: 40, maxWidth: 480 }}>
        <div style={{
          fontSize: 'clamp(80px, 18vw, 200px)',
          lineHeight: 1,
          marginBottom: 24,
          background: 'linear-gradient(135deg, #DECC93 0%, #C9B47C 50%, #9A8048 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: '"Noto Serif TC", Georgia, serif',
          fontWeight: 700
        }}>404</div>
        <h1 style={{ fontSize: 32, marginBottom: 16, fontFamily: '"Noto Serif TC", serif' }}>頁面走丟了</h1>
        <p style={{ color: '#9AA5BB', marginBottom: 40, lineHeight: 1.6 }}>
          這個頁面可能已經移動或不存在，<br />回到首頁繼續探索富聯白金分會吧。
        </p>
        <Link href="/" style={{
          display: 'inline-block',
          padding: '14px 32px',
          background: 'linear-gradient(135deg, #DECC93 0%, #C9B47C 50%, #9A8048 100%)',
          color: '#0B1426',
          textDecoration: 'none',
          fontWeight: 500,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          fontSize: 14
        }}>返回首頁</Link>
      </div>
    </main>
  );
}
