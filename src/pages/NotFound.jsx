import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <p className="lead mb-4">Page not found.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </main>
  )
}
