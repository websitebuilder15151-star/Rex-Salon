/** Central config — values from client data.json */

function buildTimeSlots(first = '7:30 AM', last = '9:30 PM', interval = 30) {
  const toMins = (slot) => {
    const m = String(slot).match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
    if (!m) return 0
    let h = Number(m[1])
    const min = Number(m[2])
    const p = m[3].toUpperCase()
    if (p === 'PM' && h !== 12) h += 12
    if (p === 'AM' && h === 12) h = 0
    return h * 60 + min
  }
  const toSlot = (mins) => {
    let h = Math.floor(mins / 60)
    const min = mins % 60
    const period = h >= 12 ? 'PM' : 'AM'
    const displayH = h % 12 === 0 ? 12 : h % 12
    return `${displayH}:${String(min).padStart(2, '0')} ${period}`
  }
  const start = toMins(first)
  const end = toMins(last)
  const slots = []
  for (let t = start; t <= end; t += interval) {
    slots.push(toSlot(t))
  }
  return slots
}

export const salon = {
  name: 'Rex Salon',
  tagline: 'Refined Self-Care',
  headline: 'Rex Salon: Precision Craft, Distinguished',
  heroSubtext:
    'Master barbering rooted in tradition — crafted for the modern gentleman.',
  phoneDisplay: '8143472289',
  whatsappNumber: '918143472289',
  email: '',
  address: {
    line1: 'Rex Salon',
    line2: 'Old Gayatri Nagar',
    city: 'Hyderabad, Telangana 500097',
    note: '',
  },
  mapsUrl: 'https://maps.google.com/?q=17.334959,78.531059',
  hours: [
    { days: 'Monday', time: '7:30 AM – 10:00 PM' },
    { days: 'Tuesday', time: 'Closed' },
    { days: 'Wednesday – Sunday', time: '7:30 AM – 10:00 PM' },
  ],
  closedWeekdays: [2], // Tuesday
  about: {
    eyebrow: 'Master Barbering',
    title: 'The Art of Precision',
    body: 'At Rex Salon in Old Gayatri Nagar, we blend classic barbering with modern grooming and care — from sharp cuts and shaves to relaxing massage, nail care, and skin treatments. Every visit is crafted for a clean, confident finish.',
  },
  servicesIntro:
    'Discover a curated selection of services designed to refine your look and rejuvenate your senses.',
  timeSlots: buildTimeSlots('7:30 AM', '9:30 PM', 30),
}

/** Local calendar date as YYYY-MM-DD (avoids UTC off-by-one). */
export function getLocalDateString(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function slotToMinutes(slot) {
  const match = String(slot).match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
  if (!match) return -1
  let hours = Number(match[1])
  const minutes = Number(match[2])
  const period = match[3].toUpperCase()
  if (period === 'PM' && hours !== 12) hours += 12
  if (period === 'AM' && hours === 12) hours = 0
  return hours * 60 + minutes
}

/** Returns [] on closed days (Tuesday). Otherwise full open-hour slots. */
export function getTimeSlotsForDate(dateStr) {
  const slots = salon.timeSlots
  if (!dateStr) return slots

  const [year, month, day] = dateStr.split('-').map(Number)
  if (!year || !month || !day) return slots

  const weekday = new Date(year, month - 1, day).getDay()
  if (salon.closedWeekdays?.includes(weekday)) return []

  return slots
}

export const services = [
  {
    id: 'cut-shave',
    title: 'Cutting + Shaving',
    description:
      'A clean precision haircut paired with a smooth shave — sharp lines, tidy finish, ready for the day.',
    price: 249,
    icon: 'scissors',
  },
  {
    id: 'curly',
    title: 'Curly Hair Styling',
    description:
      'Shape, define, and care for curly textures with a cut and finish that respects your natural pattern.',
    price: null,
    icon: 'curly',
  },
  {
    id: 'body-massage',
    title: 'Body Massage',
    description:
      'Full-body relaxation to ease tension, improve circulation, and leave you feeling restored.',
    price: 999,
    icon: 'pulse',
  },
  {
    id: 'pedicure',
    title: 'Pedicure',
    description:
      'Thorough foot care with soak, trim, buff, and polish for soft, well-groomed feet.',
    price: 699,
    icon: 'nails',
  },
  {
    id: 'manicure',
    title: 'Manicure',
    description:
      'Nail shaping, cuticle care, and a clean finish — neat hands that look sharp and cared for.',
    price: 699,
    icon: 'nails',
  },
  {
    id: 'hydra-facial',
    title: 'Hydra Facial',
    description:
      'Deep cleanse, exfoliate, and hydrate for clearer, fresher-looking skin in a single session.',
    price: null,
    icon: 'droplet',
  },
]

export const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1672257493563-0dac80e22b7d?auto=format&fit=crop&w=800&q=80',
    alt: 'Classic barbershop chairs and mirrors',
  },
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    alt: 'Barber performing a precise cut',
  },
  {
    src: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80',
    alt: 'Grooming tools and straight razor',
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
    alt: 'Beard trim in progress',
  },
  {
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern salon interior lighting',
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    alt: 'Finished classic gentlemen haircut',
  },
]

export const heroImage =
  'https://images.unsplash.com/photo-1638383257225-f810a62c634e?auto=format&fit=crop&w=1600&q=80'

export const aboutImage =
  'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=1000&q=80'

export function formatPrice(amount) {
  if (amount == null || amount === '') return 'Price on request'
  return `₹${amount}`
}

export function buildWhatsAppUrl({ name, phone, service, date, time, note }) {
  const lines = [
    `Hello ${salon.name}!`,
    '',
    'New appointment request:',
    `• Name: ${name}`,
    `• Customer phone: ${phone}`,
    `• Service: ${service}`,
    `• Date: ${date}`,
    `• Time: ${time}`,
  ]

  if (note?.trim()) {
    lines.push(`• Note: ${note.trim()}`)
  }

  lines.push('', 'Please confirm. Thank you!')

  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${salon.whatsappNumber}?text=${text}`
}
