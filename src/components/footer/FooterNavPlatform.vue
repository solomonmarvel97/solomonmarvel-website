<script setup lang="ts">
import FooterNavPlatformLinks from './FooterNavPlatformLinks.vue'
</script>

<template>
  <nav
        aria-labelledby="footer-title-product"
        class="col-span-1 min-w-0 w-full xl:col-span-2 mb-6 sm:mb-4 pl-0 xl:pl-6"
        data-component-id="footer-nav-platform"
      >
        <h3
          id="footer-title-product"
          class='text-muted-foreground font-normal mt-0 mb-4'
        >
          Platform
        </h3>
        <FooterNavPlatformLinks />
      </nav>
</template>
