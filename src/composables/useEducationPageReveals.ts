import { type Ref, onMounted, onUnmounted } from 'vue'
import { gsap, prefersReducedMotion } from '@/lib/gsap'

/**
 * Scroll-triggered fade + rise for `[data-reveal]` inside the education page root.
 */
export function useEducationPageReveals(pageRoot: Ref<HTMLElement | null>) {
  let ctx: gsap.Context | undefined

  onMounted(() => {
    if (prefersReducedMotion() || !pageRoot.value) return

    ctx = gsap.context(() => {
      const nodes = pageRoot.value!.querySelectorAll<HTMLElement>('[data-reveal]')
      nodes.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          },
        )
      })
    }, pageRoot.value)
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}
