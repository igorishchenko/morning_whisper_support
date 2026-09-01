import React from 'react'

/**
 * Turn the Cup brand mark — the tilted cup seen from above, the reading showing on
 * its base. Traced from `brand/logo.svg` in the Turn the Cup design project.
 */
export function LogoMark({ className = 'logo-mark' }) {
  const clipId = React.useId()

  return (
    <svg
      viewBox="132 132 760 760"
      className={className}
      role="img"
      aria-label="Turn the Cup"
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="512" cy="512" r="244" />
        </clipPath>
      </defs>
      <g transform="rotate(-14 512 512)">
        <path
          d="M824 424 A88 88 0 0 1 824 600"
          fill="none"
          stroke="#C1743C"
          strokeWidth="72"
          strokeLinecap="round"
        />
        <circle cx="512" cy="512" r="330" fill="#C1743C" />
        <g clipPath={`url(#${clipId})`}>
          <circle cx="512" cy="512" r="244" fill="#E8A825" />
          <circle cx="598" cy="436" r="215" fill="#3B1A0C" />
        </g>
      </g>
    </svg>
  )
}

export default LogoMark
