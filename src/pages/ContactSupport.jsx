import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogoMark } from '../components/Logo'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useTranslation } from '../i18n'
import './Page.css'

const SUPPORT_EMAIL = 'ischenko.vadyus@gmail.com'

function ContactSupport() {
  const { t, locale, dict } = useTranslation()

  useDocumentMeta({
    title: t('contact.meta.title'),
    description: t('contact.meta.description'),
    path: '/contact',
    locale,
  })

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

      let errorMessage = `${t('contact.form.errorLead')} `
      if (err.message && err.message.includes('Backend API is not configured')) {
        errorMessage += `${t('contact.form.errorNotConfigured')} ${SUPPORT_EMAIL}`
      } else if (err.message && err.message.includes('JSON')) {
        errorMessage += `${t('contact.form.errorBadJson')} ${SUPPORT_EMAIL}`
      } else if (err.message && (err.message.includes('405') || err.message.includes('404'))) {
        errorMessage += `${t('contact.form.errorUnavailable')} ${SUPPORT_EMAIL}`
      } else {
        errorMessage += `${t('contact.form.errorGeneric')} ${SUPPORT_EMAIL}`
      }

      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page">
      <header className="page-hero">
        <span className="eyebrow">{t('contact.eyebrow')}</span>
        <h1>{t('contact.title')}</h1>
        <p className="page-description">{t('contact.lede')}</p>
        <p className="last-updated">
          <strong>{t('contact.replyLabel')}</strong>&nbsp;{t('contact.replyValue')}
        </p>
      </header>

      <div className="contact-grid">
        <div>
          {submitted && (
            <div className="success-message" role="status">
              {t('contact.form.success')}
            </div>
          )}

          {error && (
            <div className="error-message" role="alert">
              {error}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.form.name')} *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder={t('contact.form.namePlaceholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.form.email')} *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder={t('contact.form.emailPlaceholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t('contact.form.subject')} *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder={t('contact.form.subjectPlaceholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.form.message')} *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder={t('contact.form.messagePlaceholder')}
              />
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? t('contact.form.sending') : t('contact.form.submit')}
            </button>

            <p className="form-note">
              {t('contact.form.noteLead')}{' '}
              <Link to="/privacy">{t('contact.form.notePrivacy')}</Link>.
            </p>
          </form>
        </div>

        <aside>
          <div className="info-card">
            <div className="footer-brand" style={{ marginBottom: 'var(--space-4)' }}>
              <LogoMark />
            </div>
            <h2>{t('contact.direct.title')}</h2>
            <ul>
              <li>
                {t('contact.direct.email')}{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              </li>
              <li>{t('contact.direct.replies')}</li>
              <li>{t('contact.direct.languages')}</li>
            </ul>
          </div>

          <div className="info-card">
            <h2>{t('contact.faqTitle')}</h2>

            {(dict.contact?.faq ?? []).map((item) => (
              <div className="faq-item" key={item.q}>
                <h3>{item.q}</h3>
                <p>
                  {/* The refund answer is the only one carrying a link; splice it
                      back in around Apple's URL so translators keep plain text. */}
                  {item.a.includes('reportaproblem.apple.com') ? (
                    <>
                      {item.a.split('reportaproblem.apple.com')[0]}
                      <a
                        href="https://reportaproblem.apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        reportaproblem.apple.com
                      </a>
                      {item.a.split('reportaproblem.apple.com')[1]}
                    </>
                  ) : (
                    item.a
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="info-card">
            <h2>{t('contact.legalTitle')}</h2>
            <ul>
              <li><Link to="/privacy">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default ContactSupport
