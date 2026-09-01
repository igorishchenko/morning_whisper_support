import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import ContactSupport from './pages/ContactSupport'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import { LogoMark } from './components/Logo'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { useTranslation } from './i18n'
import { STORE } from './data/landing'
import './App.css'

const SUPPORT_EMAIL = 'ischenko.vadyus@gmail.com'

function Navigation() {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const items = [
    { to: '/', label: t('nav.home') },
    { to: '/contact', label: t('nav.support') },
    { to: '/privacy', label: t('nav.privacy') },
    { to: '/terms', label: t('nav.terms') },
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <LogoMark />
          <span className="logo-word">Turn the Cup</span>
        </Link>

        <div className="nav-links">
          {items.map((item) => (
            <Link key={item.to} to={item.to} className={pathname === item.to ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <LanguageSwitcher />
          <a className="nav-cta" href={STORE.ios} target="_blank" rel="noopener noreferrer">
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <LogoMark />
            <span className="logo-word">Turn the Cup</span>
          </div>
          <p className="footer-tagline">{t('footer.tagline')}</p>
          <div className="footer-stores">
            <a href={STORE.ios} target="_blank" rel="noopener noreferrer">
              {t('footer.appStore')}
            </a>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/">{t('footer.home')}</Link>
          <Link to="/contact">{t('footer.contact')}</Link>
          <Link to="/privacy">{t('footer.privacy')}</Link>
          <Link to="/terms">{t('footer.terms')}</Link>
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </div>
      </div>
      <div className="footer-legal">
        {t('footer.legal')} © {new Date().getFullYear()} {t('footer.rights')}
      </div>
    </footer>
  )
}

/**
 * The landing page runs full-bleed — it manages its own section widths so the
 * hero washes and the dark sheets can reach the viewport edge. Every other
 * route keeps the centred document column.
 */
function Main() {
  const { pathname } = useLocation()
  const flush = pathname === '/'

  return (
    <main id="content" className={`main-content${flush ? ' main-content-flush' : ''}`}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactSupport />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
      </Routes>
    </main>
  )
}

function App() {
  const { t } = useTranslation()
  // Base path from Vite: '/' locally, '/morning_whisper_support/' on GitHub Pages.
  const basename = import.meta.env.BASE_URL || '/'

  return (
    <Router basename={basename}>
      <div className="app">
        <a className="skip-link" href="#content">
          {t('nav.skip')}
        </a>
        <Navigation />
        <Main />
        <Footer />
      </div>
    </Router>
  )
}

export default App
