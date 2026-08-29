import {
  FaClock, FaShieldAlt, FaBolt, FaHome, FaLeaf,
} from 'react-icons/fa'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

const BENEFITS = [
  {
    icon: <FaClock />,
    title: 'Homegrown Edmonton Business',
    desc: 'Providing residential snow removal to Edmonton and the surrounding area since 2002.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Licensed & Fully Insured',
    desc: 'Complete peace of mind on every visit. We carry full liability and WCB coverage.',
  },
  {
    icon: <FaBolt />,
    title: 'Daily Snow Removal',
    desc: 'Daily snow removal at the first trace of snow.',
  },
  {
    icon: <FaHome />,
    title: 'Residential',
    desc: 'We have the equipment to handle most residential properties.',
  },
  {
    icon: <FaLeaf />,
    title: 'Rock Chip Application Available',
    desc: 'Rock chip application available to combat slippery or icy conditions.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why-section" id="why-section">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="Why Capital Snow Removal"
            title="The Reliable Choice for Edmonton Winters"
            subtitle="Over 350 homes trust us every season - here is why."
          />
        </ScrollReveal>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
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
