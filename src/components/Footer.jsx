import { Logo } from './Logo'
import { salon } from '../data/salon'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>Precision craft for the modern gentleman.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-contact">
          <a href={`tel:+91${salon.phoneDisplay}`}>+91 {salon.phoneDisplay}</a>
          <a
            href={`https://wa.me/${salon.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {year} {salon.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
