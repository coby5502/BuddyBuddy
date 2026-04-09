import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Avatar from '../components/ui/Avatar'

export default function Complete() {
  const { lang, t, selectedTutor: tutor } = useApp()
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: 'linear-gradient(135deg,#fff5f7,#fce7f3,#fdf4ff)' }}
    >
      <div
        className="text-7xl mb-6"
        style={{ animation: 'bounce 1.2s infinite', display: 'inline-block' }}
      >
        🎉
      </div>

      <h2 className="text-2xl font-extrabold text-gray-800 mb-2">{t.completeTitle}</h2>
      <p className="text-sm text-gray-400 mb-8">
        {lang === 'ja'
          ? `${tutor.nameJp}先生${t.completeSub}`
          : `${tutor.nameKr}${t.completeSub}`}
      </p>

      <div
        className="card p-5 mb-8 text-left w-full max-w-xs"
        style={{ borderColor: '#fecdd3' }}
      >
        {t.completeNotes.map((note, i) => (
          <div key={i} className={`flex items-start gap-2 ${i < t.completeNotes.length - 1 ? 'mb-3' : ''}`}>
            <span className="text-blue-400 mt-0.5">·</span>
            <span className="text-sm text-gray-700">{note}</span>
          </div>
        ))}
      </div>

      <Avatar tutor={tutor} size={80} />

      <p className="text-sm text-gray-400 mt-4 mb-7">
        {lang === 'ja'
          ? `また${tutor.nameJp}先生に会えるのが楽しみ！`
          : `또 ${tutor.nameKr} ${t.completeFeel}`}
      </p>

      <button
        className="btn-primary"
        style={{ maxWidth: 240 }}
        onClick={() => navigate('/')}
      >
        {t.backHome}
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
      `}</style>
    </div>
  )
}
