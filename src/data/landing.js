/**
 * Landing-page content, mirrored from the Turn the Cup app so the promo never
 * drifts from the product.
 *
 * Sources (sibling repo `morning_whisper`):
 *   CUPS      → utils/cup-catalog.ts (CUP_CATALOG)
 *   COPY      → the app design (Turn the Cup - Phone/Tablet), History rail
 *   PRICES    → utils/rarity.ts + SQL rarity_price()/gift_price()/send_price()
 *   POINTS    → utils/points.ts + supabase/migrations/019
 *
 * Numbers here are display copy. The server is authoritative in the app; if a
 * price or reward changes there, change it here too.
 */

/* ---------------------------------------------------------------- stores --- */

/**
 * Apple assigns the numeric id at first App Store submission; it lives in CI as
 * the `ASC_APP_ID` secret and is not checked into either repo. Drop it in here
 * to turn the iOS button into a direct link — until then it falls back to an
 * App Store search, which resolves rather than 404s.
 */
export const APP_STORE_APP_ID = ''

export const STORE = {
  ios: APP_STORE_APP_ID
    ? `https://apps.apple.com/app/turn-the-cup/id${APP_STORE_APP_ID}`
    : 'https://apps.apple.com/search?term=Turn+the+Cup',
}

/** Canonical origin — GitHub Pages project site. Used for SEO tags. */
export const SITE_URL = 'https://igorishchenko.github.io/morning_whisper_support'

/* ------------------------------------------------------- showcase content --- */

/**
 * Prediction text lives in the locale files (`landing.predictions`); only the
 * rarity of each one is structural, so the wall can rule each card in the right
 * ink whatever language it is showing. Index-aligned with that array.
 */
export const PREDICTION_RARITY = [
  null, 'rare', null, 'epic', null, null, null, null, null, null, 'epic', null,
]

/** Which five the hero cycles through, by index into `landing.predictions`. */
export const HERO_PREDICTIONS = [
  { index: 10, rarity: 'epic' },
  { index: 0, rarity: 'common' },
  { index: 3, rarity: 'epic' },
  { index: 1, rarity: 'rare' },
  { index: 9, rarity: 'common' },
]

/* ------------------------------------------------------------------ cups --- */

/**
 * All 18 collectible cups.
 *
 * `art` is the CSS equivalent of each cup's `bottom` gradient spec — the surface
 * the prediction is read on, used by the hero reveal and the friends card.
 *
 * `vessel` describes the cup itself, seen from the side, for the collection
 * grid: silhouette plus its fittings (handle, lid, straw, saucer, ribs) and the
 * colours of its body and contents. Rendered by components/CupShape.jsx.
 */
