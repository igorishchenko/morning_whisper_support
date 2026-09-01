import { privacyEn } from './privacy.en'
import { privacyEs } from './privacy.es'
import { privacyFr } from './privacy.fr'
import { privacyUk } from './privacy.uk'
import { termsEn } from './terms.en'
import { termsEs } from './terms.es'
import { termsFr } from './terms.fr'
import { termsUk } from './terms.uk'

/**
 * Legal documents by locale. English is the fallback for any locale whose
 * translation is not present.
 */
const PRIVACY = { en: privacyEn, es: privacyEs, fr: privacyFr, uk: privacyUk }
const TERMS = { en: termsEn, es: termsEs, fr: termsFr, uk: termsUk }

export const getPrivacy = (locale) => PRIVACY[locale] ?? PRIVACY.en
export const getTerms = (locale) => TERMS[locale] ?? TERMS.en
