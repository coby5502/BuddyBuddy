import { useLocation } from 'react-router-dom'
import { ROUTE_PATHS } from '@/config/routes'
import AppHeader from '@/components/layout/AppHeader'
import AppBottomNav from '@/components/layout/AppBottomNav'
import AppRoutes from '@/app/AppRoutes'

export default function AppLayout() {
  const { pathname } = useLocation()
  const hideChrome = pathname === ROUTE_PATHS.COMPLETE

  return (
    <div className="app-shell">
      {!hideChrome && <AppHeader />}
      <main className="flex-1 overflow-y-auto">
        <AppRoutes />
      </main>
      {!hideChrome && <AppBottomNav />}
    </div>
  )
}
