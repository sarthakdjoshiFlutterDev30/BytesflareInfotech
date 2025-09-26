import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formats a date string (YYYY-MM-DD) deterministically as MM/DD/YYYY to avoid
// locale- and timezone-dependent differences during SSR vs CSR.
export function formatDate(input: string | number | Date): string {
  const date = new Date(input);
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const year = date.getUTCFullYear();
  return `${month}/${day}/${year}`;
}
