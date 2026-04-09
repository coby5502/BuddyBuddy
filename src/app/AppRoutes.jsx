import { Routes, Route } from 'react-router-dom'
import { ROUTE_PATHS } from '@/config/routes'
import HomePage from '@/pages/HomePage'
import TutorDetailPage from '@/pages/TutorDetailPage'
import BookingPage from '@/pages/BookingPage'
import ConfirmPage from '@/pages/ConfirmPage'
import CompletePage from '@/pages/CompletePage'
import SignupPage from '@/pages/SignupPage'
import TutorRegisterPage from '@/pages/TutorRegisterPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.HOME} element={<HomePage />} />
      <Route path={ROUTE_PATHS.TUTOR_DETAIL} element={<TutorDetailPage />} />
      <Route path={ROUTE_PATHS.BOOKING} element={<BookingPage />} />
      <Route path={ROUTE_PATHS.CONFIRM} element={<ConfirmPage />} />
      <Route path={ROUTE_PATHS.COMPLETE} element={<CompletePage />} />
      <Route path={ROUTE_PATHS.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTE_PATHS.TUTOR_REGISTER} element={<TutorRegisterPage />} />
    </Routes>
  )
}
