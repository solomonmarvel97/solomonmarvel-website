<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { PhXLogo, PhLinkedinLogo, PhGithubLogo } from '@phosphor-icons/vue'
import AvatarBalloons from './AvatarBalloons.vue'
import { gsap, prefersReducedMotion } from '@/lib/gsap'
import { useBirthdayEffects } from '@/composables/useBirthdayEffects'

defineProps<{
  isDark: boolean
}>()

const avatarOpen = ref(false)
const avatarRef = ref<HTMLElement | null>(null)
const particlesContainer = ref<HTMLElement | null>(null)
let orbitTimeline: gsap.core.Timeline | null = null
let orbitInterval: number | null = null
const { isBirthdayMonth } = useBirthdayEffects()

const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3', '#FF1493', '#00CED1', '#FF6347']
const goldColors = ['#FFD700', '#FFA500', '#FFEC8B', '#DAA520']
const allColors = [...rainbowColors, ...goldColors]

function createOrbitingParticles() {
  if (!particlesContainer.value || prefersReducedMotion()) return
  
  const particleCount = 8
  const radius = 40
  const centerX = 28 // center of avatar (w-14 = 56px)
  const centerY = 28 // center of avatar (h-14 = 56px)
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.className = 'absolute rounded-full pointer-events-none'
    const size = 4 + Math.random() * 4
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    particle.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)]
    particle.style.opacity = '0.8'
    
    const startAngle = (i / particleCount) * Math.PI * 2
    particle.style.left = `${centerX}px`
    particle.style.top = `${centerY}px`
    particle.style.marginLeft = `-${size / 2}px`
    particle.style.marginTop = `-${size / 2}px`
    
    particlesContainer.value.appendChild(particle)
    
    const duration = 4 + Math.random() * 2
    
    const obj = { angle: startAngle }
    
    const timeline = gsap.timeline({ repeat: -1 })
    timeline.to(obj, {
      angle: startAngle + Math.PI * 2,
      duration: duration,
      ease: 'none',
      onUpdate: () => {
        const x = Math.cos(obj.angle) * radius
        const y = Math.sin(obj.angle) * radius
        particle.style.transform = `translate(${x}px, ${y}px)`
      }
    })
    
    if (orbitTimeline) {
      orbitTimeline.add(timeline, 0)
    }
  }
}

function clearParticles() {
  if (!particlesContainer.value) return
  particlesContainer.value.innerHTML = ''
}

function startOrbitCycle() {
  clearParticles()
  if (isBirthdayMonth.value) {
    createOrbitingParticles()
  }
}

onMounted(() => {
  if (!avatarRef.value) return
  
  if (!isBirthdayMonth.value) return
  
  orbitTimeline = gsap.timeline()
  
  startOrbitCycle()
  
  orbitInterval = window.setInterval(() => {
    startOrbitCycle()
  }, 120000) // 2 minutes
})

onUnmounted(() => {
  if (orbitTimeline) {
    orbitTimeline.kill()
  }
  if (orbitInterval) {
    clearInterval(orbitInterval)
  }
  clearParticles()
})
</script>

<template>
  <div class="mx-auto max-w-[652px] px-4 sm:px-8">
    <div class="relative -mt-7 mb-5">
      <div
        ref="particlesContainer"
        class="absolute pointer-events-none"
        style="width: 120px; height: 120px; left: 0; top: 0;"
      />
      <div
        ref="avatarRef"
        data-avatar
        class="w-14 h-14 rounded-full overflow-hidden ring-2 shrink-0 cursor-pointer relative z-10"
        :class="isDark ? 'bg-[#2a2a28] ring-[#111110]' : 'bg-[#d8d5ce] ring-[#f5f3ee]'"
        @click="avatarOpen = true"
      >
        <AvatarBalloons :is-dark="isDark" />
        <img
          src="/profile/profile.png"
          alt="Solomon Marvelous - Enterprise Architect and Distinguished Technology Leader based in Lagos, Nigeria"
          data-avatar-img
          class="w-full h-full object-cover"
          style="filter: grayscale(100%); transition: filter 0s;"
          loading="eager"
          fetchpriority="high"
          decoding="auto"
          @error="(e) => (e.target as HTMLImageElement).style.display = 'none'"
        />
      </div>

      <Dialog :open="avatarOpen" @update:open="avatarOpen = $event">
        <DialogContent :is-dark="isDark" @close="avatarOpen = false">
          <div
            class="rounded-2xl overflow-hidden shadow-2xl w-[min(88vw,360px)]"
            :class="isDark ? 'bg-[#1a1a18] ring-1 ring-white/10' : 'bg-white ring-1 ring-black/10'"
          >
            <div class="relative">
              <img
                src="/profile/profile.png"
                alt="Solomon Marvelous - Enterprise Architect and Distinguished Technology Leader"
                data-modal-img
                class="w-full aspect-square object-cover block cursor-pointer"
                style="filter: grayscale(100%); transition: filter 0.35s ease;"
                @mouseenter="(e) => (e.target as HTMLImageElement).style.filter = 'grayscale(0%)'"
                @mouseleave="(e) => (e.target as HTMLImageElement).style.filter = 'grayscale(100%)'"
              />
              <button
                type="button"
                class="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-[12px] backdrop-blur-sm transition-colors"
                :class="isDark ? 'bg-black/40 text-white hover:bg-black/60' : 'bg-white/60 text-black hover:bg-white/80'"
                @click="avatarOpen = false"
              >✕</button>
            </div>

            <div class="px-5 pt-4 pb-5">
              <p class="text-[15px] font-semibold leading-snug" :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'">Solomon Marvelous</p>
              <p class="text-[12px] mt-0.5 mb-4" :class="isDark ? 'text-[#555]' : 'text-[#888]'">Enterprise Architect · Distinguished Technology Leader</p>

              <div class="flex items-center gap-3 mb-4">
                <a
                  href="https://x.com/marvmargic"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                  :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#f0ede8] text-[#555] hover:text-[#1a1a1a]'"
                >
                  <PhXLogo :size="15" weight="bold" />
                </a>
                <a
                  href="https://linkedin.com/in/superdeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                  :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#f0ede8] text-[#555] hover:text-[#1a1a1a]'"
                >
                  <PhLinkedinLogo :size="15" weight="bold" />
                </a>
                <a
                  href="https://github.com/solomonmarvel97"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                  :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#f0ede8] text-[#555] hover:text-[#1a1a1a]'"
                >
                  <PhGithubLogo :size="15" weight="bold" />
                </a>
              </div>

              <a
                href="https://linkedin.com/in/superdeveloper"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-[13px] font-medium transition-colors"
                :class="isDark ? 'bg-[#e8e5de] text-[#111110] hover:bg-white' : 'bg-[#1a1a1a] text-white hover:bg-[#333]'"
              >
                <PhLinkedinLogo :size="14" weight="bold" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>
