import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import './Navbar.css'

const links = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#combos', label: 'Combos', id: 'combos' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#gallery', label: 'Gallery', id: 'gallery' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

export function Navbar({ onBook }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
      const offset = window.scrollY + 100
      let current = 'home'

      for (const section of sections) {
        if (section.offsetTop <= offset) {
          current = section.id
        }
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = () => setOpen(false)

  const handleBook = () => {
    setOpen(false)
    onBook()
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Logo />

        <div className="navbar-trailing">
          <button
            type="button"
            className="btn btn-gold navbar-book-bar"
            onClick={handleBook}
          >
            Book
          </button>

          <button
            className={`navbar-toggle ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className={`navbar-nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={active === link.id ? 'is-active' : ''}
                  onClick={handleNav}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-gold navbar-book navbar-book--menu"
            onClick={handleBook}
          >
            Book
          </button>
        </nav>
      </div>
    </header>
  )
}
