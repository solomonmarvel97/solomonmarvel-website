<script setup lang="ts">
import { ref } from 'vue'
import type { ExperienceGroup } from '@/profile/data'

defineProps<{
  isDark: boolean
  experience: ExperienceGroup[]
}>()

const openKey = ref<string | null>(null)

function isOpen(company: string) {
  return openKey.value === company
}

function toggle(company: string) {
  openKey.value = openKey.value === company ? null : company
}

function onEnter(company: string) {
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    openKey.value = company
  }
}

function onLeave(company: string) {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
  if (openKey.value === company) openKey.value = null
}
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
    <ol
      class="list-none p-0 m-0 grid gap-2 sm:grid-cols-2"
      aria-label="Work history by company"
    >
      <li
        v-for="group in experience"
        :key="group.company"
        itemprop="worksFor"
        itemscope
        itemtype="https://schema.org/Organization"
        data-writing-row
        class="rounded-xl border transition-[box-shadow,background-color] duration-200"
        :class="[
          isDark ? 'border-[#1e1e1c] bg-[#141412]' : 'border-[#e8e5de] bg-white',
          isOpen(group.company)
            ? (isDark ? 'shadow-[0_0_0_1px_rgba(232,229,222,0.08)]' : 'shadow-[0_0_0_1px_rgba(0,0,0,0.04)]')
            : '',
        ]"
        @pointerenter="onEnter(group.company)"
        @pointerleave="onLeave(group.company)"
      >
        <button
          type="button"
          class="flex w-full min-h-11 items-start justify-between gap-3 px-3.5 py-3 text-left touch-manipulation"
          :aria-expanded="isOpen(group.company)"
          :aria-controls="`experience-${group.company.replace(/\W+/g, '-').toLowerCase()}`"
          @click="toggle(group.company)"
        >
          <span class="min-w-0">
            <span
              class="block text-[13px] font-medium leading-snug"
              :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
              itemprop="name"
            >{{ group.company }}</span>
            <span
              v-if="group.detail"
              class="mt-0.5 block text-[11px] leading-snug"
              :class="isDark ? 'text-[#5c5c58]' : 'text-[#9a9a94]'"
            >{{ group.detail }}</span>
            <span
              v-if="!isOpen(group.company)"
              class="mt-1 block text-[11px] leading-snug"
              :class="isDark ? 'text-[#555]' : 'text-[#888]'"
            >{{ group.roles[0]?.role }}{{ group.roles.length > 1 ? ` · +${group.roles.length - 1}` : '' }}</span>
          </span>
          <span
            class="mt-0.5 shrink-0 text-[11px] tabular-nums"
            :class="isDark ? 'text-[#555]' : 'text-[#aaa]'"
            aria-hidden="true"
          >{{ isOpen(group.company) ? '−' : '+' }}</span>
        </button>

        <div
          :id="`experience-${group.company.replace(/\W+/g, '-').toLowerCase()}`"
          class="grid transition-[grid-template-rows] duration-200 ease-out"
          :class="isOpen(group.company) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
          <div class="overflow-hidden">
            <div
              class="border-t px-3.5 pt-2.5"
              :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
            >
              <p
                class="mb-2 text-[12px] leading-[1.55]"
                :class="isDark ? 'text-[#888]' : 'text-[#666]'"
              >{{ group.summary }}</p>
              <ul
                class="list-none p-0 m-0 pb-1"
                :aria-label="`Roles at ${group.company}`"
              >
                <li
                  v-for="item in group.roles"
                  :key="item.role"
                  class="flex items-baseline justify-between gap-3 py-1.5"
                >
                  <span
                    class="min-w-0 text-[12px] leading-snug"
                    :class="isDark ? 'text-[#aaa]' : 'text-[#555]'"
                    itemprop="jobTitle"
                  >{{ item.role }}</span>
                  <span
                    v-if="item.period"
                    class="shrink-0 text-[11px] tabular-nums"
                    :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
                  >{{ item.period }}</span>
                </li>
              </ul>
              <a
                v-if="group.url"
                :href="group.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mb-3 inline-block text-[11px] font-medium underline-offset-2 hover:underline"
                :class="isDark ? 'text-[#888]' : 'text-[#777]'"
                itemprop="url"
              >Visit site</a>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>
