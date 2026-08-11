import {
  FaHome, FaBuilding, FaWalking, FaSnowflake, FaTruck, FaTint,
  FaCheck, FaArrowRight,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'
import SectionHeader from '../components/ui/SectionHeader'
import ScrollReveal from '../components/ui/ScrollReveal'
import ContactForm from '../components/sections/ContactForm'

const ICONS = {
  FaHome: <FaHome />,
  FaBuilding: <FaBuilding />,
  FaWalking: <FaWalking />,
  FaSnowflake: <FaSnowflake />,
  FaTruck: <FaTruck />,
  FaTint: <FaTint />,
}

function ServiceDetail({ service }) {
  const icon = ICONS[service.icon] || <FaSnowflake />
  return (
    <div id={service.slug} className="service-detail-card">
      <div className="service-detail-icon">{icon}</div>
      <div className="service-detail-body">
        {service.badge && <span className="service-badge mb-2 d-inline-block">{service.badge}</span>}
        <h3 className="service-detail-title">{service.title}</h3>
        <p className="service-detail-desc">{service.shortDesc}</p>
        <ul className="service-features mt-3">
          {service.features.map((f) => (
            <li key={f}>
              <FaCheck className="check-icon" />
              {f}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-primary rounded-pill px-4 mt-3 fw-semibold">
          Get a Quote <FaArrowRight size={12} className="ms-1" />
        </Link>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container-xl text-center">
          <ScrollReveal>
            <p className="page-hero-label">Our Services</p>
            <h1 className="page-hero-title">Snow Removal Services</h1>
            <p className="page-hero-subtitle">
              Professional snow and ice management for residential and commercial properties across Edmonton.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service detail list */}
      <section className="section-services-page py-5">
        <div className="container-xl">
          <ScrollReveal>
            <SectionHeader
              label="What We Offer"
              title="Full-Service Snow Management"
              subtitle="From driveways to rooftops - we have every snow removal need covered."
            />
          </ScrollReveal>

          <div className="services-detail-list">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.id} delay={Math.min(i + 1, 5)}>
                <ServiceDetail service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
