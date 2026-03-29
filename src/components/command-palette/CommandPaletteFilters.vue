<script setup lang="ts">
import { PhSealWarning } from '@phosphor-icons/vue'
import CommandPaletteFilterRow01 from './filters/CommandPaletteFilterRow01.vue'
import CommandPaletteFilterRow02 from './filters/CommandPaletteFilterRow02.vue'
import CommandPaletteFilterRow03 from './filters/CommandPaletteFilterRow03.vue'
import CommandPaletteFilterRow04 from './filters/CommandPaletteFilterRow04.vue'
import CommandPaletteFilterRow05 from './filters/CommandPaletteFilterRow05.vue'
import CommandPaletteFilterRow06 from './filters/CommandPaletteFilterRow06.vue'
import CommandPaletteFilterRow07 from './filters/CommandPaletteFilterRow07.vue'
import CommandPaletteFilterRow08 from './filters/CommandPaletteFilterRow08.vue'
import CommandPaletteFilterRow09 from './filters/CommandPaletteFilterRow09.vue'
import CommandPaletteFilterRow10 from './filters/CommandPaletteFilterRow10.vue'
import CommandPaletteFilterRow11 from './filters/CommandPaletteFilterRow11.vue'
import CommandPaletteFilterRow12 from './filters/CommandPaletteFilterRow12.vue'
import CommandPaletteFilterRow13 from './filters/CommandPaletteFilterRow13.vue'
</script>

<template>
  <div class="" data-component-id="command-palette-filters">
    <CommandPaletteFilterRow01 />
    <CommandPaletteFilterRow02 />
    <CommandPaletteFilterRow03 />
    <CommandPaletteFilterRow04 />
    <CommandPaletteFilterRow05 />
    <CommandPaletteFilterRow06 />
    <CommandPaletteFilterRow07 />
    <CommandPaletteFilterRow08 />
    <CommandPaletteFilterRow09 />
    <CommandPaletteFilterRow10 />
    <CommandPaletteFilterRow11 />
    <CommandPaletteFilterRow12 />
    <CommandPaletteFilterRow13 />
    <div
      hidden
      class="relative hidden items-center mx-4 my-2 px-4 py-5 rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] border-[rgba(255,129,130,0.4)] border"
      data-style-id="style-11-1774649054682"
    >
      <div class="">
        <PhSealWarning
          :size="16"
          color="#d1242f"
          aria-hidden="true"
          class="align-text-bottom inline-block mr-3 shrink-0"
        />
      </div>
      <div class="px-2">
        We’ve encountered an error and some results aren't available at this time. Type a new search or try
        again later.
      </div>
    </div>
    <div hidden class="font-semibold hidden pl-4 pt-4 pb-2">
      No results matched your search
    </div>
  </div>
</template>
