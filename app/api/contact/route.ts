import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: '請求格式錯誤' }, { status: 400 });
  }

  const required = ['name', 'email', 'topic', 'message'];
  const missing = required.filter((k) => !body[k]?.toString().trim());
  if (missing.length > 0) {
    return NextResponse.json({ error: `缺少必填欄位：${missing.join(', ')}` }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: 'Email 格式不正確' }, { status: 400 });
  }

  console.log('[CONTACT]', new Date().toISOString(), body);

  return NextResponse.json({ ok: true });
}
