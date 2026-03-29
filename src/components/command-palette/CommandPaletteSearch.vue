<script setup lang="ts">
import { PhMagnifyingGlass, PhXCircle } from '@phosphor-icons/vue'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div
        placeholder="Search or jump to..."
        class="flex items-center pl-4 pr-2 py-1 border-t-[#1f2328] border-b-[#d1d9e0] border-x-[#1f2328] border-b"
        data-component-id="Component_3"
      >
        <div class="h-[26px] flex items-center mr-2">
          <PhMagnifyingGlass
            :size="16"
            color="#59636e"
            aria-hidden="true"
            class="align-text-bottom w-4 h-4 shrink-0"
          />
        </div>
        <div class="bg-white text-muted-foreground leading-[20px] align-middle relative z-0 grow basis-[0%] [background-position-x:calc(100%_-_8px)] [background-position-y:50%] bg-no-repeat caret-[#59636e] pr-3 py-[5px] rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] focus:shadow-[rgba(0,0,0,0)_0px_0px_0px_1px_inset] focus:[outline-style:none] focus:outline-[initial] group">
          <input
            disabled
            tabindex="-1"
            aria-label="Hidden input for typeahead"
            class="bg-[rgba(239,239,239,0.3)] text-[#545454] hidden caret-[#545454] pl-0 pr-3 py-[5px]"
          />
          <input
            type="text"
            autoComplete="off"
            spellCheck="false"
            aria-label="Command palette input"
            role="combobox"
            placeholder="Search or jump to..."
            class="text-foreground align-middle w-full block [background-position-x:calc(100%_-_8px)] [background-position-y:50%] bg-no-repeat pl-0 pr-3 py-[5px] rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] focus:shadow-[rgba(0,0,0,0)_0px_0px_0px_1px_inset] focus:[outline-style:none] focus:outline-[initial] group"
          />
        </div>
        <div class="relative">
          <Button
            id="command-palette-clear-button"
            variant="ghost"
            hidden
            type="button"
            size="icon-sm"
            aria-labelledby="tooltip-301929a4-f4fc-46ce-ae76-7cdafd860ea3"
            class="ml-[5px] hidden h-8 w-8 min-h-0 text-muted-foreground hover:text-[color:var(--fgColor-muted)]"
          >
            <PhXCircle
              :size="16"
              color="#59636e"
              aria-hidden="true"
              class="inline-block shrink-0"
            />
          </Button>
          <div
            id="tooltip-301929a4-f4fc-46ce-ae76-7cdafd860ea3"
            aria-hidden="true"
            role="tooltip"
            class="bg-[#25292e] text-white leading-relaxed text-[12px] text-center [text-wrap-style:balance] w-max h-px max-w-80 absolute hidden opacity-0 [clip-path:inset(0px_100%_100%_0px)] caret-white m-auto px-2 py-1 rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] left-0 right-auto top-0 bottom-auto"
          >
            Clear Command Palette
          </div>
        </div>
      </div>
</template>
