import React from 'react'

/**
 * A cup's base — the disc a reading is printed on.
 *
 * `art` is the CSS equivalent of the cup's `bottom` gradient spec from the
 * app's catalog (see src/data/landing.js). The inset ring and the soft shadow
 * are the porcelain lip you see looking down into a turned-over cup.
 */
export function CupDisc({ art, ink = 'dark', size, className = '', children }) {
  return (
    <div
      className={`cup-disc ${className}`}
      style={{ '--disc-art': art, ...(size ? { '--disc-size': `${size}px` } : null) }}
      data-ink={ink}
    >
      <div className="cup-disc-art" aria-hidden="true" />
      <div className="cup-disc-rim" aria-hidden="true" />
      {children ? <div className="cup-disc-body">{children}</div> : null}
    </div>
  )
}

export default CupDisc
