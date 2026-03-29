<script setup lang="ts">
import HeaderSearchSuggestionItem from './HeaderSearchSuggestionItem.vue'
</script>

<template>
  <form
        id="query-builder-test-form"
        class="mb-0"
        data-component-id="header-search-suggestions"
      >
        <div
          id="query-builder-query-builder-test"
          class=""
        >
          <HeaderSearchSuggestionItem />
          <div class="w-px h-px absolute overflow-x-hidden overflow-y-hidden [clip-path:inset(0px_100%_100%_0px)]">
            0 suggestions.
          </div>
        </div>
      </form>
</template>
