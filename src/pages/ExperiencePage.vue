<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { useProfileSectionAnimations } from '@/composables/useProfilePageAnimations'
import { injectSectionStructuredData } from '@/profile/injectStructuredData'
import { companies, experience } from '@/profile/data'
import { seo } from '@/profile/positioning'
import ProfileExperienceSection from '@/components/profile/ProfileExperienceSection.vue'
import ProfileCompaniesSection from '@/components/profile/ProfileCompaniesSection.vue'

defineProps<{
  isDark: boolean
}>()

const title = seo.experienceTitle
const description = seo.experienceDescription

usePageMeta({
  title,
  description,
  canonical: 'https://solomonmarvelous.com/experience',
  keywords: seo.keywords,
  og: {
    type: 'profile',
    title,
    description,
    url: 'https://solomonmarvelous.com/experience',
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
    path: '/experience',
    name: title,
    description,
    crumb: 'Experience',
  })
})
</script>

<template>
  <div ref="pageRoot">
    <ProfileExperienceSection :is-dark="isDark" :experience="experience" />
    <ProfileCompaniesSection :is-dark="isDark" :companies="companies" />
  </div>
</template>
