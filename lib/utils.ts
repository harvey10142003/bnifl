import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat('zh-TW').format(n);
}

export function formatCurrency(n: number): string {
  if (n >= 100_000_000) return `${(n / 100_000_000).toFixed(1)} 億`;
  if (n >= 10_000) return `${(n / 10_000).toFixed(0)} 萬`;
  return formatNumber(n);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}
