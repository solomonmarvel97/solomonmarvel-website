<script setup lang="ts">
import { PhEnvelope } from '@phosphor-icons/vue'

defineProps<{
  isDark: boolean
}>()
</script>

<template>
  <div
    class="rounded-2xl px-6 py-8 mb-10 text-center"
    :class="isDark ? 'bg-[#141412]' : 'bg-white'"
  >
    <p class="text-[11px] uppercase tracking-widest mb-2" :class="isDark ? 'text-[#444]' : 'text-[#aaa]'">Open to collaboration</p>
    <h2 class="text-[22px] font-semibold tracking-tight mb-2" :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'">Let's build something together.</h2>
    <p class="text-[13px] mb-6 max-w-[380px] mx-auto leading-relaxed" :class="isDark ? 'text-[#666]' : 'text-[#888]'">
      Whether you need a Fractional CTO, a strategic technical partner, or just want to connect - I'm always open to interesting conversations.
    </p>
    <div class="flex items-center justify-center gap-3 flex-wrap">
      <a
        href="https://app.getjobbox.com/p/fractionalcto1"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[12px] font-medium px-5 py-2 rounded-full transition-colors"
        :class="isDark ? 'bg-[#e8e5de] text-[#111110] hover:bg-white' : 'bg-[#1a1a1a] text-white hover:bg-[#333]'"
      >Hire me as Fractional CTO</a>
      <a
        href="mailto:solomon@boltcliq.com"
        class="inline-flex items-center gap-1.5 text-[12px] font-medium px-5 py-2 rounded-full transition-colors border"
        :class="isDark ? 'border-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'border-[#d8d5ce] text-[#555] hover:text-[#1a1a1a]'"
      ><PhEnvelope :size="13" class="shrink-0" />Send an email</a>
    </div>
  </div>
</template>
