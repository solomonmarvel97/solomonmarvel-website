<script setup lang="ts">
import { PhArrowSquareOut } from '@phosphor-icons/vue'
</script>

<template>
  <ul
        class="flex flex-col gap-y-3 gap-x-5 caret-white my-0 pl-0"
        data-component-id="Component_2_1_10_1"
      >
        <li class="list-outside caret-white">
          <a
            href="https://docs.github.com"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Documentation
            </span>
            <PhArrowSquareOut
              :size="16"
             
              aria-hidden="true"
              class="align-text-bottom w-4 h-4 block shrink-0 opacity-0 translate-x-[-8px] translate-y-0"
            />
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="https://support.github.com"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Customer support
            </span>
            <PhArrowSquareOut
              :size="16"
             
              aria-hidden="true"
              class="align-text-bottom w-4 h-4 block shrink-0 opacity-0 translate-x-[-8px] translate-y-0"
            />
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/orgs/community/discussions"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Community forum
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/trust-center"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Trust center
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/partners"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Partners
            </span>
          </a>
        </li>
      </ul>
</template>
