import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaPhone, FaSnowflake } from 'react-icons/fa'
import { useScrollPosition } from '../../hooks/useScrollPosition'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const scrollY = useScrollPosition()
  const scrolled = scrollY > 80
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="navbar-topbar">
        <div className="container-xl d-flex align-items-center justify-content-center gap-2">
          <FaSnowflake style={{ fontSize: '0.8rem' }} />
          <span>Fast, reliable snow removal — 24/7 emergency service available.</span>
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
            <img src="/images/Logo.png" alt="Capital Snow logo" className="navbar-logo-img" />
            <span>Capital <span>Snow</span></span>
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
                <li key={link.to} className="nav-item">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
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
