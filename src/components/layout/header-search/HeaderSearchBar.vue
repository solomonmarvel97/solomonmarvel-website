<script setup lang="ts">
import { PhKeyboard, PhMagnifyingGlass } from '@phosphor-icons/vue'
import Button from '@/components/ui/Button.vue'
import HeaderSearchPopover from './HeaderSearchPopover.vue'
</script>

<template>
  <div
        class="bg-[#25292e] h-8 flex items-center caret-white rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] border-[#818b98] border hover:bg-[color:var(--headerSearch-bgColor)]"
        data-component-id="header-search-bar"
      >
        <Button
          variant="ghost"
          type="button"
          aria-label="Search or jump to…"
          class="h-8 min-h-0 w-full grow basis-0 justify-start gap-0 overflow-hidden border-0 bg-transparent px-0 py-0 pl-2 pr-0 text-left text-[14px] leading-[20px] text-[rgba(255,255,255,0.75)] caret-[rgba(255,255,255,0.75)] hover:bg-white/5 focus-visible:ring-1 focus-visible:ring-white/40 focus-visible:ring-offset-0 group"
        >
          <div class="text-muted-foreground [text-wrap-mode:nowrap] [word-break:break-word] caret-[#59636e] mr-2">
            <PhMagnifyingGlass
              :size="16"
              color="#59636e"
              aria-hidden="true"
              class="[text-wrap-mode:nowrap] [word-break:break-word] align-text-bottom w-4 h-4 shrink-0"
            />
          </div>
          <span class="text-ellipsis [text-wrap-mode:nowrap] [word-break:break-word] w-full block overflow-x-hidden overflow-y-hidden grow basis-[0%] caret-[rgba(255,255,255,0.75)] mr-auto pt-0.5">
            Search or jump to...
          </span>
          <div class="[text-wrap-mode:nowrap] [word-break:break-word] flex caret-[rgba(255,255,255,0.75)] ml-2">
            <PhKeyboard
              :size="20"
              color="#979a9c"
              aria-hidden="true"
              class="[text-wrap-mode:nowrap] [word-break:break-word] w-[22px] h-5 shrink-0 opacity-40 mr-1"
            />
          </div>
        </Button>
        <HeaderSearchPopover />
      </div>
</template>
