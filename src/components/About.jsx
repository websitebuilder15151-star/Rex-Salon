import { aboutImage, salon } from '../data/salon'
import './About.css'

export function About() {
  const { about } = salon

  return (
    <section id="about" className="about section">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="section-eyebrow">{about.eyebrow}</p>
          <h2 className="section-title">{about.title}</h2>
          <p className="section-lead">{about.body}</p>
        </div>
        <div className="about-media">
          <img src={aboutImage} alt="Rex Unique Salon reception with the Rex stone feature wall" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
