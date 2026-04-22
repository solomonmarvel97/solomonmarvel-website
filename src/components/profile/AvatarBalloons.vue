<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap, prefersReducedMotion } from '@/lib/gsap'
import { useBirthdayEffects } from '@/composables/useBirthdayEffects'

defineProps<{
  isDark: boolean
}>()

const { isBirthdayMonth } = useBirthdayEffects()

const balloonsRef = ref<HTMLElement[]>([])
let timelines: gsap.core.Timeline[] = []

const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3', '#FF1493', '#00CED1', '#FF6347']
const goldColors = ['#FFD700', '#FFA500', '#FFEC8B', '#DAA520']
const allColors = [...rainbowColors, ...goldColors]

function animateBalloons() {
  if (prefersReducedMotion()) return
  
  balloonsRef.value.forEach((balloon) => {
    const timeline = gsap.timeline({ repeat: -1, yoyo: true })
    
    const duration = 2 + Math.random() * 2
    const yOffset = -5 - Math.random() * 10
    const xOffset = (Math.random() - 0.5) * 4
    const rotation = (Math.random() - 0.5) * 10
    
    timeline.to(balloon, {
      y: yOffset,
      x: xOffset,
      rotation: rotation,
      duration: duration,
      ease: 'sine.inOut'
    })
    
    timelines.push(timeline)
  })
}

onMounted(() => {
  if (!isBirthdayMonth.value) return
  
  animateBalloons()
})

onUnmounted(() => {
  timelines.forEach(t => t.kill())
})
</script>

<template>
  <div v-if="isBirthdayMonth" class="absolute inset-0 pointer-events-none overflow-visible">
    <div
      v-for="i in 4"
      :key="i"
      :ref="(el) => { if (el) balloonsRef.push(el as HTMLElement) }"
      class="absolute"
      :style="{
        width: '16px',
        height: '20px',
        top: `${-8 - (i * 6)}px`,
        left: `${(i * 8) - 12}px`,
        transform: `rotate(${(i - 2) * 10}deg)`,
        opacity: 0.8
      }"
    >
      <svg
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="8"
          cy="9"
          rx="6"
          ry="8"
          :fill="allColors[(i - 1) % allColors.length]"
        />
        <path
          d="M8 17 L6 19 L10 19 Z"
          :fill="allColors[(i - 1) % allColors.length]"
        />
      </svg>
    </div>
  </div>
</template>
