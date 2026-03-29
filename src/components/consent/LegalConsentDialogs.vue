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
            Cookies &amp; storage - solomonmarvelous.com
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
            This is the personal profile site of Solomon Marvelous. We use cookies and similar technologies to keep the
            site working, remember settings (such as light/dark theme), and-only with your consent-support analytics or
            marketing tools. Strictly necessary storage is always on. Adjust optional categories below, then save.
          </p>
        </div>

        <div class="px-5 pb-2">
          <div class="flex items-start justify-between gap-4 border-b py-4 first:pt-0" :class="rowBorderClass">
            <div class="min-w-0">
              <p class="m-0 text-[14px] font-medium" :class="modalTitleClass">Strictly necessary</p>
              <p class="mt-1 mb-0 text-[12px] leading-snug" :class="modalBodyClass">
                Required so pages load and basic security works. Cannot be disabled.
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
                Remembers your choices on this site, for example theme (light/dark) and cookie preferences stored in your
                browser.
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
                If enabled, helps understand how people use the site (typically aggregated). You can leave this off if
                you prefer.
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
                Used only if we add campaign or advertising measurement later. This personal site does not run ads today;
                you can keep this off.
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
            Personal information &amp; advertising choices
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
            Depending on where you live, you may be able to limit how personal information is used for advertising or
            certain types of sharing beyond what is essential to show this site. Use the control below to record a
            preference on <strong class="font-medium" :class="modalTitleClass">this browser only</strong>.
          </p>
          <p class="m-0 text-[12px] leading-relaxed" :class="modalBodyClass">
            solomonmarvelous.com is operated by Solomon Marvelous. This choice is stored locally in your browser. For
            privacy questions about this site, email
            <a
              href="mailto:solomon@boltcliq.com?subject=Privacy%20question%20%E2%80%94%20solomonmarvelous.com"
              class="underline underline-offset-2"
              :class="isDark ? 'text-[#c9c7c0] hover:text-[#e8e5de]' : 'text-[#444] hover:text-[#1a1a1a]'"
            >solomon@boltcliq.com</a>.
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
                When on, we treat this browser as opted out of non-essential use or sharing for targeted advertising,
                where that applies.
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
