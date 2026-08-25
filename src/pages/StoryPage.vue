<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { useProfileSectionAnimations } from '@/composables/useProfilePageAnimations'
import { injectAboutStructuredData } from '@/profile/injectStructuredData'
import { seo } from '@/profile/positioning'
import ProfileBioSection from '@/components/profile/ProfileBioSection.vue'

defineProps<{
  isDark: boolean
}>()

usePageMeta({
  title: seo.aboutTitle,
  description: seo.aboutDescription,
  canonical: 'https://solomonmarvelous.com/about',
  keywords:
    'Solomon Marvelous story, vertical AI expert, Lagos Nigeria, Boltcliq, JobBox, production AI',
  og: {
    type: 'profile',
    title: seo.aboutTitle,
    description: seo.aboutDescription,
    url: 'https://solomonmarvelous.com/about',
    image: 'https://solomonmarvelous.com/profile/og-banner.png',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: seo.imageAlt,
  },
  twitter: {
    title: seo.aboutTitle,
    description: seo.aboutDescription,
    image: 'https://solomonmarvelous.com/profile/og-banner.png',
    imageAlt: seo.imageAlt,
  },
})

const emailCopied = ref(false)
const pageRoot = ref<HTMLElement | null>(null)
useProfileSectionAnimations(pageRoot)

function copyEmail() {
  navigator.clipboard.writeText('me@solomonmarvel.com')
  emailCopied.value = true
  setTimeout(() => { emailCopied.value = false }, 2000)
}

onMounted(() => {
  injectAboutStructuredData()
})
</script>

<template>
  <div ref="pageRoot">
    <ProfileBioSection
      :is-dark="isDark"
      :email-copied="emailCopied"
      @copy-email="copyEmail"
    />
  </div>
</template>
