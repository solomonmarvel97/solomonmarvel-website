<script setup lang="ts">
import { PhMagnifyingGlass, PhXCircle } from '@phosphor-icons/vue'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div
        class="flex flex-col gap-y-1 gap-x-1"
        data-component-id="Component_2_2_1_1_1_1"
      >
        <label
          id="query-builder-test-label"
          class="font-semibold w-px h-px absolute block overflow-x-hidden overflow-y-hidden [clip-path:inset(0px_100%_100%_0px)]"
        >
          Search
        </label>
        <div class="bg-white align-middle h-8 max-w-full flex items-center gap-y-1 gap-x-1 mx-3 rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] border-[#d1d9e0] border">
          <span
            id="query-builder-test-leadingvisual-wrap"
            class="text-muted-foreground block caret-[#59636e] ml-2 mr-1 my-1"
          >
            <PhMagnifyingGlass
              :size="16"
              color="#59636e"
              aria-hidden="true"
              class="align-text-bottom inline-block shrink-0 pointer-events-none"
            />
          </span>
          <div class="relative flex overflow-y-hidden grow basis-[0%] items-center self-stretch">
            <div class="w-full self-stretch">
              <input
                id="query-builder-test"
                name="query-builder-test"
                autoComplete="off"
                type="text"
                role="combobox"
                spellCheck="false"
                aria-describedby="validation-6383f1fc-b6c5-408e-8515-f2d4a185aa48"
                class="bg-[rgba(0,0,0,0)] text-[rgba(0,0,0,0)] w-[300px] h-8 min-w-full relative flex [background-position-x:0px] [background-position-y:0px] shadow-[rgba(31,35,40,0.04)_0px_1px_0px_0px_inset] p-0 rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] focus:[border-top-style:initial] focus:[border-right-style:initial] focus:[border-bottom-style:initial] focus:[border-left-style:initial] focus:shadow-none focus:border-0 focus:border-[initial]"
              />
            </div>
          </div>
          <span hidden class="hidden">
            <span
              id="query-builder-test-clear"
              class="w-px h-px absolute block overflow-x-hidden overflow-y-hidden [clip-path:inset(0px_100%_100%_0px)]"
            >
              Clear
            </span>
            <Button
              role="button"
              id="query-builder-test-clear-button"
              variant="ghost"
              size="icon-sm"
              aria-labelledby="query-builder-test-clear query-builder-test-label"
              type="button"
              class="relative mr-1 h-8 w-8 min-w-max text-muted-foreground hover:bg-[color:var(--control-transparent-bgColor-hover,var(--color-action-list-item-default-hover-bg))] active:bg-[color:var(--button-invisible-bgColor-active)]"
            >
              <PhXCircle
                :size="16"
                color="#59636e"
                aria-hidden="true"
                class="inline-flex shrink-0 pointer-events-none select-none"
              />
            </Button>
          </span>
        </div>
        <div class="relative">
          <ul
            role="listbox"
            aria-label="Suggestions"
            id="query-builder-test-results"
            tabindex="-1"
            class="max-h-[604.8px] overflow-x-hidden list-none my-0 pl-0 py-2"
          ></ul>
        </div>
      </div>
</template>
