<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { hydratePrivacyConsent, usePrivacyConsent } from '@/composables/usePrivacyConsent'
import { PhX } from '@phosphor-icons/vue'

const { isDark } = useTheme()
const {
  shouldShowCookieBanner,
  consentDecisionRecorded,
  acceptAllCookies,
  rejectNonEssentialCookies,
  openCookiePreferences,
} = usePrivacyConsent()

/** Closing with X only hides for this page load; refresh shows the banner again until Accept / Essential / Save. */
const dismissedWithoutConsent = ref(false)

onMounted(() => {
  hydratePrivacyConsent()
})

watch(consentDecisionRecorded, (recorded) => {
  if (recorded) dismissedWithoutConsent.value = false
})

const bannerSurfaceVisible = computed(
  () => shouldShowCookieBanner.value && !dismissedWithoutConsent.value,
)

function onAcceptAll() {
  acceptAllCookies()
}

function onEssentialOnly() {
  rejectNonEssentialCookies()
}

function onOpenSettings() {
  openCookiePreferences()
}

function onDismissBanner() {
  dismissedWithoutConsent.value = true
}

/** Matches ProfilePage pill CTAs (fractional CTO card + bottom CTA). */
function profilePrimaryPillClass() {
  return [
    'inline-flex items-center justify-center text-[11px] font-medium px-3 py-1.5 rounded-full transition-colors',
    isDark.value ? 'bg-[#e8e5de] text-[#111110] hover:bg-white' : 'bg-[#1a1a1a] text-white hover:bg-[#333]',
  ].join(' ')
}

function profileOutlinePillClass() {
  return [
    'inline-flex items-center justify-center text-[11px] font-medium px-3 py-1.5 rounded-full transition-colors border',
    isDark.value ? 'border-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'border-[#d8d5ce] text-[#555] hover:text-[#1a1a1a]',
  ].join(' ')
}

function profileIconCircleClass() {
  return [
    'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors',
    isDark.value ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#e8e5de] text-[#555] hover:text-[#1a1a1a]',
  ].join(' ')
}
</script>

<template>
  <Teleport to="body">
    <!--
      Full-viewport column + justify-end pins the bar to the visual bottom (reliable across engines).
      Do not put slide transforms on this fixed shell - only on the inner bar surface.
    -->
    <div
      class="pointer-events-none fixed inset-x-0 top-0 bottom-0 z-40 flex flex-col justify-end"
    >
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-y-full opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-full opacity-0"
      >
        <div
          v-if="bannerSurfaceVisible"
          class="pointer-events-auto w-full px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-4 sm:pt-3"
          :class="isDark ? 'bg-[#0d0d0c]/95 backdrop-blur-md' : 'bg-background/95 backdrop-blur-md'"
          role="region"
          aria-label="Cookie and storage preferences for solomonmarvelous.com"
        >
          <div
            class="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <p
              class="m-0 max-w-none flex-1 min-w-0 text-[12px] leading-snug sm:max-w-[min(100%,42rem)] sm:text-[13px] sm:leading-relaxed"
              :class="isDark ? 'text-[#b5b3ac]' : 'text-muted-foreground'"
            >
              <strong class="font-medium" :class="isDark ? 'text-[#e8e5de]' : 'text-foreground'">Solomon Marvelous</strong>
              uses browser storage for essential operation, your theme choice, and-if you allow
              it-analytics and marketing cookies.
            </p>

            <div class="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end sm:gap-2">
              <button type="button" :class="profileOutlinePillClass()" @click="onOpenSettings">
                Cookie settings
              </button>
              <!-- <button type="button" :class="profileOutlinePillClass()" @click="onEssentialOnly">
                Essential only
              </button> -->
              <button type="button" :class="profilePrimaryPillClass()" @click="onAcceptAll">
                Accept all
              </button>
              <button
                type="button"
                :class="profileIconCircleClass()"
                aria-label="Dismiss cookie notice"
                @click="onDismissBanner"
              >
                <PhX :size="14" weight="bold" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>
