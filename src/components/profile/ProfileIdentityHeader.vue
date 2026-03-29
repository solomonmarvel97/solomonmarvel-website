<script setup lang="ts">
import { PhXLogo, PhLinkedinLogo, PhGithubLogo, PhEnvelope } from '@phosphor-icons/vue'

defineProps<{
  isDark: boolean
}>()
</script>

<template>
  <div class="mb-8" data-header itemscope itemtype="https://schema.org/Person">
    <h1
      class="text-[14px] font-semibold leading-snug"
      data-name
      :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'"
      itemprop="name"
    >Solomon Marvelous</h1>
    <p
      class="text-[12px] mt-0.5 mb-3"
      :class="isDark ? 'text-[#555]' : 'text-[#888]'"
      itemprop="jobTitle"
    >Enterprise Architect · Distinguished Technology Leader</p>

    <div class="flex flex-wrap items-center gap-2 mb-3">
      <a
        href="https://x.com/marvmargic"
        target="_blank"
        rel="noopener noreferrer me"
        class="flex items-center justify-center w-7 h-7 rounded-full transition-colors"
        :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#e8e5de] text-[#555] hover:text-[#1a1a1a]'"
        itemprop="sameAs"
        aria-label="Solomon Marvelous on X (formerly Twitter)"
      >
        <PhXLogo :size="13" weight="bold" />
      </a>
      <a
        href="https://linkedin.com/in/superdeveloper"
        target="_blank"
        rel="noopener noreferrer me"
        class="flex items-center justify-center w-7 h-7 rounded-full transition-colors"
        :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#e8e5de] text-[#555] hover:text-[#1a1a1a]'"
        itemprop="sameAs"
        aria-label="Solomon Marvelous on LinkedIn"
      >
        <PhLinkedinLogo :size="13" weight="bold" />
      </a>
      <a
        href="https://github.com/solomonmarvel97"
        target="_blank"
        rel="noopener noreferrer me"
        class="flex items-center justify-center w-7 h-7 rounded-full transition-colors"
        :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#e8e5de] text-[#555] hover:text-[#1a1a1a]'"
        itemprop="sameAs"
        aria-label="Solomon Marvelous on GitHub"
      >
        <PhGithubLogo :size="13" weight="bold" />
      </a>
      <a
        href="mailto:solomon@boltcliq.com"
        class="flex items-center justify-center h-7 px-3 rounded-full text-[11px] font-medium transition-colors ml-1 border"
        :class="isDark ? 'border-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'border-[#d8d5ce] text-[#555] hover:text-[#1a1a1a]'"
      ><PhEnvelope :size="13" class="shrink-0 mr-1" />Email</a>
    </div>
  </div>
</template>
