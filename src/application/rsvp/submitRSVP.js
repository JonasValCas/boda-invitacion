import {
  validateRSVP,
} from '../../domain/rsvp/rsvpValidation'

export async function submitRSVP(
  rsvp,
  repository
) {
  const errors = validateRSVP(rsvp)

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    }
  }

  const normalizedRSVP = {
    name: rsvp.name.trim(),
    dni: rsvp.dni.trim(),
    attendance: rsvp.attendance,
  }

  try {
    const result =
      await repository.save(
        normalizedRSVP
      )

    return {
      success: true,
      data: result,
    }
  } catch (error) {
    console.error(
      'Error al guardar RSVP:',
      error
    )

    return {
      success: false,
      errors: {
        form:
          error.message ||
          'No pudimos registrar tu confirmación. Inténtalo nuevamente.',
      },
    }
  }
}