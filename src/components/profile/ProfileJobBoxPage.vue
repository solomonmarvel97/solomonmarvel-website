<script setup lang="ts">
import { PhArrowSquareOut, PhArrowLeft } from '@phosphor-icons/vue'
import { jobbox } from '@/profile/jobbox'

defineProps<{
  isDark: boolean
}>()
</script>

<template>
  <article aria-label="JobBox" class="mb-16" data-bio>
    <p
      class="text-[11px] uppercase tracking-wider mb-2"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >{{ jobbox.name }}</p>

    <h2
      class="text-[22px] font-semibold tracking-tight leading-snug mb-3"
      :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'"
      data-writing-row
    >{{ jobbox.tagline }}</h2>

    <p
      class="text-[13px] leading-[1.65] mb-2"
      :class="isDark ? 'text-[#aaa]' : 'text-[#333]'"
      data-writing-row
    >{{ jobbox.headline }}</p>
    <p
      class="text-[13px] leading-[1.65] mb-6"
      :class="isDark ? 'text-[#888]' : 'text-[#555]'"
      data-writing-row
    >{{ jobbox.intro }}</p>

    <div class="mb-8 flex flex-wrap items-center gap-3" data-writing-row>
      <a
        :href="jobbox.url"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-[12px] font-medium px-4 py-2 rounded-full transition-colors"
        :class="isDark ? 'bg-[#e8e5de] text-[#111110] hover:bg-white' : 'bg-[#1a1a1a] text-white hover:bg-[#333]'"
      >
        {{ jobbox.cta.primary }}
        <PhArrowSquareOut :size="13" weight="bold" aria-hidden="true" />
      </a>
      <RouterLink
        to="/"
        class="inline-flex items-center gap-1.5 text-[12px] font-medium px-4 py-2 rounded-full border transition-colors"
        :class="isDark ? 'border-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'border-[#d8d5ce] text-[#555] hover:text-[#1a1a1a]'"
      >
        <PhArrowLeft :size="13" weight="bold" aria-hidden="true" />
        {{ jobbox.cta.secondary }}
      </RouterLink>
    </div>

    <section class="mb-10" aria-labelledby="jobbox-what">
      <h3
        id="jobbox-what"
        class="text-[12px] font-semibold tracking-wide mb-2"
        :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
        data-writing-label
      >What JobBox is</h3>
      <div class="space-y-3 text-[13px] leading-[1.65]" :class="isDark ? 'text-[#aaa]' : 'text-[#333]'">
        <p v-for="(line, i) in jobbox.definition" :key="i" data-writing-row>{{ line }}</p>
      </div>
    </section>

    <section class="mb-10" aria-labelledby="jobbox-why">
      <h3
        id="jobbox-why"
        class="text-[12px] font-semibold tracking-wide mb-2"
        :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
        data-writing-label
      >{{ jobbox.why.title }}</h3>
      <div class="space-y-3 text-[13px] leading-[1.65]" :class="isDark ? 'text-[#aaa]' : 'text-[#333]'">
        <p v-for="(line, i) in jobbox.why.body" :key="i" data-writing-row>{{ line }}</p>
      </div>
    </section>

    <section class="mb-10" aria-labelledby="jobbox-building">
      <h3
        id="jobbox-building"
        class="text-[12px] font-semibold tracking-wide mb-2"
        :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
        data-writing-label
      >{{ jobbox.building.title }}</h3>
      <p
        class="text-[13px] leading-[1.65] mb-4"
        :class="isDark ? 'text-[#aaa]' : 'text-[#333]'"
        data-writing-row
      >{{ jobbox.building.body[0] }}</p>
      <ul class="list-none p-0 m-0 space-y-3">
        <li
          v-for="item in jobbox.building.items"
          :key="item.title"
          data-writing-row
          class="border-b pb-3 last:border-0 last:pb-0"
          :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
        >
          <p class="text-[13px] font-medium mb-0.5" :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'">{{ item.title }}</p>
          <p class="text-[12px] leading-[1.6]" :class="isDark ? 'text-[#666]' : 'text-[#777]'">{{ item.description }}</p>
        </li>
      </ul>
    </section>

    <section class="mb-10" aria-labelledby="jobbox-believe">
      <h3
        id="jobbox-believe"
        class="text-[12px] font-semibold tracking-wide mb-2"
        :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
        data-writing-label
      >{{ jobbox.belief.title }}</h3>
      <ul class="list-none p-0 m-0 space-y-2">
        <li
          v-for="item in jobbox.belief.items"
          :key="item"
          data-writing-row
          class="text-[13px] leading-[1.55] pl-3 border-l"
          :class="isDark ? 'text-[#aaa] border-[#2a2a28]' : 'text-[#333] border-[#e0ddd6]'"
        >{{ item }}</li>
      </ul>
    </section>

    <section class="mb-8" aria-labelledby="jobbox-lines">
      <h3
        id="jobbox-lines"
        class="text-[12px] font-semibold tracking-wide mb-2"
        :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
        data-writing-label
      >How we talk about it</h3>
      <ul class="list-none p-0 m-0 space-y-2">
        <li
          v-for="line in jobbox.taglines"
          :key="line"
          data-writing-row
          class="text-[12px] leading-snug italic"
          :class="isDark ? 'text-[#666]' : 'text-[#777]'"
        >{{ line }}</li>
      </ul>
    </section>

    <div class="pt-2" data-writing-row>
      <a
        :href="jobbox.url"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors"
        :class="isDark ? 'text-[#e8e5de] hover:text-white' : 'text-[#1a1a1a] hover:text-[#333]'"
      >
        {{ jobbox.cta.primary }}
        <PhArrowSquareOut :size="14" weight="bold" aria-hidden="true" />
      </a>
    </div>
  </article>
</template>
