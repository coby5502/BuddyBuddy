import { NavLink } from 'react-router-dom'
import { useApp } from '@/context/AppContext'
import { ROUTE_PATHS } from '@/config/routes'

const NAV_ITEMS = [
  { path: ROUTE_PATHS.HOME, icon: '🏠', labelKey: 'home', end: true },
  { path: ROUTE_PATHS.SIGNUP, icon: '👩', labelKey: 'signup', end: false },
  { path: ROUTE_PATHS.TUTOR_REGISTER, icon: '👨', labelKey: 'tutorReg', end: false },
]

export default function AppBottomNav() {
  const { t } = useApp()

  return (
    <nav
      className="sticky bottom-0 z-50 flex justify-around py-3 pb-5 lg:hidden"
      style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid #fecdd3',
      }}
    >
      {NAV_ITEMS.map(({ path, icon, labelKey, end }) => (
        <NavLink
          key={path}
          to={path}
          end={end}
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 transition-colors ${
              isActive ? 'text-rose-500' : 'text-gray-400'
            }`
          }
        >
          <span className="text-2xl">{icon}</span>
          <span className="text-xs font-semibold">{t.nav[labelKey]}</span>
        </NavLink>
      ))}
    </nav>
  )
}
