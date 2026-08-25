<script setup lang="ts">
import { PhCopy, PhCheck } from '@phosphor-icons/vue'

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
    aria-label="About Solomon Marvelous"
    class="mb-16"
    data-bio
    itemscope
    itemtype="https://schema.org/Person"
    itemprop="description"
  >
    <h2
      class="text-[11px] uppercase tracking-wider mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >My Story</h2>

    <div
      class="text-[13px] leading-[1.65] space-y-3"
      :class="isDark ? 'text-[#aaa]' : 'text-[#333]'"
    >
    <p>
      Born in Delta State, Nigeria, I started coding at age 8, experimenting with BASIC, Visual Basic 6,
      and scripting before teaching myself Turbo Pascal, C#, Qt, and C++. At 14, I gained admission to
      study Computer Science, graduating at 19. By 17, I had already built PingXtra, a campus social
      network that sparked my passion for building products that connect people.
    </p>
    <p>
      I've always been driven by curiosity. Learning isn't just something I do. It's something I
      genuinely enjoy. That same obsession is why I now build vertical AI integrations: systems
      that sit inside a real industry and help a business grow, instead of generic tools that demo well
      and stall in production. Those passions have shaped every product I've shipped and every
      community I've helped grow.
    </p>
    <p>
      You can find me on
      <a href="https://linkedin.com/in/superdeveloper" target="_blank" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">LinkedIn</a>,
      <a href="https://x.com/marvmargic" target="_blank" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">Twitter (X)</a>
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
    </div>
  </section>
</template>
