<script setup lang="ts">
import { PhCaretRight } from '@phosphor-icons/vue'
</script>

<template>
  <ul
        class="flex flex-col gap-y-3 gap-x-5 caret-white my-0 pl-0"
        data-component-id="Component_2_1_8_1"
      >
        <li class="list-outside caret-white">
          <a
            href="#/resources/articles?topic=ai"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              AI
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/resources/articles?topic=software-development"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Software Development
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/resources/articles?topic=devops"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              DevOps
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/resources/articles?topic=security"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Security
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/resources/articles"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              View all topics
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
