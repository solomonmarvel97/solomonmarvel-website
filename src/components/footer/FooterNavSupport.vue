<script setup lang="ts">
import FooterNavSupportLinks from './FooterNavSupportLinks.vue'
</script>

<template>
  <nav
        aria-labelledby="footer-title-support"
        class="col-span-1 min-w-0 w-full xl:col-span-2 mb-6 sm:mb-4 pl-0 xl:pl-6"
        data-component-id="footer-nav-support"
      >
        <h3
          id="footer-title-support"
          class='text-muted-foreground font-normal mt-0 mb-4'
        >
          Support
        </h3>
        <FooterNavSupportLinks />
      </nav>
</template>
