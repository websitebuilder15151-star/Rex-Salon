import { useCallback, useState } from 'react'
import { About } from './components/About'
import { BookingModal } from './components/BookingModal'
import { Combos } from './components/Combos'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Reserve } from './components/Reserve'
import { Services } from './components/Services'
import { Visit } from './components/Visit'

function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const openBooking = useCallback((serviceTitle = '') => {
    setSelectedService(typeof serviceTitle === 'string' ? serviceTitle : '')
    setBookingOpen(true)
  }, [])

  const closeBooking = useCallback(() => {
    setBookingOpen(false)
  }, [])

  return (
    <>
      <Navbar onBook={() => openBooking()} />
      <main>
        <Hero onBook={() => openBooking()} />
        <About />
        <Services onBook={openBooking} />
        <Combos onBook={openBooking} />
        <Reserve onBook={() => openBooking()} />
        <Gallery />
        <Visit onBook={() => openBooking()} />
      </main>
      <Footer />
      <BookingModal
        open={bookingOpen}
        onClose={closeBooking}
        initialService={selectedService}
      />
    </>
  )
}

export default App
