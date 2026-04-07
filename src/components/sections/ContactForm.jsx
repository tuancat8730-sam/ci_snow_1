import { useState } from 'react'
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import { useContactForm } from '../../api/hooks'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

const INITIAL_FIELDS = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

const SERVICE_OPTIONS = [
  'Residential Snow Removal',
  'Commercial Snow Removal',
  'Walkway & Pathway Clearing',
  'Emergency Snow Removal',
  'Roof Snow Removal',
  'De-icing & Sand Application',
  'Other / Not Sure',
]

export default function ContactForm() {
  const [fields, setFields] = useState(INITIAL_FIELDS)
  const { loading, success, error, submit, reset } = useContactForm()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await submit(fields)
  }

  const handleReset = () => {
    setFields(INITIAL_FIELDS)
    reset()
  }

  return (
    <section className="section-contact-form" id="contact-form">
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <ScrollReveal>
              <SectionHeader
                label="Get a Free Quote"
                title="Request Your Free Estimate"
                subtitle="Fill out the form below and we'll get back to you within a few hours."
                light
              />
            </ScrollReveal>

            {success ? (
              <ScrollReveal>
                <div className="contact-success">
                  <FaCheckCircle className="success-icon" />
                  <h4>Message Sent!</h4>
                  <p>Thanks for reaching out. We'll contact you shortly to confirm your service details.</p>
                  <button className="btn btn-outline-light rounded-pill px-4" onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              </ScrollReveal>
            ) : (
              <ScrollReveal>
                <form className="contact-form-card" onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="cf-name" className="form-label">Full Name *</label>
                      <input
                        id="cf-name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="John Smith"
                        value={fields.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cf-email" className="form-label">Email Address *</label>
                      <input
                        id="cf-email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="john@example.com"
                        value={fields.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cf-phone" className="form-label">Phone Number</label>
                      <input
                        id="cf-phone"
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="(780) 555-0100"
                        value={fields.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cf-service" className="form-label">Service Needed</label>
                      <select
                        id="cf-service"
                        name="service"
                        className="form-select"
                        value={fields.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service...</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="cf-message" className="form-label">Message *</label>
                      <textarea
                        id="cf-message"
                        name="message"
                        className="form-control"
                        rows={4}
                        placeholder="Tell us about your property and any specific requirements..."
                        value={fields.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {error && (
                      <div className="col-12">
                        <div className="alert alert-danger py-2 mb-0">{error}</div>
                      </div>
                    )}

                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-light rounded-pill px-5 fw-bold"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="me-2" />
                            Send My Request
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
