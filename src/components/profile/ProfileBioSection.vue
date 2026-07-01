<script setup lang="ts">
import { PhCopy, PhCheck } from '@phosphor-icons/vue'

defineProps<{
  isDark: boolean
  yearsOfExperience: number
  emailCopied: boolean
}>()

const emit = defineEmits<{
  copyEmail: []
}>()
</script>

<template>
  <section
    aria-label="About Solomon Marvelous"
    class="text-[13px] leading-[1.65] space-y-3 mb-10"
    :class="isDark ? 'text-[#aaa]' : 'text-[#333]'"
    data-bio
    itemscope
    itemtype="https://schema.org/Person"
    itemprop="description"
  >
    <p>
      Born in Delta State, Nigeria, I started coding at age 8, experimenting with BASIC, Visual Basic 6,
      and scripting before teaching myself Turbo Pascal, C#, Qt, and C++. At 14, I gained admission to
      study Computer Science, graduating at 19. By 17, I had already built PingXtra, a campus social
      network that sparked my passion for building products that connect people.
    </p>
    <p>
      I've always been driven by curiosity. Learning isn't just something I do. It's something I
      genuinely enjoy. I love the challenge of mastering new ideas, creating meaningful products, and
      sharing knowledge with others. Those passions have shaped my journey, influencing every product
      I've built, every platform I've designed, and every community I've helped grow.
    </p>
    <p>
      Today, I'm a technology leader with over {{ yearsOfExperience }} years of experience designing and
      delivering scalable, high-performance systems across fintech, banking, e-commerce, retail, and AI.
      I specialise in architecting complex enterprise solutions that enable innovation, simplify
      operations, and create lasting business impact at scale.
    </p>
    <p>
      You can find me on
      <a href="https://linkedin.com/in/superdeveloper" target="_blank" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">LinkedIn</a>,
      <a href="https://x.com/marvmargic" target="_blank" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">Twitter (X)</a>
      or reach me via
      <span class="inline-flex items-center gap-1">
        <a href="mailto:solomon@boltcliq.com" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">email</a>
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
