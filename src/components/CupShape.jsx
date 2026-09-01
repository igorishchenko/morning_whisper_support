import React from 'react'

/**
 * A collectible cup, seen from the side.
 *
 * Driven by the `vessel` spec on each cup in data/landing.js: one of six
 * silhouettes plus the fittings that actually distinguish these objects from
 * one another — a handle, a domed lid, a straw, a saucer, ribs, pearls. The
 * grid needs eighteen recognisably different vessels, not one shape recoloured
 * eighteen times.
 *
 * Everything is drawn in a 120×140 box so the cups line up on a shared baseline
 * whatever their height.
 */

const BASE = 122 // shared floor line
const MID = 60 // horizontal centre

/** Wall x-positions at height y for a vessel tapering `inset` units per side. */
function taperWall(y, top, bottom, left, right, inset) {
  const t = Math.min(1, Math.max(0, (y - top) / (bottom - top)))
  return [left + inset * t, right - inset * t]
}

export function CupShape({ cup, className = 'cup-shape' }) {
  const v = cup.vessel
  const uid = React.useId().replace(/:/g, '')
  const id = (name) => `${name}-${uid}`

  const [light, mid, dark] = v.body
  const glass = !!v.glass

  // --- silhouette ---------------------------------------------------------
  let top = v.tall ? 26 : v.squat ? 56 : 40
  let left = 34
  let right = 86
  let inset = 0
  let path = ''

  if (v.shape === 'taper') {
    left = v.wide ? 28 : 31
    right = v.wide ? 92 : 89
    inset = 9
    path = `M${left} ${top} L${right} ${top} L${right - inset} ${BASE - 4} Q${right - inset} ${BASE} ${right - inset - 5} ${BASE} L${left + inset + 5} ${BASE} Q${left + inset} ${BASE} ${left + inset} ${BASE - 4} Z`
  } else if (v.shape === 'straight') {
    left = v.wide ? 32 : 37
    right = v.wide ? 88 : 83
    inset = 3
    path = `M${left} ${top} L${right} ${top} L${right - inset} ${BASE - 5} Q${right - inset} ${BASE} ${right - inset - 5} ${BASE} L${left + inset + 5} ${BASE} Q${left + inset} ${BASE} ${left + inset} ${BASE - 5} Z`
  } else if (v.shape === 'jar') {
    top = 34
    left = 36
    right = 84
    inset = 2
    // Straight body, then shoulders drawing in to a narrower threaded neck.
    path = `M44 ${top} L76 ${top} L76 44 Q${right} 50 ${right} 60 L${right - inset} ${BASE - 5} Q${right - inset} ${BASE} ${right - inset - 5} ${BASE} L${left + inset + 5} ${BASE} Q${left + inset} ${BASE} ${left + inset} ${BASE - 5} L${left} 60 Q${left} 50 44 44 Z`
  } else if (v.shape === 'bottle') {
    top = 24
    left = 38
    right = 82
    path = `M52 ${top} L68 ${top} L68 44 Q${right} 54 ${right} 70 L${right} ${BASE - 6} Q${right} ${BASE} ${right - 6} ${BASE} L${left + 6} ${BASE} Q${left} ${BASE} ${left} ${BASE - 6} L${left} 70 Q${left} 54 52 44 Z`
  } else if (v.shape === 'bowl') {
    top = 64
    left = 24
    right = 96
    path = `M${left} ${top} Q${MID} ${BASE + 16} ${right} ${top} Z`
  } else if (v.shape === 'demitasse') {
    top = 52
    left = 40
    right = 80
    inset = 5
    path = `M${left} ${top} L${right} ${top} L${right - inset} 100 Q${right - inset} 106 ${right - inset - 5} 106 L${left + inset + 5} 106 Q${left + inset} 106 ${left + inset} 100 Z`
  }

  const rimW = right - left
  const bodyFloor = v.shape === 'demitasse' ? 106 : v.shape === 'bowl' ? 112 : BASE

  // Contents sit inside a glass wall; opaque cups only show them at the rim.
  const fillTop = top + (v.lid === 'dome' ? 14 : 10)
  const [fl, fr] = taperWall(fillTop, top, bodyFloor, left, right, inset)

  return (
    <svg viewBox="0 0 120 140" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id('body')} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={dark} stopOpacity={glass ? 0.55 : 1} />
          <stop offset="16%" stopColor={light} />
          <stop offset="58%" stopColor={mid} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
        <radialGradient id={id('shadow')} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(62,36,23,.30)" />
          <stop offset="60%" stopColor="rgba(62,36,23,.14)" />
          <stop offset="100%" stopColor="rgba(62,36,23,0)" />
        </radialGradient>
        <clipPath id={id('clip')}>
          <path d={path} />
        </clipPath>
      </defs>

      {/* Table shadow. */}
      <ellipse cx={MID} cy={bodyFloor + 4} rx={rimW * 0.62} ry="7" fill={`url(#${id('shadow')})`} />

      {/* Saucer, drawn under the cup. */}
      {v.saucer && (
        <>
          <ellipse cx={MID} cy="110" rx="34" ry="8" fill={light} />
          <ellipse cx={MID} cy="108" rx="34" ry="8" fill={mid} opacity=".5" />
          <ellipse cx={MID} cy="107" rx="26" ry="5.5" fill={dark} opacity=".18" />
        </>
      )}

      {/* Handle, behind the body so the join is hidden. Drawn in the dark tone
          with a lighter core — in the mid tone it disappeared against a pale
          body, which is most of them. */}
      {v.handle && (
        <>
          <path
            d={`M${right - 4} ${top + 16} a19 19 0 0 1 0 ${v.shape === 'demitasse' ? 28 : 38}`}
            fill="none"
            stroke={dark}
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path
            d={`M${right - 4} ${top + 16} a19 19 0 0 1 0 ${v.shape === 'demitasse' ? 28 : 38}`}
            fill="none"
            stroke={light}
            strokeWidth="5"
            strokeLinecap="round"
            opacity=".85"
          />
        </>
      )}

      {/* Body. */}
      <path d={path} fill={`url(#${id('body')})`} />

      <g clipPath={`url(#${id('clip')})`}>
        {/* Contents. Glass vessels show the whole column; opaque ones get the
            liquid drawn as the opening, below. */}
        {v.fill && glass && (
          <rect
            x={left - 2}
            y={fillTop}
            width={rimW + 4}
            height={bodyFloor - fillTop}
            fill={v.fill}
            opacity=".9"
          />
        )}

        {/* Layered latte — the whole point of that cup. */}
        {v.layers &&
          v.layers.map((c, i) => (
            <rect
              key={c + i}
              x={left - 2}
              y={fillTop + i * ((bodyFloor - fillTop) / v.layers.length)}
              width={rimW + 4}
              height={(bodyFloor - fillTop) / v.layers.length + 1}
              fill={c}
              opacity=".92"
            />
          ))}

        {/* Boba pearls, settled at the bottom. */}
        {v.pearls &&
          [
            [-14, -8], [-4, -4], [7, -9], [15, -3], [-9, 2], [3, 3], [13, 6], [-16, 7],
          ].map(([dx, dy], i) => (
            <circle key={i} cx={MID + dx} cy={bodyFloor - 14 + dy} r="4.4" fill={v.pearls} />
          ))}

        {/* Diner-mug band. */}
        {v.stripe && <rect x={left - 2} y={top + 26} width={rimW + 4} height="7" fill={v.stripe} />}

        {/* Enamel speckle. */}
        {v.speckles &&
          [
            [-12, 12], [8, 20], [-4, 34], [14, 40], [-15, 46], [2, 52], [11, 62], [-9, 66],
          ].map(([dx, dy], i) => (
            <circle key={i} cx={MID + dx} cy={top + dy} r="1.5" fill={dark} opacity=".38" />
          ))}

        {/* Vertical ribs. */}
        {v.ribs &&
          [-20, -12, -4, 4, 12, 20].map((dx) => (
            <rect key={dx} x={MID + dx} y={top} width="2.5" height={bodyFloor - top} fill="#FFFFFF" opacity=".13" />
          ))}

        {/* Double-wall: the inner vessel floating inside the outer one. */}
        {v.doubleWall && (
          <path
            d={`M${left + 7} ${top + 8} L${right - 7} ${top + 8} L${right - inset - 5} ${bodyFloor - 10} L${left + inset + 5} ${bodyFloor - 10} Z`}
            fill="none"
            stroke={dark}
            strokeWidth="1.6"
            opacity=".35"
          />
        )}

        {/* Specular strip down the left wall. */}
        <rect x={left + 5} y={top + 6} width="4" height={bodyFloor - top - 16} rx="2" fill="#FFFFFF" opacity={glass ? 0.5 : 0.32} />
      </g>

      {/* The opening — an open, opaque vessel should be something you can see
          down into, not a flat block of colour at the rim. */}
      {!glass && !v.lid && (
        <>
          <ellipse cx={MID} cy={top} rx={rimW / 2} ry={rimW / 8} fill={dark} />
          <ellipse cx={MID} cy={top} rx={rimW / 2 - 3.5} ry={rimW / 8 - 2.5} fill={v.fill ?? mid} />
          {v.fill && (
            <ellipse cx={MID - rimW / 10} cy={top - 1} rx={rimW / 5} ry={rimW / 22} fill="#FFFFFF" opacity=".14" />
          )}
        </>
      )}

      {/* Jar screw band. */}
      {v.band && v.shape === 'jar' && (
        <>
          <rect x="42" y={top - 3} width="36" height="12" rx="3" fill={v.band} />
          <rect x="42" y={top + 1} width="36" height="2" fill={dark} opacity=".25" />
        </>
      )}

      {/* Whipped cream. */}
      {v.whip && (
        <g>
          <ellipse cx={MID} cy={top + 2} rx={rimW / 2 - 2} ry="8" fill="#FFFDF8" />
          <ellipse cx={MID - 6} cy={top - 5} rx="11" ry="8" fill="#FFFDF8" />
          <ellipse cx={MID + 7} cy={top - 7} rx="9" ry="7" fill="#FFF8EE" />
          <ellipse cx={MID} cy={top - 14} rx="7" ry="6" fill="#FFFDF8" />
        </g>
      )}

      {/* Cappuccino foam, sitting in the opening. */}
      {v.foam && <ellipse cx={MID} cy={top} rx={rimW / 2 - 3} ry={rimW / 8 - 2} fill={v.foam} />}

      {/* Marshmallows bobbing on the cocoa. */}
      {v.marshmallow &&
        [[-11, 0], [1, -3], [12, 1]].map(([dx, dy], i) => (
          <rect key={i} x={MID + dx - 6} y={top + dy - 4} width="12" height="9" rx="3.5" fill="#FFF8F0" />
        ))}

      {/* Rim line — enamel mugs and the fincan's gold band. */}
      {(v.rim || v.gold) && (
        <rect x={left - 1} y={top - 1} width={rimW + 2} height="3.5" fill={v.rim || v.gold} />
      )}

      {/* Lids. */}
      {v.lid === 'flat' && (
        <>
          <ellipse cx={MID} cy={top} rx={rimW / 2 + 4} ry="7" fill={light} />
          <ellipse cx={MID} cy={top - 3} rx={rimW / 2 + 4} ry="7" fill="#FFFDF9" />
          <rect x={MID - 12} y={top - 8} width="24" height="5" rx="2.5" fill={dark} opacity=".45" />
        </>
      )}
      {v.lid === 'dome' && (
        <>
          <path
            d={`M${left - 3} ${top + 2} Q${MID} ${top - 32} ${right + 3} ${top + 2} Z`}
            fill="#FFFFFF"
            opacity=".62"
            stroke={dark}
            strokeWidth="1.6"
            strokeOpacity=".38"
          />
          <ellipse cx={MID} cy={top + 2} rx={rimW / 2 + 3} ry="4" fill={light} opacity=".9" />
          <path
            d={`M${left + 6} ${top - 2} Q${MID - 12} ${top - 22} ${MID - 2} ${top - 26}`}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity=".85"
          />
        </>
      )}
      {v.lid === 'cap' && (
        <>
          <rect x={left - 2} y={top - 12} width={rimW + 4} height="14" rx="4" fill={light} />
          <rect x={left - 2} y={top - 2} width={rimW + 4} height="3" fill={dark} opacity=".3" />
        </>
      )}

      {/* Bottle cap. */}
      {v.cap && (
        <>
          <rect x="49" y="18" width="22" height="12" rx="3" fill={v.cap} />
          <rect x="49" y="27" width="22" height="2.5" fill="#000" opacity=".2" />
        </>
      )}

      {/* Straw, last so it sits over the lid. */}
      {v.straw && (
        <rect
          x={MID + 4}
          y={v.lid === 'dome' ? top - 40 : top - 30}
          width="8"
          height={v.lid === 'dome' ? 46 : 36}
          rx="4"
          fill={v.straw}
          transform={`rotate(9 ${MID + 8} ${top})`}
        />
      )}

      {/* Seam line on metal vessels. */}
      {v.seam && <rect x={left} y={bodyFloor - 26} width={rimW} height="2.5" fill={v.seam} opacity=".7" />}
    </svg>
  )
}

export default CupShape
