<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from '@/components/ui/Button.vue'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/composables/useTheme'
import { hydratePrivacyConsent, usePrivacyConsent } from '@/composables/usePrivacyConsent'
import { PhX } from '@phosphor-icons/vue'

const { isDark } = useTheme()
const {
  cookiePrefs,
  ccpaOptOut,
  preferencesModalOpen,
  privacyModalOpen,
  persistCookiePrefs,
  persistCcpa,
  acceptAllCookies,
  rejectNonEssentialCookies,
} = usePrivacyConsent()

const necessaryOn = ref(true)

onMounted(() => {
  hydratePrivacyConsent()
})

function closeCookieModal() {
  preferencesModalOpen.value = false
}

function onCookieDialogOpen(v: boolean) {
  preferencesModalOpen.value = v
}

function closePrivacyModal() {
  privacyModalOpen.value = false
}

function onPrivacyDialogOpen(v: boolean) {
  privacyModalOpen.value = v
}

function saveCookiePreferences() {
  persistCookiePrefs()
  closeCookieModal()
}

function savePrivacyChoice() {
  persistCcpa()
  closePrivacyModal()
}

function acceptAllAndClose() {
  acceptAllCookies()
  closeCookieModal()
}

function rejectNonEssentialAndClose() {
  rejectNonEssentialCookies()
  closeCookieModal()
}

function modalShellClass() {
  return [
    'relative w-[min(92vw,440px)] max-h-[min(85vh,640px)] overflow-y-auto rounded-2xl shadow-2xl',
    isDark.value ? 'bg-[#1a1a18] ring-1 ring-white/10' : 'bg-white ring-1 ring-black/10',
  ].join(' ')
}

function modalTitleClass() {
  return isDark.value ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'
}

function modalBodyClass() {
  return isDark.value ? 'text-[#a3a29a]' : 'text-[#57606a]'
}

function rowBorderClass() {
  return isDark.value ? 'border-[#2a2a28]' : 'border-[#e8eaed]'
}
</script>

