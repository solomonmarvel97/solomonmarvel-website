<script setup lang="ts">
import { computed, ref, useAttrs, type HTMLAttributes } from 'vue'
import { buttonVariants, type ButtonVariantProps } from './button-variants'
import { cn } from '@/lib/utils'

interface Props {
  variant?: ButtonVariantProps['variant']
  size?: ButtonVariantProps['size']
  class?: HTMLAttributes['class']
  type?: 'button' | 'submit' | 'reset'
  /** When set, renders as `<a>` with button styling (e.g. hero CTAs). */
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  type: 'button',
})

const attrs = useAttrs()

const delegatedAttrs = computed(() => {
  const { class: _c, ...rest } = attrs as Record<string, unknown>
  return rest
})

const root = ref<HTMLButtonElement | HTMLAnchorElement | null>(null)

defineExpose({
  getNativeButton: () => root.value,
})
</script>

<template>
  <a
    v-if="href"
    ref="root"
    :href="href"
    :class="cn(buttonVariants({ variant, size }), 'no-underline hover:no-underline', props.class)"
    v-bind="delegatedAttrs"
  >
    <slot />
  </a>
  <button
    v-else
    ref="root"
    :type="type"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    v-bind="delegatedAttrs"
  >
    <slot />
  </button>
</template>
