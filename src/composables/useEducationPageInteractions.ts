import { type Ref, onMounted, onUnmounted } from 'vue'
import { haptic } from '@/lib/haptics'
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'

/**
 * Scroll + pointer motion: stagger, card hovers, link arrows, underlines, subnav, FAQ, river, CTA glow/press.
 * Skipped entirely when `prefers-reduced-motion` is set.
 */
export function useEducationPageInteractions(pageRoot: Ref<HTMLElement | null>) {
  let ctx: gsap.Context | undefined
  let onLoad: (() => void) | undefined
  const disposers: Array<() => void> = []

  onMounted(() => {
    if (prefersReducedMotion() || !pageRoot.value) return

    const root = pageRoot.value

    ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((container) => {
        const items = container.querySelectorAll<HTMLElement>('[data-stagger-item]')
        if (!items.length) return
        gsap.set(items, { autoAlpha: 0, y: 28 })
        gsap.to(items, {
          autoAlpha: 1,
          y: 0,
          duration: 0.68,
          stagger: 0.11,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 88%',
            once: true,
          },
          onComplete: () => haptic.confirm(),
        })
      })

      root.querySelectorAll<HTMLElement>('[data-card-hover]').forEach((el) => {
        const quickY = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power2.out' })
        const quickScale = gsap.quickTo(el, 'scale', { duration: 0.35, ease: 'power2.out' })
        gsap.set(el, { transformOrigin: '50% 50%' })
        const enter = () => {
          haptic.card()
          quickY(-6)
          quickScale(1.02)
        }
        const leave = () => {
          quickY(0)
          quickScale(1)
        }
        el.addEventListener('pointerenter', enter)
        el.addEventListener('pointerleave', leave)
        el.addEventListener('pointercancel', leave)
        disposers.push(() => {
          el.removeEventListener('pointerenter', enter)
          el.removeEventListener('pointerleave', leave)
          el.removeEventListener('pointercancel', leave)
          gsap.killTweensOf(el, 'y,scale')
        })
      })

      root.querySelectorAll<HTMLElement>('[data-gsap-press]').forEach((el) => {
        const down = () => {
          haptic.press()
          gsap.to(el, { scale: 0.97, duration: 0.12, ease: 'power2.in' })
        }
        const up = () => {
          haptic.tapLight()
          gsap.to(el, { scale: 1, duration: 0.22, ease: 'power2.out' })
        }
        gsap.set(el, { transformOrigin: '50% 50%' })
        el.addEventListener('pointerdown', down)
        el.addEventListener('pointerup', up)
        el.addEventListener('pointerleave', up)
        el.addEventListener('pointercancel', up)
        disposers.push(() => {
          el.removeEventListener('pointerdown', down)
          el.removeEventListener('pointerup', up)
          el.removeEventListener('pointerleave', up)
          el.removeEventListener('pointercancel', up)
          gsap.killTweensOf(el, 'scale')
        })
      })

      root.querySelectorAll<HTMLElement>('[data-subnav-link]').forEach((link) => {
        const subTap = () => haptic.subnav()
        link.addEventListener('pointerdown', subTap)

        const line = link.querySelector<HTMLElement>('[data-subnav-line]')
        if (!line) {
          disposers.push(() => link.removeEventListener('pointerdown', subTap))
          return
        }

        gsap.set(line, { scaleX: 0, transformOrigin: '0% 50%' })
        const enter = () => {
          haptic.link()
          gsap.to(line, { scaleX: 1, duration: 0.28, ease: 'power2.out' })
        }
        const leave = () => {
          gsap.to(line, { scaleX: 0, duration: 0.22, ease: 'power2.in' })
        }
        link.addEventListener('pointerenter', enter)
        link.addEventListener('pointerleave', leave)
        disposers.push(() => {
          link.removeEventListener('pointerdown', subTap)
          link.removeEventListener('pointerenter', enter)
          link.removeEventListener('pointerleave', leave)
          gsap.killTweensOf(line, 'scaleX')
        })
      })

      root.querySelectorAll<HTMLElement>('[data-link-underline-hover]').forEach((link) => {
        const line = link.querySelector<HTMLElement>('[data-link-line]')
        if (!line) return
        gsap.set(line, { scaleX: 0, transformOrigin: '0% 50%' })
        const enter = () => {
          haptic.underline()
          gsap.to(line, { scaleX: 1, duration: 0.3, ease: 'power2.out' })
        }
        const leave = () => {
          gsap.to(line, { scaleX: 0, duration: 0.22, ease: 'power2.in' })
        }
        const lineTap = () => haptic.tap()
        link.addEventListener('pointerenter', enter)
        link.addEventListener('pointerleave', leave)
        link.addEventListener('pointerdown', lineTap)
        disposers.push(() => {
          link.removeEventListener('pointerenter', enter)
          link.removeEventListener('pointerleave', leave)
          link.removeEventListener('pointerdown', lineTap)
          gsap.killTweensOf(line, 'scaleX')
        })
      })

      root.querySelectorAll<HTMLElement>('[data-inline-link-hover]').forEach((link) => {
        const quickY = gsap.quickTo(link, 'y', { duration: 0.28, ease: 'power2.out' })
        const quickX = gsap.quickTo(link, 'x', { duration: 0.28, ease: 'power2.out' })
        gsap.set(link, { transformOrigin: '0% 50%' })
        const enter = () => {
          haptic.link()
          quickY(-2)
          quickX(2)
        }
        const leave = () => {
          quickY(0)
          quickX(0)
        }
        const linkTap = () => haptic.tap()
        link.addEventListener('pointerenter', enter)
        link.addEventListener('pointerleave', leave)
        link.addEventListener('pointercancel', leave)
        link.addEventListener('pointerdown', linkTap)
        disposers.push(() => {
          link.removeEventListener('pointerenter', enter)
          link.removeEventListener('pointerleave', leave)
          link.removeEventListener('pointercancel', leave)
          link.removeEventListener('pointerdown', linkTap)
          gsap.killTweensOf(link, 'x,y')
        })
      })

      root.querySelectorAll<HTMLElement>('[data-arrow-link-hover]').forEach((link) => {
        const arrow = link.querySelector<SVGElement>('svg')
        if (!arrow) return
        gsap.set(arrow, { transformOrigin: '50% 50%' })
        const quickX = gsap.quickTo(arrow, 'x', { duration: 0.3, ease: 'power2.out' })
        const enter = () => {
          haptic.arrow()
          quickX(5)
        }
        const leave = () => quickX(0)
        const arrowTap = () => haptic.tap()
        link.addEventListener('pointerenter', enter)
        link.addEventListener('pointerleave', leave)
        link.addEventListener('pointercancel', leave)
        link.addEventListener('pointerdown', arrowTap)
        disposers.push(() => {
          link.removeEventListener('pointerenter', enter)
          link.removeEventListener('pointerleave', leave)
          link.removeEventListener('pointercancel', leave)
          link.removeEventListener('pointerdown', arrowTap)
          gsap.killTweensOf(arrow, 'x')
        })
      })

      root.querySelectorAll<HTMLElement>('[data-soft-hover]').forEach((el) => {
        const quickY = gsap.quickTo(el, 'y', { duration: 0.38, ease: 'power2.out' })
        const quickScale = gsap.quickTo(el, 'scale', { duration: 0.38, ease: 'power2.out' })
        gsap.set(el, { transformOrigin: '50% 50%' })
        const enter = () => {
          haptic.soft()
          quickY(-5)
          quickScale(1.012)
        }
        const leave = () => {
          quickY(0)
          quickScale(1)
        }
        el.addEventListener('pointerenter', enter)
        el.addEventListener('pointerleave', leave)
        el.addEventListener('pointercancel', leave)
        disposers.push(() => {
          el.removeEventListener('pointerenter', enter)
          el.removeEventListener('pointerleave', leave)
          el.removeEventListener('pointercancel', leave)
          gsap.killTweensOf(el, 'y,scale')
        })
      })

      root.querySelectorAll<HTMLElement>('[data-testimonial-avatar-hover]').forEach((wrap) => {
        const figure = wrap.closest('figure')
        const img = wrap.querySelector<HTMLImageElement>('img')
        if (!figure || !img) return
        gsap.set(img, { transformOrigin: '50% 50%' })
        const enter = () => {
          haptic.avatar()
          gsap.to(img, { scale: 1.08, duration: 0.38, ease: 'power2.out' })
        }
        const leave = () => {
          gsap.to(img, { scale: 1, duration: 0.42, ease: 'power2.out' })
        }
        figure.addEventListener('pointerenter', enter)
        figure.addEventListener('pointerleave', leave)
        disposers.push(() => {
          figure.removeEventListener('pointerenter', enter)
          figure.removeEventListener('pointerleave', leave)
          gsap.killTweensOf(img, 'scale')
        })
      })

      root.querySelectorAll<HTMLDetailsElement>('[data-faq-hover]').forEach((details) => {
        const summary = details.querySelector('summary')
        const chevron = summary?.querySelector<SVGElement>('svg')
        if (!summary || !chevron) return
        const quickDy = gsap.quickTo(details, 'y', { duration: 0.28, ease: 'power2.out' })
        const quickCh = gsap.quickTo(chevron, 'scale', { duration: 0.24, ease: 'power2.out' })
        gsap.set(details, { transformOrigin: '50% 0%' })
        gsap.set(chevron, { transformOrigin: '50% 50%' })
        const enter = () => {
          haptic.link()
          quickDy(-2)
          quickCh(1.1)
        }
        const leave = () => {
          quickDy(0)
          quickCh(1)
        }
        const summaryDown = () => haptic.tapLight()
        const onToggle = () => {
          if (details.open) haptic.toggleOpen()
          else haptic.toggleClose()
        }
        summary.addEventListener('pointerenter', enter)
        summary.addEventListener('pointerleave', leave)
        summary.addEventListener('pointercancel', leave)
        summary.addEventListener('pointerdown', summaryDown)
        details.addEventListener('toggle', onToggle)
        disposers.push(() => {
          summary.removeEventListener('pointerenter', enter)
          summary.removeEventListener('pointerleave', leave)
          summary.removeEventListener('pointercancel', leave)
          summary.removeEventListener('pointerdown', summaryDown)
          details.removeEventListener('toggle', onToggle)
          gsap.killTweensOf(details, 'y')
          gsap.killTweensOf(chevron, 'scale')
        })
      })

      root.querySelectorAll<HTMLElement>('[data-river-visual-hover]').forEach((wrap) => {
        gsap.set(wrap, { transformOrigin: '50% 50%' })
        const enter = () => {
          haptic.river()
          gsap.to(wrap, { scale: 1.05, duration: 0.5, ease: 'power2.out' })
        }
        const leave = () => {
          gsap.to(wrap, { scale: 1, duration: 0.55, ease: 'power2.out' })
        }
        wrap.addEventListener('pointerenter', enter)
        wrap.addEventListener('pointerleave', leave)
        disposers.push(() => {
          wrap.removeEventListener('pointerenter', enter)
          wrap.removeEventListener('pointerleave', leave)
          gsap.killTweensOf(wrap, 'scale')
        })
      })

      root.querySelectorAll<HTMLElement>('[data-button-glow-hover]').forEach((btn) => {
        const tone = btn.dataset.glowTone ?? 'success'
        const shadow =
          tone === 'outline'
            ? '0 10px 28px rgba(9, 105, 218, 0.18)'
            : '0 12px 32px rgba(26, 127, 55, 0.28)'
        const enter = () => {
          haptic.glow()
          gsap.to(btn, { boxShadow: shadow, duration: 0.38, ease: 'power2.out' })
        }
        const leave = () => {
          gsap.to(btn, { boxShadow: '0 0 0 rgba(0,0,0,0)', duration: 0.32, ease: 'power2.inOut' })
        }
        btn.addEventListener('pointerenter', enter)
        btn.addEventListener('pointerleave', leave)
        disposers.push(() => {
          btn.removeEventListener('pointerenter', enter)
          btn.removeEventListener('pointerleave', leave)
          gsap.killTweensOf(btn, 'boxShadow')
        })
      })

      root.querySelectorAll<HTMLElement>('[data-river-parallax]').forEach((wrap) => {
        const img =
          wrap instanceof HTMLImageElement
            ? wrap
            : wrap.querySelector<HTMLImageElement>('img')
        if (!img) return
        gsap.fromTo(
          img,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: wrap,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })
    }, root)

    const refresh = () => ScrollTrigger.refresh()
    requestAnimationFrame(() => {
      requestAnimationFrame(refresh)
    })
    onLoad = () => refresh()
    window.addEventListener('load', onLoad)
  })

  onUnmounted(() => {
    if (onLoad) window.removeEventListener('load', onLoad)
    disposers.splice(0).forEach((d) => d())
    ctx?.revert()
  })
}
