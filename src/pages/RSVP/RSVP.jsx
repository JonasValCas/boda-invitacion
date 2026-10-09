import RSVPForm from "../../components/rsvp/RSVPForm";

import "./RSVP.css";

function RSVP() {
  return (
    <section id="confirmar" className="rsvp-page">
      <div className="rsvp-page__container">
        <header className="rsvp-page__header">
          <p className="rsvp-page__eyebrow">RSVP</p>

          <h2 className="rsvp-page__title">
            Confirma tu asistencia
          </h2>

          <p className="rsvp-page__description">
            Nos encantaría compartir este momento contigo.
            Completa tus datos para confirmar tu asistencia.
          </p>
        </header>

        <div className="rsvp-page__content">
          <aside className="rsvp-info">
            <div className="rsvp-info__gifts">
              <h2>Un detalle para los novios</h2>

              <p>
                Si deseas hacernos un regalo, puedes acercarte
                a la siguiente dirección:
              </p>

              <a
                href="https://maps.app.goo.gl/VYCHJKmNTuiGz3eu5"
                target="_blank"
                rel="noopener noreferrer"
                className="rsvp-info__address"
              >
                <span aria-hidden="true">⌖ </span>
                Calle Abancay 307, Alto Selva Alegre
                <span aria-hidden="true"> ↗</span>
              </a>
            </div>

            <div className="rsvp-info__divider" />

            <div className="rsvp-info__colors">
              <h2>Colores reservados</h2>

              <p>
                Para armonizar con nuestra celebración,
                hemos reservado los siguientes colores:
              </p>

              <div className="rsvp-info__palette">
                <span className="rsvp-info__color rsvp-info__color--lavender">
                  Lavanda
                </span>

                <span className="rsvp-info__color rsvp-info__color--blue">
                  Azul
                </span>
              </div>
            </div>
          </aside>

          <div className="rsvp-page__form">
            <RSVPForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RSVP;