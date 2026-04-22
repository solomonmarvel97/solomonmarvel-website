import { computed } from 'vue'

const ENABLE_BIRTHDAY_EFFECTS = true

export function useBirthdayEffects() {
  const isApril = new Date().getMonth() === 3
  const isBirthdayMonth = computed(() => ENABLE_BIRTHDAY_EFFECTS && isApril)

  return {
    isBirthdayMonth,
    ENABLE_BIRTHDAY_EFFECTS
  }
}
