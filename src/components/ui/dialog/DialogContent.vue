<script setup lang="ts">
import { DialogContent, DialogPortal } from 'radix-vue'
import DialogOverlay from './DialogOverlay.vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    class?: string
    isDark?: boolean
    /** When false, clicks on the overlay / outside the panel do not dismiss. */
    closeOnOutside?: boolean
  }>(),
  {
    closeOnOutside: true,
  },
)

const emit = defineEmits<{ close: [] }>()

function onPointerDownOutside(event: Event) {
  if (!props.closeOnOutside) {
    event.preventDefault()
    return
  }
  emit('close')
}

function onInteractOutside(event: Event) {
  if (!props.closeOnOutside) {
    event.preventDefault()
  }
}
</script>

<template>
  <DialogPortal>
    <DialogOverlay :is-dark="props.isDark" />
    <!-- centering wrapper - sits above overlay, centers content via flex -->
    <div
      style="position:fixed;inset:0;z-index:51;display:flex;align-items:center;justify-content:center;pointer-events:none;"
    >
      <DialogContent
        :class="cn('outline-none focus:outline-none pointer-events-auto', props.class)"
        style="position:static;transform:none;"
        @escape-key-down="emit('close')"
        @pointer-down-outside="onPointerDownOutside"
        @interact-outside="onInteractOutside"
      >
        <slot />
      </DialogContent>
    </div>
  </DialogPortal>
</template>
