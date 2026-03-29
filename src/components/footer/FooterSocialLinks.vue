<script setup lang="ts">
import {
  PhInstagramLogo,
  PhLinkedinLogo,
  PhTiktokLogo,
  PhTwitchLogo,
  PhXLogo,
  PhYoutubeLogo,
} from '@phosphor-icons/vue'
import FooterSocialIconList from './FooterSocialIconList.vue'
import FooterLocaleSelector from './FooterLocaleSelector.vue'

const socialColor = '#59636e'
</script>

<template>
  <nav
    aria-label="GitHub's Social Media Links"
    class="min-w-0 w-full max-w-full relative flex flex-wrap justify-center sm:justify-end items-center gap-y-2 gap-x-4 sm:gap-x-10"
    data-component-id="footer-social-links"
  >
    <ul class="leading-none flex items-center gap-y-4 gap-x-4 list-none my-0 pl-0">

      <li class="list-outside">
        <a href="https://www.linkedin.com/company/github"
          class="text-muted-foreground block hover:text-[color:var(--fgColor-disabled)]">
          <PhLinkedinLogo :size="15" :color="socialColor" aria-hidden="true" class="w-[15px] h-[14px] block shrink-0" />
          <span class="sr-only">GitHub on LinkedIn</span>
        </a>
      </li>

      <li class="list-outside">
        <a href="https://www.instagram.com/github"
          class="text-muted-foreground block hover:text-[color:var(--fgColor-disabled)]">
          <PhInstagramLogo :size="14" :color="socialColor" aria-hidden="true" class="block shrink-0" />
          <span class="sr-only">GitHub on Instagram</span>
        </a>
      </li>

      <li class="list-outside">
        <a href="https://www.youtube.com/github"
          class="text-muted-foreground block hover:text-[color:var(--fgColor-disabled)]">
          <PhYoutubeLogo :size="14" :color="socialColor" aria-hidden="true" class="w-[17px] h-3 block shrink-0" />
          <span class="sr-only">GitHub on YouTube</span>
        </a>
      </li>

      <li class="list-outside">
        <a href="https://x.com/github"
          class="text-muted-foreground block hover:text-[color:var(--fgColor-disabled)]">
          <PhXLogo :size="14" :color="socialColor" aria-hidden="true" class="block shrink-0" />
          <span class="sr-only">GitHub on X</span>
        </a>
      </li>

      <li class="list-outside">
        <a href="https://www.tiktok.com/@github"
          class="text-muted-foreground block hover:text-[color:var(--fgColor-disabled)]">
          <PhTiktokLogo :size="14" :color="socialColor" aria-hidden="true" class="block shrink-0" />
          <span class="sr-only">GitHub on TikTok</span>
        </a>
      </li>

      <li class="list-outside">
        <a href="https://www.twitch.tv/github"
          class="text-muted-foreground block hover:text-[color:var(--fgColor-disabled)]">
          <PhTwitchLogo :size="14" :color="socialColor" aria-hidden="true" class="block shrink-0" />
          <span class="sr-only">GitHub on Twitch</span>
        </a>
      </li>

      <FooterSocialIconList />
    </ul>

    <div class="">
      <FooterLocaleSelector />
    </div>
  </nav>
</template>
