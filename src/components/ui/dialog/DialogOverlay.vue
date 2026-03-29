<script setup lang="ts">
import { DialogOverlay } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<{ class?: string; isDark?: boolean }>()
</script>

<template>
  <DialogOverlay
    :class="cn(
      'fixed inset-0 z-50 backdrop-blur-md transition-all duration-200',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      props.isDark ? 'bg-black/60' : 'bg-white/50',
      props.class,
    )"
  />
</template>
