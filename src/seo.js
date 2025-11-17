// Simple bilingual SEO helper with OG/Twitter and route-specific defaults
export function setSEO({ title, description, lang = 'en', image, url }) {
  if (title) document.title = title
  const ensure = (selector, attr, value) => {
    let el = document.querySelector(selector)
    if (!el) {
      el = document.createElement('meta')
      const [k, v] = selector.includes('property=') ? ['property', selector.match(/property=\"([^\"]+)\"/)[1]] : ['name', selector.match(/name=\"([^\"]+)\"/)[1]]
      el.setAttribute(k, v)
      document.head.appendChild(el)
    }
    el.setAttribute(attr, value)
  }
  const byName = (n, c) => ensure(`meta[name="${n}"]`, 'content', c)
  const byProp = (p, c) => ensure(`meta[property="${p}"]`, 'content', c)

  byName('description', description || '')

  // Open Graph
  byProp('og:title', title || '')
  byProp('og:description', description || '')
  byProp('og:type', 'website')
  if (url) byProp('og:url', url)
  if (image) byProp('og:image', image)

  // Twitter
  byName('twitter:card', 'summary_large_image')
  byName('twitter:title', title || '')
  byName('twitter:description', description || '')
  if (image) byName('twitter:image', image)

  // HTML lang
  document.documentElement.setAttribute('lang', lang)
}
