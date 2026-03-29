<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { PhXLogo, PhLinkedinLogo, PhGithubLogo } from '@phosphor-icons/vue'

defineProps<{
  isDark: boolean
}>()

const avatarOpen = ref(false)
</script>

<template>
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

      <Dialog :open="avatarOpen" @update:open="avatarOpen = $event">
        <DialogContent :is-dark="isDark" @close="avatarOpen = false">
          <div
            class="rounded-2xl overflow-hidden shadow-2xl w-[min(88vw,360px)]"
            :class="isDark ? 'bg-[#1a1a18] ring-1 ring-white/10' : 'bg-white ring-1 ring-black/10'"
          >
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
                type="button"
                class="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-[12px] backdrop-blur-sm transition-colors"
                :class="isDark ? 'bg-black/40 text-white hover:bg-black/60' : 'bg-white/60 text-black hover:bg-white/80'"
                @click="avatarOpen = false"
              >✕</button>
            </div>

            <div class="px-5 pt-4 pb-5">
              <p class="text-[15px] font-semibold leading-snug" :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'">Solomon Marvelous</p>
              <p class="text-[12px] mt-0.5 mb-4" :class="isDark ? 'text-[#555]' : 'text-[#888]'">Enterprise Architect · Distinguished Technology Leader</p>

              <div class="flex items-center gap-3 mb-4">
                <a
                  href="https://x.com/marvmargic"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                  :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#f0ede8] text-[#555] hover:text-[#1a1a1a]'"
                >
                  <PhXLogo :size="15" weight="bold" />
                </a>
                <a
                  href="https://linkedin.com/in/superdeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                  :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#f0ede8] text-[#555] hover:text-[#1a1a1a]'"
                >
                  <PhLinkedinLogo :size="15" weight="bold" />
                </a>
                <a
                  href="https://github.com/solomonmarvel97"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                  :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#f0ede8] text-[#555] hover:text-[#1a1a1a]'"
                >
                  <PhGithubLogo :size="15" weight="bold" />
                </a>
              </div>

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
</template>
