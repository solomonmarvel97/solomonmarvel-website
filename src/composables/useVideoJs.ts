import { onMounted, onUnmounted, type Ref } from 'vue'
import 'video.js/dist/video-js.css'

interface UseVideoJsOptions {
  src: string
  type?: string
  poster?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  fluid?: boolean
  playbackRates?: number[]
}

export function useVideoJs(videoRef: Ref<HTMLVideoElement | null>, options: UseVideoJsOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let player: any = null

  onMounted(async () => {
    if (!videoRef.value) return

    const videojs = (await import('video.js')).default

    player = videojs(videoRef.value, {
      controls: options.controls ?? true,
      fluid: options.fluid ?? true,
      autoplay: options.autoplay ?? false,
      muted: options.muted ?? false,
      loop: options.loop ?? false,
      poster: options.poster,
      playbackRates: options.playbackRates ?? [0.5, 1, 1.25, 1.5, 2],
      sources: [
        {
          src: options.src,
          type: options.type ?? 'video/mp4',
        },
      ],
    })
  })

  onUnmounted(() => {
    if (player && !player.isDisposed()) {
      player.dispose()
      player = null
    }
  })
}
