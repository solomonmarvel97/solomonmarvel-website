<script setup lang="ts">
import { PhChats, PhRobot, PhShieldCheck } from '@phosphor-icons/vue'
import { megaMenuIconClass, megaMenuIconColor } from '@/components/icons/megaMenuIconProps'
</script>

<template>
  <li
        class="list-outside caret-white"
        data-component-id="Component_2_1_15"
      >
        <div class="min-w-[200px] max-w-[285px] flex flex-col gap-y-4 gap-x-6 caret-white">
          <span class='text-[#57606a] text-[12px] tracking-[0.5px] uppercase block caret-[#57606a]'>
            AVAILABLE ADD-ONS
          </span>
          <ul class="flex flex-col gap-y-3 gap-x-5 caret-white my-0 pl-0">
            <li class="list-outside caret-white">
              <a
                href="#/security/advanced-security"
                class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
              >
                <div class="grid gap-y-0 gap-x-4 grid-cols-[auto_1fr] grid-rows-[auto_auto]">
                  <PhShieldCheck
                    :size="24"
                    :color="megaMenuIconColor"
                    aria-hidden="true"
                    :class="megaMenuIconClass"
                  />
                  <span class="block col-start-2 row-start-1">
                    GitHub Advanced Security
                  </span>
                  <span class="text-[#57606a] text-[14px] block col-start-2 row-start-2 caret-[#57606a]">
                    Enterprise-grade security features
                  </span>
                </div>
              </a>
            </li>
            <li class="list-outside caret-white">
              <a
                href="#/features/copilot/copilot-business"
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
                    Copilot for Business
                  </span>
                  <span class="text-[#57606a] text-[14px] block col-start-2 row-start-2 caret-[#57606a]">
                    Enterprise-grade AI features
                  </span>
                </div>
              </a>
            </li>
            <li class="list-outside caret-white">
              <a
                href="#/premium-support"
                class="text-foreground font-medium flex items-center gap-y-1 gap-x-1 group"
              >
                <div class="grid gap-y-0 gap-x-4 grid-cols-[auto_1fr] grid-rows-[auto_auto]">
                  <PhChats
                    :size="24"
                    :color="megaMenuIconColor"
                    aria-hidden="true"
                    :class="megaMenuIconClass"
                  />
                  <span class="block col-start-2 row-start-1">
                    Premium Support
                  </span>
                  <span class="text-[#57606a] text-[14px] block col-start-2 row-start-2 caret-[#57606a]">
                    Enterprise-grade 24/7 support
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </li>
</template>
