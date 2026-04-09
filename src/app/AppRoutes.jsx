import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTE_PATHS } from '@/config/routes'
import HomePage from '@/pages/HomePage'
import TutorDetailPage from '@/pages/TutorDetailPage'
import BookingPage from '@/pages/BookingPage'
import ConfirmPage from '@/pages/ConfirmPage'
import CompletePage from '@/pages/CompletePage'
import SignupPage from '@/pages/SignupPage'
import TutorRegisterPage from '@/pages/TutorRegisterPage'
import LessonsPage from '@/pages/LessonsPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.HOME} element={<HomePage />} />
      <Route path={ROUTE_PATHS.TUTOR_DETAIL} element={<TutorDetailPage />} />
      <Route path={ROUTE_PATHS.BOOKING} element={<BookingPage />} />
      <Route path={ROUTE_PATHS.CONFIRM} element={<ConfirmPage />} />
      <Route path={ROUTE_PATHS.COMPLETE} element={<CompletePage />} />
      <Route path={ROUTE_PATHS.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTE_PATHS.LESSONS} element={<LessonsPage />} />
      <Route path={ROUTE_PATHS.TUTOR_APPLY} element={<TutorRegisterPage />} />
      <Route path="/tutor-register" element={<Navigate to={ROUTE_PATHS.TUTOR_APPLY} replace />} />
    </Routes>
  )
}
