import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '@/context/AppContext'
import { ROUTE_PATHS } from '@/config/routes'
import Stars from '@/components/ui/Stars'
import Avatar from '@/components/ui/Avatar'
import BackLink from '@/components/ui/BackLink'
import SectionCard from '@/components/ui/SectionCard'
import StickyBar from '@/components/ui/StickyBar'

export default function ConfirmPage() {
  const { lang, t, selectedTutor: tutor } = useApp()
  const navigate = useNavigate()
  const [agree, setAgree] = useState(true)

  const details = [
    { icon: '💻', label: t.lessonTypeLabel, value: t.bookingDetail },
    { icon: '📅', label: t.timeLabel, value: t.bookingDate },
    { icon: '💴', label: t.priceLabel, value: t.bookingPrice },
  ]

  return (
    <div className="pb-4">
      <div className="hero-gradient page-hero">
        <BackLink label={t.back} onClick={() => navigate(-1)} />
        <h2 className="text-xl font-extrabold text-gray-800">{t.confirmTitle}</h2>
        <p className="mt-1 text-xs text-gray-500">
          {lang === 'ja' ? '内容を確認して、最後に決済へ進みます。' : '내용을 확인한 뒤 결제로 진행해요.'}
        </p>
      </div>

      <div className="page-stack page-stack--narrow !gap-4">
        <SectionCard title={t.tutorSummary}>
          <div className="flex items-center gap-4">
            <Avatar tutor={tutor} size={64} />
            <div className="min-w-0">
              <div className="text-base font-bold text-gray-800">
                {lang === 'ja' ? tutor.nameJp : tutor.nameKr}
              </div>
              <div className="mt-0.5 text-xs text-gray-400">
                {tutor.age}
                {t.age} · {tutor.area}
              </div>
              <Stars rating={tutor.rating} />
            </div>
          </div>
        </SectionCard>

        <SectionCard title={lang === 'ja' ? '予約内容' : '예약 내용'}>
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
        </SectionCard>

        <div
          className="rounded-3xl border border-pink-200 p-4"
          style={{ background: 'linear-gradient(135deg,#fff1f2,#ffe4e6)' }}
        >
          <p className="mb-2 text-xs font-bold text-gray-800">
            {lang === 'ja' ? '予約前チェック' : '예약 전 체크'}
          </p>
          {t.checks.map((c, i) => (
            <div key={i} className="flex items-center gap-2 py-1">
              <span className="text-lg font-bold text-green-500">✔</span>
              <span className="text-sm text-gray-700">{c}</span>
            </div>
          ))}
        </div>

        <SectionCard title={t.confirmExtrasTitle}>
          <input
            type="text"
            readOnly
            placeholder={t.confirmCouponPh}
            className="inp mb-3 cursor-not-allowed opacity-70"
          />
          <label className="flex cursor-pointer items-center gap-2 rounded-2xl bg-gray-50 px-3 py-2.5">
            <input type="checkbox" className="h-4 w-4 accent-rose-500" defaultChecked={false} />
            <span className="text-sm text-gray-600">{t.confirmPoints}</span>
          </label>
          <div className="mt-3 rounded-2xl border border-gray-100 bg-gray-50/80 px-3 py-2.5">
            <div className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              {t.receiptEmail}
            </div>
            <div className="text-sm font-medium text-gray-800">{t.receiptEmailVal}</div>
          </div>
        </SectionCard>

        <SectionCard title={t.payMethod}>
          <div className="flex items-center gap-3 rounded-2xl bg-gray-50 px-4 py-3">
            <span className="text-3xl">💳</span>
            <div>
              <div className="text-sm font-semibold text-gray-700">Visa **** 4242</div>
              <div className="text-xs text-gray-400">{t.savedCard}</div>
            </div>
          </div>
        </SectionCard>

        <label className="flex cursor-pointer items-start gap-3 rounded-3xl border border-pink-100 bg-white p-4">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 flex-shrink-0 accent-rose-500"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <span className="text-sm leading-relaxed text-gray-700">{t.policyAgree}</span>
        </label>
      </div>

      <StickyBar>
        <button
          type="button"
          className="btn-primary"
          disabled={!agree}
          onClick={() => agree && navigate(ROUTE_PATHS.COMPLETE)}
        >
          💕 {t.confirmBtn}
        </button>
      </StickyBar>
    </div>
  )
}
