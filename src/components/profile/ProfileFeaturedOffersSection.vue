<script setup lang="ts">
import type { FeaturedOffer } from '@/profile/positioning'
import type { InquiryIntent } from '@/profile/inquiries'

defineProps<{
  isDark: boolean
  offers: readonly FeaturedOffer[]
}>()

const emit = defineEmits<{
  inquiry: [intent: InquiryIntent]
}>()
</script>

<template>
  <section aria-label="Ways to work with Solomon Marvelous" class="mb-10">
    <h2
      class="text-[11px] uppercase tracking-wider mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >Work with me</h2>
    <ul class="list-none p-0 m-0" aria-label="Engagement options">
      <li
        v-for="item in offers"
        :key="item.title"
        data-writing-row
        class="flex flex-col gap-2 border-b py-3 last:border-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
      >
        <div class="min-w-0">
          <p
            class="text-[10px] uppercase tracking-widest mb-1"
            :class="isDark ? 'text-[#555]' : 'text-[#aaa]'"
          >{{ item.tier }}</p>
          <p
            class="text-[13px] font-medium mb-0.5"
            :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
          >{{ item.title }}</p>
          <p
            class="text-[12px] leading-[1.6]"
            :class="isDark ? 'text-[#666]' : 'text-[#777]'"
          >{{ item.description }}</p>
        </div>
        <button
          type="button"
          class="shrink-0 self-start text-[11px] font-medium px-3 py-1.5 rounded-full transition-colors touch-manipulation sm:self-center"
          :class="isDark ? 'bg-[#e8e5de] text-[#111110] hover:bg-white' : 'bg-[#1a1a1a] text-white hover:bg-[#333]'"
          @click="emit('inquiry', item.intent)"
        >{{ item.cta }}</button>
      </li>
    </ul>
  </section>
</template>
