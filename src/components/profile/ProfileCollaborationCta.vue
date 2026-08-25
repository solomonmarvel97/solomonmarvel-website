<script setup lang="ts">
import { PhEnvelope } from '@phosphor-icons/vue'
import { positioning } from '@/profile/positioning'
import type { InquiryIntent } from '@/profile/inquiries'

defineProps<{
  isDark: boolean
}>()

const emit = defineEmits<{
  inquiry: [intent: InquiryIntent]
}>()
</script>

<template>
  <div
    class="rounded-2xl px-6 py-8 mb-10 text-center"
    :class="isDark ? 'bg-[#141412]' : 'bg-white'"
  >
    <p class="text-[11px] uppercase tracking-widest mb-2" :class="isDark ? 'text-[#444]' : 'text-[#aaa]'">{{ positioning.ctaKicker }}</p>
    <h2 class="text-[22px] font-semibold tracking-tight mb-2" :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'">{{ positioning.ctaHeadline }}</h2>
    <p class="text-[13px] mb-6 max-w-[420px] mx-auto leading-relaxed" :class="isDark ? 'text-[#666]' : 'text-[#888]'">
      {{ positioning.ctaBody }}
    </p>
    <div class="flex items-center justify-center gap-3 flex-wrap">
      <button
        type="button"
        class="text-[12px] font-medium px-5 py-2 rounded-full transition-colors"
        :class="isDark ? 'bg-[#e8e5de] text-[#111110] hover:bg-white' : 'bg-[#1a1a1a] text-white hover:bg-[#333]'"
        @click="emit('inquiry', 'engagement')"
      >{{ positioning.availabilityCta }}</button>
      <a
        href="mailto:me@solomonmarvel.com?subject=Vertical%20AI%20integration"
        class="inline-flex items-center gap-1.5 text-[12px] font-medium px-5 py-2 rounded-full transition-colors border"
        :class="isDark ? 'border-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'border-[#d8d5ce] text-[#555] hover:text-[#1a1a1a]'"
      ><PhEnvelope :size="13" class="shrink-0" />Send an email</a>
    </div>
  </div>
</template>
