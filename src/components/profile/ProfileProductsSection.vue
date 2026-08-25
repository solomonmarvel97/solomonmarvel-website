<script setup lang="ts">
import { ref } from 'vue'
import { PhX, PhArrowSquareOut } from '@phosphor-icons/vue'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { haptic } from '@/lib/haptics'
import type { Product } from '@/profile/data'

defineProps<{
  isDark: boolean
  products: Product[]
}>()

const openProduct = ref<Product | null>(null)

function open(item: Product) {
  openProduct.value = item
  haptic.tap()
}

function close() {
  openProduct.value = null
}
</script>

<template>
  <section aria-label="Products built by Solomon Marvelous" class="mb-12">
    <h2
      class="text-[11px] uppercase tracking-wider mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >Products</h2>
    <ul class="list-none p-0 m-0" aria-label="Products by Solomon Marvelous">
      <li
        v-for="item in products"
        :key="item.title"
        data-writing-row
        class="border-b last:border-0"
        :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
      >
        <button
          type="button"
          class="flex w-full items-start gap-3 py-[9px] text-left touch-manipulation"
          @click="open(item)"
        >
          <span class="w-8 shrink-0 pt-0.5 text-[12px]" :class="isDark ? 'text-[#444]' : 'text-[#aaa]'">{{ item.year }}</span>
          <span class="min-w-0 flex-1">
            <span class="flex min-w-0 items-center gap-1.5">
              <span class="truncate text-[13px] font-medium" :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'">{{ item.title }}</span>
              <span
                v-if="item.isNew"
                class="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#e57d9b] px-1.5 py-0.5 text-[9px] leading-none text-[#e57d9b]"
              >
                <span class="h-1 w-1 rounded-full bg-[#e57d9b] animate-pulse" />
                New
              </span>
            </span>
            <span class="mt-0.5 block text-[12px] leading-snug" :class="isDark ? 'text-[#555]' : 'text-[#888]'">{{ item.pitch }}</span>
          </span>
        </button>
      </li>
    </ul>

    <Dialog :open="!!openProduct" @update:open="(v) => { if (!v) close() }">
      <DialogContent v-if="openProduct" :is-dark="isDark" @close="close">
        <div
          class="relative w-[min(92vw,440px)] max-h-[min(85vh,640px)] overflow-y-auto rounded-2xl shadow-2xl"
          :class="isDark ? 'bg-[#1a1a18] ring-1 ring-white/10' : 'bg-white ring-1 ring-black/10'"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="'product-title-' + openProduct.title"
        >
          <div
            class="sticky top-0 z-[1] flex items-start justify-between gap-3 border-b px-5 py-4"
            :class="isDark ? 'border-[#2a2a28] bg-[#1a1a18]' : 'border-[#e8eaed] bg-white'"
          >
            <div class="min-w-0 pr-8">
              <p class="m-0 text-[11px]" :class="isDark ? 'text-[#555]' : 'text-[#888]'">{{ openProduct.year }}</p>
              <h3
                :id="'product-title-' + openProduct.title"
                class="m-0 mt-0.5 text-[16px] font-semibold leading-snug"
                :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'"
              >{{ openProduct.title }}</h3>
            </div>
            <button
              type="button"
              class="absolute right-3 top-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
              :class="isDark ? 'text-[#aaa] hover:bg-white/10 hover:text-[#e8e5de]' : 'text-[#555] hover:bg-black/5 hover:text-[#1a1a1a]'"
              aria-label="Close"
              @click="close"
            >
              <PhX :size="18" weight="bold" aria-hidden="true" />
            </button>
          </div>

          <div class="space-y-3 px-5 py-4">
            <p
              class="m-0 text-[13px] leading-relaxed"
              :class="isDark ? 'text-[#aaa]' : 'text-[#444]'"
            >{{ openProduct.pitch }}</p>
            <p
              v-for="(paragraph, i) in openProduct.detail"
              :key="i"
              class="m-0 text-[13px] leading-relaxed"
              :class="isDark ? 'text-[#888]' : 'text-[#555]'"
            >{{ paragraph }}</p>
          </div>

          <div
            v-if="openProduct.url"
            class="border-t px-5 py-4"
            :class="isDark ? 'border-[#2a2a28]' : 'border-[#e8eaed]'"
          >
            <a
              :href="openProduct.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors"
              :class="isDark ? 'text-[#e8e5de] hover:text-white' : 'text-[#1a1a1a] hover:text-[#333]'"
            >
              {{ openProduct.urlLabel || 'Open product' }}
              <PhArrowSquareOut :size="14" weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </section>
</template>
