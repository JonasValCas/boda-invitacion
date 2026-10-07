import { useState } from 'react'

import {
  createEmptyRSVP,
} from '../../domain/rsvp/rsvpModel'

import {
  submitRSVP,
} from '../../application/rsvp/submitRSVP'

import {
  RSVPRepository,
} from '../../infrastructure/rsvp/RSVPRepository'

import AttendanceSelector from './AttendanceSelector'

import './RSVPForm.css'

const repository =
  new RSVPRepository()

function RSVPForm() {
  const [form, setForm] = useState(
    createEmptyRSVP()
  )

  const [errors, setErrors] =
    useState({})

  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const [confirmation, setConfirmation] =
    useState(null)

  function handleChange(event) {
    const {
      name,
      value,
    } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: '',
      form: '',
    }))
  }

  function handleAttendanceChange(
    value
  ) {
    setForm((current) => ({
      ...current,
      attendance: value,
    }))

    setErrors((current) => ({
      ...current,
      attendance: '',
      form: '',
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setIsSubmitting(true)
    setErrors({})

    const result =
      await submitRSVP(
        form,
        repository
      )

    setIsSubmitting(false)

    if (!result.success) {
      setErrors(result.errors)
      return
    }

    setConfirmation(result.data)
  }

  function handleReset() {
    setForm(createEmptyRSVP())
    setErrors({})
    setConfirmation(null)
  }

  if (confirmation) {
  const isAttending =
    confirmation.attendance === 'yes'

  return (
    <div className="rsvp-success">

      <div className="rsvp-success__icon">
        {isAttending ? '✓' : '♡'}
      </div>

      <p className="rsvp-success__eyebrow">
        {isAttending
          ? 'Confirmación recibida'
          : 'Gracias por avisarnos'}
      </p>

      <h3>
        {isAttending
          ? `¡Gracias, ${confirmation.name}!`
          : `Te vamos a extrañar, ${confirmation.name}`}
      </h3>

      {isAttending ? (
        <>
          <p className="rsvp-success__message">
            Hemos registrado correctamente
            tu confirmación. Nos hace mucha
            ilusión compartir este día contigo.
          </p>

          <div className="rsvp-success__code">
            <span>
              Tu código de confirmación
            </span>

            <strong>
              {confirmation.code}
            </strong>
          </div>

          <p className="rsvp-success__hint">
            Guarda este código. Lo utilizaremos
            para identificar tu confirmación.
          </p>
        </>
      ) : (
        <p className="rsvp-success__message">
          No te preocupes, entendemos que no
          puedas acompañarnos en este día tan
          especial. Gracias por avisarnos y por
          ser parte de nuestra historia.
        </p>
      )}

      <button
        type="button"
        className="rsvp-success__button"
        onClick={handleReset}
      >
        Nueva confirmación
      </button>

    </div>
  )
}

  return (
    <form
      className="rsvp-form"
      onSubmit={handleSubmit}
      noValidate
    >

      <div className="rsvp-form__group">

        <label htmlFor="name">
          Nombre completo
          <span>*</span>
        </label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Escribe tu nombre completo"
        />

        {errors.name && (
          <small className="rsvp-form__error">
            {errors.name}
          </small>
        )}

      </div>


      <div className="rsvp-form__group">

        <label htmlFor="dni">
          DNI
          <span>*</span>
        </label>

        <input
          id="dni"
          name="dni"
          type="text"
          inputMode="numeric"
          maxLength="8"
          autoComplete="off"
          value={form.dni}
          onChange={handleChange}
          placeholder="Ingresa tu DNI"
        />

        {errors.dni && (
          <small className="rsvp-form__error">
            {errors.dni}
          </small>
        )}

      </div>


      <div className="rsvp-form__group">

        <label>
          ¿Nos acompañarás?
          <span>*</span>
        </label>

        <AttendanceSelector
          value={form.attendance}
          onChange={
            handleAttendanceChange
          }
        />

        {errors.attendance && (
          <small className="rsvp-form__error">
            {errors.attendance}
          </small>
        )}

      </div>


      {errors.form && (
        <div className="rsvp-form__server-error">
          {errors.form}
        </div>
      )}


      <button
        type="submit"
        className="rsvp-form__submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? 'Registrando...'
          : 'Confirmar asistencia'}
      </button>

    </form>
  )
}

export default RSVPForm