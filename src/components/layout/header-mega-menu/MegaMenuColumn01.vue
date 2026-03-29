<script setup lang="ts">
import { PhRobot, PhShareNetwork, PhSparkle } from '@phosphor-icons/vue'
import { megaMenuIconClass, megaMenuIconColor } from '@/components/icons/megaMenuIconProps'
import MegaMenuColumn01Content from './MegaMenuColumn01Content.vue'
</script>

<template>
  <li
        class="list-outside caret-white"
        data-component-id="Component_2_1_1"
      >
        <div class="min-w-[200px] max-w-[285px] flex flex-col gap-y-4 gap-x-6 caret-white">
          <span class='text-[#57606a] text-[12px] tracking-[0.5px] uppercase block caret-[#57606a]'>
            AI CODE CREATION
          </span>
          <ul class="flex flex-col gap-y-3 gap-x-5 caret-white my-0 pl-0">
            <li class="list-outside caret-white">
              <a
                href="#/features/copilot"
                class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
              >
                <div class="grid gap-y-0 gap-x-4 grid-cols-[auto_1fr] grid-rows-[auto_auto]">
                  <PhRobot
                    :size="24"
                    :color="megaMenuIconColor"
                    aria-hidden="true"
                    :class="megaMenuIconClass"
                  />
                  <span class="block col-start-2 row-start-1">
                    GitHub Copilot
                  </span>
                  <span class="text-[#57606a] text-[14px] block col-start-2 row-start-2 caret-[#57606a]">
                    Write better code with AI
                  </span>
                </div>
              </a>
            </li>
            <li class="list-outside caret-white">
              <a
                href="#/features/spark"
                class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
              >
                <div class="grid gap-y-0 gap-x-4 grid-cols-[auto_1fr] grid-rows-[auto_auto]">
                  <PhSparkle
                    :size="24"
                    :color="megaMenuIconColor"
                    aria-hidden="true"
                    :class="megaMenuIconClass"
                  />
                  <span class="block col-start-2 row-start-1">
                    GitHub Spark
                  </span>
                  <span class="text-[#57606a] text-[14px] block col-start-2 row-start-2 caret-[#57606a]">
                    Build and deploy intelligent apps
                  </span>
                </div>
              </a>
            </li>
            <li class="list-outside caret-white">
              <a
                href="#/features/models"
                class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
              >
                <div class="grid gap-y-0 gap-x-4 grid-cols-[auto_1fr] grid-rows-[auto_auto]">
                  <PhShareNetwork
                    :size="24"
                    :color="megaMenuIconColor"
                    aria-hidden="true"
                    :class="megaMenuIconClass"
                  />
                  <span class="block col-start-2 row-start-1">
                    GitHub Models
                  </span>
                  <span class="text-[#57606a] text-[14px] block col-start-2 row-start-2 caret-[#57606a]">
                    Manage and compare prompts
                  </span>
                </div>
              </a>
            </li>
            <MegaMenuColumn01Content />
          </ul>
        </div>
      </li>
</template>