<template>
  <!-- Cookie preferences -->
  <Dialog :open="preferencesModalOpen" @update:open="onCookieDialogOpen">
    <DialogContent :is-dark="isDark" @close="closeCookieModal">
      <div :class="modalShellClass()">
        <div
          class="sticky top-0 z-[1] flex items-start justify-between gap-3 border-b px-5 py-4"
          :class="rowBorderClass"
        >
          <h2 class="m-0 pr-8 text-[1.125rem] font-semibold leading-snug" :class="modalTitleClass">
            Cookie preferences
          </h2>
          <button
            type="button"
            class="absolute right-3 top-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
            :class="isDark ? 'text-[#aaa] hover:bg-white/10 hover:text-[#e8e5de]' : 'text-[#555] hover:bg-black/5 hover:text-[#1a1a1a]'"
            aria-label="Close"
            @click="closeCookieModal"
          >
            <PhX :size="18" weight="bold" aria-hidden="true" />
          </button>
        </div>

        <div class="px-5 py-4">
          <p class="m-0 text-[13px] leading-relaxed" :class="modalBodyClass">
            We use cookies to run the site, remember preferences, measure usage, and support marketing where
            allowed. Strictly necessary cookies are always on. You can adjust optional categories below.
          </p>
        </div>

        <div class="px-5 pb-2">
          <div class="flex items-start justify-between gap-4 border-b py-4 first:pt-0" :class="rowBorderClass">
            <div class="min-w-0">
              <p class="m-0 text-[14px] font-medium" :class="modalTitleClass">Strictly necessary</p>
              <p class="mt-1 mb-0 text-[12px] leading-snug" :class="modalBodyClass">
                Required for security, load balancing, and basic site function. Cannot be disabled.
              </p>
            </div>
            <Switch id="cookie-necessary" v-model="necessaryOn" disabled class="mt-0.5 shrink-0" />
          </div>

          <div class="flex items-start justify-between gap-4 border-b py-4" :class="rowBorderClass">
            <div class="min-w-0">
              <label
                for="cookie-functional"
                class="m-0 block cursor-pointer text-[14px] font-medium"
                :class="modalTitleClass"
              >
                Functional
              </label>
              <p class="mt-1 mb-0 text-[12px] leading-snug" :class="modalBodyClass">
                Remembers choices such as region or interface options.
              </p>
            </div>
            <Switch id="cookie-functional" v-model="cookiePrefs.functional" class="mt-0.5 shrink-0" />
          </div>

          <div class="flex items-start justify-between gap-4 border-b py-4" :class="rowBorderClass">
            <div class="min-w-0">
              <label
                for="cookie-analytics"
                class="m-0 block cursor-pointer text-[14px] font-medium"
                :class="modalTitleClass"
              >
                Analytics &amp; performance
              </label>
              <p class="mt-1 mb-0 text-[12px] leading-snug" :class="modalBodyClass">
                Helps us understand traffic and improve the experience (aggregated, where used).
              </p>
            </div>
            <Switch id="cookie-analytics" v-model="cookiePrefs.analytics" class="mt-0.5 shrink-0" />
          </div>

          <div class="flex items-start justify-between gap-4 py-4">
            <div class="min-w-0">
              <label
                for="cookie-marketing"
                class="m-0 block cursor-pointer text-[14px] font-medium"
                :class="modalTitleClass"
              >
                Marketing
              </label>
              <p class="mt-1 mb-0 text-[12px] leading-snug" :class="modalBodyClass">
                Used to deliver relevant messages or measure campaigns when enabled.
              </p>
            </div>
            <Switch id="cookie-marketing" v-model="cookiePrefs.marketing" class="mt-0.5 shrink-0" />
          </div>
        </div>

        <div
          class="sticky bottom-0 flex flex-col gap-2 border-t px-5 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
          :class="rowBorderClass"
        >
          <div class="flex flex-wrap gap-2">
            <Button type="button" variant="ghost" size="sm" class="text-[12px]" @click="acceptAllAndClose">
              Accept all
            </Button>
            <Button type="button" variant="ghost" size="sm" class="text-[12px]" @click="rejectNonEssentialAndClose">
              Reject non-essential
            </Button>
          </div>
          <Button type="button" variant="default" size="sm" class="text-[12px] font-semibold" @click="saveCookiePreferences">
            Save preferences
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>

  <!-- Privacy / CCPA-style choice -->
  <Dialog :open="privacyModalOpen" @update:open="onPrivacyDialogOpen">
    <DialogContent :is-dark="isDark" @close="closePrivacyModal">
      <div :class="modalShellClass()">
        <div
          class="sticky top-0 z-[1] flex items-start justify-between gap-3 border-b px-5 py-4"
          :class="rowBorderClass"
        >
          <h2 class="m-0 pr-8 text-[1.125rem] font-semibold leading-snug" :class="modalTitleClass">
            Personal information sharing
          </h2>
          <button
            type="button"
            class="absolute right-3 top-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
            :class="isDark ? 'text-[#aaa] hover:bg-white/10 hover:text-[#e8e5de]' : 'text-[#555] hover:bg-black/5 hover:text-[#1a1a1a]'"
            aria-label="Close"
            @click="closePrivacyModal"
          >
            <PhX :size="18" weight="bold" aria-hidden="true" />
          </button>
        </div>

        <div class="space-y-4 px-5 py-5">
          <p class="m-0 text-[13px] leading-relaxed" :class="modalBodyClass">
            Some regions let you limit how personal information is used for advertising or “sale”/sharing beyond
            essential service delivery. Turn the control on to record your preference on this device.
          </p>
          <p class="m-0 text-[12px] leading-relaxed" :class="modalBodyClass">
            This choice is stored locally in your browser. See our
            <a
              href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
              class="underline underline-offset-2 hover:text-[color:var(--fgColor-accent)]"
            >Privacy Statement</a>
            for full details.
          </p>

          <div
            class="flex items-start justify-between gap-4 rounded-xl px-4 py-4"
            :class="isDark ? 'bg-[#141412]' : 'bg-muted'"
          >
            <div class="min-w-0">
              <label
                for="ccpa-opt-out"
                class="m-0 block cursor-pointer text-[14px] font-medium"
                :class="modalTitleClass"
              >
                Do not share my personal information for ads
              </label>
              <p class="mt-1 mb-0 text-[12px] leading-snug" :class="modalBodyClass">
                When enabled, we treat this browser as opted out of non-essential sharing for targeted advertising,
                consistent with applicable laws.
              </p>
            </div>
            <Switch id="ccpa-opt-out" v-model="ccpaOptOut" class="mt-0.5 shrink-0" />
          </div>
        </div>

        <div class="flex justify-end border-t px-5 py-4" :class="rowBorderClass">
          <Button type="button" variant="default" size="sm" class="text-[12px] font-semibold" @click="savePrivacyChoice">
            Save choice
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
