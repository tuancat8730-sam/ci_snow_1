import { FaStar, FaRegStar, FaAward, FaThumbsUp } from 'react-icons/fa'
import { TESTIMONIALS } from '../../data/testimonials'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

function Stars({ rating }) {
  return (
    <div className="testimonial-stars">
      {[1, 2, 3, 4, 5].map((n) =>
        n <= rating
          ? <FaStar key={n} className="star filled" />
          : <FaRegStar key={n} className="star" />
      )}
    </div>
  )
}

function TestimonialCard({ review, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="testimonial-card h-100">
        <Stars rating={review.rating} />
        <p className="testimonial-quote">"{review.quote}"</p>
        <div className="testimonial-author">
          <div className="testimonial-avatar">{review.initials}</div>
          <div>
            <p className="testimonial-name">{review.name}</p>
            <p className="testimonial-location">{review.location} · {review.date}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Testimonials() {
  return (
    <section className="section-testimonials">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="Customer Reviews"
            title="What Our Clients Say"
            subtitle="Real feedback from homeowners and businesses across the Edmonton area."
          />
        </ScrollReveal>

        {/* Trust bar */}
        <ScrollReveal>
          <div className="testimonial-trust-bar">
            <div className="trust-stat">
              <FaStar className="trust-stat-icon" />
              <span className="trust-stat-value">4.9/5</span>
              <span className="trust-stat-label">Average Rating</span>
            </div>
            <div className="trust-stat">
              <FaAward className="trust-stat-icon" />
              <span className="trust-stat-value">200+</span>
              <span className="trust-stat-label">Happy Clients</span>
            </div>
            <div className="trust-stat">
              <FaThumbsUp className="trust-stat-icon" />
              <span className="trust-stat-value">98%</span>
              <span className="trust-stat-label">Would Recommend</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
          {TESTIMONIALS.map((review, i) => (
            <div className="col" key={review.id}>
              <TestimonialCard review={review} delay={Math.min(i + 1, 5)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
