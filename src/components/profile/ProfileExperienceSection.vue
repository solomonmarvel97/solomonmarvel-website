<script setup lang="ts">
import type { ExperienceGroup } from '@/profile/data'

defineProps<{
  isDark: boolean
  experience: ExperienceGroup[]
}>()
</script>

<template>
  <section
    aria-label="Work experience of Solomon Marvelous"
    class="mb-16"
    itemscope
    itemtype="https://schema.org/Person"
  >
    <h2
      class="text-[11px] uppercase tracking-wider mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >Work Experience</h2>
    <ol class="list-none p-0 m-0" aria-label="Work history">
      <template v-for="group in experience" :key="group.year">
        <li
          v-for="(item, i) in group.items"
          :key="item.role + item.company + i"
          itemprop="worksFor"
          itemscope
          itemtype="https://schema.org/Organization"
          data-writing-row
          class="flex items-center justify-between py-[7px] border-b last:border-0"
          :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
        >
          <div class="flex items-center gap-3 min-w-0">
            <span
              v-if="i === 0"
              class="text-[12px] w-8 shrink-0"
              :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
            >{{ group.year }}</span>
            <span v-else class="w-8 shrink-0" />
            <div class="flex flex-col min-w-0">
              <span
                class="text-[13px] truncate"
                :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
                itemprop="jobTitle"
              >{{ item.role }}</span>
              <a
                v-if="item.url"
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[11px]"
                :class="isDark ? 'text-[#555]' : 'text-[#aaa]'"
                itemprop="name"
              >{{ item.company }}</a>
              <span
                v-else
                class="text-[11px]"
                :class="isDark ? 'text-[#555]' : 'text-[#aaa]'"
                itemprop="name"
              >{{ item.company }}</span>
            </div>
          </div>
          <span
            class="text-[12px] shrink-0 ml-4"
            :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
          >{{ item.period }}</span>
        </li>
      </template>
    </ol>
  </section>
</template>
