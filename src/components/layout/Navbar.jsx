import { useState } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { FaPhone, FaSnowflake } from 'react-icons/fa'
import { useScrollPosition } from '../../hooks/useScrollPosition'


const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', sectionId: 'services' },
  { label: 'About', sectionId: 'why-section' },
  { label: 'Contact', sectionId: 'contact-form' },
]

export default function Navbar() {
  const scrollY = useScrollPosition()
  const scrolled = scrollY > 80
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSectionClick = (sectionId) => (event) => {
    event.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      scrollToSection(sectionId)
    } else {
      navigate('/')
      setTimeout(() => scrollToSection(sectionId), 100)
    }
  }

  return (
    <>
      {/* Partnership strip */}
      <div className="navbar-partnership">
        <div className="container-xl">
          <div className="partnership-brand">
            <img src={`${import.meta.env.BASE_URL}images/Logo.png`} alt="Capital Snow Removal" className="partnership-logo" />
            <span className="partnership-brand-text">Capital<br />Snow Removal</span>
          </div>
          <div className="partnership-divider" />
          <span className="partnership-label">In Partnership With</span>
          <div className="partnership-divider" />
          <img src={`${import.meta.env.BASE_URL}images/Salisbury_Logo.jpg`} alt="Salisbury Landscaping" className="partnership-logo" />
        </div>
      </div>

      {/* Top bar */}
      <div className="navbar-topbar">
        <div className="container-xl d-flex align-items-center justify-content-center gap-2">
          <FaSnowflake style={{ fontSize: '0.8rem' }} />
          <span>Fast, reliable snow removal - Reliable 7 day per week snow removal service.</span>
          <a
            href="https://capitalirrigation.com/payment/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-topbar-link"
          >
            Pay Invoice &rarr;
          </a>
        </div>
      </div>

      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-cisnow${scrolled ? ' scrolled' : ''}`}
        aria-label="Main navigation"
      >
        <div className="container-xl">
          {/* Brand */}
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}images/Logo.png`} alt="Capital Snow logo" className="navbar-logo-img" />
            <span>Capital <span>Snow Removal</span></span>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Collapsible */}
          <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`}>
            <ul className="navbar-nav mx-auto gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label} className="nav-item">
                  {link.sectionId ? (
                    <a
                      href="/"
                      className="nav-link"
                      onClick={handleSectionClick(link.sectionId)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                      onClick={() => {
                        setMenuOpen(false)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    >
                      {link.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            {/* Right section */}
            <div className="navbar-right-group">
              <a href="tel:7809893987" className="navbar-phone">
                <FaPhone size={13} />
                780-989-3987
              </a>
              <Link
                to="/contact"
                className="btn-quote"
                onClick={() => setMenuOpen(false)}
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
