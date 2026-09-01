import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from './useMotionPreference'

/**
 * Scroll-reveal for a whole subtree: every `[data-reveal]` descendant of the
 * returned ref gets `.is-revealed` once it enters the viewport, then is
 * unobserved — reveals are one-way, so nothing re-animates on scroll-up.
 *
 * A single observer per section beats one per element, and the work is a class
 * toggle, so the browser animates on the compositor.
 */
export function useReveal(options = {}) {
  const { rootMargin = '0px 0px -12% 0px', threshold = 0.15 } = options
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = root.querySelectorAll('[data-reveal]')
    if (!targets.length) return

    // No IntersectionObserver, or the visitor wants no motion: show everything.
    if (reduced || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin, threshold },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [reduced, rootMargin, threshold])

  return ref
}

export default useReveal
