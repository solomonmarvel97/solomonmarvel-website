import { prefersReducedMotion } from '@/lib/gsap'

function vibrateSupported(): boolean {
  return typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function'
}

let hoverLast = 0
const HOVER_MIN_MS = 55

function rawPulse(pattern: number | number[]) {
  if (prefersReducedMotion() || !vibrateSupported()) return
  try {
    navigator.vibrate(pattern)
  } catch {
    /* unsupported or blocked */
  }
}

/** Hover-style feedback: only on fine pointers with real hover (avoids touch scroll buzz). */
function hoverPulse(pattern: number | number[]) {
  if (typeof window === 'undefined') return
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
  const now = performance.now()
  if (now - hoverLast < HOVER_MIN_MS) return
  hoverLast = now
  rawPulse(pattern)
}

/**
 * Discrete haptics for education / minimal pages (navigator.vibrate).
 * No-ops when reduced motion is preferred or the API is missing.
 */
export const haptic = {
  press: () => rawPulse(14),
  release: () => rawPulse(6),
  tap: () => rawPulse(20),
  tapLight: () => rawPulse(11),
  confirm: () => rawPulse([12, 6, 18]),
  celebrate: () => rawPulse([14, 8, 18, 8, 24, 10, 32]),
  toggleOpen: () => rawPulse([16, 8, 26]),
  toggleClose: () => rawPulse([12, 6, 16]),
  card: () => hoverPulse(11),
  soft: () => hoverPulse([9, 5, 15]),
  link: () => hoverPulse(8),
  glow: () => hoverPulse(10),
  subnav: () => rawPulse([10, 6, 16]),
  river: () => hoverPulse(12),
  arrow: () => hoverPulse(9),
  underline: () => hoverPulse(8),
  avatar: () => hoverPulse(11),
}
