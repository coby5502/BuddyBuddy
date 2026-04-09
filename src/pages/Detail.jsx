import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Stars from '../components/ui/Stars'
import Avatar from '../components/ui/Avatar'
import BackLink from '../components/ui/BackLink'
import SectionCard from '../components/ui/SectionCard'
import StickyBar from '../components/ui/StickyBar'
import tutors from '../data/tutors'

export default function Detail() {
  const { id } = useParams()
  const { lang, t, setSelectedTutor } = useApp()
  const navigate = useNavigate()
  const [tab, setTab] = useState('online')

  const tutor = tutors.find((tu) => tu.id === Number(id)) ?? tutors[0]

  const handleBook = () => {
    setSelectedTutor(tutor)
    navigate('/booking')
  }

  const onlineCourses = t.onlineCourses
  const offlineCourses = t.offlineCourses

  return (
    <div className="pb-4">
      <div className="relative h-[220px] w-full overflow-hidden">
        <img
          src={tutor.photoUrl}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 45%, rgba(255,255,255,1) 100%)',
          }}
        />
        <div className="page-hero absolute left-0 right-0 top-0 !pb-0">
          <BackLink variant="light" label={t.back} onClick={() => navigate(-1)} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex translate-y-[46%] flex-col items-center px-4">
          <Avatar tutor={tutor} size={104} ring />
        </div>
      </div>

      <div className="page-stack !gap-4 pt-[3.25rem]">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-gray-800">
            {lang === 'ja' ? tutor.nameJp : tutor.nameKr}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            {tutor.nameEn} · {tutor.age}
            {t.age} · {tutor.area}
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            <Stars rating={tutor.rating} />
            <span className="text-sm text-gray-500">
              ({tutor.reviewCount}
              {t.reviews})
            </span>
            <span className="rounded-full border border-pink-200 bg-white/90 px-2 py-0.5 text-xs font-semibold text-rose-600">
              {tutor.type}
            </span>
          </div>
          <div className="mx-auto mt-3 flex max-w-sm flex-wrap justify-center gap-2 text-[11px] text-gray-500">
            <span className="rounded-full bg-gray-100 px-2.5 py-1 font-medium">
              {t.joinedTpl.replace('{year}', String(tutor.joinedYear))}
            </span>
            <span className="rounded-full bg-gray-100 px-2.5 py-1 font-medium">
              {t.responseTimeTpl.replace('{n}', String(tutor.responseMins))}
            </span>
            <span className="rounded-full bg-gray-100 px-2.5 py-1 font-medium">
              {t.lessonsTpl.replace('{n}', String(tutor.lessonsDone))}
            </span>
          </div>
        </div>

        <SectionCard title={t.detailMetaTitle}>
          <p className="text-sm leading-relaxed text-gray-700">
            {lang === 'ja' ? tutor.intro.ja : tutor.intro.ko}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {lang === 'ja' ? tutor.bioDetail.ja : tutor.bioDetail.ko}
          </p>
        </SectionCard>

        <SectionCard title={t.languagesTitle}>
          <p className="text-sm text-gray-700">{lang === 'ja' ? tutor.languages.ja : tutor.languages.ko}</p>
        </SectionCard>

        <SectionCard title={t.credentialsTitle}>
          <p className="text-sm leading-relaxed text-gray-700">
            {lang === 'ja' ? tutor.certLine.ja : tutor.certLine.ko}
          </p>
        </SectionCard>

        <SectionCard title={t.lessonType}>
          <div className="mb-4 flex gap-2">
            {['online', 'offline'].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setTab(k)}
                className={`flex-1 rounded-2xl py-2.5 text-sm font-semibold transition-all ${
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
                  className="flex items-center justify-between rounded-2xl px-4 py-3"
                  style={{ background: '#fff5f7' }}
                >
                  <span className="text-sm font-medium text-gray-700">{c.label}</span>
                  <span className="font-bold text-rose-500">{c.price}</span>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div
                className="mb-3 flex items-center gap-2 rounded-2xl border border-pink-200 px-4 py-3"
                style={{ background: 'linear-gradient(135deg,#fff1f2,#ffe4e6)' }}
              >
                <span>📍</span>
                <div>
                  <div
                    className="mb-1 inline-block rounded-full px-2 py-0.5 text-xs font-bold text-white"
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
                    className="flex items-center justify-between rounded-2xl px-4 py-3"
                    style={{ background: '#fff1f2' }}
                  >
                    <span className="text-sm font-medium text-gray-700">{c.label}</span>
                    <span className="font-bold text-rose-600">{c.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </SectionCard>

        <SectionCard title={t.lessonStyle}>
          <ul className="space-y-2">
            {tutor.styles.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-lg font-bold text-green-500">✔</span>
                {t.styles[s]}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title={t.policiesTitle}>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="text-rose-400">•</span>
              <span>{t.policyBullet1}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-rose-400">•</span>
              <span>{t.policyBullet2}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-rose-400">•</span>
              <span>{t.policyBullet3}</span>
            </li>
          </ul>
        </SectionCard>

        <SectionCard title={`💬 ${t.reviewSec}`}>
          <div className="space-y-3">
            {tutor.reviews.map((r, i) => (
              <div key={i} className="rounded-2xl p-3" style={{ background: '#fff5f7' }}>
                <div className="mb-1 flex items-center gap-2">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-rose-600"
                    style={{ background: '#fda4af' }}
                  >
                    {r.name[0]}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{r.name}</span>
                  <Stars rating={r.rating} />
                </div>
                <p className="text-xs leading-relaxed text-gray-600">{r.text}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title={t.faqTitle}>
          <ul className="space-y-3">
            {t.faqItems.map((item, i) => (
              <li key={i} className="rounded-2xl border border-pink-100 bg-brand-50/40 px-3 py-2.5">
                <p className="text-xs font-bold text-gray-800">{item.q}</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">{item.a}</p>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      <StickyBar>
        <button type="button" className="btn-primary" onClick={handleBook}>
          💕 {t.bookNow}
        </button>
      </StickyBar>
    </div>
  )
}
