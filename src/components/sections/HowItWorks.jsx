import { FaClipboardList, FaCalendarCheck, FaSnowflake } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

const STEPS = [
  {
    num: '01',
    icon: <FaClipboardList />,
    title: 'Request a Quote',
    desc: 'Fill out our quick online form or give us a call. Tell us about your property and the services you need.',
  },
  {
    num: '02',
    icon: <FaCalendarCheck />,
    title: 'We Schedule & Prepare',
    desc: "Let us know the timeframe of your coverage, if you'd like rock chips applied and we'll make sure a crew is ready for the next snowfall.",
  },
  {
    num: '03',
    icon: <FaSnowflake />,
    title: 'Daily Snow Removal',
    desc: "We'll clear your snow daily at the first trace of snowfall.",
  },
]

export default function HowItWorks() {
  return (
    <section className="section-how-it-works">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="Simple Process"
            title="How It Works"
            subtitle="Getting started is easy. Three simple steps and you'll never shovel snow yourself again."
          />
        </ScrollReveal>

        <div className="row g-4 position-relative">
          {STEPS.map((step, i) => (
            <div className="col-lg-4" key={step.num}>
              <ScrollReveal delay={i + 1}>
                <div className="how-step-card text-center">
                  <div className="how-step-num">{step.num}</div>
                  <div className="how-step-icon">{step.icon}</div>
                  <h4 className="how-step-title">{step.title}</h4>
                  <p className="how-step-desc">{step.desc}</p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-5">
            <Link
              to="/contact"
              className="btn btn-lg rounded-pill px-5 fw-bold text-white"
              style={{ background: 'var(--color-primary)' }}
            >
              Request Your Free Quote
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
