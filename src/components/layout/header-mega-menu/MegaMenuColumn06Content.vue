<script setup lang="ts">
import { PhCaretRight } from '@phosphor-icons/vue'
</script>

<template>
  <ul
        class="flex flex-col gap-y-3 gap-x-5 caret-white my-0 pl-0"
        data-component-id="Component_2_1_6_1"
      >
        <li class="list-outside caret-white">
          <a
            href="#/solutions/use-case/app-modernization"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              App Modernization
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/solutions/use-case/devsecops"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              DevSecOps
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/solutions/use-case/devops"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              DevOps
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/solutions/use-case/ci-cd"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              CI/CD
            </span>
          </a>
        </li>
        <li class="list-outside caret-white">
          <a
            href="#/solutions/use-case"
            class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
          >
            <span class="block col-start-2 row-start-1">
              View all use cases
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
