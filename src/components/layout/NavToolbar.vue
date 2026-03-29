<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import {
  PhCaretRight,
  PhGithubLogo,
  PhList,
  PhMagnifyingGlass,
  PhX,
  PhSun,
  PhMoon,
} from '@phosphor-icons/vue'
import Button from '@/components/ui/Button.vue'
import GlobalNavMegaMenu from './header-mega-menu/GlobalNavMegaMenu.vue'
import {
  globalNavMobileLinks,
  isMobileNavSection,
} from './globalNavMobileLinks'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()

/** Phosphor SVG fill; ghost buttons do not set a reliable default text color in light mode. */
const navIconColor = computed(() => (isDark.value ? '#ffffff' : '#1f2328'))

const menuOpen = ref(false)
const menuToggleRef = ref<InstanceType<typeof Button> | null>(null)

function menuToggleEl(): HTMLElement | null {
  return menuToggleRef.value?.getNativeButton?.() ?? null
}
const headerBottom = ref('56px')
/** Which accordion section is open in the mobile drawer (only one at a time). */
const expandedSectionId = ref<string | null>(null)
const scrollYBeforeMenu = ref(0)

function lockBodyScroll() {
  scrollYBeforeMenu.value = window.scrollY
  const y = scrollYBeforeMenu.value
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.top = `-${y}px`
  document.body.style.left = '0'
  document.body.style.right = '0'
  document.body.style.width = '100%'
}

function unlockBodyScroll() {
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  document.body.style.width = ''
  window.scrollTo(0, scrollYBeforeMenu.value)
}

function open() {
  const banner = document.querySelector('[role="banner"]')
  const bottom = banner
    ? banner.getBoundingClientRect().bottom
    : (menuToggleEl()?.getBoundingClientRect().bottom ?? 56)
  headerBottom.value = `${bottom}px`
  expandedSectionId.value = null
  menuOpen.value = true
  lockBodyScroll()
}

function close() {
  menuOpen.value = false
  expandedSectionId.value = null
  unlockBodyScroll()
}

function toggleSection(id: string) {
  expandedSectionId.value = expandedSectionId.value === id ? null : id
}

function toggle() {
  menuOpen.value ? close() : open()
}

function handleOutside(e: MouseEvent) {
  if (!menuOpen.value) return
  const panel = document.getElementById('mobile-nav-panel')
  if (menuToggleEl()?.contains(e.target as Node)) return
  if (panel?.contains(e.target as Node)) return
  close()
}

function handleEsc(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('mousedown', handleOutside)
  document.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleOutside)
  document.removeEventListener('keydown', handleEsc)
  unlockBodyScroll()
})
</script>

