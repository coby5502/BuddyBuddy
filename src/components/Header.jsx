import { NavLink, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const DESKTOP_NAV = [
  { path: '/', end: true, labelKey: 'home' },
  { path: '/signup', end: false, labelKey: 'signup' },
  { path: '/tutor-register', end: false, labelKey: 'tutorReg' },
]

export default function Header() {
  const { lang, setLang, t } = useApp()

  return (
    <header
      className="sticky top-0 z-50 border-b border-pink-100/80 px-4 py-3 lg:px-8 lg:py-4"
      style={{
        background: 'rgba(255, 253, 251, 0.94)',
        backdropFilter: 'blur(14px)',
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 lg:gap-6">
        <div className="flex min-w-0 flex-1 flex-col gap-0.5 lg:flex-row lg:items-center lg:gap-8">
          <Link to="/" className="flex shrink-0 items-center gap-1.5">
            <span
              className="text-lg font-extrabold tracking-tight lg:text-xl"
              style={{
                background: 'linear-gradient(135deg,#f43f5e,#ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              💕 {t.appName}
            </span>
          </Link>
          <p className="hidden max-w-md truncate text-sm text-gray-500 lg:block">{t.tagline}</p>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {DESKTOP_NAV.map(({ path, end, labelKey }) => (
              <NavLink
                key={path}
                to={path}
                end={end}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
                    isActive ? 'bg-brand-50 text-rose-600' : 'text-gray-500 hover:bg-sand-100 hover:text-gray-700'
                  }`
                }
              >
                {t.nav[labelKey]}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="lang-seg shrink-0" role="group" aria-label="Language">
          <button
            type="button"
            onClick={() => setLang('ja')}
            className={`lang-seg__btn ${lang === 'ja' ? 'lang-seg__btn--on' : 'lang-seg__btn--off'}`}
          >
            {t.langJa}
          </button>
          <button
            type="button"
            onClick={() => setLang('ko')}
            className={`lang-seg__btn ${lang === 'ko' ? 'lang-seg__btn--on' : 'lang-seg__btn--off'}`}
          >
            {t.langKo}
          </button>
        </div>
      </div>
    </header>
  )
}
