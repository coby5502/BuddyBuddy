import { NavLink } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const NAV_ITEMS = [
  { path: '/', icon: '🏠', labelKey: 'home' },
  { path: '/signup', icon: '👩', labelKey: 'signup' },
  { path: '/tutor-register', icon: '👨', labelKey: 'tutorReg' },
]

export default function BottomNav() {
  const { t } = useApp()

  return (
    <nav
      className="sticky bottom-0 z-50 flex justify-around py-3 pb-5"
      style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid #fecdd3',
      }}
    >
      {NAV_ITEMS.map(({ path, icon, labelKey }) => (
        <NavLink
          key={path}
          to={path}
          end={path === '/'}
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
