<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import { PhCaretRight } from '@phosphor-icons/vue'
import Button from '@/components/ui/Button.vue'
import MegaMenuColumn01 from './MegaMenuColumn01.vue'
import MegaMenuColumn02 from './MegaMenuColumn02.vue'
import MegaMenuColumn03 from './MegaMenuColumn03.vue'
import MegaMenuColumn04 from './MegaMenuColumn04.vue'
import MegaMenuColumn05 from './MegaMenuColumn05.vue'
import MegaMenuColumn06 from './MegaMenuColumn06.vue'
import MegaMenuColumn07 from './MegaMenuColumn07.vue'
import MegaMenuColumn08 from './MegaMenuColumn08.vue'
import MegaMenuColumn09 from './MegaMenuColumn09.vue'
import MegaMenuColumn10 from './MegaMenuColumn10.vue'
import MegaMenuColumn11 from './MegaMenuColumn11.vue'
import MegaMenuColumn12 from './MegaMenuColumn12.vue'
import MegaMenuColumn13 from './MegaMenuColumn13.vue'
import MegaMenuColumn14 from './MegaMenuColumn14.vue'
import MegaMenuColumn15 from './MegaMenuColumn15.vue'

type MenuKey = 'platform' | 'solutions' | 'resources' | 'open-source' | 'enterprise'

const activeMenu = ref<MenuKey | null>(null)
const dropdownPos = reactive({ top: 0, left: 0 })

const btnRefs = reactive<Record<MenuKey, HTMLElement | null>>({
  platform: null,
  solutions: null,
  resources: null,
  'open-source': null,
  enterprise: null,
})

function setMegaBtnRef(key: MenuKey, el: Element | ComponentPublicInstance | null) {
  const inst = el as { getNativeButton?: () => HTMLElement | null } | null
  btnRefs[key] = inst?.getNativeButton?.() ?? null
}

const megaTriggerClass =
  'flex h-auto items-center gap-1 whitespace-nowrap bg-transparent p-2 text-[16px] text-[#1f2328] hover:bg-black/[0.06] hover:text-[#1f2328] focus-visible:text-[#1f2328] active:text-[#1f2328] focus-visible:ring-2 focus-visible:ring-[#0969da]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:text-white dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:text-white dark:active:text-white dark:focus-visible:ring-white/60 dark:focus-visible:ring-offset-0 dark:ring-offset-black'

function toggle(key: MenuKey) {
  if (activeMenu.value === key) {
    activeMenu.value = null
    return
  }
  const btn = btnRefs[key]
  if (btn) {
    const rect = btn.getBoundingClientRect()
    dropdownPos.top = rect.bottom + 4
    dropdownPos.left = rect.left
  }
  activeMenu.value = key
}

function close() {
  activeMenu.value = null
}

function handleOutside(e: MouseEvent) {
  if (!activeMenu.value) return
  const target = e.target as Node
  // Check if click was inside any button
  for (const btn of Object.values(btnRefs)) {
    if (btn?.contains(target)) return
  }
  // Check if click was inside the teleported dropdown
  const panel = document.getElementById('mega-menu-panel')
  if (panel?.contains(target)) return
  close()
}

