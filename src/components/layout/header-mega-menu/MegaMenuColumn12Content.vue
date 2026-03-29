<script setup lang="ts">
import { PhArrowSquareOut } from '@phosphor-icons/vue'
</script>

<template>
  <ul
        class="flex flex-col gap-y-3 gap-x-5 caret-white my-0 pl-0"
        data-component-id="Component_2_1_12_1"
      >
        <li class="list-outside caret-white">
          <a
            href="https://securitylab.github.com"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Security Lab
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
            href="https://maintainers.github.com"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Maintainer Community
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
            href="#/accelerator"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Accelerator
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="https://stars.github.com"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              GitHub Stars
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
            href="https://archiveprogram.github.com"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              Archive Program
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
