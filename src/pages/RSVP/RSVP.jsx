import RSVPForm from '../../components/rsvp/RSVPForm'

import './RSVP.css'

function RSVP() {
  return (
    <section
      id="confirmar"
      className="rsvp-page"
    >
      <div className="rsvp-page__container">

        <div className="rsvp-page__header">

          <p className="rsvp-page__eyebrow">
            RSVP
          </p>

          <h2 className="rsvp-page__title">
            Confirma tu asistencia
          </h2>

          <p className="rsvp-page__description">
            Nos encantaría compartir este
            momento contigo. Completa tus
            datos para confirmar tu asistencia.
          </p>

        </div>

        <RSVPForm />

      </div>
    </section>
  )
}

export default RSVP