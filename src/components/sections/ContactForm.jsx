import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaArrowRight, FaSpinner } from 'react-icons/fa'
import { useContactForm } from '../../api/hooks'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

const HOW_HEAR_OPTIONS = [
  'Web Search',
  'Referral',
  'Yellow Pages',
  'Online Ad',
  'Other',
]

const CONTACT_TYPE_OPTIONS = ['Phone', 'Email']

const CONTACT_INFO = [
  { icon: <FaPhone />, title: 'Phone', value: '780-989-3987', href: 'tel:7809893987' },
  { icon: <FaEnvelope />, title: 'Email', value: 'snow@capitalirrigation.com', href: 'mailto:snow@capitalirrigation.com' },
  { icon: <FaMapMarkerAlt />, title: 'Location', value: '4505 97 St NW, Edmonton, AB T6E 5Y8', href: null },
  { icon: <FaClock />, title: 'Hours', value: 'Emergency service: 24/7 - Office: Mon-Fri 9am-4pm', href: null },
]

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  postal: '',
  cellPhone: '',
  workPhone: '',
  homePhone: '',
  email: '',
  contactType: 'Email',
  howHear: [],
  comments: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const { loading, success, error, submit, reset } = useContactForm()

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 10)
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
  }

  const PHONE_FIELDS = ['cellPhone', 'workPhone', 'homePhone']

  const handleChange = (e) => {
    const { name, value } = e.target
    const formatted = PHONE_FIELDS.includes(name) ? formatPhone(value) : value
    setForm((prev) => ({ ...prev, [name]: formatted }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleCheckbox = (option) => {
    setForm((prev) => {
      const already = prev.howHear.includes(option)
      return {
        ...prev,
        howHear: already
          ? prev.howHear.filter((v) => v !== option)
          : [...prev.howHear, option],
      }
    })
  }

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim()) e.lastName = 'Last name is required'
    if (!form.address.trim()) e.address = 'Address is required'
    if (!form.city.trim()) e.city = 'City is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.cellPhone.trim() && !form.workPhone.trim() && !form.homePhone.trim())
      e.cellPhone = 'At least one phone number is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    const payload = {
      subject: 'New Quote request from the Snow Website',
      first_name: form.firstName,
      last_name: form.lastName,
      address: form.address,
      city: form.city,
      postal: form.postal,
      cell_phone: form.cellPhone,
      work_phone: form.workPhone,
      home_phone: form.homePhone,
      contact_method: form.contactType === 'Email' ? 'E' : 'P',
      email: form.email,
      web_search: form.howHear.includes('Web Search'),
      referral: form.howHear.includes('Referral'),
      yellow_pages: form.howHear.includes('Yellow Pages'),
      online_ad: form.howHear.includes('Online Ad'),
      other: form.howHear.includes('Other'),
      comments: form.comments,
    }

    await submit(payload)
  }

  const handleReset = () => {
    setForm(EMPTY_FORM)
    setErrors({})
    reset()
  }

  return (
    <section id="contact-form" className="section-contact">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="Get a Free Quote"
            title="Request Your Free Estimate"
            subtitle="Fill out the form below and we'll get back to you within a few hours."
            light
          />
        </ScrollReveal>

        <div className="row g-5 align-items-start">
          {/* Left: contact info + map */}
          <div className="col-lg-4">
            <ScrollReveal direction="left">
              {CONTACT_INFO.map((item) => (
                <div key={item.title} className="contact-info-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <p className="contact-info-title">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="contact-info-value" style={{ color: 'inherit', textDecoration: 'none' }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact-info-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div style={{ marginTop: '1.5rem', borderRadius: '0.75rem', overflow: 'hidden' }}>
                <iframe
                  title="Capital Snow Removal Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.7!2d-113.4955!3d53.4903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224a8b5f1b3d%3A0x1!2s4505+97+St+NW%2C+Edmonton%2C+AB+T6E+5Y8!5e0!3m2!1sen!2sca!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: form */}
          <div className="col-lg-8">
            <ScrollReveal direction="right">
              <div className="contact-form-card">

                {success ? (
                  <div className="text-center py-4">
                    <FaCheckCircle size={52} color="var(--color-primary)" style={{ marginBottom: 16 }} />
                    <h4 className="fw-bold" style={{ color: 'var(--color-dark-text)' }}>
                      Thank You, {form.firstName}!
                    </h4>
                    <p style={{ color: 'var(--color-gray-text)' }}>
                      We've received your request and will be in touch within 24 hours to confirm your free estimate.
                    </p>
                    <button
                      className="btn btn-outline-success mt-3 rounded-pill px-4"
                      onClick={handleReset}
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">

                      {/* First Name / Last Name */}
                      <div className="col-md-6">
                        <label className="form-label">First Name *</label>
                        <input
                          type="text" name="firstName"
                          className={`form-control${errors.firstName ? ' is-invalid' : ''}`}
                          placeholder="John" value={form.firstName} onChange={handleChange}
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last Name *</label>
                        <input
                          type="text" name="lastName"
                          className={`form-control${errors.lastName ? ' is-invalid' : ''}`}
                          placeholder="Smith" value={form.lastName} onChange={handleChange}
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                      </div>

                      {/* Address / City */}
                      <div className="col-md-8">
                        <label className="form-label">Address *</label>
                        <input
                          type="text" name="address"
                          className={`form-control${errors.address ? ' is-invalid' : ''}`}
                          placeholder="123 Main St" value={form.address} onChange={handleChange}
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">City *</label>
                        <input
                          type="text" name="city"
                          className={`form-control${errors.city ? ' is-invalid' : ''}`}
                          placeholder="Edmonton" value={form.city} onChange={handleChange}
                        />
                        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                      </div>

                      {/* Postal */}
                      <div className="col-md-4">
                        <label className="form-label">Postal</label>
                        <input
                          type="text" name="postal" className="form-control"
                          placeholder="T5A 0A1" value={form.postal} onChange={handleChange}
                        />
                      </div>

                      {/* Phones */}
                      <div className="col-md-4">
                        <label className="form-label">
                          Cell Phone {!form.workPhone && !form.homePhone && '*'}
                        </label>
                        <input
                          type="tel" name="cellPhone"
                          className={`form-control${errors.cellPhone ? ' is-invalid' : ''}`}
                          placeholder="XXX-XXX-XXXX" value={form.cellPhone} onChange={handleChange}
                        />
                        {errors.cellPhone && <div className="invalid-feedback">{errors.cellPhone}</div>}
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Work Phone</label>
                        <input
                          type="tel" name="workPhone" className="form-control"
                          placeholder="XXX-XXX-XXXX" value={form.workPhone} onChange={handleChange}
                        />
                      </div>

                      {/* Home Phone / Email */}
                      <div className="col-md-4">
                        <label className="form-label">Home Phone</label>
                        <input
                          type="tel" name="homePhone" className="form-control"
                          placeholder="XXX-XXX-XXXX" value={form.homePhone} onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-8">
                        <label className="form-label">Email *</label>
                        <input
                          type="email" name="email"
                          className={`form-control${errors.email ? ' is-invalid' : ''}`}
                          placeholder="john@example.com" value={form.email} onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>

                      {/* How to contact */}
                      <div className="col-12">
                        <label className="form-label">How should we contact you?</label>
                        <select name="contactType" className="form-select" value={form.contactType} onChange={handleChange}>
                          {CONTACT_TYPE_OPTIONS.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </div>

                      {/* How did you hear */}
                      <div className="col-12">
                        <label className="form-label">How did you hear about us?</label>
                        <div className="d-flex flex-wrap gap-3 mt-1">
                          {HOW_HEAR_OPTIONS.map((opt) => (
                            <div className="form-check" key={opt}>
                              <input
                                className="form-check-input" type="checkbox" id={`hear-${opt}`}
                                checked={form.howHear.includes(opt)}
                                onChange={() => handleCheckbox(opt)}
                              />
                              <label className="form-check-label" htmlFor={`hear-${opt}`}>{opt}</label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Comments */}
                      <div className="col-12">
                        <label className="form-label">Comments</label>
                        <textarea
                          name="comments" className="form-control" rows="4"
                          placeholder="Tell us about your property, snow removal needs, or any specific concerns..."
                          value={form.comments} onChange={handleChange}
                        />
                      </div>

                      {/* API error */}
                      {error && (
                        <div className="col-12">
                          <div className="alert alert-danger py-2 mb-0" style={{ fontSize: '0.9rem' }}>
                            {error}
                          </div>
                        </div>
                      )}

                      {/* Submit */}
                      <div className="col-12">
                        <button type="submit" className="btn-submit btn" disabled={loading}>
                          {loading ? (
                            <><FaSpinner className="spin me-2" />Sending...</>
                          ) : (
                            <>Send My Free Quote Request <FaArrowRight style={{ marginLeft: 6 }} /></>
                          )}
                        </button>
                      </div>

                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
