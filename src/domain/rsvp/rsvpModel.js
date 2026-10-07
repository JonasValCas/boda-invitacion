export const RSVP_ATTENDANCE = {
  YES: 'yes',
  NO: 'no',
}

export function createEmptyRSVP() {
  return {
    name: '',
    dni: '',
    attendance: '',
  }
}