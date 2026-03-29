import { type Ref, onMounted, onUnmounted } from 'vue'
import { gsap, prefersReducedMotion } from '@/lib/gsap'

export function useProfilePageAnimations(root: Ref<HTMLElement | null>) {
  let ctx: gsap.Context | undefined
  const disposers: Array<() => void> = []

  onMounted(() => {
    if (prefersReducedMotion() || !root.value) return

    ctx = gsap.context(() => {
      const el = root.value!

      // ── Entrance: cover scale-in ───────────────────────────────────────
      const cover = el.querySelector<HTMLElement>('[data-cover]')
      if (cover) {
        gsap.fromTo(
          cover,
          { autoAlpha: 0, scale: 1.04 },
          { autoAlpha: 1, scale: 1, duration: 0.9, ease: 'power2.out' },
        )
      }

      // ── Entrance: avatar ──────────────────────────────────────────────
      const avatar = el.querySelector<HTMLElement>('[data-avatar]')
      if (avatar) {
        gsap.fromTo(
          avatar,
          { autoAlpha: 0, scale: 0.72, y: 8 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.55, ease: 'back.out(1.6)', delay: 0.05 },
        )
      }

      // ── Entrance: header ──────────────────────────────────────────────
      const header = el.querySelector<HTMLElement>('[data-header]')
      if (header) {
        gsap.fromTo(
          header,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.18 },
        )
      }

      // ── Entrance: bio paragraphs staggered ────────────────────────────
      const bioParagraphs = el.querySelectorAll<HTMLElement>('[data-bio] p')
      if (bioParagraphs.length) {
        gsap.fromTo(
          bioParagraphs,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.52, stagger: 0.07, ease: 'power2.out', delay: 0.28 },
        )
      }

      // ── Entrance: section labels + rows scroll-triggered ──────────────
      el.querySelectorAll<HTMLElement>('[data-writing-label]').forEach((label) => {
        gsap.fromTo(
          label,
          { autoAlpha: 0, y: 10 },
          {
            autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out',
            scrollTrigger: { trigger: label, start: 'top 92%', once: true },
          },
        )
      })

      el.querySelectorAll<HTMLElement>('[data-writing-row]').forEach((row, i) => {
        gsap.fromTo(
          row,
          { autoAlpha: 0, x: -12 },
          {
            autoAlpha: 1, x: 0, duration: 0.38, ease: 'power2.out',
            delay: (i % 8) * 0.045,
            scrollTrigger: { trigger: row, start: 'top 94%', once: true },
          },
        )
      })

      // ── Entrance: footer ──────────────────────────────────────────────
      const footer = el.querySelector<HTMLElement>('[data-footer]')
      if (footer) {
        gsap.fromTo(
          footer,
          { autoAlpha: 0 },
          {
            autoAlpha: 1, duration: 0.5, ease: 'power2.out',
            scrollTrigger: { trigger: footer, start: 'top 98%', once: true },
          },
        )
      }

      // ── Interaction: cover parallax on scroll ─────────────────────────
      const coverImg = cover?.querySelector<HTMLElement>('img')
      if (coverImg) {
        gsap.to(coverImg, {
          yPercent: 22,
          ease: 'none',
          scrollTrigger: {
            trigger: cover,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // ── Interaction: cursor spotlight ─────────────────────────────────
      const spotlight = document.createElement('div')
      spotlight.style.cssText = `
        position: fixed; inset: 0; pointer-events: none; z-index: 0;
        background: radial-gradient(circle 280px at -999px -999px,
          rgba(255,255,255,0.04) 0%, transparent 70%);
        transition: none;
      `
      el.prepend(spotlight)

      const onMouseMove = (e: PointerEvent) => {
        spotlight.style.background = `radial-gradient(circle 300px at ${e.clientX}px ${e.clientY}px,
          rgba(255,255,255,0.055) 0%, transparent 70%)`
      }
      window.addEventListener('pointermove', onMouseMove, { passive: true })
      disposers.push(() => {
        window.removeEventListener('pointermove', onMouseMove)
        spotlight.remove()
      })

      // ── Interaction: row hover lift + press flash ─────────────────────
      const rows = el.querySelectorAll<HTMLElement>('[data-writing-row]')
      rows.forEach((row) => {
        const quickY = gsap.quickTo(row, 'y', { duration: 0.26, ease: 'power2.out' })
        const quickX = gsap.quickTo(row, 'x', { duration: 0.26, ease: 'power2.out' })
        const quickO = gsap.quickTo(row, 'opacity', { duration: 0.15, ease: 'power2.out' })

        const enter = () => { quickY(-2); quickX(5) }
        const leave = () => { quickY(0); quickX(0) }
        const down  = () => { quickO(0.5) }
        const up    = () => { quickO(1) }

        row.addEventListener('pointerenter', enter)
        row.addEventListener('pointerleave', leave)
        row.addEventListener('pointercancel', leave)
        row.addEventListener('pointerdown', down)
        row.addEventListener('pointerup', up)
        disposers.push(() => {
          row.removeEventListener('pointerenter', enter)
          row.removeEventListener('pointerleave', leave)
          row.removeEventListener('pointercancel', leave)
          row.removeEventListener('pointerdown', down)
          row.removeEventListener('pointerup', up)
          gsap.killTweensOf(row)
        })
      })

      // ── Interaction: section label scramble on hover ──────────────────
      const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      el.querySelectorAll<HTMLElement>('[data-writing-label]').forEach((label) => {
        const original = label.textContent ?? ''
        let frame = 0
        let raf = 0

        const scramble = () => {
          frame++
          const progress = frame / 10
          label.textContent = original
            .split('')
            .map((char, i) => {
              if (char === ' ' || char === '/' || char === '&') return char
              if (i / original.length < progress) return char
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join('')
          if (progress < 1) raf = requestAnimationFrame(scramble)
          else label.textContent = original
        }

        const start = () => { frame = 0; cancelAnimationFrame(raf); raf = requestAnimationFrame(scramble) }
        label.addEventListener('pointerenter', start)
        disposers.push(() => {
          label.removeEventListener('pointerenter', start)
          cancelAnimationFrame(raf)
          label.textContent = original
        })
      })

      // ── Interaction: avatar float loop + hover (color reveal + scale) ──
      if (avatar) {
        const img = avatar.querySelector<HTMLImageElement>('[data-avatar-img]')

        const floatTween = gsap.to(avatar, {
          y: -3, duration: 1.8, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.8,
        })

        const avatarEnter = () => {
          floatTween.pause()
          // Scale up the container
          gsap.to(avatar, { scale: 1.1, y: -5, duration: 0.18, ease: 'power2.out' })
          // Reveal color with a custom GSAP tween on the filter property
          if (img) {
            gsap.to({ v: 100 }, {
              v: 0,
              duration: 0.35,
              ease: 'power2.out',
              onUpdate() { img.style.filter = `grayscale(${(this as any).targets()[0].v}%)` },
            })
          }
        }

        const avatarLeave = () => {
          gsap.to(avatar, {
            scale: 1, y: 0, duration: 0.22, ease: 'power2.out',
            onComplete: () => {
              floatTween.resume()
            },
          })
          // Fade back to grayscale
          if (img) {
            gsap.to({ v: 0 }, {
              v: 100,
              duration: 0.45,
              ease: 'power2.in',
              onUpdate() { img.style.filter = `grayscale(${(this as any).targets()[0].v}%)` },
            })
          }
        }

        avatar.addEventListener('pointerenter', avatarEnter)
        avatar.addEventListener('pointerleave', avatarLeave)
        disposers.push(() => {
          avatar.removeEventListener('pointerenter', avatarEnter)
          avatar.removeEventListener('pointerleave', avatarLeave)
          gsap.killTweensOf(avatar)
        })
      }

      // ── Interaction: name magnetic pull ───────────────────────────────
      const nameEl = el.querySelector<HTMLElement>('[data-name]')
      if (nameEl) {
        const quickX = gsap.quickTo(nameEl, 'x', { duration: 0.45, ease: 'power3.out' })
        const quickY = gsap.quickTo(nameEl, 'y', { duration: 0.45, ease: 'power3.out' })

        const onMove = (e: PointerEvent) => {
          const rect = nameEl.getBoundingClientRect()
          const cx = rect.left + rect.width / 2
          const cy = rect.top + rect.height / 2
          const dx = e.clientX - cx
          const dy = e.clientY - cy
          const dist = Math.sqrt(dx * dx + dy * dy)
          const radius = 140
          if (dist < radius) {
            const strength = (1 - dist / radius) * 0.28
            quickX(dx * strength); quickY(dy * strength)
          } else {
            quickX(0); quickY(0)
          }
        }
        window.addEventListener('pointermove', onMove, { passive: true })
        disposers.push(() => {
          window.removeEventListener('pointermove', onMove)
          gsap.killTweensOf(nameEl, 'x,y')
        })
      }


    }, root.value)
  })

  onUnmounted(() => {
    disposers.forEach((d) => d())
    ctx?.revert()
  })
}
