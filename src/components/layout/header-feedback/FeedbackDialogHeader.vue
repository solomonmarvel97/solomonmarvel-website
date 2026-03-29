<script setup lang="ts">
import { PhX } from '@phosphor-icons/vue'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div
        class="z-[1] flex flex-col"
        data-component-id="Component_2_3_1_1"
      >
        <div class="flex items-start gap-y-2 gap-x-2 pt-2 px-2">
          <div class="flex flex-col grow gap-y-1 gap-x-1 pl-2 py-1.5">
            <h1
              id="feedback-dialog-title"
              class="font-semibold text-[14px] my-0"
            >
              Provide feedback
            </h1>
          </div>
          <div class="flex gap-y-2 gap-x-2">
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Close"
              type="button"
              class="shrink-0 border border-transparent text-muted-foreground hover:bg-[color:var(--button-default-bgColor-hover)] hover:text-[color:var(--fgColor-default,var(--color-fg-default))]"
            >
              <PhX
                :size="16"
                color="#59636e"
                aria-hidden="true"
                class="inline-block shrink-0 select-none"
              />
            </Button>
          </div>
        </div>
      </div>
</template>
