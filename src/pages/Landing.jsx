import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { TurningCup } from '../components/TurningCup'
import { CupDisc } from '../components/CupDisc'
import { CupShape } from '../components/CupShape'
import { Icon } from '../components/Icons'
import { useReveal } from '../hooks/useReveal'
import { useParallax } from '../hooks/useParallax'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import {
  CUPS, RARITY, RITUAL_STEPS, EARN_VALUES, FEATURE_ICONS,
  PREDICTION_RARITY, STORE, SITE_URL,
} from '../data/landing'
import { useTranslation } from '../i18n'
import './Landing.css'

/** The App Store button. iOS is the only platform for now. */
function StoreButtons({ tone = 'default', note = true }) {
  const { t } = useTranslation()

  return (
    <div className={`store-row store-row-${tone}`}>
      <a className="store-btn store-btn-primary" href={STORE.ios} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.8 2.2 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 1.9-1.1 2.7-2.2.8-1.2 1.2-2.4 1.2-2.5-.1 0-2.3-.9-2.3-3.6ZM14.2 6.2c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-.9 2.6 1 .1 2-.5 2.6-1.2Z"
          />
        </svg>
        <span>
          <small>{t('store.downloadOn')}</small>
          {t('store.appStore')}
        </span>
      </a>
      {note ? <span className="store-note">{t('store.note')}</span> : null}
    </div>
  )
}

