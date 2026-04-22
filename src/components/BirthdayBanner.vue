<script setup lang="ts">
import { useBirthdayEffects } from '@/composables/useBirthdayEffects'

const { isBirthdayMonth } = useBirthdayEffects()
</script>

<template>
  <div
    v-if="isBirthdayMonth"
    class="fixed bottom-4 left-4 z-40 pointer-events-none"
  >
    <div class="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text text-2xl font-bold animate-pulse">
      🎉 Happy Birthday! 🎂
    </div>
  </div>
</template>
