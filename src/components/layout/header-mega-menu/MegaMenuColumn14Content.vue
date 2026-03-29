<script setup lang="ts">
import { PhStack } from '@phosphor-icons/vue'
import { megaMenuIconClass, megaMenuIconColor } from '@/components/icons/megaMenuIconProps'
</script>

<template>
  <ul
        class="flex flex-col gap-y-3 gap-x-5 caret-white my-0 pl-0"
        data-component-id="Component_2_1_14_1"
      >
        <li class="list-outside caret-white">
          <a
            href="#/enterprise"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <div class="grid gap-y-0 gap-x-4 grid-cols-[auto_1fr] grid-rows-[auto_auto]">
              <PhStack
                :size="24"
                :color="megaMenuIconColor"
                aria-hidden="true"
                :class="megaMenuIconClass"
              />
              <span class="block col-start-2 row-start-1">
                Enterprise platform
              </span>
              <span class="text-[#57606a] text-[14px] block col-start-2 row-start-2 caret-[#57606a]">
                AI-powered developer platform
              </span>
            </div>
          </a>
        </li>
      </ul>
</template>
