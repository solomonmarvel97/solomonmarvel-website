<script setup lang="ts">
import FooterNavCompanyLinks from './FooterNavCompanyLinks.vue'
</script>

<template>
  <nav
        aria-labelledby="footer-title-company"
        class="col-span-1 min-w-0 w-full xl:col-span-2 mb-6 sm:mb-4 pl-0 xl:pl-6"
        data-component-id="footer-nav-company"
      >
        <h3
          id="footer-title-company"
          class='text-muted-foreground font-normal mt-0 mb-4'
        >
          Company
        </h3>
        <FooterNavCompanyLinks />
      </nav>
</template>
