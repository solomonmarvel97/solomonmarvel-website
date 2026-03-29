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
      Born in Delta State, Nigeria. My roots are in computer science, but I've always been drawn
      to design, crafts, and the hands-on act of making things - there's something deeply
      satisfying about building something from nothing and watching it come to life.
    </p>
    <p>
      I love to make things and I love to teach people. Those two drives have shaped everything
      I've built - from products and platforms to communities of learners.
    </p>
    <p>
      Technology Leader with {{ yearsOfExperience }}+ years of experience designing and delivering scalable,
      high-performance systems across fintech, e-commerce, retail, banking, and AI domains.
      I specialise in architecting complex enterprise solutions that drive innovation,
      streamline operations, and deliver impactful results at scale.
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
