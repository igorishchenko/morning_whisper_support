import { useEffect } from 'react'
import { SITE_URL } from '../data/landing'
import { LOCALES, DEFAULT_LOCALE } from '../i18n'

/**
 * Per-route <head> management for a client-rendered, multilingual site.
 *
 * index.html carries the landing page's English tags statically, so a crawler
 * that never runs JS still gets the important ones. This hook keeps the other
 * routes — and the active language — honest.
 *
 * Tags are looked up by selector and created only if absent, so the static ones
 * in index.html are updated in place rather than duplicated.
 */

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    Object.entries(attrs).forEach(([k, v]) => k !== 'content' && el.setAttribute(k, v))
    document.head.appendChild(el)
  }
  el.setAttribute('content', attrs.content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]:not([hreflang])`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Language alternates. Each locale is addressable as `?lang=xx`, which is what
 * the provider reads on load, so every translation has a real URL a crawler can
 * fetch and a visitor can share. `x-default` points at the unsuffixed URL.
 */
function syncAlternates(path) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())

  const base = `${SITE_URL}${path === '/' ? '/' : path}`
  const add = (hreflang, href) => {
    const el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('hreflang', hreflang)
    el.setAttribute('href', href)
    document.head.appendChild(el)
  }

  LOCALES.forEach(({ code }) => {
    add(code, code === DEFAULT_LOCALE ? base : `${base}?lang=${code}`)
  })
  add('x-default', base)
}

/**
 * @param {object}   meta
 * @param {string}   meta.title       Full <title>, already brand-suffixed.
 * @param {string}   meta.description Meta + OG description.
 * @param {string}   meta.path        Route path, e.g. '/privacy'.
 * @param {string}   meta.locale      Active locale code, for og:locale.
 * @param {object=}  meta.jsonLd      Structured data for this route.
 * @param {boolean=} meta.noIndex     Ask crawlers to skip the page.
 */
export function useDocumentMeta({
  title,
  description,
  path = '/',
  locale = DEFAULT_LOCALE,
  jsonLd,
  noIndex = false,
}) {
  useEffect(() => {
    const canonical = `${SITE_URL}${path === '/' ? '/' : path}`

    document.title = title
    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertLink('canonical', canonical)

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: locale })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })

    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    })

    syncAlternates(path)
  }, [title, description, path, locale, noIndex])

  useEffect(() => {
    if (!jsonLd) return

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.route = 'true'
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)

    return () => script.remove()
  }, [jsonLd])
}

export default useDocumentMeta