function handleEsc(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

function handleScroll() {
  if (activeMenu.value) close()
}

onMounted(() => {
  document.addEventListener('mousedown', handleOutside)
  document.addEventListener('keydown', handleEsc)
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleOutside)
  document.removeEventListener('keydown', handleEsc)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    aria-label="Global"
    class="hidden caret-foreground md:block dark:caret-white"
    data-component-id="global-nav-mega-menu"
  >
    <ul class="my-0 flex list-none flex-nowrap pl-0 caret-inherit">

      <!-- Platform -->
      <li class="list-none">
        <Button
          variant="ghost"
          :ref="(el) => setMegaBtnRef('platform', el)"
          :aria-expanded="activeMenu === 'platform'"
          aria-haspopup="true"
          :class="megaTriggerClass"
          @click="toggle('platform')"
        >
          Platform
          <PhCaretRight
            :size="16"
            color="currentColor"
            aria-hidden="true"
            class="w-4 h-4 block shrink-0 opacity-50 transition-transform duration-200"
            :class="activeMenu === 'platform' ? 'rotate-90' : ''"
          />
        </Button>
      </li>

      <!-- Solutions -->
      <li class="list-none">
        <Button
          variant="ghost"
          :ref="(el) => setMegaBtnRef('solutions', el)"
          :aria-expanded="activeMenu === 'solutions'"
          aria-haspopup="true"
          :class="megaTriggerClass"
          @click="toggle('solutions')"
        >
          Solutions
          <PhCaretRight
            :size="16"
            color="currentColor"
            aria-hidden="true"
            class="w-4 h-4 block shrink-0 opacity-50 transition-transform duration-200"
            :class="activeMenu === 'solutions' ? 'rotate-90' : ''"
          />
        </Button>
      </li>

      <!-- Resources -->
      <li class="list-none">
        <Button
          variant="ghost"
          :ref="(el) => setMegaBtnRef('resources', el)"
          :aria-expanded="activeMenu === 'resources'"
          aria-haspopup="true"
          :class="megaTriggerClass"
          @click="toggle('resources')"
        >
          Resources
          <PhCaretRight
            :size="16"
            color="currentColor"
            aria-hidden="true"
            class="w-4 h-4 block shrink-0 opacity-50 transition-transform duration-200"
            :class="activeMenu === 'resources' ? 'rotate-90' : ''"
          />
        </Button>
      </li>

      <!-- Open Source -->
      <li class="list-none">
        <Button
          variant="ghost"
          :ref="(el) => setMegaBtnRef('open-source', el)"
          :aria-expanded="activeMenu === 'open-source'"
          aria-haspopup="true"
          :class="megaTriggerClass"
          @click="toggle('open-source')"
        >
          Open Source
          <PhCaretRight
            :size="16"
            color="currentColor"
            aria-hidden="true"
            class="w-4 h-4 block shrink-0 opacity-50 transition-transform duration-200"
            :class="activeMenu === 'open-source' ? 'rotate-90' : ''"
          />
        </Button>
      </li>

      <!-- Enterprise -->
      <li class="list-none">
        <Button
          variant="ghost"
          :ref="(el) => setMegaBtnRef('enterprise', el)"
          :aria-expanded="activeMenu === 'enterprise'"
          aria-haspopup="true"
          :class="megaTriggerClass"
          @click="toggle('enterprise')"
        >
          Enterprise
          <PhCaretRight
            :size="16"
            color="currentColor"
            aria-hidden="true"
            class="w-4 h-4 block shrink-0 opacity-50 transition-transform duration-200"
            :class="activeMenu === 'enterprise' ? 'rotate-90' : ''"
          />
        </Button>
      </li>

      <!-- Pricing -->
      <li class="list-none">
        <Button
          href="#/pricing"
          variant="ghost"
          class="h-auto p-2 text-[16px] font-normal text-[#1f2328] hover:bg-black/[0.06] hover:text-[#1f2328] dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
        >
          Pricing
        </Button>
      </li>

    </ul>
  </nav>

  <!-- Teleported dropdown panel - renders at body level, bypassing all overflow/z-index ancestors -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 translate-y-[-4px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-4px]"
    >
      <div
        v-if="activeMenu"
        id="mega-menu-panel"
        :style="{ position: 'fixed', top: dropdownPos.top + 'px', left: dropdownPos.left + 'px', zIndex: 99999 }"
        class='mega-menu-panel-shell bg-background shadow-[rgba(209,217,224,0.5)_0px_0px_0px_1px,rgba(37,41,46,0.04)_0px_6px_12px_-3px,rgba(37,41,46,0.12)_0px_6px_18px_0px] rounded-[6px] border border-border'
      >
        <!-- Platform -->
        <template v-if="activeMenu === 'platform'">
          <ul class="flex flex-wrap items-start gap-x-10 gap-y-6 list-none m-0 px-10 py-6">
            <MegaMenuColumn01 />
            <MegaMenuColumn02 />
            <MegaMenuColumn03 />
            <MegaMenuColumn04 />
          </ul>
          <div class="bg-muted px-10 py-4">
            <Button
              href="https://github.com/features"
              variant="link"
              class="inline-flex h-auto min-h-0 items-center gap-1 px-0 py-0 font-medium text-foreground shadow-none hover:text-[#0969da] hover:shadow-none active:translate-y-0"
              @click="close"
            >
              <span>View all features</span>
              <PhCaretRight :size="14" color="currentColor" aria-hidden="true" class="h-3.5 w-3.5 shrink-0" />
            </Button>
          </div>
        </template>

        <!-- Solutions -->
        <template v-else-if="activeMenu === 'solutions'">
          <ul class="flex flex-wrap items-start gap-x-10 gap-y-6 list-none m-0 px-10 py-6">
            <MegaMenuColumn05 />
            <MegaMenuColumn06 />
            <MegaMenuColumn07 />
          </ul>
          <div class="bg-muted px-10 py-4">
            <Button
              href="https://github.com/solutions"
              variant="link"
              class="inline-flex h-auto min-h-0 items-center gap-1 px-0 py-0 font-medium text-foreground shadow-none hover:text-[#0969da] hover:shadow-none active:translate-y-0"
              @click="close"
            >
              <span>View all solutions</span>
              <PhCaretRight :size="14" color="currentColor" aria-hidden="true" class="h-3.5 w-3.5 shrink-0" />
            </Button>
          </div>
        </template>

        <!-- Resources -->
        <template v-else-if="activeMenu === 'resources'">
          <ul class="flex flex-wrap items-start gap-x-10 gap-y-6 list-none m-0 px-10 py-6">
            <MegaMenuColumn08 />
            <MegaMenuColumn09 />
            <MegaMenuColumn10 />
          </ul>
          <div class="bg-muted px-10 py-4">
            <Button
              href="https://github.com/resources"
              variant="link"
              class="inline-flex h-auto min-h-0 items-center gap-1 px-0 py-0 font-medium text-foreground shadow-none hover:text-[#0969da] hover:shadow-none active:translate-y-0"
              @click="close"
            >
              <span>View all resources</span>
              <PhCaretRight :size="14" color="currentColor" aria-hidden="true" class="h-3.5 w-3.5 shrink-0" />
            </Button>
          </div>
        </template>

        <!-- Open Source -->
        <template v-else-if="activeMenu === 'open-source'">
          <ul class="flex flex-wrap items-start gap-x-10 gap-y-6 list-none m-0 px-10 py-6">
            <MegaMenuColumn11 />
            <MegaMenuColumn12 />
            <MegaMenuColumn13 />
          </ul>
        </template>

        <!-- Enterprise -->
        <template v-else-if="activeMenu === 'enterprise'">
          <ul class="flex flex-wrap items-start gap-x-10 gap-y-6 list-none m-0 px-10 py-6">
            <MegaMenuColumn14 />
            <MegaMenuColumn15 />
          </ul>
        </template>
      </div>
    </Transition>
  </Teleport>
</template>
