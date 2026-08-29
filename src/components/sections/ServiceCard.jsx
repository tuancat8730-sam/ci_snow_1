import {
  FaHome, FaBuilding, FaWalking, FaSnowflake, FaTruck, FaTint,
  FaCheck,
} from 'react-icons/fa'

const ICONS = {
  FaHome: <FaHome />,
  FaBuilding: <FaBuilding />,
  FaWalking: <FaWalking />,
  FaSnowflake: <FaSnowflake />,
  FaTruck: <FaTruck />,
  FaTint: <FaTint />,
}

export default function ServiceCard({ service }) {
  const icon = ICONS[service.icon] || <FaSnowflake />

  return (
    <div className="col">
      <div className="card service-card h-100">
        <div className="card-body p-4 p-lg-5">
          {service.badge && (
            <span className="service-badge">{service.badge}</span>
          )}
          <div className="service-icon-circle">{icon}</div>
          <h5 className="card-title">{service.title}</h5>
          <p className="card-text">{service.shortDesc}</p>
          <ul className="service-features">
            {service.features.map((f) => (
              <li key={f}>
                <FaCheck className="check-icon" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
