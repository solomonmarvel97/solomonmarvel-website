<script setup lang="ts">
import HeaderSearchPopoverBody from './HeaderSearchPopoverBody.vue'
</script>

<template>
  <div
        class="hidden caret-white"
        data-component-id="header-search-popover"
      >
        <div
          role="dialog"
          id="search-suggestions-dialog"
          aria-labelledby="search-suggestions-dialog-header"
          class="bg-white text-foreground w-0 h-0 min-w-0 min-h-0 max-w-0 max-h-0 flex flex-col m-auto rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px] inset-0"
        >
          <h1
            id="search-suggestions-dialog-header"
            class="font-semibold w-px h-px absolute overflow-x-hidden overflow-y-hidden [clip-path:inset(0px_100%_100%_0px)] my-0"
          >
            Search code, repositories, users, issues, pull requests...
          </h1>
          <HeaderSearchPopoverBody />
        </div>
      </div>
</template>
