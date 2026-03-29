<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap, prefersReducedMotion } from '@/lib/gsap'
import { useProfilePageAnimations } from '@/composables/useProfilePageAnimations'
import { usePageMeta } from '@/composables/usePageMeta'
import { useTheme } from '@/composables/useTheme'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { PhXLogo, PhLinkedinLogo, PhGithubLogo, PhCopy, PhCheck, PhEnvelope, PhSpinner, PhArrowClockwise } from '@phosphor-icons/vue'

usePageMeta({
  title: 'Solomon Marvelous - Enterprise Architect & Distinguished Technology Leader',
  description:
    'Solomon Marvelous is an Enterprise Architect and Distinguished Technology Leader with 16+ years of experience across AI, cloud-native systems, fintech, and e-commerce. Founder of The Boltcliq Company, PeerPay Network, Mindstark AI, and more.',
  canonical: 'https://solomonmarvelous.com/',
  og: {
    type: 'profile',
    title: 'Solomon Marvelous - Enterprise Architect & Technology Leader',
    description:
      'Enterprise Architect with 16+ years building scalable systems across AI, fintech, cloud, and e-commerce. Founder of 10+ companies including The Boltcliq Company, PeerPay Network, and Mindstark AI.',
    url: 'https://solomonmarvelous.com/',
    image: 'https://solomonmarvelous.com/profile/og-banner.png',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'Solomon Marvelous — Enterprise Architect and Distinguished Technology Leader, Lagos Nigeria',
  },
  twitter: {
    title: 'Solomon Marvelous - Enterprise Architect & Technology Leader',
    description:
      'Enterprise Architect with 16+ years building scalable systems across AI, fintech, and cloud. Founder of 10+ companies including The Boltcliq Company and Mindstark AI.',
    image: 'https://solomonmarvelous.com/profile/og-banner.png',
    imageAlt: 'Solomon Marvelous — Enterprise Architect and Distinguished Technology Leader, Lagos Nigeria',
  },
})

const avatarOpen = ref(false)

// ── Cover image ───────────────────────────────────────────────────────────────
const coverImages = [
  'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',   // misty forest
  'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg',   // mountain lake
  'https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg',   // ocean waves
  'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg', // dense forest
  'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg', // aerial forest
  'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg', // snowy mountains
  'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg', // northern lights
  'https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg', // canyon
  'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg',   // mountain sunset
  'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg', // tropical beach
  'https://images.pexels.com/photos/1192671/pexels-photo-1192671.jpeg', // sunrise mountains
  'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg', // foggy valley
  'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg', // waterfall
  'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg',   // desert dunes
  'https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg', // sea cliffs
]
const coverImage = ref('')
const coverLoaded = ref(false)
const pageLoading = ref(true)

// ── Copy email ────────────────────────────────────────────────────────────────
const emailCopied = ref(false)
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

// ── Theme ────────────────────────────────────────────────────────────────────
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

// ── Years of experience (increments every January from 2010 baseline) ────────
const yearsOfExperience = computed(() => new Date().getFullYear() - 2010)

// ── Clock ────────────────────────────────────────────────────────────────────
const time = ref('')
const weatherIcon = ref('')
const tempC = ref<number | null>(null)

function formatTime(d: Date) {
  return d.toLocaleTimeString('en-US', {
    timeZone: 'Africa/Lagos',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).toLowerCase()
}

// ── Weather ───────────────────────────────────────────────────────────────────
function weatherCodeToIcon(code: number, isDay: boolean): string {
  if (code === 0) return isDay ? '☀️' : '🌙'
  if (code <= 2) return isDay ? '⛅' : '🌤️'
  if (code === 3) return '☁️'
  if (code <= 48) return '🌫️'
  if (code <= 55) return '🌦️'
  if (code <= 65) return '🌧️'
  if (code <= 75) return '🌨️'
  if (code <= 82) return '🌧️'
  return '⛈️'
}

async function fetchWeather() {
  try {
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current=temperature_2m,weather_code,is_day',
    )
    const data = await res.json()
    const { temperature_2m, weather_code, is_day } = data.current
    tempC.value = Math.round(temperature_2m)
    weatherIcon.value = weatherCodeToIcon(weather_code, is_day === 1)
  } catch {
    weatherIcon.value = ''
    tempC.value = null
  }
}

let interval: ReturnType<typeof setInterval>

