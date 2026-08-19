import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import ContactSupport from './pages/ContactSupport'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import { LogoMark } from './components/Logo'
import './App.css'

const NAV_ITEMS = [
  { to: '/contact', label: 'Support' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Use' },
]

function Navigation() {
  const location = useLocation()
  const current = location.pathname === '/' ? '/contact' : location.pathname

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <LogoMark />
          <span className="logo-word">Turn the Cup</span>
        </Link>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={current === item.to ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <LogoMark />
            <span className="logo-word">Turn the Cup</span>
          </div>
          <p className="footer-tagline">
            Finish your coffee, turn the cup, read the whisper on its base.
            Support and legal documents for the iOS and Android app.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/contact">Contact Support</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <a href="mailto:ischenko.vadyus@gmail.com">ischenko.vadyus@gmail.com</a>
        </div>
      </div>
      <div className="footer-legal">
        Turn the Cup is an entertainment app. Whispers are written for amusement
        and are not advice. © {new Date().getFullYear()} Turn the Cup.
      </div>
    </footer>
  )
}

function App() {
  // Base path from Vite: '/' locally, '/morning_whisper_support/' on GitHub Pages.
  const basename = import.meta.env.BASE_URL || '/'

  return (
    <Router basename={basename}>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ContactSupport />} />
            <Route path="/contact" element={<ContactSupport />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
