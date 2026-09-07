<script setup lang="ts">
import { PhCopy, PhCheck } from '@phosphor-icons/vue'
import { aboutStory } from '@/profile/about'

defineProps<{
  isDark: boolean
  emailCopied: boolean
}>()

const emit = defineEmits<{
  copyEmail: []
}>()
</script>

<template>
  <section
    aria-label="About Marv Solomon"
    class="mb-16"
    data-bio
    itemscope
    itemtype="https://schema.org/Person"
    itemprop="description"
  >
    <h2
      class="text-[11px] uppercase tracking-wider mb-2"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >{{ aboutStory.pageTitle }}</h2>
    <p
      class="text-[13px] leading-[1.65] mb-8"
      :class="isDark ? 'text-[#888]' : 'text-[#666]'"
      data-writing-row
    >{{ aboutStory.intro }}</p>

    <div class="space-y-8">
      <section
        v-for="section in aboutStory.sections"
        :key="section.id"
        :aria-labelledby="`about-${section.id}`"
      >
        <h3
          :id="`about-${section.id}`"
          class="text-[12px] font-semibold tracking-wide mb-2"
          :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
          data-writing-label
        >{{ section.title }}</h3>
        <div
          class="text-[13px] leading-[1.65] space-y-3"
          :class="isDark ? 'text-[#aaa]' : 'text-[#333]'"
        >
          <p v-for="(paragraph, i) in section.body" :key="i" data-writing-row>
            {{ paragraph }}
          </p>
        </div>
      </section>
    </div>

    <p
      class="mt-10 text-[13px] leading-[1.65]"
      :class="isDark ? 'text-[#aaa]' : 'text-[#333]'"
      data-writing-row
    >
      You can find me on
      <a href="https://linkedin.com/in/superdeveloper" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">LinkedIn</a>,
      <a href="https://x.com/marvmargic" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">Twitter (X)</a>
      or reach me via
      <span class="inline-flex items-center gap-1">
        <a href="mailto:me@solomonmarvel.com" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">email</a>
        <button
          type="button"
          class="inline-flex items-center justify-center w-4 h-4 rounded transition-colors"
          :class="isDark ? 'text-[#555] hover:text-[#aaa]' : 'text-[#bbb] hover:text-[#555]'"
          :title="emailCopied ? 'Copied!' : 'Copy email'"
          @click="emit('copyEmail')"
        >
          <PhCheck v-if="emailCopied" :size="11" weight="bold" />
          <PhCopy v-else :size="11" />
        </button>
      </span>.
    </p>
  </section>
</template>
