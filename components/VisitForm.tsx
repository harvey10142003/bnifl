'use client';

import { useId, useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import { industries } from '@/lib/data/industries';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function VisitForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formId = useId();
  const id = (k: string) => `visit-${formId}-${k}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? '送出失敗');
      }
      setStatus('success');
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message ?? '系統錯誤，請稍後再試');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="inline-flex h-16 w-16 items-center justify-center bg-gradient-platinum rounded-xl mb-6">
          <Check className="h-8 w-8 text-ink-900" aria-hidden="true" />
        </div>
        <h3 className="font-sans font-black text-2xl text-ink-900 mb-3">預約已送出</h3>
        <p className="text-ink-500 mb-8">
          訪客委員會將於 24 小時內聯繫您。
          <br />
          也歡迎加入我們的 LINE 官方帳號取得即時資訊。
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-outline"
          type="button"
        >
          再預約一位
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-label="參訪預約表單">
      <div className="grid gap-5 md:grid-cols-2">
        <Field id={id('name')} label="姓名" name="name" required placeholder="王小明" />
        <Field id={id('phone')} label="聯絡電話" name="phone" type="tel" required placeholder="0912-345-678" />
      </div>
      <Field id={id('email')} label="Email" name="email" type="email" required placeholder="you@company.com" />
      <Field id={id('company')} label="公司名稱" name="company" required placeholder="○○有限公司" />
      <Field id={id('title')} label="職稱" name="title" required placeholder="總經理 / 業務經理" />
      <div>
        <label htmlFor={id('industry')} className="text-sm font-medium text-ink-900 block mb-2">
          產業類別 <span className="text-platinum-700" aria-hidden="true">*</span>
          <span className="sr-only">必填</span>
        </label>
        <select
          id={id('industry')}
          name="industry"
          required
          aria-required="true"
          className="w-full bg-pearl border border-ink-200 px-4 py-3 text-ink-900 focus:border-platinum-500 focus:outline-none transition-colors"
          defaultValue=""
        >
          <option value="" disabled>
            請選擇產業
          </option>
          {industries.map((ind) => (
            <option key={ind.slug} value={ind.name}>
              {ind.name}
            </option>
          ))}
          <option value="other">其他</option>
        </select>
      </div>
      <div>
        <label htmlFor={id('visitDate')} className="text-sm font-medium text-ink-900 block mb-2">
          希望參訪日期
        </label>
        <input
          id={id('visitDate')}
          type="date"
          name="visitDate"
          className="w-full bg-pearl border border-ink-200 px-4 py-3 text-ink-900 focus:border-platinum-500 focus:outline-none transition-colors"
        />
      </div>
      <div>
        <label htmlFor={id('referrer')} className="text-sm font-medium text-ink-900 block mb-2">
          推薦人（如有）
        </label>
        <input
          id={id('referrer')}
          type="text"
          name="referrer"
          placeholder="會員姓名"
          className="w-full bg-pearl border border-ink-200 px-4 py-3 text-ink-900 focus:border-platinum-500 focus:outline-none transition-colors"
        />
      </div>
      <div>
        <label htmlFor={id('message')} className="text-sm font-medium text-ink-900 block mb-2">
          想多認識什麼產業？
        </label>
        <textarea
          id={id('message')}
          name="message"
          rows={3}
          placeholder="例：我想找會計師、行銷顧問..."
          className="w-full bg-pearl border border-ink-200 px-4 py-3 text-ink-900 focus:border-platinum-500 focus:outline-none transition-colors resize-none"
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
        className="btn-platinum w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? '送出中...' : '送出預約'}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="text-xs text-ink-400 text-center">
        送出即表示您同意富聯白金分會的訪客委員會就您的資料進行聯繫。
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  name,
  type = 'text',
  required = false,
  placeholder
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink-900 block mb-2">
        {label}
        {required && (
          <>
            <span className="text-platinum-700 ml-1" aria-hidden="true">*</span>
            <span className="sr-only">必填</span>
          </>
        )}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        aria-required={required || undefined}
        placeholder={placeholder}
        className="w-full bg-pearl border border-ink-200 px-4 py-3 text-ink-900 placeholder:text-ink-300 focus:border-platinum-500 focus:outline-none transition-colors"
      />
    </div>
  );
}
