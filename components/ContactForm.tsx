'use client';

import { useId, useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const topics = [
  '我想預約參訪',
  '我想成為會員',
  '合作邀約',
  '媒體採訪',
  '其他諮詢'
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formId = useId();
  const id = (k: string) => `contact-${formId}-${k}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? '送出失敗');
      }
      setStatus('success');
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message ?? '系統錯誤');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="inline-flex h-16 w-16 items-center justify-center bg-gradient-platinum rounded-xl mb-6">
          <Check className="h-8 w-8 text-ink-900" aria-hidden="true" />
        </div>
        <h3 className="font-sans font-black text-2xl text-ink-900 mb-3">訊息已送出</h3>
        <p className="text-ink-500 mb-6">我們將於 1–2 個工作日內回覆。</p>
        <button onClick={() => setStatus('idle')} className="btn-outline" type="button">
          再寫一封
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-label="聯絡表單">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor={id('name')} className="text-sm font-medium text-ink-900 block mb-2">
            姓名 <span className="text-platinum-700" aria-hidden="true">*</span>
            <span className="sr-only">必填</span>
          </label>
          <input
            id={id('name')}
            name="name"
            required
            aria-required="true"
            className="w-full bg-pearl border border-ink-200 px-4 py-3 text-ink-900 focus:border-platinum-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor={id('email')} className="text-sm font-medium text-ink-900 block mb-2">
            Email <span className="text-platinum-700" aria-hidden="true">*</span>
            <span className="sr-only">必填</span>
          </label>
          <input
            id={id('email')}
            type="email"
            name="email"
            required
            aria-required="true"
            className="w-full bg-pearl border border-ink-200 px-4 py-3 text-ink-900 focus:border-platinum-500 focus:outline-none transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor={id('phone')} className="text-sm font-medium text-ink-900 block mb-2">
          聯絡電話
        </label>
        <input
          id={id('phone')}
          type="tel"
          name="phone"
          className="w-full bg-pearl border border-ink-200 px-4 py-3 text-ink-900 focus:border-platinum-500 focus:outline-none transition-colors"
        />
      </div>
      <div>
        <label htmlFor={id('topic')} className="text-sm font-medium text-ink-900 block mb-2">
          諮詢主題 <span className="text-platinum-700" aria-hidden="true">*</span>
          <span className="sr-only">必填</span>
        </label>
        <select
          id={id('topic')}
          name="topic"
          required
          aria-required="true"
          defaultValue=""
          className="w-full bg-pearl border border-ink-200 px-4 py-3 text-ink-900 focus:border-platinum-500 focus:outline-none transition-colors"
        >
          <option value="" disabled>
            請選擇主題
          </option>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={id('message')} className="text-sm font-medium text-ink-900 block mb-2">
          訊息內容 <span className="text-platinum-700" aria-hidden="true">*</span>
          <span className="sr-only">必填</span>
        </label>
        <textarea
          id={id('message')}
          name="message"
          rows={5}
          required
          aria-required="true"
          placeholder="請告訴我們您想了解的事..."
          className="w-full bg-pearl border border-ink-200 px-4 py-3 text-ink-900 placeholder:text-ink-300 focus:border-platinum-500 focus:outline-none transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-platinum w-full disabled:opacity-50"
      >
        {status === 'submitting' ? '送出中...' : '送出訊息'}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
