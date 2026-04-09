import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Stars from '../components/ui/Stars'
import Avatar from '../components/ui/Avatar'

export default function Confirm() {
  const { lang, t, selectedTutor: tutor } = useApp()
  const navigate = useNavigate()

  const details = [
    { icon: '💻', label: t.lessonTypeLabel, value: t.bookingDetail },
    { icon: '📅', label: t.timeLabel, value: t.bookingDate },
    { icon: '💴', label: t.priceLabel, value: t.bookingPrice },
  ]

  return (
    <div className="pb-24">
      <div
        className="px-4 pt-4 pb-6"
        style={{ background: 'linear-gradient(135deg,#fff5f7,#ffe4e6)' }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-sm text-gray-600 font-semibold mb-2"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ← {t.back}
        </button>
        <h2 className="text-xl font-extrabold text-gray-800">{t.confirmTitle}</h2>
      </div>

      <div className="px-4 py-4 space-y-3">
        {/* Tutor summary */}
        <div className="card p-4">
          <div className="flex items-center gap-4">
            <Avatar tutor={tutor} size={56} />
            <div>
              <div className="font-bold text-gray-800 text-base">
                {lang === 'ja' ? tutor.nameJp : tutor.nameKr}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                {tutor.age}{t.age} · {tutor.area}
              </div>
              <Stars rating={tutor.rating} />
            </div>
          </div>
        </div>

        {/* Booking details */}
        <div className="card p-4">
          {details.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2.5"
              style={{ borderBottom: i < details.length - 1 ? '1px solid #f9fafb' : 'none' }}
            >
              <div className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span className="text-sm text-gray-500">{item.label}</span>
              </div>
              <span className="text-sm font-semibold text-gray-800">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Check points */}
        <div
          className="rounded-3xl p-4 space-y-2"
          style={{
            background: 'linear-gradient(135deg,#fff1f2,#ffe4e6)',
            border: '1px solid #fecdd3',
          }}
        >
          {t.checks.map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-green-500 font-bold text-lg">✔</span>
              <span className="text-sm text-gray-700">{c}</span>
            </div>
          ))}
        </div>

        {/* Payment */}
        <div className="card p-4">
          <div className="section-title">{t.payMethod}</div>
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-2xl"
            style={{ background: '#fafafa' }}
          >
            <span className="text-3xl">💳</span>
            <div>
              <div className="text-sm font-semibold text-gray-700">Visa **** 4242</div>
              <div className="text-xs text-gray-400">{t.savedCard}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 py-3 z-40"
        style={{
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid #fecdd3',
        }}
      >
        <button className="btn-primary" onClick={() => navigate('/complete')}>
          💕 {t.confirmBtn}
        </button>
      </div>
    </div>
  )
}
