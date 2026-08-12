import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SERVICE_AREAS } from '../../data/serviceAreas'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

export default function ServiceArea() {
  return (
    <section className="section-service-area">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="Coverage Zone"
            title="Areas We Serve"
            subtitle="We provide snow removal services throughout Edmonton and the surrounding communities."
          />
        </ScrollReveal>

        <div className="row row-cols-1 row-cols-sm-3 g-4 justify-content-center service-area-cards">
          {SERVICE_AREAS.map((area, i) => (
            <ScrollReveal key={area} delay={i + 1}>
              <div className="col">
                <div className="service-area-card text-center h-100">
                  <div className="service-area-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <p className="service-area-name">{area}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center mt-4" style={{ color: 'var(--color-gray-text)', fontSize: '0.9rem' }}>
            Not sure if we cover your area?{' '}
            <Link
              to="/contact"
              className="fw-semibold"
              style={{ color: 'var(--color-primary)' }}
            >
              Contact us to find out.
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
