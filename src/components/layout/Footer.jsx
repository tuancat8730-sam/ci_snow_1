import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { SERVICES } from '../../data/services'

const PAGE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Get a Free Quote', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Band */}
      <div className="footer-cta-band">
        <div className="container-xl d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div>
            <h3 className="footer-cta-title">Ready to Clear the Way?</h3>
            <p className="footer-cta-sub mb-0">
              Join 200+ Edmonton homeowners and businesses who trust Capital Snow Removal.
            </p>
          </div>
          <a
            href="tel:7809893987"
            className="btn btn-lg d-inline-flex align-items-center gap-2"
            style={{
              background: 'var(--color-accent)',
              color: '#0D1B2E',
              fontWeight: 700,
              borderRadius: '2rem',
              padding: '0.6rem 1.6rem',
            }}
          >
            <FaPhone size={14} /> Call 780-989-3987
          </a>
        </div>
      </div>

      <div className="container-xl">
        <div className="row g-5">
          {/* Col 1: Brand */}
          <div className="col-lg-3 col-md-6">
            <Link to="/" className="footer-brand d-flex align-items-center gap-2">
              <img src={`${import.meta.env.BASE_URL}images/Logo.png`} alt="Capital Snow logo" className="footer-logo-img" />
              <span>Capital <span>Snow Removal</span></span>
            </Link>
            <p className="footer-tagline">
              Fast, reliable snow removal for residential and commercial properties
              across Edmonton and the surrounding area - 24/7.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">Our Services</h6>
            <ul className="footer-links">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <span>{s.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              {PAGE_LINKS.map((p) => (
                <li key={p.to + p.label}>
                  <span>{p.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="col-lg-4 col-md-6">
            <h6 className="footer-heading">Contact Us</h6>
            <div className="footer-contact-item">
              <FaPhone />
              <a href="tel:7809893987" style={{ color: 'inherit', textDecoration: 'none' }}>
                780-989-3987
              </a>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope />
              <a
                href="mailto:customerservice@capitalirrigation.com"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                customerservice@capitalirrigation.com
              </a>
            </div>
            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>4505 97 St NW, Edmonton, AB T6E 5Y8</span>
            </div>
            <div className="footer-contact-item">
              <FaClock />
              <span>Emergency service: 24/7 · Office: Mon–Fri 9am–4pm</span>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <a
                href="https://capitalirrigation.com/payment/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.9rem' }}
              >
                Pay Invoice Online &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Capital Snow Removal. All Rights Reserved.</span>
          <span>
            <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
            {' · '}
            <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
