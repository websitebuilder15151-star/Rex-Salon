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
  name: 'Rex Unique Salon',
  tagline: 'Refined Self-Care',
  headline: 'Rex Unique Salon: Precision Craft, Distinguished',
  heroSubtext:
    'Master barbering rooted in tradition — crafted for the modern gentleman.',
  phoneDisplay: '8143472289',
  whatsappNumber: '918143472289',
  callNumbers: ['7248244924', '8096772289'],
  waitTime: {
    busy: '15 mins',
    normal: '7–8 mins',
  },
  email: '',
  address: {
    line1: 'Rex Unique Salon',
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
    body: 'At Rex Unique Salon in Old Gayatri Nagar, we blend classic barbering with modern grooming and care — from sharp cuts and shaves to relaxing massage, nail care, and skin treatments. Every visit is crafted for a clean, confident finish.',
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
    id: 'haircut-shaving',
    title: 'Haircut + Shaving',
    description:
      'A clean precision haircut paired with a smooth shave — sharp lines, tidy finish, ready for the day.',
    price: 249,
    icon: 'scissors',
  },
  {
    id: 'kids-haircut',
    title: 'Kids Haircut',
    description:
      'Patient, friendly cuts for young boys — neat, comfortable, and stylish.',
    price: 130,
    icon: 'kids',
  },
  {
    id: 'baby-haircut',
    title: 'Baby Haircut',
    description:
      'Gentle, careful first cuts for little ones, done slowly and safely.',
    price: 150,
    icon: 'kids',
  },
  {
    id: 'face-masks',
    title: 'Face Masks',
    description:
      'Refreshing masks that cleanse, calm, and brighten tired skin.',
    price: null,
    icon: 'face',
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
    id: 'head-massage',
    title: 'Head Massage',
    description:
      'A soothing scalp and head massage that relieves stress and helps you unwind.',
    price: null,
    icon: 'pulse',
  },
  {
    id: 'leg-massage',
    title: 'Leg Massage',
    description:
      'Relieves tired, heavy legs and eases muscle tension after a long day.',
    price: null,
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
    id: 'hydra-facial',
    title: 'Hydra Facial',
    description:
      'Deep cleanse, exfoliate, and hydrate for clearer, fresher-looking skin in a single session.',
    price: null,
    icon: 'droplet',
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
    id: 'curly-hair',
    title: 'Curly Hair',
    description:
      'Shape, define, and care for curly textures with a cut and finish that respects your natural pattern.',
    price: null,
    icon: 'curly',
  },
]

export const combos = [
  {
    id: 'combo-grooming',
    title: 'Complete Grooming Combo',
    items: ['Cutting', 'Shaving', 'Detan', 'Head Massage', 'Hair Wash'],
    price: 699,
    featured: true,
  },
  {
    id: 'combo-glow',
    title: 'Glow & Relax Combo',
    items: ['Fruit Facial', 'Head Massage', 'Hair Wash'],
    price: 899,
  },
  {
    id: 'combo-relax',
    title: 'Total Relax Combo',
    items: ['Head Massage', 'Leg Massage', 'Hair Wash'],
    price: 499,
  },
]

const shopImage = (name) => `/images/shop/${name}.jpg`

export const galleryImages = [
  { src: shopImage('storefront'), alt: 'Rex Unique Men Salon & Parlour storefront at night' },
  { src: shopImage('interior-wide'), alt: 'Barbers at work across the salon floor' },
  { src: shopImage('rex-wall'), alt: 'Rex logo on the stone feature wall at reception' },
  { src: shopImage('interior-fern-wall'), alt: 'Styling stations with gold mirrors and fern wallpaper' },
  { src: shopImage('waiting-lounge'), alt: 'Waiting lounge with green sofa and hexagon lights' },
  { src: shopImage('interior-chairs'), alt: 'Green salon chairs and hair wash stations' },
  { src: shopImage('lounge-products'), alt: 'Grooming product shelf and lounge area' },
  { src: shopImage('styling-stations'), alt: 'Gold-framed mirrors at the styling stations' },
  { src: shopImage('reception'), alt: 'Reception desk with product display' },
]

export const heroImage = shopImage('interior-wide')

export const aboutImage = shopImage('reception-desk')

export function hasPrice(amount) {
  return amount != null && amount !== ''
}

export function formatPrice(amount) {
  return `₹${amount}`
}

function describeService(title) {
  const combo = combos.find((c) => c.title === title)
  if (!combo) return title
  return `${combo.title} (${combo.items.join(' + ')}) — ${formatPrice(combo.price)}`
}

export function buildWhatsAppUrl({ name, phone, service, date, time, note }) {
  const lines = [
    `Hello ${salon.name}!`,
    '',
    'New appointment request:',
    `• Name: ${name}`,
    `• Customer phone: ${phone}`,
    `• Service: ${describeService(service)}`,
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
