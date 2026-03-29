<script setup lang="ts">
import { PhPlugsConnected } from '@phosphor-icons/vue'
import { megaMenuIconClass, megaMenuIconColor } from '@/components/icons/megaMenuIconProps'
</script>

<template>
  <li
        class="list-outside caret-white"
        data-component-id="Component_2_1_1_1"
      >
        <a
          href="#/mcp"
          class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
        >
          <div class="grid gap-y-0 gap-x-4 grid-cols-[auto_1fr] grid-rows-[auto_auto]">
            <PhPlugsConnected
              :size="24"
              :color="megaMenuIconColor"
              aria-hidden="true"
              :class="megaMenuIconClass"
            />
            <span class="block col-start-2 row-start-1">
              MCP Registry
              <sup class="text-[#0969da] leading-[0] text-[12px] align-middle relative top-[-6px] inline caret-[#0969da] ml-1 bottom-auto inset-x-auto">
                New
              </sup>
            </span>
            <span class="text-[#57606a] text-[14px] block col-start-2 row-start-2 caret-[#57606a]">
              Integrate external tools
            </span>
          </div>
        </a>
      </li>
</template>
