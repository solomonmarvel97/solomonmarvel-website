<script setup lang="ts">
import FooterLocaleMenu from './FooterLocaleMenu.vue'
</script>

<template>
  <div
        class="absolute z-[999]"
        data-component-id="footer-locale-button"
      >
        <div
          hidden
          class="bg-background text-foreground min-w-48 hidden flex-col shadow-[rgba(209,217,224,0.5)_0px_0px_0px_1px,rgba(37,41,46,0.04)_0px_6px_12px_-3px,rgba(37,41,46,0.12)_0px_6px_18px_0px] m-auto rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px] inset-0"
        >
          <FooterLocaleMenu />
        </div>
      </div>
</template>
