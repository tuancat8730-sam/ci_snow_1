import {
  FaClock, FaShieldAlt, FaBolt, FaBuilding, FaLeaf, FaThumbsUp,
} from 'react-icons/fa'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

const BENEFITS = [
  {
    icon: <FaClock />,
    title: '24/7 Emergency Service',
    desc: 'Storms do not keep business hours — neither do we. Emergency dispatch available around the clock.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Licensed & Fully Insured',
    desc: 'Complete peace of mind on every visit. We carry full liability and WCB coverage.',
  },
  {
    icon: <FaBolt />,
    title: 'Fast Response Time',
    desc: 'Commercial clients get a 2-hour SLA. Residential routes are cleared the same day as the snowfall.',
  },
  {
    icon: <FaBuilding />,
    title: 'Commercial & Residential',
    desc: 'From single driveways to large commercial parking lots — we have the equipment to handle any size job.',
  },
  {
    icon: <FaLeaf />,
    title: 'Eco-Friendly De-icing',
    desc: 'We offer environmentally responsible de-icing products that are safer for pets, kids, and your concrete.',
  },
  {
    icon: <FaThumbsUp />,
    title: 'Satisfaction Guaranteed',
    desc: 'Not happy with our work? We will come back and re-do it — free of charge. Your satisfaction is our priority.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why-section" id="why-section">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="Why Capital Snow"
            title="The Reliable Choice for Edmonton Winters"
            subtitle="Over 200 homes and businesses trust us every season — here is why."
          />
        </ScrollReveal>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {BENEFITS.map((b, i) => (
            <ScrollReveal key={b.title} delay={Math.min(i + 1, 5)}>
              <div className="col h-100">
                <div className="benefit-item align-items-start h-100"
                  style={{
                    background: '#fff',
                    borderRadius: '1rem',
                    padding: '1.75rem',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'box-shadow var(--transition-base)',
                  }}
                >
                  <div className="benefit-icon">{b.icon}</div>
                  <div>
                    <p className="benefit-title">{b.title}</p>
                    <p className="benefit-desc">{b.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
