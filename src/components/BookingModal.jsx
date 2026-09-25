import { useEffect, useId, useMemo, useState } from 'react'
import {
  buildWhatsAppUrl,
  getLocalDateString,
  getTimeSlotsForDate,
  salon,
  services,
} from '../data/salon'
import './BookingModal.css'

const emptyForm = {
  name: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  note: '',
}

export function BookingModal({ open, onClose, initialService = '' }) {
  const titleId = useId()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})

  const availableSlots = useMemo(
    () => getTimeSlotsForDate(form.date),
    [form.date],
  )

  useEffect(() => {
    if (open) {
      setForm({
        ...emptyForm,
        service: initialService || services[0]?.title || '',
      })
      setErrors({})
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open, initialService])

  useEffect(() => {
    if (!open) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (form.time && !availableSlots.includes(form.time)) {
      setForm((prev) => ({ ...prev, time: '' }))
    }
  }, [availableSlots, form.time])

  if (!open) return null

  const today = getLocalDateString()

  const update = (field) => (e) => {
    const value = e.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!form.phone.trim()) next.phone = 'Please enter your phone number'
    else if (!/^[\d\s+\-]{8,15}$/.test(form.phone.trim())) {
      next.phone = 'Enter a valid phone number'
    }
    if (!form.service) next.service = 'Select a service'
    if (!form.date) next.date = 'Select a date'
    if (!form.time) next.time = 'Select a time'
    else if (!availableSlots.includes(form.time)) {
      next.time = 'Select a time within shop hours'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const url = buildWhatsAppUrl({
      name: form.name.trim(),
      phone: form.phone.trim(),
      service: form.service,
      date: form.date,
      time: form.time,
      note: form.note,
    })

    // Same-tab navigation avoids mobile popup blockers blocking WhatsApp.
    onClose()
    window.location.assign(url)
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header">
          <div>
            <p className="modal-eyebrow">Appointment request</p>
            <h2 id={titleId}>Book at {salon.name}</h2>
          </div>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>

        <p className="modal-hint">
          Fill in your details and we will open WhatsApp with your request ready
          to send. The shop will confirm your slot.
        </p>

        <form className="modal-form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span>Full name</span>
            <input
              type="text"
              value={form.name}
              onChange={update('name')}
              placeholder="Your name"
              autoComplete="name"
              required
            />
            {errors.name && <em className="field-error">{errors.name}</em>}
          </label>

          <label className="field">
            <span>Your phone number</span>
            <input
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              placeholder="e.g. 98XXXXXXXX"
              autoComplete="tel"
              required
            />
            {errors.phone && <em className="field-error">{errors.phone}</em>}
          </label>

          <label className="field">
            <span>Service</span>
            <select value={form.service} onChange={update('service')} required>
              {services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title} — ₹{s.price}
                </option>
              ))}
            </select>
            {errors.service && <em className="field-error">{errors.service}</em>}
          </label>

          <div className="field-row">
            <label className="field">
              <span>Preferred date</span>
              <input
                type="date"
                value={form.date}
                min={today}
                onChange={update('date')}
                required
              />
              {errors.date && <em className="field-error">{errors.date}</em>}
            </label>

            <label className="field">
              <span>Preferred time</span>
              <select value={form.time} onChange={update('time')} required>
                <option value="">Select time</option>
                {availableSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.time && <em className="field-error">{errors.time}</em>}
            </label>
          </div>

          <label className="field">
            <span>Note (optional)</span>
            <textarea
              value={form.note}
              onChange={update('note')}
              rows={2}
              placeholder="Anything we should know?"
            />
          </label>

          <button type="submit" className="btn btn-gold modal-submit">
            Book Now via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}
