import { combos, formatPrice } from '../data/salon'
import './Combos.css'

export function Combos({ onBook }) {
  return (
    <section id="combos" className="combos section">
      <div className="container">
        <header className="combos-header">
          <p className="section-eyebrow">Better together, better value</p>
          <h2 className="section-title">Rex Unique Special Combos</h2>
          <p className="section-lead">
            Our most-loved services, bundled into one relaxing visit.
          </p>
        </header>

        <div className="combos-grid">
          {combos.map((combo) => (
            <article
              key={combo.id}
              className={`combo-card ${combo.featured ? 'combo-card--featured' : ''}`}
            >
              {combo.featured && <span className="combo-badge">Most popular</span>}
              <h3 className="combo-title">{combo.title}</h3>
              <p className="combo-price">
                {formatPrice(combo.price)}
                <span>{combo.items.length} services</span>
              </p>
              <ul className="combo-items">
                {combo.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button
                type="button"
                className={`btn ${combo.featured ? 'btn-gold' : 'btn-outline'} combo-book`}
                onClick={() => onBook(combo.title)}
              >
                Book this combo
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
