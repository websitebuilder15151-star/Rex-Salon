/** Central config — swap placeholder values when client details arrive. */

export const salon = {
  name: 'Rex Salon',
  tagline: 'Refined Self-Care',
  headline: 'Rex Salon: Precision Craft, Distinguished',
  heroSubtext:
    'Master barbering rooted in tradition — crafted for the modern gentleman.',
  phoneDisplay: '9032519130',
  whatsappNumber: '919032519130',
  email: 'hello@rexsalon.demo',
  address: {
    line1: '12, Jubilee Hills Road No. 36',
    line2: 'Near Peddamma Temple',
    city: 'Hyderabad, Telangana 500033',
    note: 'Demo address — replace with the real shop location.',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Jubilee+Hills+Hyderabad',
  hours: [
    { days: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
    { days: 'Sunday', time: '11:00 AM – 6:00 PM' },
  ],
  about: {
    eyebrow: 'Master Barbering',
    title: 'The Art of Precision',
    body: 'Our master barbers combine traditional techniques with modern styling to deliver razor-sharp results. Every cut and sculpt is a testament to meticulous craft — a quiet space for men who value detail.',
  },
  servicesIntro:
    'Discover a curated selection of services designed to refine your look and rejuvenate your senses.',
  timeSlots: [
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
  ],
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

/** Weekday: full slot list. Sunday: 11:00 AM – 6:00 PM only. */
export function getTimeSlotsForDate(dateStr) {
  const slots = salon.timeSlots
  if (!dateStr) return slots

  const [year, month, day] = dateStr.split('-').map(Number)
  if (!year || !month || !day) return slots

  const weekday = new Date(year, month - 1, day).getDay()
  if (weekday !== 0) return slots

  const start = 11 * 60
  const end = 18 * 60
  return slots.filter((slot) => {
    const mins = slotToMinutes(slot)
    return mins >= start && mins <= end
  })
}

export const services = [
  {
    id: 'haircut',
    title: 'Precision Haircuts',
    description:
      'Expert cuts tailored to your style and hair texture, ensuring a clean, sharp finish.',
    price: 399,
    icon: 'scissors',
  },
  {
    id: 'beard',
    title: 'Sharp Beard Sculpting',
    description:
      'Meticulous beard trims and shaping for a distinguished, well-groomed look.',
    price: 249,
    icon: 'beard',
  },
  {
    id: 'shave',
    title: 'Hot Towel Shave',
    description:
      'Experience the classic hot towel shave for an incredibly smooth and refreshing feel.',
    price: 349,
    icon: 'droplet',
  },
  {
    id: 'combo',
    title: 'Haircut + Beard Combo',
    description:
      'A complete grooming session — precision cut paired with sharp beard detailing.',
    price: 599,
    icon: 'combo',
  },
  {
    id: 'massage',
    title: 'Soothing Head Massages',
    description:
      'Relax and unwind with a rejuvenating head massage, promoting circulation and calm.',
    price: 199,
    icon: 'pulse',
  },
  {
    id: 'kids',
    title: 'Kids Cut',
    description:
      'Patient, stylish cuts for little gentlemen — neat, comfortable, and age-appropriate.',
    price: 299,
    icon: 'kids',
  },
  {
    id: 'colour',
    title: 'Hair Colour / Highlights',
    description:
      'Subtle coverage or bold contrast — colour work matched to your skin tone and style.',
    price: 999,
    icon: 'colour',
  },
  {
    id: 'signature',
    title: 'The Rex Signature',
    description:
      'Cut, beard, hot towel shave, and head massage — our full chair experience.',
    price: 899,
    icon: 'crown',
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
