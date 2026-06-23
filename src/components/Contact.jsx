import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import contactus from '../assets/Image/contactus.png'

// ✅ Replace these with your EmailJS credentials
const SERVICE_ID  = 'service_2tif7pc'
const TEMPLATE_ID = 'template_hx2kb4i'
const PUBLIC_KEY  = '30sSi4YosPEiRSsc1'

const Contact = () => {
  const [form, setForm]     = useState({ email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('') // 'sending' | 'success' | 'error'

  const validate = () => {
    const newErrors = {}
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.'
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required.'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.'
    }
    return newErrors
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    // Clear error on type
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_email: form.email,
          message:    form.message,
          to_name:    'Keerthi',
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setForm({ email: '', message: '' })
      setErrors({})
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-illustration">
            <img src={contactus} alt="Contact" />
          </div>

          <div className="contact-form-wrap">
            <h2 className="contact-title">Contact Me!</h2>

            {/* Success / Error banners */}
            {status === 'success' && (
              <div className="alert alert-success">
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-error">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                className={errors.message ? 'input-error' : ''}
              />
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            <button
              className="btn-primary contact-btn"
              onClick={handleSubmit}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
