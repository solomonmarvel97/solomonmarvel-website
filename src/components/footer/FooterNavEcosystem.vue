<script setup lang="ts">
import FooterNavEcosystemLinks from './FooterNavEcosystemLinks.vue'
</script>

<template>
  <nav
        aria-labelledby="footer-title-platform"
        class="col-span-1 min-w-0 w-full xl:col-span-2 mb-6 sm:mb-4 pl-0 xl:pl-6"
        data-component-id="footer-nav-ecosystem"
      >
        <h3
          id="footer-title-platform"
          class='text-muted-foreground font-normal mt-0 mb-4'
        >
          Ecosystem
        </h3>
        <FooterNavEcosystemLinks />
      </nav>
</template>
