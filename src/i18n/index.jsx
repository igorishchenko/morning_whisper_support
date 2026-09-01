import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { en } from './locales/en'
import { es } from './locales/es'
import { fr } from './locales/fr'
import { uk } from './locales/uk'

/**
 * Site localisation.
 *
 * The four locales match the app's own (`i18n/locales/{en,es,fr,ua}.json` in the
 * app repo). Note the code difference: the app calls Ukrainian `ua`, but `uk` is
 * the correct ISO 639-1 code and the one `<html lang>` and hreflang must carry,
 * so the site uses `uk` throughout.
 *
 * Everything is bundled — the whole catalogue is a few tens of KB and shipping
 * it avoids a loading state on a page whose entire job is to be read.
 */

export const LOCALES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'uk', label: 'Українська', short: 'UA' },
]

const CATALOGUE = { en, es, fr, uk }
export const DEFAULT_LOCALE = 'en'
const STORAGE_KEY = 'ttc:lang'

/** First supported locale among the visitor's stored choice, ?lang=, or browser. */
function detectLocale() {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  const supported = LOCALES.map((l) => l.code)

  const fromQuery = new URLSearchParams(window.location.search).get('lang')
  if (fromQuery && supported.includes(fromQuery)) return fromQuery

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && supported.includes(stored)) return stored
  } catch {
    // Safari in private mode throws on localStorage; fall through to the browser.
  }

  for (const tag of navigator.languages ?? [navigator.language]) {
    if (!tag) continue
    // 'uk-UA' → 'uk'. The app's own 'ua' tag is accepted as an alias.
    const base = tag.toLowerCase().split('-')[0]
    if (base === 'ua') return 'uk'
    if (supported.includes(base)) return base
  }

  return DEFAULT_LOCALE
}

/**
 * Reads a dotted path out of the active locale, falling back to English for any
 * key a translation has not caught up with — a missing string shows the English
 * one rather than a blank or a raw key.
 */
function resolve(dict, path) {
  return path.split('.').reduce((node, key) => (node == null ? undefined : node[key]), dict)
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(detectLocale)

  const setLocale = useCallback((next) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Not being able to remember the choice is not worth breaking the page over.
    }
  }, [])

  // Screen readers and search engines both key off this.
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(() => {
    const dict = CATALOGUE[locale] ?? en

    /**
     * `t('hero.title')` → string. Missing keys fall back to English, then to the
     * key itself so a typo is visible in development rather than silent.
     */
    const t = (path) => {
      const hit = resolve(dict, path)
      if (hit !== undefined) return hit
      const fallback = resolve(en, path)
      if (fallback !== undefined) return fallback
      if (import.meta.env.DEV) console.warn(`[i18n] missing key: ${path}`)
      return path
    }

    return { locale, setLocale, t, dict }
  }, [locale, setLocale])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used inside <LanguageProvider>')
  return ctx
}

export default LanguageProvider
