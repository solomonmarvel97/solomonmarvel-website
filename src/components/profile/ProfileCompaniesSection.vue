<script setup lang="ts">
defineProps<{
  isDark: boolean
  companies: ReadonlyArray<{
    title: string
    role: string
    year: string
    status: string
    url?: string
    flagship?: boolean
    affiliation?: string
  }>
}>()
</script>

<template>
  <section aria-label="Companies founded by Solomon Marvelous" class="mb-12">
    <h2
      class="text-[11px] uppercase tracking-wider mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >Companies</h2>
    <ul class="list-none p-0 m-0" aria-label="Companies">
      <li
        v-for="item in companies"
        :key="item.title"
        data-writing-row
        class="flex items-center justify-between py-[7px] border-b last:border-0"
        :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
      >
        <div class="flex min-w-0 flex-1 items-center gap-3">
          <span class="w-8 shrink-0 text-[12px]" :class="isDark ? 'text-[#444]' : 'text-[#aaa]'">{{ item.year }}</span>
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
                class="shrink-0 text-[10px] italic leading-none"
                :class="item.flagship ? 'text-[#a07830]' : isDark ? 'text-[#5c5c58]' : 'text-[#9a9a94]'"
              >{{ item.affiliation }}</span>
            </div>
            <span class="text-[11px]" :class="item.flagship ? 'text-[#a07830]' : isDark ? 'text-[#555]' : 'text-[#aaa]'">{{ item.role }}</span>
          </div>
        </div>
        <span
          class="text-[12px] shrink-0 ml-4"
          :class="item.status === 'Closed'
            ? 'text-[#888] line-through'
            : isDark ? 'text-[#444]' : 'text-[#aaa]'"
        >{{ item.status }}</span>
      </li>
    </ul>
  </section>
</template>
