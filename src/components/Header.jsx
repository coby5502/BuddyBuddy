import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Header() {
  const { lang, t, toggleLang } = useApp()

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-4 py-3"
      style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #fecdd3',
      }}
    >
      <Link to="/" className="flex items-center gap-1">
        <span
          className="text-lg font-extrabold"
          style={{
            background: 'linear-gradient(135deg,#f43f5e,#ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          💕 {t.appName}
        </span>
      </Link>

      <button
        onClick={toggleLang}
        className="text-xs border rounded-full px-3 py-1 font-semibold transition-colors"
        style={{
          background: '#fff5f7',
          borderColor: '#fda4af',
          color: '#f43f5e',
        }}
      >
        {lang === 'ja' ? '한국어' : '日本語'}
      </button>
    </header>
  )
}
