const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwadnJgQtmtdCUhIwDk5EOmDtcI2FnxyfPEUGdcqS37UfItLSrZWyP0C4Im5UIm7vFdJA/exec'

export class RSVPRepository {

  async save(rsvp) {

    if (!GOOGLE_APPS_SCRIPT_URL) {
      throw new Error(
        'Google Apps Script URL no configurada.'
      )
    }

    const payload =
      JSON.stringify({
        name: rsvp.name,
        dni: rsvp.dni,
        attendance: rsvp.attendance,
      })


    const body =
      new URLSearchParams()

    body.append(
      'payload',
      payload
    )


    const response =
      await fetch(
        GOOGLE_APPS_SCRIPT_URL,
        {
          method: 'POST',

          body,
        }
      )


    if (!response.ok) {
      throw new Error(
        'No se pudo conectar con el servidor.'
      )
    }


    const result =
      await response.json()


    if (!result.success) {
      throw new Error(
        result.error ||
        'No se pudo registrar la confirmación.'
      )
    }


    return result.data
  }
}