<template>
  <!-- Full header row: 3-column on mobile, logo+nav+dashboard on desktop -->
  <div class="relative flex items-center w-full h-full" data-component-id="nav-toolbar">

    <!-- ── LEFT ──────────────────────────────────────────────────── -->
    <div class="flex flex-1 items-center gap-3">

      <!-- Mobile: hamburger / X toggle -->
      <Button
        ref="menuToggleRef"
        variant="ghost"
        size="icon"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation menu"
        aria-controls="mobile-nav-panel"
        class="md:hidden h-9 w-9 shrink-0 text-foreground ring-offset-background hover:bg-black/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-[#0969da]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:bg-transparent active:shadow-none dark:!text-white dark:ring-offset-black dark:hover:!bg-white/10 dark:hover:!text-white dark:focus-visible:ring-white/60 dark:focus-visible:ring-offset-0 dark:focus-visible:!bg-transparent"
        @click="toggle"
      >
        <PhList
          v-if="!menuOpen"
          :size="20"
          :color="navIconColor"
          aria-hidden="true"
          class="pointer-events-none block shrink-0"
        />
        <PhX
          v-else
          :size="20"
          :color="navIconColor"
          aria-hidden="true"
          class="pointer-events-none block shrink-0"
        />
      </Button>

      <!-- Desktop: GitHub logo -->
      <a
        href="/"
        aria-label="Homepage"
        class="group hidden shrink-0 text-foreground md:block dark:text-white"
      >
        <PhGithubLogo
          :size="32"
          aria-hidden="true"
          class="block h-8 w-8 shrink-0 text-current"
        />
      </a>

      <!-- Desktop: mega menu -->
      <div class="hidden md:block">
        <GlobalNavMegaMenu />
      </div>
    </div>

    <!-- ── CENTER: mobile logo (absolute) ───────────────────────── -->
    <a
      href="/"
      aria-label="Homepage"
      class="absolute left-1/2 shrink-0 -translate-x-1/2 text-foreground dark:text-white md:hidden"
    >
      <PhGithubLogo
        :size="32"
        aria-hidden="true"
        class="block h-8 w-8 shrink-0 text-current"
      />
    </a>

    <!-- ── RIGHT ─────────────────────────────────────────────────── -->
    <div class="flex flex-1 justify-end items-center gap-2">
      <!-- Theme toggle -->
      <button
        @click="toggleTheme"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        class="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
      >
        <PhSun v-if="isDark" :size="16" weight="bold" aria-hidden="true" />
        <PhMoon v-else :size="16" weight="bold" aria-hidden="true" />
      </button>
      <Button href="/" variant="header" size="default" class="px-4">
        Dashboard
      </Button>
    </div>

    <!-- ── MOBILE DROPDOWN (Teleport) ────────────────────────────── -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-1"
      >
        <div
          v-if="menuOpen"
          id="mobile-nav-panel"
          role="menu"
          :style="{ top: headerBottom }"
          class="fixed inset-x-0 bottom-0 z-[9998] md:hidden"
        >
          <!-- Card panel -->
          <div class='bg-background shadow-2xl overflow-y-auto h-full'>

            <!-- Nav items -->
            <ul role="none" class="py-2">
              <li
                v-for="item in globalNavMobileLinks"
                :key="item.id"
                role="none"
              >
                <template v-if="isMobileNavSection(item)">
                  <Button
                    variant="ghost"
                    role="menuitem"
                    :aria-expanded="expandedSectionId === item.id"
                    class="h-auto w-full justify-between rounded-none border-b border-border px-5 py-4 text-left text-[17px] font-semibold text-foreground hover:bg-muted active:bg-muted/80"
                    @click="toggleSection(item.id)"
                  >
                    <span>{{ item.label }}</span>
                    <PhCaretRight
                      :size="16"
                      class="text-muted-foreground shrink-0 transition-transform duration-200"
                      aria-hidden="true"
                      :class="expandedSectionId === item.id ? 'rotate-90' : ''"
                    />
                  </Button>
                  <ul
                    v-show="expandedSectionId === item.id"
                    class="m-0 list-none border-b border-border bg-muted py-1 pl-0"
                  >
                    <li v-for="child in item.children" :key="child.href" class="list-none">
                      <a
                        :href="child.href"
                        role="menuitem"
                        class="block px-5 py-3 pl-8 text-[15px] font-medium text-foreground hover:bg-muted/80 active:bg-border transition-colors"
                        @click="close"
                      >
                        {{ child.label }}
                      </a>
                    </li>
                  </ul>
                </template>
                <template v-else>
                  <a
                    :href="item.href"
                    role="menuitem"
                    class="flex items-center justify-between px-5 py-4 text-[17px] font-semibold text-foreground border-b border-border hover:bg-muted active:bg-muted/80 transition-colors"
                    @click="close"
                  >
                    <span>{{ item.label }}</span>
                  </a>
                </template>
              </li>
            </ul>

            <!-- Search bar -->
            <div class="px-4 py-3">
              <div class="flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-2.5 text-[14px] text-muted-foreground">
                <PhMagnifyingGlass
                  :size="16"
                  class="text-muted-foreground shrink-0"
                  aria-hidden="true"
                />
                <span class="flex-1">Search or jump to...</span>
                <kbd class="inline-flex h-5 w-5 items-center justify-center rounded border border-border bg-background text-[11px] font-medium text-muted-foreground">/</kbd>
              </div>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
