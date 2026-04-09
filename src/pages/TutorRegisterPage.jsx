import { useState } from 'react'
import { useApp } from '@/context/AppContext'
import SectionCard from '@/components/ui/SectionCard'
import FormSwitch from '@/components/ui/FormSwitch'

export default function TutorRegisterPage() {
  const { t } = useApp()
  const [onlineOn, setOnlineOn] = useState(false)
  const [offlineOn, setOfflineOn] = useState(false)
  const [selStyles, setSelStyles] = useState([])

  const styleKeys = Object.keys(t.styles)
  const toggleStyle = (s) =>
    setSelStyles((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]))

  return (
    <div className="pb-10">
      <div className="hero-gradient page-hero">
        <div className="text-center">
          <span className="mb-2 inline-block rounded-full border border-pink-200 bg-white/90 px-3 py-1 text-[10px] font-bold text-rose-500">
            {t.tutorRegHeroBadge}
          </span>
          <div className="mb-2 text-4xl">👨</div>
          <h2 className="text-xl font-extrabold text-gray-800">{t.tutorRegTitle}</h2>
          <p className="mt-1 text-xs text-gray-500">{t.tutorRegSub}</p>
        </div>

        <ol className="mt-5 flex gap-2">
          {t.tutorRegSteps.map((label, i) => (
            <li
              key={i}
              className="flex flex-1 flex-col items-center gap-1.5 rounded-2xl border border-pink-100 bg-white/90 px-2 py-2.5 text-center shadow-sm"
            >
              <span className="text-[10px] font-extrabold text-rose-500">{i + 1}</span>
              <span className="text-[10px] font-semibold leading-snug text-gray-700">{label}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="page-stack page-stack--narrow !gap-4 !pt-4">
        <SectionCard title={t.basicInfo}>
          <div className="space-y-3">
            {[
              { label: t.nameLabel, ph: '김민준 / キム・ミンジュン', type: 'text' },
              { label: t.age, ph: '25', type: 'number' },
              { label: t.areaLabel, ph: t.areaPh, type: 'text' },
            ].map((f, i) => (
              <div key={i}>
                <label className="mb-1.5 block text-xs font-semibold text-gray-600">{f.label}</label>
                <input type={f.type} placeholder={f.ph} className="inp" />
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title={t.photoVideo}>
          <div className="space-y-3">
            {[
              { label: t.photoLabel, icon: '📸', hint: t.photoHint },
              { label: t.videoLabel, icon: '🎬', hint: t.videoHint },
            ].map((f, i) => (
              <div key={i}>
                <label className="mb-1.5 block text-xs font-semibold text-gray-600">{f.label}</label>
                <button
                  type="button"
                  className="flex w-full flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-pink-300 bg-brand-50/80 py-5"
                >
                  <span className="text-3xl">{f.icon}</span>
                  <span className="text-xs text-gray-400">{f.hint}</span>
                </button>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title={t.introSection}>
          <div className="space-y-3">
            {[
              { label: t.introJp, ph: t.introJpPh },
              { label: t.introKr, ph: t.introKrPh },
            ].map((f, i) => (
              <div key={i}>
                <label className="mb-1.5 block text-xs font-semibold text-gray-600">{f.label}</label>
                <textarea placeholder={f.ph} rows={3} className="inp resize-none leading-relaxed" />
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title={t.styleTitle}>
          <div className="flex flex-wrap gap-2">
            {styleKeys.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => toggleStyle(s)}
                className="rounded-full px-4 py-2 text-sm font-semibold transition-all"
                style={{
                  border: `2px solid ${selStyles.includes(s) ? '#f43f5e' : '#e5e7eb'}`,
                  background: selStyles.includes(s) ? '#f43f5e' : '#fafafa',
                  color: selStyles.includes(s) ? '#fff' : '#6b7280',
                }}
              >
                {t.styles[s]}
              </button>
            ))}
          </div>
        </SectionCard>

        <SectionCard title={t.availLesson}>
          <div className="space-y-2">
            {[
              { icon: '💻', label: t.onlineAvail, on: onlineOn, setOn: setOnlineOn },
              { icon: '🏠', label: t.offlineAvail, on: offlineOn, setOn: setOfflineOn },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
                <FormSwitch on={item.on} onToggle={item.setOn} ariaLabel={item.label} />
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title={t.priceTitle}>
          <div className="space-y-2.5">
            {[
              { label: t.onlinePrLabel, ph: '3500' },
              { label: t.offlinePrLabel, ph: '6000' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <label className="min-w-[120px] text-xs font-medium text-gray-500">{f.label}</label>
                <div className="flex flex-1 items-center rounded-2xl border-2 border-gray-100 bg-gray-50 px-3 py-2.5">
                  <span className="mr-1 text-sm text-gray-400">¥</span>
                  <input
                    type="number"
                    placeholder={f.ph}
                    className="flex-1 bg-transparent text-sm text-gray-700 outline-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <button type="button" className="btn-primary">
          👨 {t.tutorRegBtn}
        </button>
      </div>
    </div>
  )
}
