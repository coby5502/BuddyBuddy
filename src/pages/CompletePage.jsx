import { useNavigate } from 'react-router-dom'
import { useApp } from '@/context/AppContext'
import { ROUTE_PATHS } from '@/config/routes'
import Avatar from '@/components/ui/Avatar'

export default function CompletePage() {
  const { lang, t, selectedTutor: tutor } = useApp()
  const navigate = useNavigate()

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6 pb-10 pt-8 text-center lg:px-16 lg:py-20"
      style={{ background: 'linear-gradient(135deg,#fffdfb,#fff5f7,#fce7f3)' }}
    >
      <div
        className="mb-5 text-7xl"
        style={{ animation: 'bb-bounce 1.2s ease-in-out infinite', display: 'inline-block' }}
      >
        🎉
      </div>

      <span className="mb-3 rounded-full border border-pink-200 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-rose-500">
        {lang === 'ja' ? '予約確定' : '예약 확정'}
      </span>

      <h2 className="mb-2 text-2xl font-extrabold text-gray-800 lg:text-3xl">{t.completeTitle}</h2>
      <p className="mb-6 max-w-xs text-sm text-gray-500 lg:max-w-lg lg:text-base">
        {lang === 'ja' ? `${tutor.nameJp}先生${t.completeSub}` : `${tutor.nameKr}${t.completeSub}`}
      </p>

      <div
        className="card mb-6 w-full max-w-sm border-pink-100 p-5 text-left lg:max-w-lg lg:p-8"
        style={{ borderColor: '#fecdd3' }}
      >
        <p className="mb-3 text-xs font-bold text-gray-800">
          {lang === 'ja' ? '次のステップ' : '다음 단계'}
        </p>
        {t.completeNotes.map((note, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 ${i < t.completeNotes.length - 1 ? 'mb-3' : ''}`}
          >
            <span className="mt-0.5 text-blue-400">·</span>
            <span className="text-sm leading-relaxed text-gray-700">{note}</span>
          </div>
        ))}
      </div>

      <Avatar tutor={tutor} size={88} ring />

      <p className="mb-6 mt-4 max-w-xs text-sm text-gray-500">
        {lang === 'ja'
          ? `また${tutor.nameJp}先生に会えるのが楽しみ！`
          : `또 ${tutor.nameKr} ${t.completeFeel}`}
      </p>

      <div className="mb-5 flex w-full max-w-sm flex-col gap-2">
        <button
          type="button"
          className="w-full rounded-2xl border-2 border-pink-200 bg-white py-3.5 text-sm font-bold text-rose-600 transition-colors hover:bg-pink-50"
        >
          📅 {t.completeCalendar}
        </button>
        <button
          type="button"
          className="w-full rounded-2xl border-2 border-gray-200 bg-white py-3.5 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50"
        >
          🔗 {t.completeShare}
        </button>
      </div>

      <button type="button" className="btn-primary max-w-xs" onClick={() => navigate(ROUTE_PATHS.HOME)}>
        {t.backHome}
      </button>

      <style>{`
        @keyframes bb-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </div>
  )
}
