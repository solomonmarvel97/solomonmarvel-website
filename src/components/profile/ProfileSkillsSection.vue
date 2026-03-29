<script setup lang="ts">
defineProps<{
  isDark: boolean
  skills: ReadonlyArray<{ group: string; tags: readonly string[] }>
}>()
</script>

<template>
  <section aria-label="Skills and expertise" class="mb-12">
    <h2
      class="text-[11px] uppercase tracking-wider mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >Skills &amp; Expertise</h2>
    <div class="space-y-3" role="list" aria-label="Skill groups">
      <div v-for="group in skills" :key="group.group" role="listitem">
        <p class="text-[10px] uppercase tracking-widest mb-1.5" :class="isDark ? 'text-[#444]' : 'text-[#bbb]'">{{ group.group }}</p>
        <ul class="flex flex-wrap gap-1.5 list-none p-0 m-0" :aria-label="group.group + ' skills'">
          <li
            v-for="tag in group.tags"
            :key="tag"
            class="text-[11px] px-2 py-0.5 rounded-full"
            :class="isDark ? 'bg-[#1e1e1c] text-[#888]' : 'bg-[#e8e5de] text-[#555]'"
          >{{ tag }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
