<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { PhCaretDown, PhCheck, PhGlobe } from '@phosphor-icons/vue'
import Button from '@/components/ui/Button.vue'

const STORAGE_KEY = 'footer-locale'

type LocaleCode = 'en' | 'fr'

const options: { code: LocaleCode; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
]

const open = ref(false)
const rootRef = ref<HTMLElement | null>(null)
const current = ref<LocaleCode>('en')

const currentLabel = computed(
  () => options.find((o) => o.code === current.value)?.label ?? 'English'
)

function applyLocale(code: LocaleCode) {
  current.value = code
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    /* ignore */
  }
  document.documentElement.lang = code === 'fr' ? 'fr' : 'en'
}

function selectLocale(code: LocaleCode) {
  applyLocale(code)
  open.value = false
}

function toggle() {
  open.value = !open.value
}

function onDocClick(e: MouseEvent) {
  if (!open.value) return
  const el = rootRef.value
  if (el && !el.contains(e.target as Node)) open.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as LocaleCode | null
    if (saved === 'en' || saved === 'fr') applyLocale(saved)
  } catch {
    /* ignore */
  }
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div
    ref="rootRef"
    class="relative z-[10000] inline hover:text-[color:var(--fgColor-disabled)]"
    data-component-id="footer-locale-selector"
  >
    <Button
      id="locale-selector-text"
      variant="ghost"
      role="combobox"
      :aria-expanded="open"
      aria-controls="footer-locale-listbox"
      :aria-label="`${currentLabel} - Select language`"
      class="h-8 min-w-max justify-between gap-1 p-0 px-0 text-[14px] font-medium text-[#25292e] hover:bg-[color:var(--button-default-bgColor-hover)] active:bg-[color:var(--button-default-bgColor-active)] group"
      @click.stop="toggle"
    >
      <span class='text-center grid grow shrink-0 justify-center content-center items-center grid-cols-[min-content_minmax(0px,auto)_min-content] [grid-template-areas:"leadingVisual_text_trailingVisual"] fill-[#59636e] select-none'>
        <span class="[white-space-collapse:collapse] [text-wrap-mode:nowrap] block col-start-[text] col-end-[text] row-start-[text] row-end-[text] fill-[#59636e] select-none">
          <span class="[text-wrap-mode:nowrap] fill-[#59636e] select-none">
            <PhGlobe
              :size="16"
              color="#59636e"
              aria-hidden="true"
              class="[text-wrap-mode:nowrap] align-text-bottom inline-block shrink-0 select-none mr-1"
            />
            <span class="text-muted-foreground text-[12px] [text-wrap-mode:nowrap] fill-[#59636e] select-none hover:text-[color:var(--fgColor-accent)]">
              {{ currentLabel }}
            </span>
            <PhCaretDown
              :size="16"
              color="#59636e"
              aria-hidden="true"
              class="[text-wrap-mode:nowrap] align-text-bottom inline-block shrink-0 select-none ml-1 transition-transform duration-200"
              :class="open ? 'rotate-180' : ''"
            />
          </span>
        </span>
      </span>
    </Button>

    <ul
      v-show="open"
      id="footer-locale-listbox"
      role="listbox"
      aria-labelledby="locale-selector-text"
      class="absolute bottom-full left-0 mb-2 min-w-[12rem] list-none m-0 rounded-xl border border-border bg-background py-1 shadow-[rgba(31,35,40,0.12)_0px_8px_24px_0px]"
    >
      <li
        v-for="opt in options"
        :key="opt.code"
        role="presentation"
        class="list-none"
      >
        <Button
          variant="ghost"
          role="option"
          :aria-selected="current === opt.code"
          class="h-auto w-full justify-start gap-2 px-3 py-2 text-left text-[14px] font-normal text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-[#0969da]"
          @click.stop="selectLocale(opt.code)"
        >
          <span class="inline-flex w-4 shrink-0 justify-center" aria-hidden="true">
            <PhCheck
              v-if="current === opt.code"
              :size="16"
             
              aria-hidden="true"
              class="h-4 w-4 shrink-0"
            />
          </span>
          <span>{{ opt.label }}</span>
        </Button>
      </li>
    </ul>
  </div>
</template>
