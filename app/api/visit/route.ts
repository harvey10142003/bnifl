import { NextResponse } from 'next/server';

type VisitPayload = {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  title?: string;
  industry?: string;
  visitDate?: string;
  referrer?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: VisitPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: '請求格式錯誤' }, { status: 400 });
  }

  const required: (keyof VisitPayload)[] = ['name', 'phone', 'email', 'company', 'title', 'industry'];
  const missing = required.filter((k) => !body[k]?.toString().trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `缺少必填欄位：${missing.join(', ')}` },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email!)) {
    return NextResponse.json({ error: 'Email 格式不正確' }, { status: 400 });
  }

  // TODO 整合實際儲存：DB / Google Sheet / LINE Notify / Email
  console.log('[VISIT REQUEST]', new Date().toISOString(), body);

  return NextResponse.json({ ok: true, message: '預約已收到' }, { status: 200 });
}
