import { ref, watch } from 'vue'

// Module-level singleton - shared across all components
const isDark = ref(
  typeof localStorage !== 'undefined'
    ? localStorage.getItem('theme') !== 'light'
    : true,
)

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

watch(isDark, applyTheme, { immediate: false })

export function useTheme() {
  function toggleTheme() {
    isDark.value = !isDark.value
  }

  return { isDark, toggleTheme }
}
