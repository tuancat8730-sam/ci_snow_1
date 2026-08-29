import { FaCheck, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { PRICING_TIERS } from '../../data/pricing'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

function PricingCard({ tier }) {
  return (
    <div className={`pricing-card${tier.isHighlighted ? ' highlighted' : ''}`}>
      {tier.isHighlighted && <span className="popular-badge">Most Popular</span>}
      <p className="pricing-name">{tier.name}</p>

      <p className="pricing-note">
        {tier.disclaimer || 'Best value - discounted price available'}
      </p>

      <ul className="pricing-features">
        {tier.features.map((f) => (
          <li key={f}>
            <FaCheck className="check" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`w-100 btn fw-semibold py-2 rounded-pill${
          tier.isHighlighted ? ' btn-primary text-white' : ' btn-outline-primary'
        }`}
      >
        {tier.ctaText} <FaArrowRight size={12} />
      </Link>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-pricing">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="Transparent Pricing"
            title="Simple Snow Removal Packages"
            subtitle="No hidden fees. No surprise charges. Just reliable snow removal at fair prices."
          />
        </ScrollReveal>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <ScrollReveal>
              <PricingCard tier={PRICING_TIERS[0]} />
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal>
          <p className="text-center mt-4" style={{ color: 'var(--color-gray-text)', fontSize: '0.9rem' }}>
            * Prices vary based on property size.{' '}
            <Link
              to="/contact"
              className="fw-semibold"
              style={{ color: 'var(--color-primary)' }}
            >
              Contact us for a custom quote.
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
