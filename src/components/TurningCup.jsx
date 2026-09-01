import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CupTop } from './CupTop'
import { HERO_PREDICTIONS, CUPS } from '../data/landing'
import { usePrefersReducedMotion } from '../hooks/useMotionPreference'
import { useTranslation } from '../i18n'

/** The cup the hero turns — the free To-Go Classic everybody starts with. */
const HERO_CUP = CUPS.find((c) => c.id === 'togo') ?? CUPS[0]

/** Matches the .turning-cup flip transition in Landing.css. */
const TURN_MS = 900

/**
 * The product's whole idea in one control: a cup you turn over to read what is
 * printed on its base. The three captions — tap, reading the grounds, set the
 * cup back — are the app's own, so the page teaches the real interaction.
 *
 * It never turns on its own: the cup sits upright until the visitor taps it,
 * exactly as it does in the app. It is a real <button>, so it works from the
 * keyboard, and it announces the reading politely for screen readers.
 */
export function TurningCup() {
  const { t, dict } = useTranslation()
  const [turned, setTurned] = useState(false)
  const [index, setIndex] = useState(0)
  const [busy, setBusy] = useState(false)
  const reduced = usePrefersReducedMotion()

  const timers = useRef([])

  const after = useCallback((ms, fn) => {
    const id = setTimeout(fn, ms)
    timers.current.push(id)
  }, [])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const toggle = useCallback(() => {
    if (busy) return

    // Turning back: advance to the next reading once the base is out of sight,
    // so the text never visibly swaps mid-flip.
    if (turned) {
      setBusy(true)
      setTurned(false)
      after(reduced ? 0 : TURN_MS / 2, () => setIndex((i) => (i + 1) % HERO_PREDICTIONS.length))
      after(reduced ? 0 : TURN_MS, () => setBusy(false))
      return
    }

    setBusy(true)
    setTurned(true)
    after(reduced ? 0 : TURN_MS, () => setBusy(false))
  }, [busy, turned, reduced, after])

  const slot = HERO_PREDICTIONS[index]
  const rarity = slot.rarity ?? 'common'
  const text = dict.landing?.predictions?.[slot.index] ?? ''

  const caption = busy && turned
    ? t('landing.cup.reading')
    : turned
      ? t('landing.cup.setBack')
      : t('landing.cup.tap')

  return (
    <div className="turning-cup-wrap">
      <button
        type="button"
        className="turning-cup"
        data-turned={turned}
        onClick={toggle}
        aria-pressed={turned}
        aria-label={turned ? t('landing.cup.setBackLabel') : t('landing.cup.turnLabel')}
      >
        <span className="turning-cup-inner">
          <span className="cup-face cup-face-top">
            <CupTop className="cup-top-art" />
          </span>

          <span className="cup-face cup-face-base" data-ink={HERO_CUP.ink}>
            <span className="cup-face-art" aria-hidden="true" />
            <span className="cup-face-rim" aria-hidden="true" />
            <span className="cup-face-text">{text}</span>
          </span>
        </span>
      </button>

      {/* The rarity the app stamps on a reveal, in that rarity's own ink. */}
      <span className={`rarity-badge tier-${rarity}`} data-visible={turned} aria-hidden={!turned}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path
            d="M12 4.2l1.5 4.1 4.3 1.4-4.3 1.4L12 15.2l-1.5-4.1-4.3-1.4 4.3-1.4Z"
            fill="currentColor"
          />
          <path d="M18.4 15.1l.7 1.9 2 .7-2 .7-.7 1.9-.7-1.9-2-.7 2-.7Z" fill="currentColor" opacity=".7" />
        </svg>
        {t(`landing.rarity.${rarity}`)}
      </span>

      <p className="turning-cup-hint" aria-hidden="true">
        {caption}
      </p>

      {/* The reveal, announced without stealing focus. */}
      <p className="sr-only" role="status" aria-live="polite">
        {turned ? `${t(`landing.rarity.${rarity}`)}. ${text}` : ''}
      </p>
    </div>
  )
}

export default TurningCup
