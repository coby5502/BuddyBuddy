import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Stars from '../components/ui/Stars'
import Avatar from '../components/ui/Avatar'
import tutors from '../data/tutors'

export default function Detail() {
  const { id } = useParams()
  const { lang, t, setSelectedTutor } = useApp()
  const navigate = useNavigate()
  const [tab, setTab] = useState('online')

  const tutor = tutors.find((t) => t.id === Number(id)) ?? tutors[0]

  const handleBook = () => {
    setSelectedTutor(tutor)
    navigate('/booking')
  }

  const onlineCourses = t.onlineCourses
  const offlineCourses = t.offlineCourses

  return (
    <div className="pb-24">
      {/* Hero */}
      <div
        className="px-4 pt-4 pb-10 text-center"
        style={{ background: tutor.gradient }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-sm text-gray-600 font-semibold mb-4"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ← {t.back}
        </button>

        <div className="flex flex-col items-center">
          <Avatar tutor={tutor} size={100} />
          <h2 className="text-2xl font-extrabold text-gray-800 mt-3">
            {lang === 'ja' ? tutor.nameJp : tutor.nameKr}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {tutor.nameEn} · {tutor.age}{t.age} · {tutor.area}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Stars rating={tutor.rating} />
            <span className="text-sm text-gray-500">({tutor.reviewCount}{t.reviews})</span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid #fecdd3', color: '#f43f5e' }}
            >
              {tutor.type}
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-6 space-y-3">
        {/* Intro */}
        <div className="card p-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            {lang === 'ja' ? tutor.intro.ja : tutor.intro.ko}
          </p>
        </div>

        {/* Lesson Type */}
        <div className="card p-4">
          <div className="section-title">{t.lessonType}</div>
          <div className="flex gap-2 mb-4">
            {['online', 'offline'].map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`flex-1 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                  tab === k ? 'toggle-active' : 'toggle-inactive'
                }`}
              >
                {k === 'online' ? `💻 ${t.onlineL}` : `🏠 ${t.offlineL}`}
              </button>
            ))}
          </div>

          {tab === 'online' ? (
            <div className="space-y-2">
              {onlineCourses.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center px-4 py-3 rounded-2xl"
                  style={{ background: '#fff5f7' }}
                >
                  <span className="text-sm text-gray-700 font-medium">{c.label}</span>
                  <span className="text-rose-500 font-bold">{c.price}</span>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-2xl mb-3"
                style={{ background: 'linear-gradient(135deg,#fff1f2,#ffe4e6)', border: '1px solid #fecdd3' }}
              >
                <span>📍</span>
                <div>
                  <div
                    className="text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-1 text-white"
                    style={{ background: 'linear-gradient(135deg,#f43f5e,#ec4899)' }}
                  >
                    {t.premBadge} · {t.popBadge}
                  </div>
                  <p className="text-sm text-gray-700">{t.offlineDesc}</p>
                </div>
              </div>
              <div className="space-y-2">
                {offlineCourses.map((c, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center px-4 py-3 rounded-2xl"
                    style={{ background: '#fff1f2' }}
                  >
                    <span className="text-sm text-gray-700 font-medium">{c.label}</span>
                    <span className="text-rose-600 font-bold">{c.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Lesson Style */}
        <div className="card p-4">
          <div className="section-title">{t.lessonStyle}</div>
          <div className="space-y-2">
            {tutor.styles.map((s) => (
              <div key={s} className="flex items-center gap-2">
                <span className="text-green-500 font-bold text-lg">✔</span>
                <span className="text-sm text-gray-700">{t.styles[s]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="card p-4">
          <div className="section-title">💬 {t.reviewSec}</div>
          <div className="space-y-3">
            {tutor.reviews.map((r, i) => (
              <div key={i} className="rounded-2xl p-3" style={{ background: '#fff5f7' }}>
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-rose-600"
                    style={{ background: '#fda4af' }}
                  >
                    {r.name[0]}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{r.name}</span>
                  <Stars rating={r.rating} />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            ))}
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
        <button className="btn-primary" onClick={handleBook}>
          💕 {t.bookNow}
        </button>
      </div>
    </div>
  )
}
