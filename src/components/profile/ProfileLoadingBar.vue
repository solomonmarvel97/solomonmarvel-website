<script setup lang="ts">
defineProps<{
  pageLoading: boolean
}>()
</script>

<template>
  <Transition name="progress-fade">
    <div
      v-if="pageLoading"
      class="fixed top-0 inset-x-0 z-50 h-[2px] overflow-hidden pointer-events-none"
      role="progressbar"
      aria-busy="true"
      aria-label="Loading"
    >
      <div class="progress-bar h-full w-[200%]" />
    </div>
  </Transition>
</template>

<style scoped>
.progress-bar {
  background: linear-gradient(
    90deg,
    #4285f4 0%,    #4285f4 12.5%,
    #ea4335 12.5%, #ea4335 25%,
    #fbbc04 25%,   #fbbc04 37.5%,
    #34a853 37.5%, #34a853 50%,
    #4285f4 50%,   #4285f4 62.5%,
    #ea4335 62.5%, #ea4335 75%,
    #fbbc04 75%,   #fbbc04 87.5%,
    #34a853 87.5%, #34a853 100%
  );
  animation: stripe-slide 1.15s linear infinite;
  will-change: transform;
}

@keyframes stripe-slide {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    width: 100%;
    animation: none;
    background: linear-gradient(90deg, #4285f4 0% 25%, #ea4335 25% 50%, #fbbc04 50% 75%, #34a853 75% 100%);
  }
}

.progress-fade-enter-active,
.progress-fade-leave-active {
  transition: opacity 0.3s ease;
}
.progress-fade-enter-from,
.progress-fade-leave-to {
  opacity: 0;
}
</style>
