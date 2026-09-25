import { heroImage, salon } from '../data/salon'
import './Hero.css'

export function Hero({ onBook }) {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content container">
        <p className="section-eyebrow fade-up">{salon.tagline}</p>
        <h1 className="hero-title fade-up-delay">{salon.headline}</h1>
        <p className="hero-sub fade-up-delay-2">{salon.heroSubtext}</p>
        <div className="hero-actions fade-up-delay-2">
          <button type="button" className="btn btn-primary" onClick={onBook}>
            Book an Appointment
          </button>
          <a href="#services" className="btn btn-outline">
            View Services
          </a>
        </div>
      </div>
    </section>
  )
}
