<script setup lang="ts">
import { PhArrowSquareOut } from '@phosphor-icons/vue'
</script>

<template>
  <ul
        class="flex flex-col gap-y-3 gap-x-5 caret-white my-0 pl-0"
        data-component-id="Component_2_1_9_1"
      >
        <li class="list-outside caret-white">
          <a
            href="#/customer-stories"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Customer stories
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/resources/events"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Events & webinars
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/resources/whitepapers"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Ebooks & reports
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/solutions/executive-insights"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Business insights
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="https://skills.github.com"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              GitHub Skills
            </span>
            <PhArrowSquareOut
              :size="16"
             
              aria-hidden="true"
              class="align-text-bottom w-4 h-4 block shrink-0 opacity-0 translate-x-[-8px] translate-y-0"
            />
          </a>
        </li>
      </ul>
</template>
