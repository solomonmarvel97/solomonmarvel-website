<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { useProfileSectionAnimations } from '@/composables/useProfilePageAnimations'
import { injectSectionStructuredData } from '@/profile/injectStructuredData'
import { seo } from '@/profile/positioning'
import ProfileJobBoxPage from '@/components/profile/ProfileJobBoxPage.vue'

defineProps<{
  isDark: boolean
}>()

const title = seo.jobboxTitle
const description = seo.jobboxDescription

usePageMeta({
  title,
  description,
  canonical: 'https://solomonmarvelous.com/jobbox',
  keywords: seo.keywords + ', JobBox, AI-native recruitment workspace, recruitment workspace, HR platform',
  og: {
    type: 'website',
    title,
    description,
    url: 'https://solomonmarvelous.com/jobbox',
    image: 'https://solomonmarvelous.com/profile/og-banner.png',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: seo.imageAlt,
  },
  twitter: {
    title,
    description,
    image: 'https://solomonmarvelous.com/profile/og-banner.png',
    imageAlt: seo.imageAlt,
  },
})

const pageRoot = ref<HTMLElement | null>(null)
useProfileSectionAnimations(pageRoot)

onMounted(() => {
  document.title = title
  injectSectionStructuredData({
    path: '/jobbox',
    name: title,
    description,
    crumb: 'JobBox',
  })
})
</script>

<template>
  <div ref="pageRoot">
    <ProfileJobBoxPage :is-dark="isDark" />
  </div>
</template>
