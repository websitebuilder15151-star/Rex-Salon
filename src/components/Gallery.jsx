import { galleryImages } from '../data/salon'
import './Gallery.css'

export function Gallery() {
  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <header className="gallery-header">
          <p className="section-eyebrow">Inside the chair</p>
          <h2 className="section-title">Gallery</h2>
          <p className="section-lead">
            Atmosphere, craft, and finishes — a glimpse of the Rex experience.
          </p>
        </header>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <figure key={image.src} className="gallery-item">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
