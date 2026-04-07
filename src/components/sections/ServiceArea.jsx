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

        <ScrollReveal>
          <div className="service-area-grid">
            {SERVICE_AREAS.map((area) => (
              <div className="service-area-chip" key={area}>
                <FaMapMarkerAlt className="area-pin" />
                {area}
              </div>
            ))}
          </div>
        </ScrollReveal>

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
