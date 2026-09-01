import { useEffect } from 'react'
import { usePrefersReducedMotion } from './useMotionPreference'

/**
 * Drives every `[data-parallax]` element on the page from one shared rAF loop.
 *
 * `data-parallax` is the speed: positive drifts against the scroll (slower than
 * the page), negative with it. The element's distance from the viewport centre
 * is what's translated, so elements sit where they were authored at rest
 * instead of jumping on load.
 *
 * The offset is published as the `--parallax-y` custom property rather than
 * written straight to `transform` — several parallax targets already carry a
 * transform of their own (the fanned discs in the friends card), and setting
 * `style.transform` here would silently erase it. CSS composes the two.
 *
 * Only a custom property feeding `transform` is written — no layout, no paint.
 * The scroll listener is passive and does nothing but set a flag; all reads and
 * writes happen in the frame callback, so scrolling never synchronously
 * reflows.
 */
export function useParallax() {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return

    // Fine-pointer, roomy viewports only. On phones the effect costs more than
    // it gives, and iOS Safari's URL-bar resize makes it jitter.
    const wide = window.matchMedia('(min-width: 900px)')
    if (!wide.matches) return

    let frame = 0
    let queued = false

    const read = () => {
      queued = false
      const nodes = document.querySelectorAll('[data-parallax]')
      const mid = window.innerHeight / 2

      nodes.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0
        const rect = el.getBoundingClientRect()

        // Skip anything comfortably off-screen.
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return

        const offset = (rect.top + rect.height / 2 - mid) * speed * -0.12
        el.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`)
      })
    }

    const onScroll = () => {
      if (queued) return
      queued = true
      frame = requestAnimationFrame(read)
    }

    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        el.style.removeProperty('--parallax-y')
      })
    }
  }, [reduced])
}

export default useParallax
