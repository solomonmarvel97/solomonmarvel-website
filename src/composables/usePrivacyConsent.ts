import { computed, ref, type Ref } from 'vue'

const COOKIE_STORAGE_KEY = 'sm:cookie-preferences'
const CCPA_STORAGE_KEY = 'sm:ccpa-opt-out'
/** Presence means the user completed the banner or saved preferences (survives reload; cleared with site data). */
const COOKIE_CONSENT_KEY = 'sm:cookie-consent'
const CONSENT_VERSION = '1'

export type CookiePreferences = {
  functional: boolean
  analytics: boolean
  marketing: boolean
}

const defaultPrefs: CookiePreferences = {
  functional: true,
  analytics: false,
  marketing: false,
}

function readConsentRecorded(): boolean {
  if (typeof localStorage === 'undefined') return false
  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY) === CONSENT_VERSION
  } catch {
    return false
  }
}

/** Module-level state so preferences stay in sync if the footer remounts */
const cookiePrefs: Ref<CookiePreferences> = ref({ ...defaultPrefs })
const ccpaOptOut = ref(false)
const consentDecisionRecorded = ref(
  typeof window !== 'undefined' ? readConsentRecorded() : false,
)
const preferencesModalOpen = ref(false)
const privacyModalOpen = ref(false)
let hydrated = false

function recordConsentDecision() {
  if (typeof localStorage === 'undefined') return
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, CONSENT_VERSION)
    consentDecisionRecorded.value = true
  } catch {
    /* quota / private mode */
  }
}

function readCookiePrefs(): CookiePreferences {
  if (typeof localStorage === 'undefined') return { ...defaultPrefs }
  try {
    const raw = localStorage.getItem(COOKIE_STORAGE_KEY)
    if (!raw) return { ...defaultPrefs }
    const parsed = JSON.parse(raw) as Partial<CookiePreferences>
    return {
      functional: parsed.functional !== false,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    }
  } catch {
    return { ...defaultPrefs }
  }
}

function readCcpa(): boolean {
  if (typeof localStorage === 'undefined') return false
  try {
    return localStorage.getItem(CCPA_STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

export function hydratePrivacyConsent() {
  if (typeof window === 'undefined' || hydrated) return
  cookiePrefs.value = readCookiePrefs()
  ccpaOptOut.value = readCcpa()
  consentDecisionRecorded.value = readConsentRecorded()
  hydrated = true
}

export function usePrivacyConsent() {
  const shouldShowCookieBanner = computed(() => !consentDecisionRecorded.value)

  return {
    cookiePrefs,
    ccpaOptOut,
    consentDecisionRecorded,
    preferencesModalOpen,
    privacyModalOpen,
    shouldShowCookieBanner,
    openCookiePreferences() {
      preferencesModalOpen.value = true
    },
    openPrivacyPreferences() {
      privacyModalOpen.value = true
    },
    persistCookiePrefs() {
      if (typeof localStorage === 'undefined') return
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(cookiePrefs.value))
      recordConsentDecision()
    },
    persistCcpa() {
      if (typeof localStorage === 'undefined') return
      localStorage.setItem(CCPA_STORAGE_KEY, String(ccpaOptOut.value))
    },
    acceptAllCookies() {
      cookiePrefs.value = { functional: true, analytics: true, marketing: true }
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(cookiePrefs.value))
      }
      recordConsentDecision()
    },
    // rejectNonEssentialCookies() {
    //   cookiePrefs.value = { functional: true, analytics: false, marketing: false }
    //   if (typeof localStorage !== 'undefined') {
    //     localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(cookiePrefs.value))
    //   }
    //   recordConsentDecision()
    // },
  }
}
