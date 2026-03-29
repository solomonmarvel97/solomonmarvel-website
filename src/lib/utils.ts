import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Resolve `<Button>` ref to the underlying native `<button>` or `<a>` (for layout APIs). */
export function nativeButtonFromRef(v: unknown): HTMLElement | null {
  if (!v) return null
  if (v instanceof HTMLButtonElement || v instanceof HTMLAnchorElement) return v
  const get = (v as { getNativeButton?: () => HTMLElement | null }).getNativeButton
  return get?.() ?? null
}