export const CUPS = [
  {
    id: "togo", name: "To-Go Classic", tier: "default",
    price: 0, move: "Barista spin", durationMs: 4000, ink: "dark",
    art: "radial-gradient(circle at 35% 30%, #F7E7D5 0%, #E3C49E 62%, #D2A878 100%)",
    vessel: {
      shape: "taper",
      body: ["#FFFFFF", "#FDF6EC", "#E0CDB4"],
      band: "#E2542A",
      lid: "flat",
      seam: "#E8A825",
    },
  },
  {
    id: "mug", name: "Diner Mug", tier: "classic",
    price: 100, move: "Heavyweight roll", durationMs: 4400, ink: "dark",
    art: "repeating-linear-gradient(90deg, #FDF3E8 0 7%, #F0D9BF 7% 14%)",
    vessel: {
      shape: "straight",
      body: ["#FFFFFF", "#FDF3E8", "#E3C49E"],
      handle: true,
      stripe: "#F0D9BF",
      fill: "#3E2417",
    },
  },
  {
    id: "jar", name: "Mason Jar", tier: "classic",
    price: 100, move: "Rocking chair", durationMs: 4600, ink: "dark",
    art: "radial-gradient(circle at 30% 25%, #F7E7D5 0%, #E8A825 70%, #C1743C 100%)",
    vessel: {
      shape: "jar",
      body: ["#FBF6EE", "#F1E6D4", "#D9C3A4"],
      glass: true,
      fill: "#E8A825",
      band: "#C9B79A",
    },
  },
  {
    id: "latte", name: "Layered Latte Glass", tier: "rare",
    price: 250, move: "Waltz", durationMs: 5000, ink: "light",
    art: "radial-gradient(circle at 35% 30%, #9A5426 0%, #7E4019 55%, #4A2A16 100%)",
    vessel: {
      shape: "taper",
      body: ["#FBF7F0", "#EFE6D8", "#D3C4AE"],
      glass: true,
      tall: true,
      layers: ["#F0D9BF", "#B0783F", "#7E4019", "#4A2A16"],
    },
  },
  {
    id: "iced", name: "Iced Dome Cup", tier: "rare",
    price: 250, move: "Cocktail shaker", durationMs: 3800, ink: "dark",
    art: "radial-gradient(circle at 50% 20%, #FFFBF6 0%, #EBC6A2 55%, #DFA97C 100%)",
    vessel: {
      shape: "taper",
      body: ["#FCFAF6", "#EFE9DE", "#D6CCBC"],
      glass: true,
      lid: "dome",
      straw: "#E2542A",
      fill: "#EBC6A2",
    },
  },
  {
    id: "thermos", name: "Travel Thermos", tier: "epic",
    price: 600, move: "Bottle flip", durationMs: 4000, ink: "light",
    art: "linear-gradient(200deg, #9A5426 0%, #6E3A18 45%, #3E2417 100%)",
    vessel: {
      shape: "straight",
      body: ["#9A5426", "#6E3A18", "#3E2417"],
      lid: "cap",
      tall: true,
      seam: "#C1743C",
    },
  },
  {
    id: "ribbed", name: "Ribbed Plum Cup", tier: "epic",
    price: 600, move: "Ballerina", durationMs: 5200, ink: "light",
    art: "radial-gradient(circle at 40% 25%, #4A1B33 0%, #3C142A 70%)",
    vessel: {
      shape: "taper",
      body: ["#6B2A4A", "#4A1B33", "#3C142A"],
      ribs: true,
    },
  },
  {
    id: "boba", name: "Bubble Tea", tier: "legendary",
    price: 1500, move: "Pearl jump", durationMs: 4200, ink: "light",
    art: "radial-gradient(circle at 40% 30%, #523020 0%, #3E2417 60%, #241209 100%)",
    vessel: {
      shape: "straight",
      body: ["#FCFAF6", "#EFE9DE", "#D6CCBC"],
      glass: true,
      wide: true,
      lid: "dome",
      straw: "#C6431F",
      fill: "#8A5A3A",
      pearls: "#241209",
    },
  },
  {
    id: "cortado", name: "Cortado Glass", tier: "rare",
    price: 250, move: "Pour-over cascade", durationMs: 4400, ink: "dark",
    art: "radial-gradient(circle at 35% 28%, #FBF4E8 0%, #E0C39C 58%, #C1743C 100%)",
    vessel: {
      shape: "taper",
      body: ["#FBF7F0", "#EFE6D8", "#D3C4AE"],
      glass: true,
      squat: true,
      fill: "#C1743C",
    },
  },
  {
    id: "cappuccino", name: "Cappuccino & Saucer", tier: "rare",
    price: 250, move: "Waiter's slip", durationMs: 3800, ink: "dark",
    art: "radial-gradient(circle at 40% 26%, #FFFDF6 0%, #EFE0C8 60%, #B98A55 100%)",
    vessel: {
      shape: "demitasse",
      body: ["#FFFFFF", "#FBF4E8", "#DCC9AE"],
      handle: true,
      saucer: true,
      foam: "#F4E6CC",
    },
  },
  {
    id: "camp", name: "Enamel Camp Mug", tier: "rare",
    price: 250, move: "Campfire kick", durationMs: 4200, ink: "dark",
    art: "radial-gradient(circle at 40% 30%, #FBF6EC 0%, #F3E2D0 58%, #E8B79A 100%)",
    vessel: {
      shape: "straight",
      body: ["#FDF8F0", "#F3E2D0", "#DCC3A8"],
      handle: true,
      rim: "#C1743C",
      speckles: true,
      fill: "#5A3418",
    },
  },
  {
    id: "cocoa", name: "Cocoa & Marshmallow", tier: "rare",
    price: 250, move: "Marshmallow bailout", durationMs: 5000, ink: "light",
    art: "radial-gradient(circle at 36% 28%, #8A5433 0%, #5E3018 55%, #4A2612 100%)",
    vessel: {
      shape: "straight",
      body: ["#A9714A", "#8A5433", "#5E3018"],
      handle: true,
      marshmallow: true,
      fill: "#6E4326",
    },
  },
  {
    id: "frappe", name: "Whipped Frapp\u00e9", tier: "epic",
    price: 600, move: "Whipped wobble", durationMs: 4800, ink: "dark",
    art: "radial-gradient(circle at 42% 24%, #FFF3DF 0%, #DFA97C 52%, #C1743C 100%)",
    vessel: {
      shape: "taper",
      body: ["#FCFAF6", "#EFE9DE", "#D6CCBC"],
      glass: true,
      lid: "dome",
      straw: "#C1743C",
      whip: true,
      fill: "#DFA97C",
    },
  },
  {
    id: "chawan", name: "Matcha Chawan", tier: "epic",
    price: 600, move: "Ceremony bow", durationMs: 5200, ink: "light",
    art: "radial-gradient(circle at 38% 30%, #4B6329 0%, #3D5222 50%, #2E3D19 100%)",
    vessel: {
      shape: "bowl",
      body: ["#6E8A46", "#4B6329", "#2E3D19"],
      fill: "#7FA24A",
    },
  },
  {
    id: "fincan", name: "Turkish Fincan", tier: "epic",
    price: 600, move: "Tasseography", durationMs: 4600, ink: "light",
    art: "radial-gradient(circle at 36% 28%, #8A4A28 0%, #5A2E16 55%, #2A1509 100%)",
    vessel: {
      shape: "demitasse",
      body: ["#8A4A28", "#5A2E16", "#2A1509"],
      saucer: true,
      gold: "#E8A825",
      fill: "#2A1509",
    },
  },
  {
    id: "dwall", name: "Double-Wall Glass", tier: "epic",
    price: 600, move: "Zero-G", durationMs: 5000, ink: "dark",
    art: "radial-gradient(circle at 50% 22%, #FFFDF6 0%, #EFE3D0 62%, #C9A984 100%)",
    vessel: {
      shape: "taper",
      body: ["#FDFBF7", "#F2ECE1", "#D8CDBC"],
      glass: true,
      doubleWall: true,
      fill: "#C9A984",
    },
  },
  {
    id: "tumbler", name: "Steel Tumbler", tier: "legendary",
    price: 1500, move: "Gymnast", durationMs: 4000, ink: "light",
    art: "linear-gradient(200deg, #6E6A6E 0%, #4A4348 45%, #3C142A 100%)",
    vessel: {
      shape: "straight",
      body: ["#8E8A8E", "#6E6A6E", "#413A40"],
      lid: "cap",
      tall: true,
      seam: "#9E9AA0",
    },
  },
  {
    id: "bottle", name: "Cold Brew Bottle", tier: "legendary",
    price: 1500, move: "Cold-brew flip", durationMs: 4200, ink: "light",
    art: "radial-gradient(circle at 40% 28%, #8A5A2E 0%, #5A3418 50%, #241209 100%)",
    vessel: {
      shape: "bottle",
      body: ["#8A5A2E", "#5A3418", "#241209"],
      cap: "#3C142A",
    },
  },
]

/* --------------------------------------------------------------- rarity --- */

/** The one ladder shared by cups and gifts (utils/rarity.ts, SQL rarity_price). */
export const RARITY = [
  { tier: 'classic', labelKey: 'classic', price: 100 },
  { tier: 'rare', labelKey: 'rareShort', price: 250 },
  { tier: 'epic', labelKey: 'epicShort', price: 600 },
  { tier: 'legendary', labelKey: 'legendaryShort', price: 1500 },
]

/* ---------------------------------------------------------------- ritual --- */

/** Step numbers are structural; the titles and bodies live in the locales. */
export const RITUAL_STEPS = ['01', '02', '03']

/* -------------------------------------------------------------- earnings --- */

/**
 * Earn side of the coffee-point ledger (migration 019 + utils/points.ts).
 * Index-aligned with `landing.points.earn` in the locale files.
 */
export const EARN_VALUES = ['+20', '+50', '+150', '+300', '+750', '+300']

/* -------------------------------------------------------------- features --- */

/** Icon names, index-aligned with `landing.features.items` in the locales. */
export const FEATURE_ICONS = ['offline', 'lock', 'globe', 'history', 'bell', 'shield']
