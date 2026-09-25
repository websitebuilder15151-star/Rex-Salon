import './Reserve.css'

export function Reserve({ onBook }) {
  return (
    <section className="reserve" aria-labelledby="reserve-title">
      <div className="container reserve-inner">
        <h2 id="reserve-title" className="reserve-title">
          Reserve Your Chair
        </h2>
        <p className="reserve-lead">
          Step into Rex Salon and elevate your grooming experience. Book your
          appointment today.
        </p>
        <button type="button" className="btn btn-dark" onClick={() => onBook()}>
          Book an Appointment
        </button>
        <p className="reserve-note">
          Requests are confirmed by the shop on WhatsApp.
        </p>
      </div>
    </section>
  )
}
