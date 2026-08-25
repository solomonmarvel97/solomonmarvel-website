<script setup lang="ts">
import { ref, watch } from 'vue'
import { PhSpinner } from '@phosphor-icons/vue'

const props = defineProps<{
  isDark: boolean
  coverImage: string
}>()

const coverLoaded = ref(false)

watch(
  () => props.coverImage,
  () => {
    coverLoaded.value = false
  },
)
</script>

<template>
  <div class="relative w-full h-44 sm:h-56 overflow-hidden leading-none" data-cover aria-label="Profile cover">
    <div
      v-if="!coverLoaded"
      class="absolute top-3 left-4 z-10 text-white/50 animate-spin"
      aria-hidden="true"
    >
      <PhSpinner :size="16" weight="bold" />
    </div>

    <img
      v-if="coverImage"
      :src="coverImage"
      alt=""
      role="presentation"
      class="w-full h-full object-cover block transition-opacity duration-500"
      :class="coverLoaded ? 'opacity-100' : 'opacity-0'"
      loading="eager"
      decoding="async"
      @load="coverLoaded = true"
    />
    <div
      class="absolute inset-0 transition-colors duration-300"
      :class="isDark ? 'bg-black/40' : 'bg-black/10'"
    />
  </div>
</template>
