<script setup lang="ts">
import { PhGithubLogo } from '@phosphor-icons/vue'
import NavProductSwitcher from './NavProductSwitcher.vue'
</script>

<template>
  <div
        class="flex shrink-0 items-center caret-white gap-2"
        data-component-id="nav-brand"
      >
        <a
          href="/"
          aria-label="Homepage"
          class="block caret-white group"
        >
          <PhGithubLogo
            :size="32"
            color="#ffffff"
            aria-hidden="true"
            class="align-text-bottom inline-block h-8 w-8 shrink-0"
          />
        </a>
        <NavProductSwitcher />
      </div>
</template>
