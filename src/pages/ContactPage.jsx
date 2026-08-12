import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import ContactForm from '../components/sections/ContactForm'
import ScrollReveal from '../components/ui/ScrollReveal'

const CONTACT_INFO = [
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '(780) 555-0199',
    href: 'tel:+17805550199',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'customerservice@capitalirrigation.com',
    href: 'mailto:customerservice@capitalirrigation.com',
  },
  {
    icon: <FaClock />,
    label: 'Hours',
    value: 'Mon–Fri 7am–6pm · Emergency 24/7',
    href: null,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Service Area',
    value: 'Edmonton & Surrounding Communities',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container-xl text-center">
          <ScrollReveal>
            <p className="page-hero-label">Contact Us</p>
            <h1 className="page-hero-title">Get Your Free Quote</h1>
            <p className="page-hero-subtitle">
              Reach out today and we'll get back to you within a few hours with a no-obligation estimate.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-5" style={{ background: 'var(--color-light-bg)' }}>
        <div className="container-xl">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 justify-content-center">
            {CONTACT_INFO.map((item, i) => (
              <ScrollReveal key={item.label} delay={i + 1}>
                <div className="col">
                  <div className="contact-info-card text-center h-100">
                    <div className="contact-info-icon">{item.icon}</div>
                    <p className="contact-info-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="contact-info-value">{item.value}</a>
                    ) : (
                      <p className="contact-info-value">{item.value}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <ContactForm />
    </main>
  )
}
