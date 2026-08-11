import { Link } from 'react-router-dom'
import { SERVICES } from '../../data/services'
import ServiceCard from './ServiceCard'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

export default function Services() {
  return (
    <section id="services" className="section-services">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="What We Offer"
            title="Our Snow Removal Services"
            subtitle="Daily snow removal for residential properties"
          />
        </ScrollReveal>

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.id} delay={Math.min(i + 1, 5)}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-5">
            <Link
              to="/services"
              className="btn btn-outline-primary rounded-pill px-5 fw-semibold"
            >
              View All Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
