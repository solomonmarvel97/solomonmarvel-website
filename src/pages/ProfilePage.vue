<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { useProfileSectionAnimations } from '@/composables/useProfilePageAnimations'
import { injectProfileStructuredData } from '@/profile/injectStructuredData'
import {
  businessOfferings,
  achievements,
  skills,
  products,
} from '@/profile/data'
import { featuredOffers, faqs, seo } from '@/profile/positioning'
import type { InquiryIntent } from '@/profile/inquiries'
import ProfileFractionalCtoCard from '@/components/profile/ProfileFractionalCtoCard.vue'
import ProfileFeaturedOffersSection from '@/components/profile/ProfileFeaturedOffersSection.vue'
import ProfileBusinessValueSection from '@/components/profile/ProfileBusinessValueSection.vue'
import ProfileAchievementsSection from '@/components/profile/ProfileAchievementsSection.vue'
import ProfileSkillsSection from '@/components/profile/ProfileSkillsSection.vue'
import ProfileProductsSection from '@/components/profile/ProfileProductsSection.vue'
import ProfileFaqSection from '@/components/profile/ProfileFaqSection.vue'
import ProfileCollaborationCta from '@/components/profile/ProfileCollaborationCta.vue'

defineProps<{
  isDark: boolean
}>()

const emit = defineEmits<{
  inquiry: [intent: InquiryIntent]
}>()

const title = seo.homeTitle
const description = seo.homeDescription
const imageAlt = seo.imageAlt

usePageMeta({
  title,
  description,
  canonical: 'https://solomonmarvelous.com/',
  keywords: seo.keywords,
  og: {
    type: 'profile',
    title,
    description,
    url: 'https://solomonmarvelous.com/',
    image: 'https://solomonmarvelous.com/profile/og-banner.png',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt,
  },
  twitter: {
    title,
    description,
    image: 'https://solomonmarvelous.com/profile/og-banner.png',
    imageAlt,
  },
})

const pageRoot = ref<HTMLElement | null>(null)
useProfileSectionAnimations(pageRoot)

onMounted(() => {
  document.title = title
  injectProfileStructuredData()
})
</script>

<template>
  <div ref="pageRoot">
    <ProfileFractionalCtoCard :is-dark="isDark" @inquiry="emit('inquiry', $event)" />
    <ProfileFeaturedOffersSection :is-dark="isDark" :offers="featuredOffers" @inquiry="emit('inquiry', $event)" />
    <ProfileBusinessValueSection
      :is-dark="isDark"
      :offerings="businessOfferings"
      @inquiry="emit('inquiry', $event)"
    />
    <ProfileAchievementsSection :is-dark="isDark" :achievements="achievements" />
    <ProfileSkillsSection :is-dark="isDark" :skills="skills" />
    <ProfileProductsSection :is-dark="isDark" :products="products" />
    <ProfileFaqSection :is-dark="isDark" :items="faqs" />
    <ProfileCollaborationCta :is-dark="isDark" @inquiry="emit('inquiry', $event)" />
  </div>
</template>
