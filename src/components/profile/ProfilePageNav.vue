<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { PhList, PhX, PhDotsThreeVertical, PhImage } from '@phosphor-icons/vue'
import { haptic } from '@/lib/haptics'

const props = defineProps<{
  isDark: boolean
}>()

const emit = defineEmits<{
  changeWallpaper: []
  toggleTheme: []
}>()

const route = useRoute()
const menuOpen = ref(false)
const controlsOpen = ref(false)
const navRoot = ref<HTMLElement | null>(null)
const showNavAvatar = ref(false)
let mqCleanup: (() => void) | undefined
let avatarObserver: IntersectionObserver | null = null
let navResizeObserver: ResizeObserver | null = null
let handoffRaf = 0
let handoffCancelled = false

const items = [
  { to: '/', label: 'Work', exact: true },
  { to: '/experience', label: 'Experience', exact: true },
  { to: '/about', label: 'My Story', exact: true },
] as const

function isActive(to: string, exact: boolean) {
  return exact ? route.path === to : route.path === to
}

function closeMenu() {
  if (!menuOpen.value) return
  menuOpen.value = false
  document.body.style.overflow = ''
}

function closeControls() {
  controlsOpen.value = false
}

function toggleMenu() {
  closeControls()
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
  if (menuOpen.value) haptic.toggleOpen()
  else haptic.toggleClose()
}

function toggleControls() {
  closeMenu()
  controlsOpen.value = !controlsOpen.value
  if (controlsOpen.value) haptic.toggleOpen()
  else haptic.toggleClose()
}

function onTheme() {
  emit('toggleTheme')
  closeControls()
}

function onWallpaper() {
  emit('changeWallpaper')
  haptic.tap()
}

function onDocPointer(e: PointerEvent) {
  if (!navRoot.value) return
  if (navRoot.value.contains(e.target as Node)) return
  closeMenu()
  closeControls()
}

function onKey(e: KeyboardEvent) {
  if (e.key !== 'Escape') return
  closeMenu()
  closeControls()
}

function onMqChange(e: MediaQueryListEvent) {
  if (e.matches) closeMenu()
}

function disconnectAvatarHandoff() {
  avatarObserver?.disconnect()
  avatarObserver = null
  navResizeObserver?.disconnect()
  navResizeObserver = null
}

function connectAvatarHandoff() {
  if (handoffCancelled) return

  const avatar = document.querySelector('[data-avatar]')
  const nav = navRoot.value
  if (!avatar || !nav) {
    handoffRaf = requestAnimationFrame(connectAvatarHandoff)
    return
  }

  const observe = () => {
    if (handoffCancelled || !navRoot.value) return
    avatarObserver?.disconnect()
    const topInset = Math.ceil(navRoot.value.getBoundingClientRect().height)
    avatarObserver = new IntersectionObserver(
      ([entry]) => {
        showNavAvatar.value = !entry.isIntersecting
      },
      {
        root: null,
        rootMargin: `-${topInset}px 0px 0px 0px`,
        threshold: 0,
      },
    )
    avatarObserver.observe(avatar)
  }

  observe()
  navResizeObserver?.disconnect()
  navResizeObserver = new ResizeObserver(observe)
  navResizeObserver.observe(nav)
}

watch(() => route.path, () => {
  closeMenu()
  closeControls()
})

onMounted(() => {
  document.addEventListener('pointerdown', onDocPointer)
  document.addEventListener('keydown', onKey)
  const mq = window.matchMedia('(min-width: 768px)')
  mq.addEventListener('change', onMqChange)
  mqCleanup = () => mq.removeEventListener('change', onMqChange)
  connectAvatarHandoff()
})

onUnmounted(() => {
  handoffCancelled = true
  if (handoffRaf) cancelAnimationFrame(handoffRaf)
  disconnectAvatarHandoff()
  document.removeEventListener('pointerdown', onDocPointer)
  document.removeEventListener('keydown', onKey)
  mqCleanup?.()
  document.body.style.overflow = ''
})

function iconBtnClass() {
  return [
    'h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] transition-colors touch-manipulation md:h-10 md:w-10',
    props.isDark
      ? 'text-[#aaa] hover:bg-[#1e1e1c] hover:text-[#e8e5de]'
      : 'text-[#555] hover:bg-[#eceae4] hover:text-[#1a1a1a]',
  ]
}

function desktopLinkClass(active: boolean) {
  return [
    'rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors touch-manipulation',
    active
      ? props.isDark ? 'bg-[#1e1e1c] text-[#e8e5de]' : 'bg-[#eceae4] text-[#1a1a1a]'
      : props.isDark ? 'text-[#888] hover:text-[#e8e5de]' : 'text-[#888] hover:text-[#1a1a1a]',
  ]
}
</script>

