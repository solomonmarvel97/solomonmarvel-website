<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { gsap, prefersReducedMotion } from '@/lib/gsap'
import { useProfilePageAnimations } from '@/composables/useProfilePageAnimations'
import { useTheme } from '@/composables/useTheme'
import { useProfileClockWeather } from '@/composables/useProfileClockWeather'
import { coverImages } from '@/profile/data'
import ProfileLoadingBar from '@/components/profile/ProfileLoadingBar.vue'
import BirthdayCelebration from '@/components/BirthdayCelebration.vue'
import BirthdayBanner from '@/components/BirthdayBanner.vue'
import ProfileCoverSection from '@/components/profile/ProfileCoverSection.vue'
import ProfileAvatarSection from '@/components/profile/ProfileAvatarSection.vue'
import ProfileIdentityHeader from '@/components/profile/ProfileIdentityHeader.vue'
import ProfilePageNav from '@/components/profile/ProfilePageNav.vue'
import ProfileTimeWeatherFooter from '@/components/profile/ProfileTimeWeatherFooter.vue'
import HireInquiryDialog from '@/components/profile/HireInquiryDialog.vue'
import type { InquiryIntent } from '@/profile/inquiries'

const route = useRoute()
const coverImage = ref('')
const pageLoading = ref(true)
const hireDialogOpen = ref(false)
const inquiryIntent = ref<InquiryIntent>('engagement')

function openInquiry(intent: InquiryIntent = 'engagement') {
  inquiryIntent.value = intent
  hireDialogOpen.value = true
}

const pageRoot = ref<HTMLElement | null>(null)
useProfilePageAnimations(pageRoot)

function pickCover(exclude = '') {
  const current = exclude.split('?')[0]
  const pool = coverImages.filter(src => src !== current)
  const list = pool.length ? pool : coverImages
  return list[Math.floor(Math.random() * list.length)] + '?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop'
}

function changeWallpaper() {
  coverImage.value = pickCover(coverImage.value)
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

const { time, weatherIcon, tempC } = useProfileClockWeather()

const mainLabel = computed(() => {
  if (route.path === '/about') return 'Solomon Marvelous - My Story'
  if (route.path === '/experience') return 'Solomon Marvelous - Experience'
  return 'Solomon Marvelous - Vertical AI Integrations'
})

onMounted(() => {
  coverImage.value = pickCover()
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

    <ProfilePageNav
      :is-dark="isDark"
      @change-wallpaper="changeWallpaper"
      @toggle-theme="toggleTheme"
    />

    <ProfileCoverSection
      :is-dark="isDark"
      :cover-image="coverImage"
    />

    <main id="main-content" class="scroll-mt-16" :aria-label="mainLabel">
      <ProfileAvatarSection :is-dark="isDark" />

      <div class="mx-auto max-w-[652px] px-4 sm:px-8 pb-16">
        <ProfileIdentityHeader :is-dark="isDark" />
        <RouterView v-slot="{ Component }">
          <component :is="Component" :is-dark="isDark" @inquiry="openInquiry" />
        </RouterView>
        <ProfileTimeWeatherFooter
          :is-dark="isDark"
          :time="time"
          :weather-icon="weatherIcon"
          :temp-c="tempC"
        />
      </div>
    </main>
    <BirthdayBanner />
    <HireInquiryDialog v-model:open="hireDialogOpen" :is-dark="isDark" :intent="inquiryIntent" />
  </div>
</template>
