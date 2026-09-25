import { salon } from '../data/salon'
import './Visit.css'

export function Visit({ onBook }) {
  const { address, hours, phoneDisplay, mapsUrl } = salon

  return (
    <section id="contact" className="visit section">
      <div className="container visit-grid">
        <div className="visit-copy">
          <p className="section-eyebrow">Find us</p>
          <h2 className="section-title">Visit Rex Salon</h2>
          <p className="section-lead">
            Prefer a chair with intention. Drop by during open hours or request
            a time that suits you.
          </p>
          <button type="button" className="btn btn-gold visit-book" onClick={() => onBook()}>
            Book an Appointment
          </button>
        </div>

        <div className="visit-details">
          <div className="visit-block">
            <h3>Address</h3>
            <p>
              {address.line1}
              <br />
              {address.line2}
              <br />
              {address.city}
            </p>
            {address.note ? <p className="visit-note">{address.note}</p> : null}
            <a
              href={mapsUrl}
              className="visit-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="visit-block">
            <h3>Hours</h3>
            <ul className="visit-hours">
              {hours.map((row) => (
                <li key={row.days}>
                  <span>{row.days}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="visit-block">
            <h3>Contact</h3>
            <p>
              <a href={`tel:+91${phoneDisplay}`} className="visit-link">
                +91 {phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`https://wa.me/${salon.whatsappNumber}`}
                className="visit-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
