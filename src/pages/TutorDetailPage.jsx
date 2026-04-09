import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '@/context/AppContext'
import { ROUTE_PATHS } from '@/config/routes'
import { useTutorByParamId } from '@/features/tutors/hooks/useTutorByParamId'
import Stars from '@/components/ui/Stars'
import Avatar from '@/components/ui/Avatar'
import BackLink from '@/components/ui/BackLink'
import SectionCard from '@/components/ui/SectionCard'
import StickyBar from '@/components/ui/StickyBar'

export default function TutorDetailPage() {
  const tutor = useTutorByParamId()
  const { lang, t, setSelectedTutor } = useApp()
  const navigate = useNavigate()
  const [tab, setTab] = useState('online')

  const handleBook = () => {
    setSelectedTutor(tutor)
    navigate(ROUTE_PATHS.BOOKING)
  }

  const onlineCourses = t.onlineCourses
  const offlineCourses = t.offlineCourses

  return (
    <>
      <div className="pb-4 lg:grid lg:grid-cols-[minmax(280px,38%)_minmax(0,1fr)] lg:items-start lg:gap-8 lg:pb-10 lg:pt-2 xl:gap-10">
        <div className="relative lg:sticky lg:top-0 lg:self-start">
          <div className="relative h-[220px] w-full overflow-hidden lg:h-[min(88vh,calc(100vh-5rem))] lg:min-h-[520px] lg:rounded-3xl lg:shadow-md">
            <img
              src={tutor.photoUrl}
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div
              className="absolute inset-0 lg:rounded-3xl"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 42%, rgba(255,255,255,0) 100%)',
              }}
            />
            <div className="page-hero absolute left-0 right-0 top-0 z-10 !pb-0 lg:!px-6 lg:!pt-5">
              <BackLink variant="light" label={t.back} onClick={() => navigate(-1)} />
            </div>
            <button
              type="button"
              className="absolute bottom-4 right-4 z-10 hidden rounded-full border border-white/40 bg-black/25 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-sm lg:inline-flex"
            >
              ▶ {lang === 'ja' ? '紹介ムービー（デモ）' : '소개 영상 (데모)'}
            </button>
          </div>
          <p className="mt-2 hidden text-center text-[10px] text-gray-400 lg:block lg:text-left lg:text-xs">
            {t.detailMediaHint}
          </p>
          <div className="absolute bottom-0 left-0 right-0 flex translate-y-[46%] flex-col items-center px-4 lg:hidden">
            <Avatar tutor={tutor} size={104} ring />
          </div>
        </div>

        <div className="page-stack !gap-4 pt-[3.25rem] lg:!px-4 lg:!pb-28 lg:!pt-6 xl:!px-6">
          <div className="hidden items-center gap-5 lg:flex">
            <Avatar tutor={tutor} size={88} ring />
            <div className="min-w-0 flex-1 text-left">
              <h2 className="text-2xl font-extrabold text-gray-800 xl:text-3xl">
                {lang === 'ja' ? tutor.nameJp : tutor.nameKr}
              </h2>
              <p className="text-sm text-gray-400">{tutor.nameEn}</p>
              <p className="mt-1 text-sm text-gray-500">
                {tutor.age}
                {t.age} · {tutor.area}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Stars rating={tutor.rating} />
                <span className="text-sm text-gray-500">
                  ({tutor.reviewCount}
                  {t.reviews})
                </span>
                <span className="rounded-full border border-pink-200 bg-white px-2 py-0.5 text-xs font-semibold text-rose-600">
                  {tutor.type}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center lg:hidden">
            <h2 className="text-2xl font-extrabold text-gray-800">
              {lang === 'ja' ? tutor.nameJp : tutor.nameKr}
            </h2>
            <p className="text-xs text-gray-400">{tutor.nameEn}</p>
            <p className="mt-1 text-sm text-gray-500">
              {tutor.age}
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
          </div>

          <div className="mx-auto flex max-w-sm flex-wrap justify-center gap-2 text-[11px] text-gray-500 lg:mx-0 lg:max-w-none lg:justify-start">
            <span className="rounded-full bg-sand-100 px-2.5 py-1 font-medium">
              {t.joinedTpl.replace('{year}', String(tutor.joinedYear))}
            </span>
            <span className="rounded-full bg-sand-100 px-2.5 py-1 font-medium">
              {t.responseTimeTpl.replace('{n}', String(tutor.responseMins))}
            </span>
            <span className="rounded-full bg-sand-100 px-2.5 py-1 font-medium">
              {t.lessonsTpl.replace('{n}', String(tutor.lessonsDone))}
            </span>
          </div>

          <SectionCard title={t.detailMetaTitle}>
            <p className="text-sm leading-relaxed text-gray-800 lg:text-base">
              {lang === 'ja' ? tutor.intro.ja : tutor.intro.ko}
            </p>
            <p className="mt-3 border-t border-pink-100/80 pt-3 text-sm leading-relaxed text-gray-600 lg:text-[15px]">
              {lang === 'ja' ? tutor.bioDetail.ja : tutor.bioDetail.ko}
            </p>
          </SectionCard>

          <SectionCard title={t.languagesTitle}>
            <p className="text-sm text-gray-700 lg:text-base">
              {lang === 'ja' ? tutor.languages.ja : tutor.languages.ko}
            </p>
          </SectionCard>

          <SectionCard title={t.credentialsTitle}>
            <p className="text-sm leading-relaxed text-gray-700 lg:text-base">
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
                  className={`flex-1 rounded-2xl py-2.5 text-sm font-semibold transition-all lg:py-3 lg:text-base ${
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
                    className="flex items-center justify-between rounded-2xl px-4 py-3 lg:py-3.5"
                    style={{ background: '#fff5f7' }}
                  >
                    <span className="text-sm font-medium text-gray-700 lg:text-base">{c.label}</span>
                    <span className="font-bold text-rose-500 lg:text-lg">{c.price}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <div
                  className="mb-3 flex items-center gap-2 rounded-2xl border border-pink-200 px-4 py-3"
                  style={{ background: 'linear-gradient(135deg,#fff1f2,#ffe4e6)' }}
                >
                  <span className="text-lg">📍</span>
                  <div>
                    <div
                      className="mb-1 inline-block rounded-full px-2 py-0.5 text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg,#f43f5e,#ec4899)' }}
                    >
                      {t.premBadge} · {t.popBadge}
                    </div>
                    <p className="text-sm text-gray-700 lg:text-base">{t.offlineDesc}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {offlineCourses.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 lg:py-3.5"
                      style={{ background: '#fff1f2' }}
                    >
                      <span className="text-sm font-medium text-gray-700 lg:text-base">{c.label}</span>
                      <span className="font-bold text-rose-600 lg:text-lg">{c.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </SectionCard>

          <SectionCard title={t.lessonStyle}>
            <ul className="space-y-2">
              {tutor.styles.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-gray-700 lg:text-base">
                  <span className="text-lg font-bold text-green-500">✔</span>
                  {t.styles[s]}
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title={t.policiesTitle}>
            <ul className="space-y-2 text-sm text-gray-700 lg:text-base">
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
            <div className="grid gap-3 lg:grid-cols-1 xl:grid-cols-2">
              {tutor.reviews.map((r, i) => (
                <div key={i} className="rounded-2xl p-3 lg:p-4" style={{ background: '#fff5f7' }}>
                  <div className="mb-1 flex items-center gap-2">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-rose-600 lg:h-8 lg:w-8"
                      style={{ background: '#fda4af' }}
                    >
                      {r.name[0]}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{r.name}</span>
                    <Stars rating={r.rating} />
                  </div>
                  <p className="text-xs leading-relaxed text-gray-600 lg:text-sm">{r.text}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title={t.faqTitle}>
            <ul className="space-y-3">
              {t.faqItems.map((item, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-pink-100 bg-brand-50/40 px-3 py-2.5 lg:px-4 lg:py-3"
                >
                  <p className="text-xs font-bold text-gray-800 lg:text-sm">{item.q}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600 lg:text-sm">{item.a}</p>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>

      <StickyBar>
        <button type="button" className="btn-primary" onClick={handleBook}>
          💕 {t.bookNow}
        </button>
      </StickyBar>
    </>
  )
}
