import { useState } from 'react'
import { submitContact } from '../services/api.js'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    setStatus(null)

    try {
      const response = await submitContact({ name, email, message })
      setStatus({ type: 'success', text: response.message })
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      setStatus({ type: 'error', text: error?.response?.data?.error || 'Unable to send message. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <div className="page-header mb-4">
        <h1 className="page-title">Contact us</h1>
        <p className="page-subtitle">
          Have questions about roles, the application process, or career support? We’re here to help.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="contact-card">
            <h3>Get in touch</h3>
            <p>Email our team for application help, employer questions, and position matches.</p>
            <p>
              <strong>Email:</strong> hello@careerconnect.com
              <br />
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>We aim to respond within one business day.</p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="contact-card">
            <h3>Send a message</h3>

            {status && (
              <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                {status.text}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
