<script setup lang="ts">
defineProps<{
  isDark: boolean
  yearsOfExperience: number
  offerings: ReadonlyArray<{ title: string; description: string }>
}>()
</script>

<template>
  <section aria-label="What Solomon Marvelous does for businesses" class="mb-10">
    <h2
      class="text-[11px] uppercase tracking-wider mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >What I Do for Businesses</h2>

    <p
      class="text-[13px] leading-[1.65] mb-5"
      :class="isDark ? 'text-[#aaa]' : 'text-[#333]'"
      data-writing-row
    >
      Businesses hire me when they need more than code - they need someone who can see the full
      picture, from product strategy to production systems. With over {{ yearsOfExperience }} years
      of experience across fintech, banking, e-commerce, retail, and AI, I help companies turn
      ambitious ideas into platforms that scale, teams that deliver, and technology that creates
      lasting business impact.
    </p>

    <ul class="list-none p-0 m-0 space-y-3" aria-label="Business offerings">
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
