import React from 'react'

/**
 * The to-go cup standing upright, drawn to match the one on the app's Home
 * screen: tapered cream body, terracotta sleeve with a thin caramel seam, and
 * a pale domed lid. This is the face you see before the cup goes over.
 *
 * The body tapers from 108 units at the lip to 80 at the base over 141 units of
 * height; the sleeve's corners are interpolated along that same taper so its
 * edges sit flush with the wall instead of hanging off it.
 */

const TOP_Y = 56
const BOT_Y = 197
const TOP_L = 56
const TOP_R = 164
const INSET = 14 // how far each wall draws in by the base

/** Left/right wall x-positions at a given y. */
function wallAt(y) {
  const t = (y - TOP_Y) / (BOT_Y - TOP_Y)
  return [TOP_L + INSET * t, TOP_R - INSET * t]
}

const [SL_T_L, SL_T_R] = wallAt(110) // sleeve, top edge
const [SL_B_L, SL_B_R] = wallAt(160) // sleeve, bottom edge
const [SEAM_L, SEAM_R] = wallAt(156) // caramel seam just above it

const f = (n) => n.toFixed(1)

export function CupTop({ className = '' }) {
  const bodyId = React.useId()
  const lidId = React.useId()
  const sleeveId = React.useId()
  const shadowId = React.useId()

  return (
    <svg viewBox="0 0 220 240" className={className} aria-hidden="true" focusable="false">
      <defs>
        {/* Light from the upper left, the way every surface in the app is lit. */}
        <linearGradient id={bodyId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E6D6C1" />
          <stop offset="14%" stopColor="#FFFFFF" />
          <stop offset="58%" stopColor="#FDF6EC" />
          <stop offset="88%" stopColor="#EADCC7" />
          <stop offset="100%" stopColor="#D8C3A6" />
        </linearGradient>

        <linearGradient id={lidId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EDE3D6" />
          <stop offset="26%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#DCCBB5" />
        </linearGradient>

        {/* Soft contact shadow — a flat ellipse reads as a grey band. */}
        <radialGradient id={shadowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(62,36,23,.30)" />
          <stop offset="58%" stopColor="rgba(62,36,23,.16)" />
          <stop offset="100%" stopColor="rgba(62,36,23,0)" />
        </radialGradient>

        <linearGradient id={sleeveId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A8330F" />
          <stop offset="16%" stopColor="#E2542A" />
          <stop offset="58%" stopColor="#D64E26" />
          <stop offset="100%" stopColor="#9C2E0C" />
        </linearGradient>
      </defs>

      {/* Contact shadow on the table. */}
      <ellipse cx="110" cy="206" rx="52" ry="10" fill={`url(#${shadowId})`} />

      {/* Body. */}
      <path
        d={`M${TOP_L} ${TOP_Y} H${TOP_R} L${TOP_R - INSET} ${BOT_Y} Q${TOP_R - INSET - 1} 205 ${TOP_R - INSET - 9} 205 H${TOP_L + INSET + 9} Q${TOP_L + INSET + 1} 205 ${TOP_L + INSET} ${BOT_Y} Z`}
        fill={`url(#${bodyId})`}
      />

      {/* Sleeve, flush to the taper. */}
      <path
        d={`M${f(SL_T_L)} 110 H${f(SL_T_R)} L${f(SL_B_R)} 160 H${f(SL_B_L)} Z`}
        fill={`url(#${sleeveId})`}
      />
      <path
        d={`M${f(SEAM_L)} 156 H${f(SEAM_R)}`}
        stroke="#E8A825"
        strokeWidth="3"
        fill="none"
        opacity=".9"
      />

      {/* Lid: rim, low dome, sip hole. */}
      <ellipse cx="110" cy={TOP_Y} rx="54" ry="11" fill={`url(#${lidId})`} />
      <ellipse cx="110" cy="51" rx="54" ry="11" fill="#FFFDF9" />
      <ellipse cx="110" cy="50" rx="45" ry="8" fill="#F4EBDD" />
      <rect x="97" y="43" width="26" height="6" rx="3" fill="#3E2417" opacity=".42" />

      {/* Specular strip down the left wall. */}
      <path
        d="M71 74 L75 186"
        stroke="rgba(255,255,255,.55)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export default CupTop
