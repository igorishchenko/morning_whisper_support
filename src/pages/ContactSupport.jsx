import React, { useState } from 'react'
import './Page.css'

function ContactSupport() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // API endpoint - adjust if your server runs on a different port
      // In production, VITE_API_URL should be set to your backend URL
      const baseApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
      const apiUrl = `${baseApiUrl}/contact`
      
      // Check if we're in production without a backend URL
      if (import.meta.env.PROD && (!import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL.includes('your-api-domain'))) {
        throw new Error('Backend API is not configured. Please contact us directly at ischenko.vadyus@gmail.com')
      }
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error('Email sending error:', err)
      
      // Provide helpful error messages
      let errorMessage = 'Failed to send message. '
      if (err.message && err.message.includes('Backend API is not configured')) {
        errorMessage += err.message
      } else if (err.message && err.message.includes('JSON')) {
        errorMessage += 'The backend server is not responding correctly. Please email us directly at ischenko.vadyus@gmail.com'
      } else if (err.message && (err.message.includes('405') || err.message.includes('404'))) {
        errorMessage += 'The backend API is not configured. Please email us directly at ischenko.vadyus@gmail.com'
      } else {
        errorMessage += err.message || 'Please try again or email us directly at ischenko.vadyus@gmail.com'
      }
      
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page">
      <h1>Contact Support</h1>
      <p className="page-description">
        Have a question or need assistance? We're here to help! Fill out the form below
        and we'll get back to you as soon as possible.
      </p>

      {submitted && (
        <div className="success-message">
          Thank you for contacting us! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      {error && (
        <div className="error-message">
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
            placeholder="your.email@example.com"
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
            placeholder="What is this regarding?"
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
            placeholder="Please describe your issue or question..."
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="contact-info">
        <h2>Other Ways to Reach Us</h2>
        <p>You can also reach us through:</p>
        <ul>
          <li>Email: <a href="mailto:ischenko.vadyus@gmail.com">ischenko.vadyus@gmail.com</a></li>
          <li>Response time: We typically respond within 24-48 hours</li>
        </ul>
      </div>
    </div>
  )
}

export default ContactSupport

