<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { gsap, prefersReducedMotion } from '@/lib/gsap'
import { useProfilePageAnimations } from '@/composables/useProfilePageAnimations'
import { usePageMeta } from '@/composables/usePageMeta'
import { useTheme } from '@/composables/useTheme'
import { useProfileClockWeather } from '@/composables/useProfileClockWeather'
import { injectProfileStructuredData } from '@/profile/injectStructuredData'
import {
  coverImages,
  businessOfferings,
  achievements,
  skills,
  products,
  companies,
  experience,
} from '@/profile/data'
import ProfileLoadingBar from '@/components/profile/ProfileLoadingBar.vue'
import BirthdayCelebration from '@/components/BirthdayCelebration.vue'
import BirthdayBanner from '@/components/BirthdayBanner.vue'
import ProfileCoverSection from '@/components/profile/ProfileCoverSection.vue'
import ProfileAvatarSection from '@/components/profile/ProfileAvatarSection.vue'
import ProfileIdentityHeader from '@/components/profile/ProfileIdentityHeader.vue'
import ProfileFractionalCtoCard from '@/components/profile/ProfileFractionalCtoCard.vue'
import ProfileBusinessValueSection from '@/components/profile/ProfileBusinessValueSection.vue'
import ProfileBioSection from '@/components/profile/ProfileBioSection.vue'
import ProfileAchievementsSection from '@/components/profile/ProfileAchievementsSection.vue'
import ProfileSkillsSection from '@/components/profile/ProfileSkillsSection.vue'
import ProfileProductsSection from '@/components/profile/ProfileProductsSection.vue'
import ProfileCompaniesSection from '@/components/profile/ProfileCompaniesSection.vue'
import ProfileExperienceSection from '@/components/profile/ProfileExperienceSection.vue'
import ProfileCollaborationCta from '@/components/profile/ProfileCollaborationCta.vue'
import HireInquiryDialog from '@/components/profile/HireInquiryDialog.vue'
import ProfileTimeWeatherFooter from '@/components/profile/ProfileTimeWeatherFooter.vue'

usePageMeta({
  title: 'Solomon Marvelous - CTO, Enterprise Architect & AI / ML Leader',
  description:
    'Solomon Marvelous is a Chief Technology Officer, Enterprise Architect, and AI / ML, Cloud & Data Leader with 16+ years of experience across fintech, banking, e-commerce, and AI. Founder of Boltcliq Group, The JobBox Company, and more.',
  canonical: 'https://solomonmarvelous.com/',
  og: {
    type: 'profile',
    title: 'Solomon Marvelous - CTO, Enterprise Architect & AI / ML Leader',
    description:
      'CTO and enterprise architect with 16+ years building scalable systems across AI, fintech, cloud, and e-commerce. Founder of Boltcliq Group, JobBox, PeerPay Network, and more.',
    url: 'https://solomonmarvelous.com/',
    image: 'https://solomonmarvelous.com/profile/og-banner.png',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'Solomon Marvelous - Chief Technology Officer, Enterprise Architect, and AI / ML Leader, Lagos Nigeria',
  },
  twitter: {
    title: 'Solomon Marvelous - CTO, Enterprise Architect & AI / ML Leader',
    description:
      'CTO and enterprise architect with 16+ years building scalable systems across AI, fintech, and cloud. Founder of Boltcliq Group, JobBox, and more.',
    image: 'https://solomonmarvelous.com/profile/og-banner.png',
    imageAlt: 'Solomon Marvelous - Chief Technology Officer, Enterprise Architect, and AI / ML Leader, Lagos Nigeria',
  },
})

const coverImage = ref('')
const pageLoading = ref(true)
const emailCopied = ref(false)
const hireDialogOpen = ref(false)

function openHireDialog() {
  hireDialogOpen.value = true
}

function copyEmail() {
  navigator.clipboard.writeText('solomon@boltcliq.com')
  emailCopied.value = true
  setTimeout(() => { emailCopied.value = false }, 2000)
}

const pageRoot = ref<HTMLElement | null>(null)
useProfilePageAnimations(pageRoot)

function reloadPage() {
  pageLoading.value = true
  setTimeout(() => window.location.reload(), 50)
}

const { isDark, toggleTheme: _toggleTheme } = useTheme()

function toggleTheme() {
  _toggleTheme()

  if (prefersReducedMotion() || !pageRoot.value) return

  gsap.fromTo(
    pageRoot.value,
    { opacity: 0.6 },
    { opacity: 1, duration: 0.3, ease: 'power2.out' },
  )
}

const yearsOfExperience = computed(() => new Date().getFullYear() - 2010)

const { time, weatherIcon, tempC } = useProfileClockWeather()

onMounted(() => {
  coverImage.value = coverImages[Math.floor(Math.random() * coverImages.length)] + '?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop'
  document.title = 'Solomon Marvelous - CTO, Enterprise Architect & AI / ML Leader'
  injectProfileStructuredData()
  setTimeout(() => { pageLoading.value = false }, 900)
})
</script>

<template>
  <div
    ref="pageRoot"
    role="document"
    :class="[
      'min-h-screen font-sans transition-colors duration-300 scrollbar-hide',
      isDark ? 'bg-[#111110] text-[#e8e5de]' : 'bg-[#f5f3ee] text-[#1a1a1a]',
    ]"
  >
    <ProfileLoadingBar :page-loading="pageLoading" />
    <BirthdayCelebration />

    <ProfileCoverSection
      :is-dark="isDark"
      :cover-image="coverImage"
      @reload="reloadPage"
      @toggle-theme="toggleTheme"
    />

    <main aria-label="Solomon Marvelous - Profile">
      <ProfileAvatarSection :is-dark="isDark" />

      <div class="mx-auto max-w-[652px] px-4 sm:px-8 pb-16">
        <ProfileIdentityHeader :is-dark="isDark" />
        <ProfileFractionalCtoCard :is-dark="isDark" @hire="openHireDialog" />
        <ProfileBusinessValueSection
          :is-dark="isDark"
          :years-of-experience="yearsOfExperience"
          :offerings="businessOfferings"
        />
        <ProfileBioSection
          :is-dark="isDark"
          :email-copied="emailCopied"
          @copy-email="copyEmail"
        />
        <ProfileAchievementsSection :is-dark="isDark" :achievements="achievements" />
        <ProfileSkillsSection :is-dark="isDark" :skills="skills" />
        <ProfileProductsSection :is-dark="isDark" :products="products" />
        <ProfileCompaniesSection :is-dark="isDark" :companies="companies" />
        <ProfileExperienceSection :is-dark="isDark" :experience="experience" />
        <ProfileCollaborationCta :is-dark="isDark" @hire="openHireDialog" />
        <ProfileTimeWeatherFooter
          :is-dark="isDark"
          :time="time"
          :weather-icon="weatherIcon"
          :temp-c="tempC"
        />
      </div>
    </main>
    <BirthdayBanner />
    <HireInquiryDialog v-model:open="hireDialogOpen" :is-dark="isDark" />
  </div>
</template>
