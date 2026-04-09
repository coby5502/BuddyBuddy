/** Central route path constants (single source for navigation + layout rules). */
export const ROUTE_PATHS = {
  HOME: '/',
  TUTOR_DETAIL: '/tutor/:id',
  BOOKING: '/booking',
  CONFIRM: '/confirm',
  COMPLETE: '/complete',
  SIGNUP: '/signup',
  TUTOR_REGISTER: '/tutor-register',
}

export function tutorDetailPath(id) {
  return `/tutor/${id}`
}
