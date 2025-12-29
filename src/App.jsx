import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import ContactSupport from './pages/ContactSupport'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import './App.css'

function Navigation() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          MW
        </Link>
        <div className="nav-links">
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact Support
          </Link>
          <Link 
            to="/privacy" 
            className={location.pathname === '/privacy' ? 'active' : ''}
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms" 
            className={location.pathname === '/terms' ? 'active' : ''}
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router>
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
      </div>
    </Router>
  )
}

export default App

