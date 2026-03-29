<script setup lang="ts">
import {
  PhArrowsLeftRight,
  PhDesktop,
  PhRecord,
  PhTreeStructure,
} from '@phosphor-icons/vue'
import { megaMenuIconClass, megaMenuIconColor } from '@/components/icons/megaMenuIconProps'
</script>

<template>
  <li
        class="list-outside caret-white"
        data-component-id="Component_2_1_2"
      >
        <div class="min-w-[200px] max-w-[285px] flex flex-col gap-y-4 gap-x-6 caret-white">
          <span class='text-[#57606a] text-[12px] tracking-[0.5px] uppercase block caret-[#57606a]'>
            DEVELOPER WORKFLOWS
          </span>
          <ul class="flex flex-col gap-y-3 gap-x-5 caret-white my-0 pl-0">
            <li class="list-outside caret-white">
              <a
                href="#/features/actions"
                class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
              >
                <div class="grid gap-y-0 gap-x-4 grid-cols-[auto_1fr] grid-rows-[auto_auto]">
                  <PhTreeStructure
                    :size="24"
                    :color="megaMenuIconColor"
                    aria-hidden="true"
                    :class="megaMenuIconClass"
                  />
                  <span class="block col-start-2 row-start-1">
                    Actions
                  </span>
                  <span class="text-[#57606a] text-[14px] block col-start-2 row-start-2 caret-[#57606a]">
                    Automate any workflow
                  </span>
                </div>
              </a>
            </li>
            <li class="list-outside caret-white">
              <a
                href="#/features/codespaces"
                class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
              >
                <div class="grid gap-y-0 gap-x-4 grid-cols-[auto_1fr] grid-rows-[auto_auto]">
                  <PhDesktop
                    :size="24"
                    :color="megaMenuIconColor"
                    aria-hidden="true"
                    :class="megaMenuIconClass"
                  />
                  <span class="block col-start-2 row-start-1">
                    Codespaces
                  </span>
                  <span class="text-[#57606a] text-[14px] block col-start-2 row-start-2 caret-[#57606a]">
                    Instant dev environments
                  </span>
                </div>
              </a>
            </li>
            <li class="list-outside caret-white">
              <a
                href="#/features/issues"
                class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
              >
                <div class="grid gap-y-0 gap-x-4 grid-cols-[auto_1fr] grid-rows-[auto_auto]">
                  <PhRecord
                    :size="24"
                    :color="megaMenuIconColor"
                    aria-hidden="true"
                    :class="megaMenuIconClass"
                  />
                  <span class="block col-start-2 row-start-1">
                    Issues
                  </span>
                  <span class="text-[#57606a] text-[14px] block col-start-2 row-start-2 caret-[#57606a]">
                    Plan and track work
                  </span>
                </div>
              </a>
            </li>
            <li class="list-outside caret-white">
              <a
                href="#/features/code-review"
                class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
              >
                <div class="grid gap-y-0 gap-x-4 grid-cols-[auto_1fr] grid-rows-[auto_auto]">
                  <PhArrowsLeftRight
                    :size="24"
                    :color="megaMenuIconColor"
                    aria-hidden="true"
                    :class="megaMenuIconClass"
                  />
                  <span class="block col-start-2 row-start-1">
                    Code Review
                  </span>
                  <span class="text-[#57606a] text-[14px] block col-start-2 row-start-2 caret-[#57606a]">
                    Manage code changes
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </li>
</template>
