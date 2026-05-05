import type { NextPageContext } from 'next';

type ErrorProps = { statusCode?: number };

function ErrorPage({ statusCode }: ErrorProps) {
  return (
    <main style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0B1426',
      color: '#FAFAF7',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center', padding: 40 }}>
        <div style={{
          fontSize: 'clamp(72px, 16vw, 180px)',
          lineHeight: 1,
          marginBottom: 24,
          color: '#C9B47C',
          fontWeight: 700
        }}>{statusCode ?? 'Error'}</div>
        <p style={{ color: '#9AA5BB' }}>
          {statusCode === 404 ? '頁面不存在' : statusCode ? '伺服器發生錯誤' : '發生未預期的錯誤'}
        </p>
        <a href="/" style={{
          display: 'inline-block',
          marginTop: 32,
          padding: '12px 28px',
          background: '#C9B47C',
          color: '#0B1426',
          textDecoration: 'none',
          fontWeight: 500
        }}>返回首頁</a>
      </div>
    </main>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
