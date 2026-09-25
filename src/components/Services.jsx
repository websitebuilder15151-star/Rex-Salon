import { formatPrice, services, salon } from '../data/salon'
import { ServiceIcon } from './ServiceIcon'
import './Services.css'

export function Services({ onBook }) {
  return (
    <section id="services" className="services section">
      <div className="container">
        <header className="services-header">
          <p className="section-lead services-intro">{salon.servicesIntro}</p>
        </header>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <ServiceIcon name={service.icon} />
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <div className="service-card-footer">
                <span className="service-card-price">{formatPrice(service.price)}</span>
                <button
                  type="button"
                  className="btn btn-outline service-card-book"
                  onClick={() => onBook(service.title)}
                >
                  Book
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
