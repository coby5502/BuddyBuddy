/** Central route path constants (single source for navigation + layout rules). */
export const ROUTE_PATHS = {
  HOME: '/',
  TUTOR_DETAIL: '/tutor/:id',
  BOOKING: '/booking',
  CONFIRM: '/confirm',
  COMPLETE: '/complete',
  SIGNUP: '/signup',
  /** Tutor onboarding — not shown in main tab bar (female-member UX). */
  TUTOR_APPLY: '/tutor-apply',
  LESSONS: '/lessons',
}

export function tutorDetailPath(id) {
  return `/tutor/${id}`
}
