<script setup lang="ts">
defineProps<{
  isDark: boolean
  products: ReadonlyArray<{ title: string; year: string; url?: string; isNew?: boolean }>
}>()
</script>

<template>
  <section aria-label="Products built by Solomon Marvelous" class="mb-12">
    <h2
      class="text-[11px] uppercase tracking-wider mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >Products</h2>
    <ul class="list-none p-0 m-0" aria-label="Products by Solomon Marvelous">
      <li
        v-for="item in products"
        :key="item.title"
        data-writing-row
        class="flex items-center justify-between py-[7px] cursor-pointer border-b last:border-0"
        :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
      >
        <div class="flex items-center gap-3 min-w-0">
          <span class="text-[12px] w-8 shrink-0" :class="isDark ? 'text-[#444]' : 'text-[#aaa]'">{{ item.year }}</span>
          <a
            :href="item.url ?? undefined"
            :target="item.url ? '_blank' : undefined"
            :rel="item.url ? 'noopener noreferrer' : undefined"
            class="text-[13px] flex items-center gap-1.5 truncate"
            :class="[isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]', item.url ? '' : 'cursor-default']"
          >
            {{ item.title }}
            <span v-if="item.isNew" class="inline-flex items-center gap-1 border border-[#e57d9b] text-[#e57d9b] text-[9px] leading-none px-1.5 py-0.5 rounded-full shrink-0">
              <span class="w-1 h-1 rounded-full bg-[#e57d9b] animate-pulse" />
              New
            </span>
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>
