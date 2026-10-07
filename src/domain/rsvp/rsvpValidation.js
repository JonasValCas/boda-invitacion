export function validateRSVP(rsvp) {
  const errors = {}

  const name = rsvp.name.trim()
  const dni = rsvp.dni.trim()

  if (!name) {
    errors.name =
      'Ingresa tu nombre completo.'
  }

  if (!dni) {
    errors.dni =
      'Ingresa tu DNI.'
  } else if (!/^\d{8}$/.test(dni)) {
    errors.dni =
      'El DNI debe contener exactamente 8 dígitos.'
  }

  if (!rsvp.attendance) {
    errors.attendance =
      'Selecciona si asistirás a la boda.'
  }

  return errors
}