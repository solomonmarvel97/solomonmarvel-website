<script setup lang="ts">
defineProps<{
  isDark: boolean
}>()
</script>

<template>
  <div
    class="flex flex-wrap items-center justify-between gap-4 rounded-xl px-4 py-3 mb-8"
    :class="isDark ? 'bg-[#141412]' : 'bg-white'"
  >
    <div class="flex flex-col gap-0.5 min-w-0">
      <div class="flex items-center gap-2">
        <span class="text-[12px] font-medium" :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'">Available for Fractional CTO engagements</span>
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
      </div>
      <p class="text-[11px]" :class="isDark ? 'text-[#555]' : 'text-[#999]'">Fractional CTO · Strategic technology leadership for startups &amp; scale-ups</p>
    </div>
    <a
      href="https://app.getjobbox.com/p/fractionalcto1"
      target="_blank"
      rel="noopener noreferrer"
      class="shrink-0 text-[11px] font-medium px-3 py-1.5 rounded-full transition-colors"
      :class="isDark ? 'bg-[#e8e5de] text-[#111110] hover:bg-white' : 'bg-[#1a1a1a] text-white hover:bg-[#333]'"
    >Hire me →</a>
  </div>
</template>
