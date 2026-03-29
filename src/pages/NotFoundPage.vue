<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDark = ref(true)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) isDark.value = saved === 'dark'
  document.title = '404 — Page Not Found'
})
</script>

<template>
  <div
    class="min-h-screen font-sans flex flex-col items-center justify-center px-6 text-center transition-colors duration-300"
    :class="isDark ? 'bg-[#111110] text-[#e8e5de]' : 'bg-[#f5f3ee] text-[#1a1a1a]'"
  >
    <p
      class="text-[11px] uppercase tracking-widest mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
    >404</p>

    <h1
      class="text-[32px] font-semibold tracking-tight mb-3 leading-tight"
      :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'"
    >Page not found.</h1>

    <p
      class="text-[13px] mb-8 max-w-[320px] leading-relaxed"
      :class="isDark ? 'text-[#555]' : 'text-[#888]'"
    >
      This page doesn't exist or may have moved. Head back to the home page.
    </p>

    <div class="flex items-center gap-3">
      <button
        @click="router.push('/')"
        class="text-[12px] font-medium px-5 py-2 rounded-full transition-colors"
        :class="isDark ? 'bg-[#e8e5de] text-[#111110] hover:bg-white' : 'bg-[#1a1a1a] text-white hover:bg-[#333]'"
      >Go home</button>
      <button
        @click="router.back()"
        class="text-[12px] font-medium px-5 py-2 rounded-full transition-colors border"
        :class="isDark ? 'border-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'border-[#d8d5ce] text-[#555] hover:text-[#1a1a1a]'"
      >Go back</button>
    </div>
  </div>
</template>
