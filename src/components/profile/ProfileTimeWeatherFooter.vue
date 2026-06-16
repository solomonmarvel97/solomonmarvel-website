<script setup lang="ts">
defineProps<{
  isDark: boolean
  time: string
  weatherIcon: string
  tempC: number | null
}>()
</script>

<template>
  <footer
    class="text-[11px] flex flex-col gap-2"
    :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
    data-footer
    aria-label="Site footer"
  >
    <div class="flex items-center gap-1.5" aria-label="Local time and weather">
      <span><time datetime="PT1M">{{ time }}</time> in Lagos, Nigeria</span>
      <span v-if="weatherIcon" class="text-[13px] leading-none" aria-label="Current weather">{{ weatherIcon }}</span>
      <span v-if="tempC !== null" :class="isDark ? 'text-[#555]' : 'text-[#888]'" aria-label="Temperature">{{ tempC }}°C</span>
    </div>
    <p>
      This site is open source - feel free to
      <a
        href="https://github.com/solomonmarvel97/solomonmarvel-website"
        target="_blank"
        rel="noopener noreferrer"
        class="underline underline-offset-2"
        :class="isDark ? 'text-[#666] decoration-[#333] hover:text-[#888]' : 'text-[#888] decoration-[#ccc] hover:text-[#555]'"
      >clone and use it on GitHub</a>.
    </p>
  </footer>
</template>