function injectStructuredData() {
  // Remove any previously injected JSON-LD
  document.querySelectorAll('script[data-profile-ld]').forEach(el => el.remove())

  const BASE_URL = 'https://solomonmarvelous.com'

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: 'Solomon Marvelous',
    givenName: 'Solomon',
    familyName: 'Marvelous',
    alternateName: ['marvmargic', 'superdeveloper'],
    jobTitle: 'Enterprise Architect & Distinguished Technology Leader',
    description: `Technology Leader with ${new Date().getFullYear() - 2010}+ years of experience designing and delivering scalable, high-performance systems across fintech, e-commerce, retail, banking, and artificial intelligence domains.`,
    image: `${BASE_URL}/profile/og-banner.png`,
    url: `${BASE_URL}/`,
    email: 'solomon@boltcliq.com',
    nationality: { '@type': 'Country', name: 'Nigeria' },
    birthPlace: { '@type': 'Place', name: 'Delta State, Nigeria' },
    homeLocation: { '@type': 'Place', name: 'Lagos, Nigeria' },
    sameAs: [
      'https://linkedin.com/in/superdeveloper',
      'https://x.com/marvmargic',
      'https://github.com/solomonmarvel97',
      'https://boltcliq.com',
    ],
    knowsAbout: [
      'Enterprise Architecture', 'Solutions Architecture', 'Data Architecture',
      'Large Language Models', 'Retrieval-Augmented Generation', 'Agentic AI',
      'Computer Vision', 'Multimodal AI', 'Fine-tuning', 'RLHF',
      'AI Agents', 'Prompt Engineering', 'LangChain', 'LlamaIndex',
      'Diffusion Models', 'Hugging Face', 'OpenAI', 'Anthropic Claude',
      'Cloud Computing', 'AWS', 'Azure', 'Google Cloud Platform',
      'Kubernetes', 'Docker', 'IaC', 'Serverless',
      'TypeScript', 'Python', 'Go', 'Rust', 'Java', 'Node.js',
      'Graph Databases', 'Relational Databases', 'Non-Relational Databases',
      'PostgreSQL', 'MongoDB', 'Redis', 'Neo4j',
      'Microservices', 'Event-Driven Architecture', 'Distributed Systems',
      'Fintech', 'EdTech', 'API Design', 'CI/CD',
    ],
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'President',
        occupationLocation: { '@type': 'Organization', name: 'The Boltcliq Company' },
      },
      {
        '@type': 'Occupation',
        name: 'Chief Technology Officer',
        occupationLocation: { '@type': 'Organization', name: 'PeerPay Network', url: 'https://peerpaynetwork.com' },
      },
    ],
    founder: [
      { '@type': 'Organization', name: 'The Boltcliq Company', url: 'https://boltcliq.com', foundingDate: '2014' },
      { '@type': 'Organization', name: 'Mindstark AI', url: 'https://mindstarkai.com', foundingDate: '2025' },
      { '@type': 'Organization', name: 'TopUniverse Institute', url: 'https://topuniverse.institute', foundingDate: '2025' },
      { '@type': 'Organization', name: 'Top Universe Org.', url: 'https://topuniverse.org', foundingDate: '2021' },
      { '@type': 'Organization', name: 'Boltcliq Consult', url: 'https://boltcliq.com', foundingDate: '2020' },
      { '@type': 'Organization', name: 'Ivorylearn', foundingDate: '2025' },
    ],
    hasCredential: '$200k+ in investments raised across 10+ businesses and partnerships',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Computer Science',
    },
  }

  const profilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${BASE_URL}/#profilepage`,
    name: 'Solomon Marvelous - Enterprise Architect & Technology Leader',
    description: 'Profile page of Solomon Marvelous, Enterprise Architect and Distinguished Technology Leader with 16+ years of experience.',
    url: `${BASE_URL}/`,
    mainEntity: { '@id': `${BASE_URL}/#person` },
    dateModified: '2026-01-01',
    inLanguage: 'en',
    image: `${BASE_URL}/profile/profile.png`,
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Solomon Marvelous',
    url: BASE_URL,
    description: 'Personal profile of Solomon Marvelous - Enterprise Architect and Distinguished Technology Leader.',
    inLanguage: 'en',
    author: { '@id': `${BASE_URL}/#person` },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    ],
  }

  ;[person, profilePage, website, breadcrumb].forEach(schema => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-profile-ld', 'true')
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  })
}

