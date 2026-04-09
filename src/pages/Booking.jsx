import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const TIMES = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '18:00', '19:00', '20:00']

export default function Booking() {
  const { lang, t, selectedTutor: tutor } = useApp()
  const navigate = useNavigate()
  const [ltype, setLtype] = useState('online')
  const [selDate, setSelDate] = useState(null)
  const [selTime, setSelTime] = useState(null)
  const [selCourse, setSelCourse] = useState(null)

  const today = new Date(2026, 3, 9)
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + i + 1)
    return d
  })

  const courses = ltype === 'online' ? t.onlineCourses : t.offlineCourses
  const canGo = selDate !== null && selTime !== null && selCourse !== null

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
        <h2 className="text-xl font-extrabold text-gray-800">
          {lang === 'ja'
            ? `${tutor.nameJp}先生の予約`
            : `${tutor.nameKr} 선생님 예약`}
        </h2>
      </div>

      <div className="px-4 py-4 space-y-3">
        {/* Step 1 */}
        <div className="card p-4">
          <div className="section-title">① {t.selectLesson}</div>
          <div className="flex gap-2">
            {['online', 'offline'].map((k) => (
              <button
                key={k}
                onClick={() => { setLtype(k); setSelCourse(null) }}
                className={`flex-1 py-3 rounded-2xl text-sm font-semibold transition-all ${
                  ltype === k ? 'toggle-active' : 'toggle-inactive'
                }`}
              >
                {k === 'online' ? `💻 ${t.online}` : `🏠 ${t.offline}`}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        <div className="card p-4">
          <div className="section-title">② {t.selectCourse}</div>
          <div className="space-y-2">
            {courses.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelCourse(i)}
                className="w-full flex justify-between items-center px-4 py-3 rounded-2xl transition-all"
                style={{
                  border: `2px solid ${selCourse === i ? '#f43f5e' : '#f3f4f6'}`,
                  background: selCourse === i ? '#fff1f2' : '#fafafa',
                }}
              >
                <span className="text-sm font-medium text-gray-700">{c.label}</span>
                <span
                  className="text-sm font-bold"
                  style={{ color: selCourse === i ? '#f43f5e' : '#6b7280' }}
                >
                  {c.price}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3 */}
        <div className="card p-4">
          <div className="section-title">③ {t.selectDate}</div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {dates.map((d, i) => (
              <button
                key={i}
                onClick={() => setSelDate(i)}
                className="flex-shrink-0 flex flex-col items-center py-2 rounded-2xl transition-all"
                style={{
                  width: 48,
                  border: `2px solid ${selDate === i ? '#f43f5e' : '#f3f4f6'}`,
                  background: selDate === i ? '#fff1f2' : '#fff',
                }}
              >
                <span className="text-[10px] text-gray-400">{t.dayNames[d.getDay()]}</span>
                <span
                  className="text-sm font-bold"
                  style={{ color: selDate === i ? '#f43f5e' : '#374151' }}
                >
                  {d.getDate()}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 4 */}
        <div className="card p-4">
          <div className="section-title">④ {t.selectTime}</div>
          <div className="grid grid-cols-3 gap-2">
            {TIMES.map((tm) => (
              <button
                key={tm}
                onClick={() => setSelTime(tm)}
                className="py-2.5 rounded-2xl text-sm font-semibold transition-all"
                style={{
                  border: `2px solid ${selTime === tm ? '#f43f5e' : '#f3f4f6'}`,
                  background: selTime === tm ? '#fff1f2' : '#fff',
                  color: selTime === tm ? '#f43f5e' : '#374151',
                }}
              >
                {tm}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky next button */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 py-3 z-40"
        style={{
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid #fecdd3',
        }}
      >
        <button
          className="btn-primary"
          disabled={!canGo}
          onClick={() => canGo && navigate('/confirm')}
        >
          {t.next}
        </button>
      </div>
    </div>
  )
}
