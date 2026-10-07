import './WeddingHero.css'

function WeddingHero() {
  return (
    <section className="wedding-hero">
      <div className="wedding-hero__overlay" />

      <div className="wedding-hero__content">

        <p className="wedding-hero__eyebrow">
          Nuestra boda
        </p>

        <h1 className="wedding-hero__names">
          Jonathan
          <span className="wedding-hero__ampersand">
            &amp;
          </span>
          Damaris
        </h1>

        <p className="wedding-hero__date">
          09 · enero · 2027
        </p>

        <div className="wedding-hero__separator" />

        <p className="wedding-hero__message">
          El comienzo de nuestro para siempre
        </p>

        <a
          href="#confirmar"
          className="wedding-hero__button"
        >
          Confirmar asistencia
        </a>

      </div>

      <div className="wedding-hero__scroll">
        <span>Descubre</span>

        <span className="wedding-hero__scroll-line" />
      </div>
    </section>
  )
}

export default WeddingHero