<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap, prefersReducedMotion } from '@/lib/gsap'
import { useBirthdayEffects } from '@/composables/useBirthdayEffects'

const { isBirthdayMonth } = useBirthdayEffects()

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrame: number | null = null
let particles: any[] = []
let timeline: gsap.core.Timeline | null = null

const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3', '#FF1493', '#00CED1', '#FF6347']
const goldColors = ['#FFD700', '#FFA500', '#FFEC8B', '#DAA520', '#B8860B']
const allColors = [...rainbowColors, ...goldColors]

const effectTypes = ['confetti', 'balloons', 'bubbles'] as const
const selectedEffect = effectTypes[Math.floor(Math.random() * effectTypes.length)]

function createConfetti() {
  const count = 100
  for (let i = 0; i < count; i++) {
    particles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 20,
      vy: (Math.random() - 0.5) * 20 - 5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      size: Math.random() * 10 + 5,
      color: allColors[Math.floor(Math.random() * allColors.length)],
      type: 'confetti',
      opacity: 1
    })
  }
}

function createBalloons() {
  const count = 15
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 50,
      vx: (Math.random() - 0.5) * 2,
      vy: -(Math.random() * 3 + 2),
      size: Math.random() * 30 + 20,
      color: allColors[Math.floor(Math.random() * allColors.length)],
      type: 'balloon',
      opacity: 1,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.05 + 0.02
    })
  }
}

function createBubbles() {
  const count = 50
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 20,
      vx: (Math.random() - 0.5) * 1,
      vy: -(Math.random() * 2 + 1),
      size: Math.random() * 20 + 10,
      color: allColors[Math.floor(Math.random() * allColors.length)],
      type: 'bubble',
      opacity: 0.6 + Math.random() * 0.4
    })
  }
}

function initParticles() {
  if (selectedEffect === 'confetti') {
    createConfetti()
  } else if (selectedEffect === 'balloons') {
    createBalloons()
  } else {
    createBubbles()
  }
}

function drawConfetti(ctx: CanvasRenderingContext2D, p: any) {
  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.rotate((p.rotation * Math.PI) / 180)
  ctx.fillStyle = p.color
  ctx.globalAlpha = p.opacity
  ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size / 2)
  ctx.restore()
}

function drawBalloon(ctx: CanvasRenderingContext2D, p: any) {
  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.fillStyle = p.color
  ctx.globalAlpha = p.opacity
  
  ctx.beginPath()
  ctx.ellipse(0, -p.size / 2, p.size / 2, p.size / 1.5, 0, 0, Math.PI * 2)
  ctx.fill()
  
  ctx.beginPath()
  ctx.moveTo(0, p.size / 5)
  ctx.lineTo(-3, p.size / 2)
  ctx.lineTo(3, p.size / 2)
  ctx.closePath()
  ctx.fillStyle = p.color
  ctx.fill()
  
  ctx.restore()
}

function drawBubble(ctx: CanvasRenderingContext2D, p: any) {
  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.strokeStyle = p.color
  ctx.globalAlpha = p.opacity
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(-p.size / 6, -p.size / 6, p.size / 8, 0, Math.PI * 2)
  ctx.stroke()
  ctx.restore()
}

function animate() {
  const canvas = canvasRef.value
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  particles = particles.filter(p => {
    if (p.type === 'confetti') {
      p.x += p.vx
      p.y += p.vy
      p.vy += 0.3
      p.rotation += p.rotationSpeed
      p.opacity -= 0.003
      
      if (p.opacity <= 0) return false
      drawConfetti(ctx, p)
    } else if (p.type === 'balloon') {
      p.x += p.vx + Math.sin(p.wobble) * 0.5
      p.y += p.vy
      p.wobble += p.wobbleSpeed
      p.opacity -= 0.003
      
      if (p.y < -50 || p.opacity <= 0) return false
      drawBalloon(ctx, p)
    } else if (p.type === 'bubble') {
      p.x += p.vx
      p.y += p.vy
      p.opacity -= 0.003
      
      if (p.y < -20 || p.opacity <= 0) return false
      drawBubble(ctx, p)
    }
    return true
  })
  
  if (particles.length > 0) {
    animationFrame = requestAnimationFrame(animate)
  }
}

function resizeCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

onMounted(() => {
  if (!isBirthdayMonth.value || prefersReducedMotion()) return
  
  const canvas = canvasRef.value
  if (!canvas) return
  
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  
  initParticles()
  
  timeline = gsap.timeline({
    onComplete: () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  })
  
  timeline.to(canvas, {
    opacity: 0,
    duration: 0.5,
    delay: 2.5,
    ease: 'power2.out'
  })
  
  animate()
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
  if (timeline) {
    timeline.kill()
  }
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<template>
  <canvas
    v-if="isBirthdayMonth"
    ref="canvasRef"
    class="fixed inset-0 pointer-events-none z-50"
    style="opacity: 1;"
  />
</template>
