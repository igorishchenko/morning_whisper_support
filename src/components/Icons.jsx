import React from 'react'

/**
 * Feature icons — one 24px stroked grid, drawn to sit on the warm palette
 * rather than a generic icon-font look. Decorative: the label beside each one
 * carries the meaning, so they stay aria-hidden.
 */
const PATHS = {
  offline: (
    <>
      <path d="M5 18a4 4 0 0 1 .6-8 6 6 0 0 1 11.2-1.6A3.8 3.8 0 0 1 19 18" />
      <path d="m3 3 18 18" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="3.2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
      <path d="M12 14.5v2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.2 2.4 3.3 5.3 3.3 8.5s-1.1 6.1-3.3 8.5c-2.2-2.4-3.3-5.3-3.3-8.5S9.8 5.9 12 3.5Z" />
    </>
  ),
  history: (
    <>
      <path d="M3.8 12a8.2 8.2 0 1 0 2.4-5.8" />
      <path d="M3.5 4.5V9H8" />
      <path d="M12 8v4.4l3 1.8" />
    </>
  ),
  bell: (
    <>
      <path d="M6.5 10a5.5 5.5 0 0 1 11 0c0 4 1.5 5.5 1.5 5.5H5S6.5 14 6.5 10Z" />
      <path d="M10 18.5a2.2 2.2 0 0 0 4 0" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2 5 6v5.4c0 4.2 2.8 7.4 7 9.4 4.2-2 7-5.2 7-9.4V6Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </>
  ),
}

export function Icon({ name, className = 'feature-icon' }) {
  const path = PATHS[name]
  if (!path) return null

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  )
}

export default Icon
