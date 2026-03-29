import { onMounted, onUnmounted, ref, type Ref } from 'vue'

function formatTime(d: Date) {
  return d.toLocaleTimeString('en-US', {
    timeZone: 'Africa/Lagos',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).toLowerCase()
}

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

async function fetchWeather(weatherIcon: Ref<string>, tempC: Ref<number | null>) {
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

export function useProfileClockWeather() {
  const time = ref('')
  const weatherIcon = ref('')
  const tempC = ref<number | null>(null)

  let interval: ReturnType<typeof setInterval>

  onMounted(() => {
    time.value = formatTime(new Date())
    void fetchWeather(weatherIcon, tempC)
    interval = setInterval(() => {
      time.value = formatTime(new Date())
    }, 10000)
  })

  onUnmounted(() => clearInterval(interval))

  return { time, weatherIcon, tempC }
}
