import React, { useEffect, useRef, useState } from 'react'
import { LOCALES, useTranslation } from '../i18n'

/**
 * Language menu in the top bar.
 *
 * A disclosure button plus a listbox rather than a native <select>: the trigger
 * has to sit in the warm pill language the rest of the chrome uses, and a native
 * select cannot be styled to match across browsers. Keyboard and screen-reader
 * behaviour is wired by hand to compensate — Escape closes, arrows move, and the
 * open state is announced through aria-expanded.
 */
export function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const buttonRef = useRef(null)

  const active = LOCALES.find((l) => l.code === locale) ?? LOCALES[0]

  // Close on outside click and on Escape.
  useEffect(() => {
    if (!open) return

    const onPointerDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const choose = (code) => {
    setLocale(code)
    setOpen(false)
    buttonRef.current?.focus()
  }

  return (
    <div className="lang" ref={wrapRef}>
      <button
        ref={buttonRef}
        type="button"
        className="lang-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('nav.language')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17" strokeLinecap="round" />
          <path d="M12 3.5c2.2 2.4 3.3 5.3 3.3 8.5s-1.1 6.1-3.3 8.5c-2.2-2.4-3.3-5.3-3.3-8.5S9.8 5.9 12 3.5Z" />
        </svg>
        <span>{active.short}</span>
      </button>

      {open && (
        <ul className="lang-menu" role="listbox" aria-label={t('nav.language')}>
          {LOCALES.map((l) => (
            <li key={l.code} role="none">
              <button
                type="button"
                role="option"
                aria-selected={l.code === locale}
                lang={l.code}
                className={l.code === locale ? 'is-active' : ''}
                onClick={() => choose(l.code)}
              >
                <span>{l.label}</span>
                {l.code === locale ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher
