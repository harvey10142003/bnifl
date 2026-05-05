'use client';

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="zh-Hant-TW">
      <body style={{ margin: 0, padding: 40, fontFamily: 'system-ui, sans-serif', background: '#0B1426', color: '#FAFAF7', minHeight: '100vh' }}>
        <div style={{ maxWidth: 480, margin: '120px auto', textAlign: 'center' }}>
          <div style={{ fontSize: 96, color: '#C9B47C', marginBottom: 24, fontWeight: 700 }}>500</div>
          <h1 style={{ fontSize: 28, marginBottom: 16 }}>系統暫時忙線</h1>
          <p style={{ color: '#9AA5BB', marginBottom: 32 }}>頁面載入時發生問題，請稍後再試。</p>
          <button onClick={reset} style={{ padding: '12px 28px', background: '#C9B47C', color: '#0B1426', border: 'none', cursor: 'pointer', fontWeight: 500 }}>重新整理</button>
        </div>
      </body>
    </html>
  );
}
