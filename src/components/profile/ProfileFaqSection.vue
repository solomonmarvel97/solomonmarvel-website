<script setup lang="ts">
import type { faqs } from '@/profile/positioning'

defineProps<{
  isDark: boolean
  items: typeof faqs
}>()
</script>

<template>
  <section aria-label="Questions about working with Solomon Marvelous" class="mb-12">
    <h2
      class="text-[11px] uppercase tracking-wider mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >Questions buyers ask</h2>
    <ul class="list-none p-0 m-0" aria-label="Frequently asked questions">
      <li
        v-for="item in items"
        :key="item.question"
        data-writing-row
        class="border-b py-3 last:border-0"
        :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
      >
        <p
          class="text-[13px] font-medium mb-1"
          :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
        >{{ item.question }}</p>
        <p
          class="text-[12px] leading-[1.65]"
          :class="isDark ? 'text-[#666]' : 'text-[#777]'"
        >{{ item.answer }}</p>
      </li>
    </ul>
  </section>
</template>
