import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogoMark } from '../components/Logo'
import './Page.css'

const SUPPORT_EMAIL = 'ischenko.vadyus@gmail.com'

function ContactSupport() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const baseApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
      const apiUrl = `${baseApiUrl}/contact`

      // No backend configured in production — fail loudly with the email instead.
      if (
        import.meta.env.PROD &&
        (!import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL.includes('your-api-domain'))
      ) {
        throw new Error(`Backend API is not configured. Please email us directly at ${SUPPORT_EMAIL}`)
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 8000)
    } catch (err) {
      console.error('Email sending error:', err)

      let errorMessage = 'We could not send that. '
      if (err.message && err.message.includes('Backend API is not configured')) {
        errorMessage += err.message
      } else if (err.message && err.message.includes('JSON')) {
        errorMessage += `The support server is not responding correctly. Please email us directly at ${SUPPORT_EMAIL}`
      } else if (err.message && (err.message.includes('405') || err.message.includes('404'))) {
        errorMessage += `The support server is unavailable. Please email us directly at ${SUPPORT_EMAIL}`
      } else {
        errorMessage += err.message || `Please try again, or email us directly at ${SUPPORT_EMAIL}`
      }

      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page">
      <header className="page-hero">
        <span className="eyebrow">Support</span>
        <h1>How can we help?</h1>
        <p className="page-description">
          Trouble with your cup, your points, a friend request, or a purchase? Send us a note and
          we will get back to you. We read every message ourselves.
        </p>
        <p className="last-updated">
          <strong>Typical reply time:</strong>&nbsp;24–48 hours
        </p>
      </header>

      <div className="contact-grid">
        <div>
          {submitted && (
            <div className="success-message" role="status">
              Thanks — your message is on its way. We will reply to the email address you gave us.
            </div>
          )}

          {error && (
            <div className="error-message" role="alert">
              {error}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Points missing after a purchase"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us what happened. If it is about a purchase, the date and the pack you bought help a lot."
              />
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Sending…' : 'Send message'}
            </button>

            <p className="form-note">
              We use what you send only to answer you — see the{' '}
              <Link to="/privacy">Privacy Policy</Link>.
            </p>
          </form>
        </div>

        <aside>
          <div className="info-card">
            <div className="footer-brand" style={{ marginBottom: 'var(--space-4)' }}>
              <LogoMark />
            </div>
            <h2>Reach us directly</h2>
            <ul>
              <li>
                Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              </li>
              <li>Replies usually within 24–48 hours</li>
              <li>English, Spanish, French and Ukrainian</li>
            </ul>
          </div>

          <div className="info-card">
            <h2>Common questions</h2>

            <div className="faq-item">
              <h3>I bought points and they never arrived</h3>
              <p>
                Reopen the app while online — verification usually completes on its own. If it does
                not, email us with the purchase date and pack and we will credit it manually.
              </p>
            </div>

            <div className="faq-item">
              <h3>I want a refund</h3>
              <p>
                Refunds are handled by Apple and Google, not by us. Use{' '}
                <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
                  reportaproblem.apple.com
                </a>{' '}
                or your Google Play order history.
              </p>
            </div>

            <div className="faq-item">
              <h3>Someone is bothering me</h3>
              <p>
                Block them from their profile — it stops all interaction immediately — and report
                them. We review every report and act within 24 hours.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do I delete my account?</h3>
              <p>
                In the app: <strong>Settings → Delete account</strong>. For a full erasure of the
                underlying account record, email us and we will complete it within 30 days.
              </p>
            </div>

            <div className="faq-item">
              <h3>Lost my history after reinstalling</h3>
              <p>
                Sign in with the same Apple or Google account and your cups, points and history come
                back. History created while signed out lives only on that device.
              </p>
            </div>
          </div>

          <div className="info-card">
            <h2>Legal</h2>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default ContactSupport
