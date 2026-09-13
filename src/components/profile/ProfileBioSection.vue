<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { PhCopy, PhCheck, PhX } from '@phosphor-icons/vue'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { aboutStory, type AboutPhoto } from '@/profile/about'

defineProps<{
  isDark: boolean
  emailCopied: boolean
}>()

const emit = defineEmits<{
  copyEmail: []
}>()

const activePhoto = ref<AboutPhoto | null>(null)
const lightboxOpen = ref(false)

function unlockScroll() {
  document.body.style.overflow = ''
  document.body.style.pointerEvents = ''
  document.documentElement.style.overflow = ''
  document.documentElement.style.pointerEvents = ''
}

function openPhoto(photo: AboutPhoto) {
  activePhoto.value = photo
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
  activePhoto.value = null
  nextTick(unlockScroll)
  setTimeout(unlockScroll, 50)
}

function onLightboxOpen(v: boolean) {
  lightboxOpen.value = v
  if (!v) {
    activePhoto.value = null
    nextTick(unlockScroll)
    setTimeout(unlockScroll, 50)
  }
}

function photoGridClass(count: number) {
  if (count <= 1) return 'grid grid-cols-1'
  if (count === 3) return 'grid grid-cols-2 grid-rows-2 gap-2 sm:gap-2.5 auto-rows-[140px] sm:auto-rows-[180px]'
  if (count === 6) return 'grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 auto-rows-[120px] sm:auto-rows-[150px]'
  return 'grid grid-cols-2 gap-2 sm:gap-2.5 auto-rows-[140px] sm:auto-rows-[160px]'
}

function photoCellClass(index: number, count: number) {
  if (count <= 1) return 'min-h-[280px] sm:min-h-[340px]'
  if (count === 3 && index === 0) return 'row-span-2'
  if (count === 6 && index === 0) return 'col-span-2 row-span-2'
  return ''
}
</script>

<template>
  <section
    aria-label="About Marv Solomon"
    class="mb-16"
    data-bio
    itemscope
    itemtype="https://schema.org/Person"
    itemprop="description"
  >
    <h2
      class="text-[11px] uppercase tracking-wider mb-2"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >{{ aboutStory.pageTitle }}</h2>
    <p
      class="text-[13px] leading-[1.65] mb-8"
      :class="isDark ? 'text-[#888]' : 'text-[#666]'"
      data-writing-row
    >{{ aboutStory.intro }}</p>

    <div class="space-y-10">
      <section
        v-for="section in aboutStory.sections"
        :key="section.id"
        :aria-labelledby="`about-${section.id}`"
      >
        <h3
          :id="`about-${section.id}`"
          class="text-[12px] font-semibold tracking-wide mb-2"
          :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'"
          data-writing-label
        >{{ section.title }}</h3>
        <div
          class="text-[13px] leading-[1.65] space-y-3"
          :class="isDark ? 'text-[#aaa]' : 'text-[#333]'"
        >
          <p v-for="(paragraph, i) in section.body" :key="i" data-writing-row>
            {{ paragraph }}
          </p>
        </div>

        <div
          v-if="section.photos?.length"
          class="mt-4"
          :class="photoGridClass(section.photos.length)"
          data-writing-row
          role="group"
          :aria-label="`${section.title} photos`"
        >
          <button
            v-for="(photo, index) in section.photos"
            :key="photo.src"
            type="button"
            class="group relative m-0 block w-full overflow-hidden p-0 text-left touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            :class="[
              photoCellClass(index, section.photos.length),
              isDark ? 'focus-visible:outline-[#e8e5de]' : 'focus-visible:outline-[#1a1a1a]',
            ]"
            :aria-label="`Expand photo: ${photo.caption}`"
            @click="openPhoto(photo)"
          >
            <img
              :src="photo.src"
              :alt="photo.alt"
              class="h-full w-full object-cover object-top grayscale transition-[filter,transform] duration-500 ease-out group-hover:grayscale-0 group-hover:scale-[1.03] group-focus-visible:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              loading="lazy"
              decoding="async"
            />
            <span
              class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-2.5 pb-2 pt-8 text-[10px] leading-snug text-white/95 sm:text-[11px]"
            >{{ photo.caption }}</span>
          </button>
        </div>
      </section>
    </div>

    <p
      class="mt-10 text-[13px] leading-[1.65]"
      :class="isDark ? 'text-[#aaa]' : 'text-[#333]'"
      data-writing-row
    >
      You can find me on
      <a href="https://linkedin.com/in/superdeveloper" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">LinkedIn</a>,
      <a href="https://x.com/marvmargic" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">Twitter (X)</a>
      or reach me via
      <span class="inline-flex items-center gap-1">
        <a href="mailto:me@solomonmarvel.com" class="underline underline-offset-2" :class="isDark ? 'text-[#ccc] decoration-[#444]' : 'text-[#333] decoration-[#bbb]'">email</a>
        <button
          type="button"
          class="inline-flex items-center justify-center w-4 h-4 rounded transition-colors"
          :class="isDark ? 'text-[#555] hover:text-[#aaa]' : 'text-[#bbb] hover:text-[#555]'"
          :title="emailCopied ? 'Copied!' : 'Copy email'"
          @click="emit('copyEmail')"
        >
          <PhCheck v-if="emailCopied" :size="11" weight="bold" />
          <PhCopy v-else :size="11" />
        </button>
      </span>.
    </p>
  </section>

  <Dialog :open="lightboxOpen" @update:open="onLightboxOpen">
    <DialogContent :is-dark="isDark" @close="closeLightbox">
      <div
        class="relative flex max-h-[min(92vh,900px)] w-[min(94vw,920px)] flex-col overflow-hidden rounded-xl"
        :class="isDark ? 'bg-[#111110] ring-1 ring-white/10' : 'bg-[#111110] ring-1 ring-black/20'"
      >
        <button
          type="button"
          class="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white/90 transition-colors hover:bg-black/70 hover:text-white"
          aria-label="Close photo"
          @click="closeLightbox"
        >
          <PhX :size="18" weight="bold" aria-hidden="true" />
        </button>
        <img
          v-if="activePhoto"
          :src="activePhoto.src"
          :alt="activePhoto.alt"
          class="max-h-[min(78vh,780px)] w-full object-contain object-top"
          decoding="async"
        />
        <p
          v-if="activePhoto"
          class="m-0 border-t border-white/10 px-4 py-3 text-[12px] leading-snug text-white/80"
        >{{ activePhoto.caption }}</p>
      </div>
    </DialogContent>
  </Dialog>
</template>
