<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div
        class="grow basis-[0%] caret-white"
        data-component-id="Component_1_1"
      >
        <Button
          aria-label="Toggle navigation"
          variant="ghost"
          type="button"
          class="relative hidden min-w-fit gap-x-1 gap-y-1 fill-[#0969da] p-1 text-[16px] font-medium text-[#0969da] caret-white hover:underline hover:decoration-[initial] hover:[text-decoration-style:initial]"
        >
          <span class='text-center grid grow shrink-0 justify-center content-center items-center grid-cols-[min-content_minmax(0px,auto)_min-content] [grid-template-areas:"leadingVisual_text_trailingVisual"] fill-[#0969da] caret-white select-none'>
            <span class="block col-start-[text] col-end-[text] row-start-[text] row-end-[text] fill-[#0969da] caret-white select-none">
              <div class="w-[22px] h-0 fill-[#0969da] caret-white select-none my-1 rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] border-white border"></div>
              <div class="w-[22px] h-0 fill-[#0969da] caret-white select-none my-1 rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] border-white border"></div>
              <div class="w-[22px] h-0 fill-[#0969da] caret-white select-none my-1 rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] border-white border"></div>
            </span>
          </span>
        </Button>
      </div>
</template>
