<script setup lang="ts">
import { ref, watch } from 'vue'
import { PhSpinner, PhArrowClockwise } from '@phosphor-icons/vue'

const props = defineProps<{
  isDark: boolean
  coverImage: string
}>()

const emit = defineEmits<{
  reload: []
  toggleTheme: []
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
  <header class="relative w-full h-44 sm:h-56 overflow-hidden leading-none" data-cover aria-label="Profile cover">
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

    <div class="absolute top-3 right-4 flex items-center gap-1.5">
      <button
        type="button"
        aria-label="Reload page"
        title="Reload page"
        :class="[
          'w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-200',
          isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/20 hover:bg-black/30 text-white',
        ]"
        @click="emit('reload')"
      >
        <PhArrowClockwise :size="14" weight="bold" />
      </button>
      <button
        type="button"
        aria-label="Toggle theme"
        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        :class="[
          'w-8 h-8 rounded-full flex items-center justify-center text-[13px] backdrop-blur-sm transition-colors duration-200',
          isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/20 hover:bg-black/30 text-white',
        ]"
        @click="emit('toggleTheme')"
      >
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </div>
  </header>
</template>
