<script setup lang="ts">
import { PhCaretRight } from '@phosphor-icons/vue'
</script>

<template>
  <ul
        class="flex flex-col gap-y-3 gap-x-5 caret-white my-0 pl-0"
        data-component-id="Component_2_1_7_1"
      >
        <li class="list-outside caret-white">
          <a
            href="#/solutions/industry/healthcare"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Healthcare
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/solutions/industry/financial-services"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Financial services
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/solutions/industry/manufacturing"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Manufacturing
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/solutions/industry/government"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Government
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/solutions/industry"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              View all industries
            </span>
            <PhCaretRight
              :size="16"
             
              aria-hidden="true"
              class="ml-[-2px] align-text-bottom w-4 h-4 shrink-0"
            />
          </a>
        </li>
      </ul>
</template>