<template>
  <header
    ref="navRoot"
    data-nav
    class="sticky top-0 z-40 border-b pt-[env(safe-area-inset-top)] backdrop-blur-md"
    :class="isDark ? 'border-[#1e1e1c] bg-[#111110]/85' : 'border-[#e8e5de] bg-[#f5f3ee]/85'"
  >
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:px-3 focus:py-2 focus:text-[12px] focus:font-medium"
      :class="isDark ? 'focus:bg-[#e8e5de] focus:text-[#111110]' : 'focus:bg-[#1a1a1a] focus:text-white'"
    >Skip to content</a>

    <div class="mx-auto flex h-14 max-w-[652px] items-center gap-2 px-4 sm:h-16 sm:gap-3 sm:px-8">
      <RouterLink
        to="/"
        class="flex min-w-0 flex-1 items-center touch-manipulation md:flex-none md:max-w-[40%]"
        aria-label="Solomon Marvelous, home"
        @click="closeMenu"
      >
        <div
          data-nav-avatar
          class="shrink-0 overflow-hidden transition-[width,opacity,margin] duration-200 ease-out motion-reduce:transition-none"
          :class="showNavAvatar ? 'mr-2.5 w-8 opacity-100' : 'mr-0 w-0 opacity-0'"
          aria-hidden="true"
        >
          <img
            src="/profile/profile.png?v=2"
            alt=""
            width="32"
            height="32"
            class="h-8 w-8 max-w-none rounded-full object-cover ring-1"
            :class="isDark ? 'ring-white/10' : 'ring-black/10'"
            decoding="async"
          />
        </div>
        <span
          class="min-w-0 truncate text-[13px] font-semibold leading-none"
          :class="[
            isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]',
            showNavAvatar ? 'max-[359px]:hidden' : '',
          ]"
        >Solomon Marvelous</span>
      </RouterLink>

      <nav class="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary">
        <RouterLink
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          :class="desktopLinkClass(isActive(item.to, item.exact))"
          :aria-current="isActive(item.to, item.exact) ? 'page' : undefined"
        >{{ item.label }}</RouterLink>
      </nav>

      <div class="relative ml-auto flex shrink-0 items-center gap-0.5 md:ml-2">
        <button
          type="button"
          class="flex"
          :class="iconBtnClass()"
          aria-label="Appearance"
          title="Appearance"
          :aria-expanded="controlsOpen"
          aria-controls="appearance-menu"
          aria-haspopup="menu"
          @click="toggleControls"
        >
          <PhDotsThreeVertical :size="18" weight="bold" />
        </button>
        <div
          v-show="controlsOpen"
          id="appearance-menu"
          role="menu"
          class="absolute right-0 top-full z-50 mt-1 min-w-[220px] rounded-xl border py-1 shadow-lg"
          :class="isDark ? 'border-[#1e1e1c] bg-[#111110]' : 'border-[#e8e5de] bg-[#f5f3ee]'"
        >
          <button
            type="button"
            role="menuitem"
            class="flex min-h-11 w-full items-center gap-2.5 px-3 text-left text-[13px] font-medium transition-colors touch-manipulation"
            :class="isDark ? 'text-[#e8e5de] hover:bg-[#1e1e1c]' : 'text-[#1a1a1a] hover:bg-[#eceae4]'"
            @click="onTheme"
          >
            <span class="w-5 text-center" aria-hidden="true">{{ isDark ? '☀️' : '🌙' }}</span>
            {{ isDark ? 'Switch to light mode' : 'Switch to dark mode' }}
          </button>
          <button
            type="button"
            role="menuitem"
            class="flex min-h-11 w-full items-center gap-2.5 px-3 text-left text-[13px] font-medium transition-colors touch-manipulation"
            :class="isDark ? 'text-[#e8e5de] hover:bg-[#1e1e1c]' : 'text-[#1a1a1a] hover:bg-[#eceae4]'"
            @click="onWallpaper"
          >
            <PhImage :size="16" weight="bold" class="w-5 shrink-0" />
            Change wallpaper
          </button>
        </div>
        <button
          type="button"
          class="flex md:hidden"
          :class="iconBtnClass()"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          @click="toggleMenu"
        >
          <PhX v-if="menuOpen" :size="18" weight="bold" />
          <PhList v-else :size="18" weight="bold" />
        </button>
      </div>
    </div>

    <div
      v-show="menuOpen"
      id="mobile-nav"
      class="absolute inset-x-0 top-full border-b shadow-lg md:hidden"
      :class="isDark ? 'border-[#1e1e1c] bg-[#111110]' : 'border-[#e8e5de] bg-[#f5f3ee]'"
    >
      <nav aria-label="Mobile primary" class="mx-auto max-w-[652px] px-4 py-2 sm:px-8">
        <RouterLink
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium transition-colors touch-manipulation"
          :class="isActive(item.to, item.exact)
            ? (isDark ? 'bg-[#1e1e1c] text-[#e8e5de]' : 'bg-[#eceae4] text-[#1a1a1a]')
            : (isDark ? 'text-[#aaa] active:bg-[#1e1e1c]' : 'text-[#555] active:bg-[#eceae4]')"
          :aria-current="isActive(item.to, item.exact) ? 'page' : undefined"
          @click="closeMenu"
        >{{ item.label }}</RouterLink>
      </nav>
    </div>
  </header>

  <div
    v-show="menuOpen"
    class="fixed inset-0 z-30 bg-black/40 md:hidden"
    aria-hidden="true"
    @click="closeMenu"
  />
</template>
