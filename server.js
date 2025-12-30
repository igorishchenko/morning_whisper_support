import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Middleware
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      })
    }

    // Send email using Resend
    // Using onboarding@resend.dev (Resend's test domain - no DNS verification needed)
    // For production with custom domain, set RESEND_FROM_EMAIL environment variable
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
    
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: 'ischenko.vadyus@gmail.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Contact Form Submission

From: ${name} (${email})
Subject: ${subject}

Message:
${message}
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ 
        error: 'Failed to send email. Please try again later.' 
      })
    }

    res.json({ 
      success: true, 
      message: 'Email sent successfully',
      id: data?.id 
    })
  } catch (error) {
    console.error('Server error:', error)
    res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log(`API endpoint: http://localhost:${PORT}/api/contact`)
})

