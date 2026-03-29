import { onMounted, onUnmounted } from 'vue'

export interface PageMeta {
  title: string
  description: string
  canonical: string
  og: {
    type: 'website' | 'profile' | 'article'
    title: string
    description: string
    url: string
    image: string
    imageWidth?: number
    imageHeight?: number
    imageAlt: string
  }
  twitter: {
    title: string
    description: string
    image: string
    imageAlt: string
  }
}

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)
  if (el) el.setAttribute(attr, value)
}

export function usePageMeta(meta: PageMeta) {
  let previousTitle = ''

  onMounted(() => {
    previousTitle = document.title
    document.title = meta.title

    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('link[rel="canonical"]', 'href', meta.canonical)

    setMeta('meta[property="og:type"]', 'content', meta.og.type)
    setMeta('meta[property="og:title"]', 'content', meta.og.title)
    setMeta('meta[property="og:description"]', 'content', meta.og.description)
    setMeta('meta[property="og:url"]', 'content', meta.og.url)
    setMeta('meta[property="og:image"]', 'content', meta.og.image)
    setMeta('meta[property="og:image:secure_url"]', 'content', meta.og.image)
    if (meta.og.imageWidth)
      setMeta('meta[property="og:image:width"]', 'content', String(meta.og.imageWidth))
    if (meta.og.imageHeight)
      setMeta('meta[property="og:image:height"]', 'content', String(meta.og.imageHeight))
    setMeta('meta[property="og:image:alt"]', 'content', meta.og.imageAlt)

    setMeta('meta[name="twitter:title"]', 'content', meta.twitter.title)
    setMeta('meta[name="twitter:description"]', 'content', meta.twitter.description)
    setMeta('meta[name="twitter:image"]', 'content', meta.twitter.image)
    setMeta('meta[name="twitter:image:alt"]', 'content', meta.twitter.imageAlt)
  })

  onUnmounted(() => {
    document.title = previousTitle
  })
}
