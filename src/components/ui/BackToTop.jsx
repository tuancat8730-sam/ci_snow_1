import { FaChevronUp } from 'react-icons/fa'
import { useScrollPosition } from '../../hooks/useScrollPosition'

export default function BackToTop() {
  const scrollY = useScrollPosition()
  const visible = scrollY > 400

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`back-to-top${visible ? ' visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FaChevronUp />
    </button>
  )
}
