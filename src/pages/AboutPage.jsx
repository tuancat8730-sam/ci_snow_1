import {
  FaShieldAlt, FaClock, FaBolt, FaLeaf, FaThumbsUp, FaBuilding,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/ui/SectionHeader'
import ScrollReveal from '../components/ui/ScrollReveal'

const VALUES = [
  { icon: <FaShieldAlt />, title: 'Safety First', desc: 'Every crew member is trained in safe snow removal practices. We carry full liability and WCB coverage on every job.' },
  { icon: <FaClock />, title: 'Always Reliable', desc: 'We show up - every time, on time. Our clients trust us because we have never missed a scheduled service in seven seasons.' },
  { icon: <FaBolt />, title: 'Fast Response', desc: "When a storm hits, we don't wait. Our commercial clients are on a 2-hour SLA; residential routes are cleared same-day." },
  { icon: <FaLeaf />, title: 'Eco-Responsible', desc: 'We use environmentally responsible de-icing products that are safer for pets, children, and your concrete surfaces.' },
  { icon: <FaThumbsUp />, title: '100% Satisfaction', desc: "Not happy? We'll come back and re-do it - free of charge. Your satisfaction is the only metric that matters." },
  { icon: <FaBuilding />, title: 'Local & Proud', desc: "Capital Snow is locally owned and operated in Edmonton. We live here, work here, and we're invested in this community." },
]

export default function AboutPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container-xl text-center">
          <ScrollReveal>
            <p className="page-hero-label">About Us</p>
            <h1 className="page-hero-title">Edmonton's Trusted Snow Removal Team</h1>
            <p className="page-hero-subtitle">
              Family-owned and operated since 2017 - serving homes and businesses across the greater Edmonton area.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story section */}
      <section className="section-about-story py-5">
        <div className="container-xl">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <ScrollReveal direction="left">
                <p className="text-uppercase fw-bold small" style={{ color: 'var(--color-primary)', letterSpacing: '0.08em' }}>Our Story</p>
                <h2 className="fw-bold mb-3" style={{ color: 'var(--color-text-dark)' }}>Built on Reliability</h2>
                <p className="mb-3" style={{ color: 'var(--color-gray-text)', lineHeight: 1.8 }}>
                  Capital Snow started in 2017 with a single truck and a simple promise: show up every time, no excuses.
                  What began as a handful of Edmonton driveways has grown into a team of dedicated crews serving over
                  200 homes and businesses every winter season.
                </p>
                <p className="mb-4" style={{ color: 'var(--color-gray-text)', lineHeight: 1.8 }}>
                  We invest in modern equipment, eco-friendly products, and ongoing training so that every visit - whether
                  after a light dusting or a record-breaking blizzard - meets the same high standard our clients have
                  come to expect.
                </p>
                <Link to="/contact" className="btn btn-primary rounded-pill px-5 fw-semibold">
                  Get a Free Quote
                </Link>
              </ScrollReveal>
            </div>
            <div className="col-lg-6">
              <ScrollReveal direction="right">
                <div className="about-stats-grid">
                  {[
                    { value: '7+', label: 'Years in Business' },
                    { value: '200+', label: 'Happy Clients' },
                    { value: '24/7', label: 'Emergency Service' },
                    { value: '100%', label: 'Satisfaction Guarantee' },
                  ].map((stat) => (
                    <div className="about-stat-card" key={stat.label}>
                      <span className="about-stat-value">{stat.value}</span>
                      <span className="about-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="section-about-values py-5" style={{ background: 'var(--color-light-bg)' }}>
        <div className="container-xl">
          <ScrollReveal>
            <SectionHeader
              label="Our Values"
              title="What Sets Us Apart"
              subtitle="These aren't just words on a page - they're the principles behind every job we do."
            />
          </ScrollReveal>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={Math.min(i + 1, 5)}>
                <div className="col h-100">
                  <div className="benefit-item align-items-start h-100"
                    style={{ background: '#fff', borderRadius: '1rem', padding: '1.75rem', boxShadow: 'var(--shadow-sm)' }}>
                    <div className="benefit-icon">{v.icon}</div>
                    <div>
                      <p className="benefit-title">{v.title}</p>
                      <p className="benefit-desc">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-5 text-center" style={{ background: 'var(--color-primary)' }}>
        <div className="container-xl">
          <ScrollReveal>
            <h2 className="text-white fw-bold mb-3">Ready to Work with Us?</h2>
            <p className="text-white mb-4 opacity-75">Get a free no-obligation quote today. We'd love to earn your trust.</p>
            <Link to="/contact" className="btn btn-light rounded-pill px-5 fw-bold text-primary">
              Request a Free Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
