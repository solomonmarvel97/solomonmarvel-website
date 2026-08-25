<script setup lang="ts">
import type { CompanyIndustryGroup } from '@/profile/data'

defineProps<{
  isDark: boolean
  companies: CompanyIndustryGroup[]
}>()
</script>

<template>
  <section aria-label="Companies founded by Solomon Marvelous" class="mb-12">
    <h2
      class="text-[11px] uppercase tracking-wider mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >Companies</h2>
    <div class="space-y-5" aria-label="Companies by industry">
      <section
        v-for="group in companies"
        :key="group.industry"
        :aria-label="group.industry"
      >
        <h3
          class="text-[10px] uppercase tracking-widest mb-1.5"
          :class="isDark ? 'text-[#444]' : 'text-[#bbb]'"
        >{{ group.industry }}</h3>
        <ul class="list-none p-0 m-0">
          <li
            v-for="item in group.companies"
            :key="item.title"
            data-writing-row
            class="flex items-start justify-between py-[7px] border-b last:border-0"
            :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
          >
            <div class="flex min-w-0 flex-1 items-center gap-3">
              <span
                v-if="item.status === 'Closed'"
                class="w-8 shrink-0 text-[12px]"
                :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
              >{{ item.year }}</span>
              <div class="flex min-w-0 flex-1 flex-col">
                <div class="flex min-w-0 items-baseline gap-2">
                  <a
                    v-if="item.url"
                    :href="item.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="min-w-0 truncate text-[13px] font-medium"
                    :class="item.flagship ? 'text-[#c9a84c]' : isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
                  >{{ item.title }}</a>
                  <span
                    v-else
                    class="min-w-0 truncate text-[13px] font-medium"
                    :class="item.flagship ? 'text-[#c9a84c]' : isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
                  >{{ item.title }}</span>
                  <span
                    v-if="item.affiliation"
                    class="hidden shrink-0 text-[10px] italic leading-none sm:inline"
                    :class="item.flagship ? 'text-[#a07830]' : isDark ? 'text-[#5c5c58]' : 'text-[#9a9a94]'"
                  >{{ item.affiliation }}</span>
                </div>
                <template v-if="item.roles?.length">
                  <div
                    v-for="entry in item.roles"
                    :key="entry.role"
                    class="flex items-baseline justify-between gap-4"
                  >
                    <span class="min-w-0 text-[11px]" :class="item.flagship ? 'text-[#a07830]' : isDark ? 'text-[#555]' : 'text-[#aaa]'">{{ entry.role }}</span>
                    <span
                      v-if="entry.period"
                      class="shrink-0 text-[12px] tabular-nums"
                      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
                    >{{ entry.period }}</span>
                  </div>
                </template>
                <span
                  v-else
                  class="text-[11px]"
                  :class="item.flagship ? 'text-[#a07830]' : isDark ? 'text-[#555]' : 'text-[#aaa]'"
                >{{ item.role }}</span>
              </div>
            </div>
            <span
              v-if="item.status === 'Closed'"
              class="ml-4 shrink-0 text-[12px] text-[#888] line-through"
            >{{ item.status }}</span>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>
