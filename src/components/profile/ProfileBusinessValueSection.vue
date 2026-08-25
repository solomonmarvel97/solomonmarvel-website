<script setup lang="ts">
import { positioning } from '@/profile/positioning'
import type { InquiryIntent } from '@/profile/inquiries'

defineProps<{
  isDark: boolean
  offerings: ReadonlyArray<{ title: string; description: string }>
}>()

const emit = defineEmits<{
  inquiry: [intent: InquiryIntent]
}>()
</script>

<template>
  <section aria-label="How Solomon Marvelous helps businesses scale with AI" class="mb-10">
    <h2
      class="text-[11px] uppercase tracking-wider mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >{{ positioning.pitchHeading }}</h2>
    <p
      class="text-[12px] italic mb-4"
      :class="isDark ? 'text-[#666]' : 'text-[#888]'"
      data-writing-row
    >{{ positioning.contrarian }}</p>

    <div
      class="text-[13px] leading-[1.65] space-y-3 mb-5"
      :class="isDark ? 'text-[#aaa]' : 'text-[#333]'"
    >
      <p data-writing-row>{{ positioning.salesHook }}</p>
      <p data-writing-row>{{ positioning.salesProblem }}</p>
      <p data-writing-row>{{ positioning.salesOutcome }}</p>
      <p data-writing-row>{{ positioning.salesAuthority }}</p>
      <p data-writing-row>
        <button
          type="button"
          class="underline underline-offset-2"
          :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'"
          @click="emit('inquiry', 'engagement')"
        >{{ positioning.salesCta }}</button>
      </p>
    </div>

    <ul class="list-none p-0 m-0 space-y-3" aria-label="Vertical AI offerings">
      <li
        v-for="item in offerings"
        :key="item.title"
        data-writing-row
        class="py-2 border-b last:border-0"
        :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
      >
        <p
          class="text-[13px] font-medium mb-0.5"
          :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
        >{{ item.title }}</p>
        <p
          class="text-[12px] leading-[1.6]"
          :class="isDark ? 'text-[#666]' : 'text-[#777]'"
        >{{ item.description }}</p>
      </li>
    </ul>
  </section>
</template>
