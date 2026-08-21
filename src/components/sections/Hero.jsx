import { FaArrowRight, FaPhone, FaShieldAlt, FaAward, FaCheckCircle } from 'react-icons/fa'

const TRUST_BADGES = [
  { icon: <FaShieldAlt />, value: 'Licensed & Insured' },
  { icon: <FaAward />, value: 'Quality Guaranteed' },
  { icon: <FaCheckCircle />, value: 'Same-Day Service' },
]

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/Hero.jpg)` }}
    >
      <div className="hero-overlay" />

      <div className="container-xl hero-content">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="hero-title text-white animate-fade-in-down animate-fade-in-down-1">
              Edmonton and Area Residential{' '}
              <span style={{ color: 'var(--color-accent)' }}>Snow Removal</span>{' '}
              Service
            </h1>
            <p className="hero-subtitle animate-fade-in-down animate-fade-in-down-2">
              Homegrown in Edmonton and providing residential snow removal since 2002.
              Licensed, fully insured, and ready when the next storm hits.
            </p>

            <div className="hero-cta-group animate-fade-in-down animate-fade-in-down-3">
              <button className="btn-hero-primary" onClick={scrollToContact}>
                Get Free Quote <FaArrowRight />
              </button>
              <a href="tel:7809893987" className="btn-hero-secondary">
                <FaPhone size={14} /> Call 780-989-3987
              </a>
            </div>

            <div className="hero-trust-row animate-fade-in-down animate-fade-in-down-4">
              {TRUST_BADGES.map((b) => (
                <div className="trust-badge" key={b.value}>
                  <span className="trust-icon">{b.icon}</span>
                  <span>{b.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <svg className="hero-wave" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="white">
        <path d="M0,40 C360,70 1080,10 1440,40 L1440,60 L0,60 Z" />
      </svg>
    </section>
  )
}