onMounted(() => {
  coverImage.value = coverImages[Math.floor(Math.random() * coverImages.length)] + '?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop'
  document.title = 'Solomon Marvelous - Enterprise Architect & Technology Leader'
  injectStructuredData()
  setTimeout(() => { pageLoading.value = false }, 900)
  time.value = formatTime(new Date())
  fetchWeather()
  interval = setInterval(() => {
    time.value = formatTime(new Date())
  }, 10000)
})

onUnmounted(() => clearInterval(interval))

// ── Data ──────────────────────────────────────────────────────────────────────
const achievements = [
  { value: '17k+', label: 'Students trained' },
  { value: `${new Date().getFullYear() - 2010}+`, label: 'Years experience' },
  { value: '10+', label: 'Partnerships' },
  { value: '$200k+', label: 'Investments' },
]

const skills = [
  { group: 'AI & ML', tags: ['Large Language Models', 'Retrieval-Augmented Generation', 'Agentic AI', 'Computer Vision', 'OpenCV', 'Multimodal AI', 'Fine-tuning & RLHF', 'Prompt Engineering', 'AI Agents & Orchestration', 'NLP', 'OpenAI', 'Anthropic Claude', 'Gemini', 'Mistral', 'LangChain', 'LlamaIndex', 'Hugging Face', 'TensorFlow', 'PyTorch', 'Diffusion Models'] },
  { group: 'Cloud', tags: ['AWS', 'Azure', 'GCP', 'Cloudflare', 'Serverless', 'Kubernetes', 'Docker', 'IaC'] },
  { group: 'Languages', tags: ['TypeScript', 'Python', 'Go', 'Rust', 'Java', 'Kotlin', 'JavaScript', 'C++'] },
  { group: 'Databases', tags: ['Graph Databases', 'Relational', 'Non-Relational', 'PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'CosmosDB', 'Neo4j'] },
  { group: 'Architecture', tags: ['Enterprise Architecture', 'Solutions Architecture', 'Data Architecture', 'Algorithmic Design', 'Engineering Consulting', 'Microservices', 'Event-Driven', 'Distributed Systems', 'API Design', 'CI/CD'] },
]

const products = [
  { title: 'JobBox',        year: '2026', isNew: true, url: 'https://getjobbox.com' },
  { title: 'SupportBox',   year: '2025', url: 'https://getsupportbox.com' },
  { title: 'SchoolBox',    year: '2022' },
  { title: '3dBox',        year: '2025', url: 'https://get3dbox.com' },
  { title: 'Usereferralai', year: '2024', url: 'https://usereferralai.com' },
]

const companies = [
  { title: 'Ivorylearn',            role: 'Founder',    year: '2025', status: 'Present' },
  { title: 'TopUniverse Institute', role: 'Founder',    year: '2025', status: 'Present', url: 'https://topuniverse.institute' },
  { title: 'Mindstark AI',          role: 'Founder',    year: '2025', status: 'Present', url: 'https://mindstarkai.com' },
  { title: 'Irisempowers',          role: 'Co-founder', year: '2025', status: 'Present', url: 'https://irisempowers.com' },
  { title: 'Kidsclubzone',          role: 'Co-founder', year: '2023', status: 'Present', url: 'https://kidsclubzone.com' },
  { title: 'Top Universe Org. (NGO)', role: 'Founder · Boltcliq Educational Foundation', year: '2021', status: 'Present', url: 'https://topuniverse.org' },
  { title: 'Boltcliq Consult (Consulting)',  role: 'Founder',    year: '2020', status: 'Present', url: 'https://boltcliq.com' },
  { title: 'The Boltcliq Company',  role: 'Founder',    year: '2014', status: 'Present', url: 'https://boltcliq.com', flagship: true },
  { title: 'Pingxtra',              role: 'Founder',    year: '2009', status: 'Closed' },
]

const experience: Array<{ year: string; items: Array<{ role: string; company: string; period: string; url?: string }> }> = [
  {
    year: '2014',
    items: [
      { role: 'President', company: 'The Boltcliq Company', period: 'Present', url: 'https://boltcliq.com' },
    ],
  },
  {
    year: '2025',
    items: [
      { role: 'Head of R&D', company: 'uLesson Group / Miva University', period: 'Sep 2025', url: 'https://miva.edu.ng' },
      { role: 'Senior AI Solutions Architect', company: 'uLesson Group / Miva University', period: 'May 2025', url: 'https://miva.edu.ng' },
      { role: 'Chief Technology Officer', company: 'PeerPay Network', period: 'Present', url: 'https://peerpaynetwork.com' },
    ],
  },
  {
    year: '2024',
    items: [
      { role: 'Lead Architect & Distinguished Engineer', company: 'Boltcliq Consult', period: 'Present' },
    ],
  },
  {
    year: '2023',
    items: [
      { role: 'Senior Solutions Architect', company: 'First City Monument Bank', period: 'May 2025' },
      { role: 'Principal Software Engineer', company: 'Bunkr Essentials', period: 'Sep 2023' },
    ],
  },
  {
    year: '2022',
    items: [
      { role: 'Contract Technical Writer', company: 'Redis', period: 'May 2023' },
    ],
  },
  {
    year: '2021',
    items: [
      { role: 'Founding Partner & Program Lead', company: 'Top Universe Org. (NGO)', period: 'Present' },
    ],
  },
  {
    year: '2020',
    items: [
      { role: 'Project Development Lead', company: 'UmbrellaTree Colab', period: 'Aug 2022' },
    ],
  },
  {
    year: '2017',
    items: [
      { role: 'Mobile Application Engineer', company: 'Encentral Solutions', period: 'Dec 2017', url: 'https://www.encentralsolutions.com' },
    ],
  },
  {
    year: '2009',
    items: [
      { role: 'Founder & Lead Engineer', company: 'Pingxtra', period: 'Dec 2013' },
    ],
  },
]
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

    <!-- Page loading progress bar -->
    <Transition name="progress-fade">
      <div
        v-if="pageLoading"
        class="fixed top-0 inset-x-0 z-50 h-[2px] overflow-hidden pointer-events-none"
        role="progressbar"
        aria-busy="true"
        aria-label="Loading"
      >
        <div class="progress-bar h-full w-[200%]" />
      </div>
    </Transition>

    <!-- Cover image -->
    <header class="relative w-full h-44 sm:h-56 overflow-hidden leading-none" data-cover aria-label="Profile cover">
      <!-- Spinner while cover loads -->
      <div
        v-if="!coverLoaded"
        class="absolute top-3 left-4 z-10 text-white/50 animate-spin"
        aria-hidden="true"
      >
        <PhSpinner :size="16" weight="bold" />
      </div>

      <img
        v-if="coverImage"
        :src="coverImage"
        alt=""
        role="presentation"
        class="w-full h-full object-cover block transition-opacity duration-500"
        :class="coverLoaded ? 'opacity-100' : 'opacity-0'"
        loading="eager"
        decoding="async"
        @load="coverLoaded = true"
      />
      <!-- overlay -->
      <div
        class="absolute inset-0 transition-colors duration-300"
        :class="isDark ? 'bg-black/40' : 'bg-black/10'"
      />

      <!-- controls pinned to cover top-right -->
      <div class="absolute top-3 right-4 flex items-center gap-1.5">
        <button
          @click="reloadPage"
          aria-label="Reload page"
          title="Reload page"
          :class="[
            'w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-200',
            isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/20 hover:bg-black/30 text-white',
          ]"
        >
          <PhArrowClockwise :size="14" weight="bold" />
        </button>
        <button
          @click="toggleTheme"
          aria-label="Toggle theme"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :class="[
            'w-8 h-8 rounded-full flex items-center justify-center text-[13px] backdrop-blur-sm transition-colors duration-200',
            isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/20 hover:bg-black/30 text-white',
          ]"
        >
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </div>
    </header>

    <!-- Profile content -->
    <main aria-label="Solomon Marvelous - Profile">
    <!-- Avatar - overlaps cover -->
    <div class="mx-auto max-w-[652px] px-4 sm:px-8">
      <div class="relative -mt-7 mb-5">
        <div
          data-avatar
          class="w-14 h-14 rounded-full overflow-hidden ring-2 shrink-0 cursor-pointer"
          :class="isDark ? 'bg-[#2a2a28] ring-[#111110]' : 'bg-[#d8d5ce] ring-[#f5f3ee]'"
          @click="avatarOpen = true"
        >
          <img
            src="/profile/profile.png"
            alt="Solomon Marvelous - Enterprise Architect and Distinguished Technology Leader based in Lagos, Nigeria"
            data-avatar-img
            class="w-full h-full object-cover"
            style="filter: grayscale(100%); transition: filter 0s;"
            loading="eager"
            fetchpriority="high"
            decoding="auto"
            @error="(e) => (e.target as HTMLImageElement).style.display = 'none'"
          />
        </div>

        <!-- Avatar lightbox -->
        <Dialog :open="avatarOpen" @update:open="avatarOpen = $event">
          <DialogContent :is-dark="isDark" @close="avatarOpen = false">
            <div
              class="rounded-2xl overflow-hidden shadow-2xl w-[min(88vw,360px)]"
              :class="isDark ? 'bg-[#1a1a18] ring-1 ring-white/10' : 'bg-white ring-1 ring-black/10'"
            >
              <!-- Image -->
              <div class="relative">
                <img
                  src="/profile/profile.png"
                  alt="Solomon Marvelous - Enterprise Architect and Distinguished Technology Leader"
                  data-modal-img
                  class="w-full aspect-square object-cover block cursor-pointer"
                  style="filter: grayscale(100%); transition: filter 0.35s ease;"
                  @mouseenter="(e) => (e.target as HTMLImageElement).style.filter = 'grayscale(0%)'"
                  @mouseleave="(e) => (e.target as HTMLImageElement).style.filter = 'grayscale(100%)'"
                />
                <button
                  class="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-[12px] backdrop-blur-sm transition-colors"
                  :class="isDark ? 'bg-black/40 text-white hover:bg-black/60' : 'bg-white/60 text-black hover:bg-white/80'"
                  @click="avatarOpen = false"
                >✕</button>
              </div>

              <!-- Info -->
              <div class="px-5 pt-4 pb-5">
                <p class="text-[15px] font-semibold leading-snug" :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'">Solomon Marvelous</p>
                <p class="text-[12px] mt-0.5 mb-4" :class="isDark ? 'text-[#555]' : 'text-[#888]'">Enterprise Architect · Distinguished Technology Leader</p>

                <!-- Social icons -->
                <div class="flex items-center gap-3 mb-4">
                  <a href="https://x.com/marvmargic" target="_blank" rel="noopener noreferrer"
                    class="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                    :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#f0ede8] text-[#555] hover:text-[#1a1a1a]'"
                  >
                    <PhXLogo :size="15" weight="bold" />
                  </a>
                  <a href="https://linkedin.com/in/superdeveloper" target="_blank" rel="noopener noreferrer"
                    class="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                    :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#f0ede8] text-[#555] hover:text-[#1a1a1a]'"
                  >
                    <PhLinkedinLogo :size="15" weight="bold" />
                  </a>
                  <a href="https://github.com/solomonmarvel97" target="_blank" rel="noopener noreferrer"
                    class="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                    :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#f0ede8] text-[#555] hover:text-[#1a1a1a]'"
                  >
                    <PhGithubLogo :size="15" weight="bold" />
                  </a>
                </div>

                <!-- Connect button -->
                <a
                  href="https://linkedin.com/in/superdeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-[13px] font-medium transition-colors"
                  :class="isDark ? 'bg-[#e8e5de] text-[#111110] hover:bg-white' : 'bg-[#1a1a1a] text-white hover:bg-[#333]'"
                >
                  <PhLinkedinLogo :size="14" weight="bold" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>

    <!-- Content -->
    <div class="mx-auto max-w-[652px] px-4 sm:px-8 pb-16">

      <!-- Header -->
      <div class="mb-8" data-header
        itemscope itemtype="https://schema.org/Person">
        <h1
          class="text-[14px] font-semibold leading-snug"
          data-name
          :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'"
          itemprop="name"
        >Solomon Marvelous</h1>
        <p class="text-[12px] mt-0.5 mb-3" :class="isDark ? 'text-[#555]' : 'text-[#888]'"
          itemprop="jobTitle"
        >Enterprise Architect · Distinguished Technology Leader</p>

        <!-- Social icons -->
        <div class="flex flex-wrap items-center gap-2 mb-3">
          <a href="https://x.com/marvmargic" target="_blank" rel="noopener noreferrer me"
            class="flex items-center justify-center w-7 h-7 rounded-full transition-colors"
            :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#e8e5de] text-[#555] hover:text-[#1a1a1a]'"
            itemprop="sameAs"
            aria-label="Solomon Marvelous on X (formerly Twitter)"
          >
            <PhXLogo :size="13" weight="bold" />
          </a>
          <a href="https://linkedin.com/in/superdeveloper" target="_blank" rel="noopener noreferrer me"
            class="flex items-center justify-center w-7 h-7 rounded-full transition-colors"
            :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#e8e5de] text-[#555] hover:text-[#1a1a1a]'"
            itemprop="sameAs"
            aria-label="Solomon Marvelous on LinkedIn"
          >
            <PhLinkedinLogo :size="13" weight="bold" />
          </a>
          <a href="https://github.com/solomonmarvel97" target="_blank" rel="noopener noreferrer me"
            class="flex items-center justify-center w-7 h-7 rounded-full transition-colors"
            :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#e8e5de] text-[#555] hover:text-[#1a1a1a]'"
            itemprop="sameAs"
            aria-label="Solomon Marvelous on GitHub"
          >
            <PhGithubLogo :size="13" weight="bold" />
          </a>
          <a
            href="mailto:solomon@boltcliq.com"
            class="flex items-center justify-center h-7 px-3 rounded-full text-[11px] font-medium transition-colors ml-1 border"
            :class="isDark ? 'border-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'border-[#d8d5ce] text-[#555] hover:text-[#1a1a1a]'"
          ><PhEnvelope :size="13" class="shrink-0 mr-1" />Email</a>
        </div>
      </div>

      <!-- Fractional CTO availability card -->
      <div
        class="flex flex-wrap items-center justify-between gap-4 rounded-xl px-4 py-3 mb-8"
        :class="isDark ? 'bg-[#141412]' : 'bg-white'"
      >
        <div class="flex flex-col gap-0.5 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-[12px] font-medium" :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'">Available for Fractional CTO engagements</span>
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          </div>
          <p class="text-[11px]" :class="isDark ? 'text-[#555]' : 'text-[#999]'">Fractional CTO · Strategic technology leadership for startups &amp; scale-ups</p>
        </div>
        <a
          href="https://app.getjobbox.com/p/fractionalcto1"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 text-[11px] font-medium px-3 py-1.5 rounded-full transition-colors"
          :class="isDark ? 'bg-[#e8e5de] text-[#111110] hover:bg-white' : 'bg-[#1a1a1a] text-white hover:bg-[#333]'"
        >Hire me →</a>
      </div>

      <!-- Bio -->
      <section
        aria-label="About Solomon Marvelous"
        class="text-[13px] leading-[1.65] space-y-3 mb-10"
        :class="isDark ? 'text-[#aaa]' : 'text-[#333]'"
        data-bio
        itemscope itemtype="https://schema.org/Person"
        itemprop="description"
      >
        <p>
          Born in Delta State, Nigeria. My roots are in computer science, but I've always been drawn
          to design, crafts, and the hands-on act of making things - there's something deeply
          satisfying about building something from nothing and watching it come to life.
        </p>
        <p>
          I love to make things and I love to teach people. Those two drives have shaped everything
          I've built - from products and platforms to communities of learners.
        </p>
        <p>
          Technology Leader with {{ yearsOfExperience }}+ years of experience designing and delivering scalable,
          high-performance systems across fintech, e-commerce, retail, banking, and AI domains.
          I specialise in architecting complex enterprise solutions that drive innovation,
          streamline operations, and deliver impactful results at scale.
        </p>
        <p>
          You can find me on
          <a href="https://linkedin.com/in/superdeveloper" target="_blank" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">LinkedIn</a>,
          <a href="https://x.com/marvmargic" target="_blank" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">Twitter (X)</a>
          or reach me via
          <span class="inline-flex items-center gap-1">
            <a href="mailto:solomon@boltcliq.com" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">email</a>
            <button
              @click="copyEmail"
              class="inline-flex items-center justify-center w-4 h-4 rounded transition-colors"
              :class="isDark ? 'text-[#555] hover:text-[#aaa]' : 'text-[#bbb] hover:text-[#555]'"
              :title="emailCopied ? 'Copied!' : 'Copy email'"
            >
              <PhCheck v-if="emailCopied" :size="11" weight="bold" />
              <PhCopy v-else :size="11" />
            </button>
          </span>.
        </p>
      </section>

      <!-- Achievements: grid keeps four tiles equal width (2×2 narrow, 1×4 sm+) -->
      <section
        aria-label="Career highlights"
        class="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        data-achievements
      >
        <div
          v-for="item in achievements"
          :key="item.label"
          class="flex min-h-[4.5rem] min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl px-3 py-3 text-center"
          :class="isDark ? 'bg-[#1a1a18]' : 'bg-[#eceae4]'"
        >
          <span class="text-[16px] font-semibold tracking-tight" :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'">{{ item.value }}</span>
          <span class="text-balance text-[10px] leading-tight" :class="isDark ? 'text-[#555]' : 'text-[#999]'">{{ item.label }}</span>
        </div>
      </section>

      <!-- Skills -->
      <section aria-label="Skills and expertise" class="mb-12">
        <h2
          class="text-[11px] uppercase tracking-wider mb-4"
          :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
          data-writing-label
        >Skills &amp; Expertise</h2>
        <div class="space-y-3" role="list" aria-label="Skill groups">
          <div v-for="group in skills" :key="group.group" role="listitem">
            <p class="text-[10px] uppercase tracking-widest mb-1.5" :class="isDark ? 'text-[#444]' : 'text-[#bbb]'">{{ group.group }}</p>
            <ul class="flex flex-wrap gap-1.5 list-none p-0 m-0" :aria-label="group.group + ' skills'">
              <li
                v-for="tag in group.tags"
                :key="tag"
                class="text-[11px] px-2 py-0.5 rounded-full"
                :class="isDark ? 'bg-[#1e1e1c] text-[#888]' : 'bg-[#e8e5de] text-[#555]'"
              >{{ tag }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Products -->
      <section aria-label="Products built by Solomon Marvelous" class="mb-12">
        <h2
          class="text-[11px] uppercase tracking-wider mb-4"
          :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
          data-writing-label
        >Products</h2>
        <ul class="list-none p-0 m-0" aria-label="Products by Solomon Marvelous">
          <li
            v-for="item in products"
            :key="item.title"
            data-writing-row
            class="flex items-center justify-between py-[7px] cursor-pointer border-b last:border-0"
            :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
          >
            <div class="flex items-center gap-3 min-w-0">
              <span class="text-[12px] w-8 shrink-0" :class="isDark ? 'text-[#444]' : 'text-[#aaa]'">{{ item.year }}</span>
              <a
                :href="item.url ?? undefined"
                :target="item.url ? '_blank' : undefined"
                :rel="item.url ? 'noopener noreferrer' : undefined"
                class="text-[13px] flex items-center gap-1.5 truncate"
                :class="[isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]', item.url ? '' : 'cursor-default']"
              >
                {{ item.title }}
                <span v-if="item.isNew" class="inline-flex items-center gap-1 border border-[#e57d9b] text-[#e57d9b] text-[9px] leading-none px-1.5 py-0.5 rounded-full shrink-0">
                  <span class="w-1 h-1 rounded-full bg-[#e57d9b] animate-pulse" />
                  New
                </span>
              </a>
            </div>
          </li>
        </ul>
      </section>

      <!-- Companies -->
      <section aria-label="Companies founded by Solomon Marvelous" class="mb-12">
        <h2
          class="text-[11px] uppercase tracking-wider mb-4"
          :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
          data-writing-label
        >Companies</h2>
        <ul class="list-none p-0 m-0" aria-label="Companies">
          <li
            v-for="item in companies"
            :key="item.title"
            data-writing-row
            class="flex items-center justify-between py-[7px] border-b last:border-0"
            :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
          >
            <div class="flex items-center gap-3 min-w-0">
              <span class="text-[12px] w-8 shrink-0" :class="isDark ? 'text-[#444]' : 'text-[#aaa]'">{{ item.year }}</span>
              <div class="flex flex-col min-w-0">
                <a
                  v-if="item.url"
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[13px] truncate font-medium"
                  :class="item.flagship ? 'text-[#c9a84c]' : isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
                >{{ item.title }}</a>
                <span v-else class="text-[13px] truncate font-medium" :class="item.flagship ? 'text-[#c9a84c]' : isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'">{{ item.title }}</span>
                <span class="text-[11px]" :class="item.flagship ? 'text-[#a07830]' : isDark ? 'text-[#555]' : 'text-[#aaa]'">{{ item.role }}</span>
              </div>
            </div>
            <span
              class="text-[12px] shrink-0 ml-4"
              :class="item.status === 'Closed'
                ? 'text-[#888] line-through'
                : isDark ? 'text-[#444]' : 'text-[#aaa]'"
            >{{ item.status }}</span>
          </li>
        </ul>
      </section>

      <!-- Work Experience -->
      <section aria-label="Work experience of Solomon Marvelous" class="mb-16"
        itemscope itemtype="https://schema.org/Person">
        <h2
          class="text-[11px] uppercase tracking-wider mb-4"
          :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
          data-writing-label
        >Work Experience</h2>
        <ol class="list-none p-0 m-0" aria-label="Work history">
          <template v-for="group in experience" :key="group.year">
            <li
              v-for="(item, i) in group.items"
              :key="item.role"
              itemprop="worksFor"
              itemscope itemtype="https://schema.org/Organization"
              data-writing-row
              class="flex items-center justify-between py-[7px] border-b last:border-0"
              :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
            >
              <div class="flex items-center gap-3 min-w-0">
                <span
                  v-if="i === 0"
                  class="text-[12px] w-8 shrink-0"
                  :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
                >{{ group.year }}</span>
                <span v-else class="w-8 shrink-0" />
                <div class="flex flex-col min-w-0">
                  <span
                    class="text-[13px] truncate"
                    :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
                    itemprop="jobTitle"
                  >{{ item.role }}</span>
                  <a
                    v-if="item.url"
                    :href="item.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-[11px]"
                    :class="isDark ? 'text-[#555]' : 'text-[#aaa]'"
                    itemprop="name"
                  >{{ item.company }}</a>
                  <span
                    v-else
                    class="text-[11px]"
                    :class="isDark ? 'text-[#555]' : 'text-[#aaa]'"
                    itemprop="name"
                  >{{ item.company }}</span>
                </div>
              </div>
              <span
                class="text-[12px] shrink-0 ml-4"
                :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
              >{{ item.period }}</span>
            </li>
          </template>
        </ol>
      </section>

      <!-- Bottom CTA -->
      <div
        class="rounded-2xl px-6 py-8 mb-10 text-center"
        :class="isDark ? 'bg-[#141412]' : 'bg-white'"
      >
        <p class="text-[11px] uppercase tracking-widest mb-2" :class="isDark ? 'text-[#444]' : 'text-[#aaa]'">Open to collaboration</p>
        <h2 class="text-[22px] font-semibold tracking-tight mb-2" :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'">Let's build something together.</h2>
        <p class="text-[13px] mb-6 max-w-[380px] mx-auto leading-relaxed" :class="isDark ? 'text-[#666]' : 'text-[#888]'">
          Whether you need a Fractional CTO, a strategic technical partner, or just want to connect - I'm always open to interesting conversations.
        </p>
        <div class="flex items-center justify-center gap-3 flex-wrap">
          <a
            href="https://app.getjobbox.com/p/fractionalcto1"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[12px] font-medium px-5 py-2 rounded-full transition-colors"
            :class="isDark ? 'bg-[#e8e5de] text-[#111110] hover:bg-white' : 'bg-[#1a1a1a] text-white hover:bg-[#333]'"
          >Hire me as Fractional CTO</a>
          <a
            href="mailto:solomon@boltcliq.com"
            class="inline-flex items-center gap-1.5 text-[12px] font-medium px-5 py-2 rounded-full transition-colors border"
            :class="isDark ? 'border-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'border-[#d8d5ce] text-[#555] hover:text-[#1a1a1a]'"
          ><PhEnvelope :size="13" class="shrink-0" />Send an email</a>
        </div>
      </div>

      <!-- Footer -->
      <footer
        class="text-[11px] flex items-center gap-1.5"
        :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
        data-footer
        aria-label="Local time and weather"
      >
        <span><time datetime="PT1M">{{ time }}</time> in Lagos, Nigeria</span>
        <span v-if="weatherIcon" class="text-[13px] leading-none" aria-label="Current weather">{{ weatherIcon }}</span>
        <span v-if="tempC !== null" :class="isDark ? 'text-[#555]' : 'text-[#888]'" aria-label="Temperature">{{ tempC }}°C</span>
      </footer>

    </div>
    </main>
  </div>
</template>

<style scoped>
.progress-bar {
  background: linear-gradient(
    90deg,
    #4285f4 0%,    #4285f4 12.5%,
    #ea4335 12.5%, #ea4335 25%,
    #fbbc04 25%,   #fbbc04 37.5%,
    #34a853 37.5%, #34a853 50%,
    #4285f4 50%,   #4285f4 62.5%,
    #ea4335 62.5%, #ea4335 75%,
    #fbbc04 75%,   #fbbc04 87.5%,
    #34a853 87.5%, #34a853 100%
  );
  animation: stripe-slide 1.15s linear infinite;
  will-change: transform;
}

@keyframes stripe-slide {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    width: 100%;
    animation: none;
    background: linear-gradient(90deg, #4285f4 0% 25%, #ea4335 25% 50%, #fbbc04 50% 75%, #34a853 75% 100%);
  }
}

.progress-fade-enter-active,
.progress-fade-leave-active {
  transition: opacity 0.3s ease;
}
.progress-fade-enter-from,
.progress-fade-leave-to {
  opacity: 0;
}
</style>
