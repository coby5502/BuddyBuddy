import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Avatar from '../components/ui/Avatar'
import BackLink from '../components/ui/BackLink'
import SectionCard from '../components/ui/SectionCard'
import StickyBar from '../components/ui/StickyBar'

const TIMES = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '18:00', '19:00', '20:00']

export default function Booking() {
  const { lang, t, selectedTutor: tutor } = useApp()
  const navigate = useNavigate()
  const [ltype, setLtype] = useState('online')
  const [selDate, setSelDate] = useState(null)
  const [selTime, setSelTime] = useState(null)
  const [selCourse, setSelCourse] = useState(null)
  const [note, setNote] = useState('')

  const today = new Date(2026, 3, 9)
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + i + 1)
    return d
  })

  const courses = ltype === 'online' ? t.onlineCourses : t.offlineCourses
  const canGo = selDate !== null && selTime !== null && selCourse !== null

  const progressFill = useMemo(() => {
    let n = 1
    if (selCourse !== null) n = 2
    if (selDate !== null) n = 3
    if (selTime !== null) n = 4
    return n
  }, [selCourse, selDate, selTime])

  return (
    <div className="pb-4">
      <div className="hero-gradient page-hero">
        <BackLink label={t.back} onClick={() => navigate(-1)} />
        <div className="mt-1 flex items-center gap-3">
          <Avatar tutor={tutor} size={52} />
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-rose-500/90">
              {t.tutorSummary}
            </p>
            <h2 className="text-lg font-extrabold leading-snug text-gray-800">
              {lang === 'ja' ? `${tutor.nameJp}先生` : `${tutor.nameKr} 선생님`}
            </h2>
            <p className="text-xs text-gray-500">
              {tutor.area} · {t.lessonsTpl.replace('{n}', String(tutor.lessonsDone))}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-2 flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`progress-dot ${i < progressFill ? 'progress-dot--on' : ''}`}
              />
            ))}
          </div>
          <div className="flex justify-between gap-1 text-[10px] text-gray-400">
            {t.bookingStepLabels.map((label, i) => (
              <span
                key={i}
                className={`flex-1 text-center leading-tight ${i < progressFill ? 'font-semibold text-rose-500' : ''}`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="page-stack page-stack--narrow !gap-4">
        <SectionCard title={`① ${t.selectLesson}`}>
          <div className="flex gap-2">
            {['online', 'offline'].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => {
                  setLtype(k)
                  setSelCourse(null)
                }}
                className={`flex-1 rounded-2xl py-3 text-sm font-semibold transition-all ${
                  ltype === k ? 'toggle-active' : 'toggle-inactive'
                }`}
              >
                {k === 'online' ? `💻 ${t.online}` : `🏠 ${t.offline}`}
              </button>
            ))}
          </div>
        </SectionCard>

        <SectionCard title={`② ${t.selectCourse}`}>
          <div className="space-y-2">
            {courses.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelCourse(i)}
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all"
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
        </SectionCard>

        <SectionCard title={`③ ${t.selectDate}`}>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {dates.map((d, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelDate(i)}
                className="flex flex-shrink-0 flex-col items-center rounded-2xl py-2 transition-all"
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
        </SectionCard>

        <SectionCard title={`④ ${t.selectTime}`}>
          <div className="grid grid-cols-3 gap-2">
            {TIMES.map((tm) => (
              <button
                key={tm}
                type="button"
                onClick={() => setSelTime(tm)}
                className="rounded-2xl py-2.5 text-sm font-semibold transition-all"
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
        </SectionCard>

        <SectionCard title={t.bookingNoteTitle}>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={t.bookingNotePh}
            rows={3}
            className="inp resize-none leading-relaxed"
          />
          <p className="mt-2 text-[11px] text-gray-400">
            {lang === 'ja'
              ? '講師がレッスン前に内容を把握するために使われます。'
              : '강사가 레슨 전 내용을 파악하는 데 사용돼요.'}
          </p>
        </SectionCard>
      </div>

      <StickyBar>
        <button
          type="button"
          className="btn-primary"
          disabled={!canGo}
          onClick={() => canGo && navigate('/confirm')}
        >
          {t.next}
        </button>
      </StickyBar>
    </div>
  )
}