function Landing() {
  const { t, locale, dict } = useTranslation()
  useParallax()

  const heroRef = useReveal()
  const ritualRef = useReveal()
  const wallRef = useReveal()
  const cupsRef = useReveal()
  const pointsRef = useReveal()
  const friendsRef = useReveal()
  const featuresRef = useReveal()
  const faqRef = useReveal()
  const ctaRef = useReveal()

  const title = t('landing.meta.title')
  const description = t('landing.meta.description')
  const faqItems = dict.landing?.faq?.items ?? []

  // Rich results: the app itself, plus the FAQ block below it.
  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'MobileApplication',
          name: 'Turn the Cup',
          applicationCategory: 'EntertainmentApplication',
          operatingSystem: 'iOS',
          description,
          url: `${SITE_URL}/`,
          image: `${SITE_URL}/favicon.png`,
          inLanguage: ['en', 'es', 'fr', 'uk'],
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        },
      ],
    }),
    [description, faqItems],
  )

  useDocumentMeta({ title, description, path: '/', locale, jsonLd })

  // Three uneven columns so the wall drifts rather than marching in step.
  const wallColumns = useMemo(() => {
    const texts = dict.landing?.predictions ?? []
    const cols = [[], [], []]
    texts.forEach((text, i) => cols[i % 3].push({ text, rarity: PREDICTION_RARITY[i] }))
    return cols
  }, [dict])

  const showcase = useMemo(() => CUPS.filter((c) => c.id !== 'togo').slice(0, 12), [])

  return (
    <div className="landing">
      {/* ------------------------------------------------------------ hero */}
      <section className="hero" ref={heroRef}>
        <div className="hero-glow" data-parallax="1.6" aria-hidden="true" />
        <div className="hero-glow hero-glow-2" data-parallax="-1.1" aria-hidden="true" />

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow" data-reveal>
              {t('landing.hero.eyebrow')}
            </span>

            <h1 data-reveal style={{ '--d': '60ms' }}>
              {t('landing.hero.titleLead')} <em>{t('landing.hero.titleAccent')}</em>
            </h1>

            <p className="hero-lede" data-reveal style={{ '--d': '120ms' }}>
              {t('landing.hero.lede')}
            </p>

            <div data-reveal style={{ '--d': '180ms' }}>
              <StoreButtons />
            </div>

            <dl className="hero-stats" data-reveal style={{ '--d': '240ms' }}>
              <div>
                <dt>2,350+</dt>
                <dd>{t('landing.hero.statReadings')}</dd>
              </div>
              <div>
                <dt>18</dt>
                <dd>{t('landing.hero.statCups')}</dd>
              </div>
              <div>
                <dt>4</dt>
                <dd>{t('landing.hero.statLanguages')}</dd>
              </div>
            </dl>
          </div>

          <div className="hero-stage" data-reveal style={{ '--d': '140ms' }}>
            <TurningCup />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- ritual */}
      <section className="section ritual" ref={ritualRef} aria-labelledby="ritual-h">
        <header className="section-head">
          <span className="eyebrow" data-reveal>{t('landing.ritual.eyebrow')}</span>
          <h2 id="ritual-h" data-reveal style={{ '--d': '60ms' }}>
            {t('landing.ritual.title')}
          </h2>
          <p className="section-lede" data-reveal style={{ '--d': '120ms' }}>
            {t('landing.ritual.lede')}
          </p>
        </header>

        <ol className="ritual-steps">
          {(dict.landing?.ritual?.steps ?? []).map((step, i) => (
            <li key={RITUAL_STEPS[i]} data-reveal style={{ '--d': `${i * 90}ms` }}>
              <span className="ritual-num">{RITUAL_STEPS[i]}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* --------------------------------------------------- prediction wall */}
      <section className="section wall-section" ref={wallRef} aria-labelledby="wall-h">
        <header className="section-head">
          <span className="eyebrow" data-reveal>{t('landing.wall.eyebrow')}</span>
          <h2 id="wall-h" data-reveal style={{ '--d': '60ms' }}>
            {t('landing.wall.title')}
          </h2>
          <p className="section-lede" data-reveal style={{ '--d': '120ms' }}>
            {t('landing.wall.lede')}
          </p>
        </header>

        <div className="wall" data-reveal aria-hidden="true">
          {wallColumns.map((col, ci) => (
            <div className="wall-col" key={ci} data-parallax={ci === 1 ? '-2.2' : '1.5'}>
              {col.map((p) => (
                <figure className={`prediction-card${p.rarity ? ` tier-${p.rarity}` : ''}`} key={p.text}>
                  <blockquote>{p.text}</blockquote>
                  {p.rarity ? (
                    <figcaption className={`prediction-rarity tier-${p.rarity}`}>
                      {t(`landing.rarity.${p.rarity}`)}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          ))}
          <div className="wall-fade" />
        </div>
      </section>

      {/* ------------------------------------------------------------ cups */}
      <section className="section cups-section" ref={cupsRef} aria-labelledby="cups-h">
        <header className="section-head">
          <span className="eyebrow" data-reveal>{t('landing.cups.eyebrow')}</span>
          <h2 id="cups-h" data-reveal style={{ '--d': '60ms' }}>
            {t('landing.cups.title')}
          </h2>
          <p className="section-lede" data-reveal style={{ '--d': '120ms' }}>
            {t('landing.cups.lede')}
          </p>
        </header>

        <ul className="cup-grid">
          {showcase.map((cup, i) => (
            <li key={cup.id} data-reveal style={{ '--d': `${(i % 4) * 70}ms` }}>
              <CupShape cup={cup} />
              <div className="cup-meta">
                <h3>{cup.name}</h3>
                <p className="cup-move">{t(`landing.moves.${cup.id}`)}</p>
              </div>
              <span className={`cup-tier tier-${cup.tier}`}>
                {cup.price} {t('landing.rarity.points')}
              </span>
            </li>
          ))}
        </ul>

        <ul className="rarity-ladder" data-reveal>
          {RARITY.map((r) => (
            <li key={r.tier} className={`tier-${r.tier}`}>
              <span className="rarity-dot" aria-hidden="true" />
              <strong>{t(`landing.rarity.${r.labelKey}`)}</strong>
              <span>
                {r.price} {t('landing.rarity.points')}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------------------------------------------------- points */}
      <section className="section points-section" ref={pointsRef} aria-labelledby="points-h">
        <div className="split">
          <div className="split-copy">
            <span className="eyebrow" data-reveal>{t('landing.points.eyebrow')}</span>
            <h2 id="points-h" data-reveal style={{ '--d': '60ms' }}>
              {t('landing.points.title')}
            </h2>
            <p data-reveal style={{ '--d': '120ms' }}>
              {t('landing.points.body1')}
            </p>
            <p data-reveal style={{ '--d': '160ms' }}>
              {t('landing.points.body2')}
            </p>
          </div>

          <ul className="earn-list" data-reveal style={{ '--d': '120ms' }}>
            {(dict.landing?.points?.earn ?? []).map((label, i) => (
              <li key={label}>
                <span>{label}</span>
                <strong>{EARN_VALUES[i]}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --------------------------------------------------------- friends */}
      <section className="section friends-section" ref={friendsRef} aria-labelledby="friends-h">
        <div className="friends-card" data-reveal>
          <div className="friends-copy">
            <span className="eyebrow eyebrow-dark">{t('landing.friends.eyebrow')}</span>
            <h2 id="friends-h">{t('landing.friends.title')}</h2>
            <p>{t('landing.friends.body')}</p>
            <p className="friends-note">{t('landing.friends.note')}</p>
          </div>

          <div className="friends-art" aria-hidden="true">
            {['ribbed', 'fincan', 'boba'].map((id, i) => {
              const cup = CUPS.find((c) => c.id === id)
              return (
                <div className="friends-disc" key={id} data-parallax={i === 1 ? '-1.4' : '1.2'}>
                  <CupDisc art={cup.art} ink={cup.ink} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- features */}
      <section className="section features-section" ref={featuresRef} aria-labelledby="features-h">
        <header className="section-head">
          <span className="eyebrow" data-reveal>{t('landing.features.eyebrow')}</span>
          <h2 id="features-h" data-reveal style={{ '--d': '60ms' }}>
            {t('landing.features.title')}
          </h2>
        </header>

        <ul className="feature-grid">
          {(dict.landing?.features?.items ?? []).map((f, i) => (
            <li key={f.title} data-reveal style={{ '--d': `${(i % 3) * 80}ms` }}>
              <Icon name={FEATURE_ICONS[i]} />
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------------------- FAQ */}
      <section className="section faq-section" ref={faqRef} aria-labelledby="faq-h">
        <header className="section-head">
          <span className="eyebrow" data-reveal>{t('landing.faq.eyebrow')}</span>
          <h2 id="faq-h" data-reveal style={{ '--d': '60ms' }}>
            {t('landing.faq.title')}
          </h2>
        </header>

        <div className="faq-list">
          {faqItems.map((item, i) => (
            <details key={item.q} data-reveal style={{ '--d': `${(i % 4) * 60}ms` }}>
              <summary>
                <span>{item.q}</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    d="M6 9.5 12 15l6-5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>

        <p className="faq-more" data-reveal>
          {t('landing.faq.more')} <Link to="/contact">{t('landing.faq.moreLink')}</Link>{' '}
          {t('landing.faq.moreTail')}
        </p>
      </section>

      {/* ------------------------------------------------------------- CTA */}
      <section className="section cta-section" ref={ctaRef}>
        <div className="cta-card" data-reveal>
          <div className="cta-glow" data-parallax="1.3" aria-hidden="true" />
          <h2>{t('landing.cta.title')}</h2>
          <p>{t('landing.cta.body')}</p>
          <StoreButtons tone="dark" note={false} />
        </div>
      </section>
    </div>
  )
}

export default Landing
