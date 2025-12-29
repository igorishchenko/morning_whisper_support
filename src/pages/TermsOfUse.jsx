import React from 'react'
import './Page.css'

function TermsOfUse() {
  return (
    <div className="page">
      <h1>Terms of Use</h1>
      <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="policy-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Morning Whisper, you accept and agree to be bound by the terms
          and provision of this agreement. If you do not agree to these terms, please do not
          use our service.
        </p>
      </section>

      <section className="policy-section">
        <h2>2. Description of Service</h2>
        <p>
          Morning Whisper provides a platform for [describe your service]. We reserve the right
          to modify, suspend, or discontinue any part of the service at any time with or without
          notice.
        </p>
      </section>

      <section className="policy-section">
        <h2>3. User Accounts</h2>
        <p>When you create an account with us, you must provide information that is:</p>
        <ul>
          <li>Accurate, complete, and current</li>
          <li>Not misleading or fraudulent</li>
        </ul>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials
          and for all activities that occur under your account.
        </p>
      </section>

      <section className="policy-section">
        <h2>4. Acceptable Use</h2>
        <p>You agree not to use the service to:</p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe upon the rights of others</li>
          <li>Transmit any harmful, offensive, or inappropriate content</li>
          <li>Interfere with or disrupt the service or servers</li>
          <li>Attempt to gain unauthorized access to any part of the service</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>5. Intellectual Property</h2>
        <p>
          The service and its original content, features, and functionality are owned by Morning
          Whisper and are protected by international copyright, trademark, patent, trade secret,
          and other intellectual property laws.
        </p>
      </section>

      <section className="policy-section">
        <h2>6. Limitation of Liability</h2>
        <p>
          In no event shall Morning Whisper, nor its directors, employees, partners, agents,
          suppliers, or affiliates, be liable for any indirect, incidental, special, consequential,
          or punitive damages, including without limitation, loss of profits, data, use, goodwill,
          or other intangible losses, resulting from your use of the service.
        </p>
      </section>

      <section className="policy-section">
        <h2>7. Termination</h2>
        <p>
          We may terminate or suspend your account and access to the service immediately, without
          prior notice or liability, for any reason whatsoever, including without limitation if
          you breach the Terms of Use.
        </p>
      </section>

      <section className="policy-section">
        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms of Use
          at any time. If a revision is material, we will provide at least 30 days notice prior
          to any new terms taking effect.
        </p>
      </section>

      <section className="policy-section">
        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be interpreted and governed by the laws of [Your Jurisdiction],
          without regard to its conflict of law provisions.
        </p>
      </section>

      <section className="policy-section">
        <h2>10. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Use, please contact us at:
        </p>
        <p>
          Email: ischenko.vadyus@gmail.com<br />
          Or visit our <a href="/contact">Contact Support</a> page.
        </p>
      </section>
    </div>
  )
}

export default TermsOfUse

