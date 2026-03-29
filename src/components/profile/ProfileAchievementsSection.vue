<script setup lang="ts">
defineProps<{
  isDark: boolean
  achievements: ReadonlyArray<{ value: string; label: string }>
}>()
</script>

<template>
  <section
    aria-label="Career highlights"
    class="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
    data-achievements
  >
    <div
      v-for="item in achievements"
      :key="item.label"
      class="flex min-h-[4.5rem] min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl px-3 py-3 text-center"
      :class="isDark ? 'bg-[#1a1a18]' : 'bg-[#eceae4]'"
    >
      <span class="text-[16px] font-semibold tracking-tight" :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'">{{ item.value }}</span>
      <span class="text-balance text-[10px] leading-tight" :class="isDark ? 'text-[#555]' : 'text-[#999]'">{{ item.label }}</span>
    </div>
  </section>
</template>
