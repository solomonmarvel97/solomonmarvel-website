<script setup lang="ts">
import type { ExperienceGroup } from '@/profile/data'

defineProps<{
  isDark: boolean
  experience: ExperienceGroup[]
}>()
</script>

<template>
  <section
    aria-label="Experience of Solomon Marvelous"
    class="mb-16"
    itemscope
    itemtype="https://schema.org/Person"
  >
    <h2
      class="text-[11px] uppercase tracking-wider mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >Experience</h2>
    <ol class="list-none p-0 m-0 space-y-5" aria-label="Work history by company">
      <li
        v-for="group in experience"
        :key="group.company"
        itemprop="worksFor"
        itemscope
        itemtype="https://schema.org/Organization"
        data-writing-row
      >
        <div class="mb-1 flex min-w-0 items-baseline gap-2">
          <a
            v-if="group.url"
            :href="group.url"
            target="_blank"
            rel="noopener noreferrer"
            class="min-w-0 truncate text-[13px] font-medium"
            :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
            itemprop="url"
          >
            <span itemprop="name">{{ group.company }}</span>
          </a>
          <span
            v-else
            class="min-w-0 truncate text-[13px] font-medium"
            :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
            itemprop="name"
          >{{ group.company }}</span>
          <span
            v-if="group.detail"
            class="shrink-0 text-[10px] italic leading-none"
            :class="isDark ? 'text-[#5c5c58]' : 'text-[#9a9a94]'"
          >{{ group.detail }}</span>
        </div>
        <ul class="list-none p-0 m-0" :aria-label="`Roles at ${group.company}`">
          <li
            v-for="item in group.roles"
            :key="item.role"
            class="flex items-baseline justify-between gap-4 py-[5px] border-b last:border-0"
            :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
          >
            <span
              class="min-w-0 text-[13px] leading-snug"
              :class="isDark ? 'text-[#aaa]' : 'text-[#555]'"
              itemprop="jobTitle"
            >{{ item.role }}</span>
            <span
              v-if="item.period"
              class="shrink-0 text-[12px] tabular-nums"
              :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
            >{{ item.period }}</span>
          </li>
        </ul>
      </li>
    </ol>
  </section>
</template>
