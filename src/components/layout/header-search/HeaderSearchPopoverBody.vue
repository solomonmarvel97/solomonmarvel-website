<script setup lang="ts">
import HeaderSearchSuggestions from './HeaderSearchSuggestions.vue'
</script>

<template>
  <div
        class="text-[14px] grow"
        data-component-id="header-search-popover-body"
      >
        <div class="">
          <div
            hidden
            class="bg-white w-[calc(100%_-_48px)] max-h-[806.4px] absolute top-[-10px] z-[35] hidden overflow-x-hidden overflow-y-hidden flex-col shadow-[rgba(209,217,224,0)_0px_0px_0px_1px,rgba(37,41,46,0.24)_0px_40px_80px_0px] pt-3 rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px] border-[#d1d9e0] left-0 right-auto bottom-auto border"
          >
            <HeaderSearchSuggestions />
            <div class="bg-white text-muted-foreground text-[12px] flex caret-[#59636e] px-4 py-3 border-t-[rgba(209,217,224,0.7)] border-b-[#59636e] border-x-[#59636e] border-t">
              <a
                href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax"
                class="text-[#0969da] block caret-[#0969da] ml-2 hover:underline hover:decoration-[initial] hover:[text-decoration-style:initial] group"
              >
                Search syntax tips
              </a>
              <div class="flex grow basis-[0%] caret-[#59636e]"></div>
            </div>
          </div>
        </div>
      </div>
</template>
