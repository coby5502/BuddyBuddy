import { useState } from 'react'
import { useApp } from '../context/AppContext'

export default function TutorRegister() {
  const { t } = useApp()
  const [onlineOn, setOnlineOn] = useState(false)
  const [offlineOn, setOfflineOn] = useState(false)
  const [selStyles, setSelStyles] = useState([])

  const styleKeys = Object.keys(t.styles)
  const toggleStyle = (s) =>
    setSelStyles((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]))

  function Toggle({ on, setOn }) {
    return (
      <button
        onClick={() => setOn(!on)}
        className="relative flex-shrink-0 transition-colors"
        style={{
          width: 48, height: 26, borderRadius: 13,
          background: on ? '#f43f5e' : '#d1d5db',
          border: 'none', cursor: 'pointer',
        }}
      >
        <span
          style={{
            position: 'absolute', top: 3, width: 20, height: 20,
            background: '#fff', borderRadius: '50%',
            boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
            transition: 'left 0.2s',
            left: on ? 25 : 3,
          }}
        />
      </button>
    )
  }

  return (
    <div className="px-4 pt-5 pb-10">
      <div className="text-center mb-5">
        <div className="text-4xl mb-2">👨</div>
        <h2 className="text-xl font-extrabold text-gray-800">{t.tutorRegTitle}</h2>
        <p className="text-xs text-gray-400 mt-1">{t.tutorRegSub}</p>
      </div>

      <div className="space-y-3">
        {/* Basic info */}
        <div className="card p-4">
          <div className="section-title">{t.basicInfo}</div>
          <div className="space-y-3">
            {[
              { label: t.nameLabel, ph: '김민준 / キム・ミンジュン', type: 'text' },
              { label: t.age, ph: '25', type: 'number' },
              { label: t.areaLabel, ph: t.areaPh, type: 'text' },
            ].map((f, i) => (
              <div key={i}>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">{f.label}</label>
                <input type={f.type} placeholder={f.ph} className="inp" />
              </div>
            ))}
          </div>
        </div>

        {/* Photo & Video */}
        <div className="card p-4">
          <div className="section-title">{t.photoVideo}</div>
          <div className="space-y-3">
            {[
              { label: t.photoLabel, icon: '📸', hint: t.photoHint },
              { label: t.videoLabel, icon: '🎬', hint: t.videoHint },
            ].map((f, i) => (
              <div key={i}>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">{f.label}</label>
                <div
                  className="flex flex-col items-center gap-2 py-5 rounded-2xl cursor-pointer"
                  style={{ border: '2px dashed #fda4af', background: '#fff5f7' }}
                >
                  <span className="text-3xl">{f.icon}</span>
                  <span className="text-xs text-gray-400">{f.hint}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intro */}
        <div className="card p-4">
          <div className="section-title">{t.introSection}</div>
          <div className="space-y-3">
            {[
              { label: t.introJp, ph: t.introJpPh },
              { label: t.introKr, ph: t.introKrPh },
            ].map((f, i) => (
              <div key={i}>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">{f.label}</label>
                <textarea
                  placeholder={f.ph}
                  rows={3}
                  className="inp resize-none leading-relaxed"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Styles */}
        <div className="card p-4">
          <div className="section-title">{t.styleTitle}</div>
          <div className="flex flex-wrap gap-2">
            {styleKeys.map((s) => (
              <button
                key={s}
                onClick={() => toggleStyle(s)}
                className="text-sm px-4 py-2 rounded-full font-semibold transition-all"
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
        </div>

        {/* Online/Offline toggle */}
        <div className="card p-4">
          <div className="section-title">{t.availLesson}</div>
          <div className="space-y-2">
            {[
              { icon: '💻', label: t.onlineAvail, on: onlineOn, setOn: setOnlineOn },
              { icon: '🏠', label: t.offlineAvail, on: offlineOn, setOn: setOfflineOn },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 py-3 rounded-2xl"
                style={{ background: '#fafafa' }}
              >
                <div className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
                <Toggle on={item.on} setOn={item.setOn} />
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="card p-4">
          <div className="section-title">{t.priceTitle}</div>
          <div className="space-y-2.5">
            {[
              { label: t.onlinePrLabel, ph: '3500' },
              { label: t.offlinePrLabel, ph: '6000' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <label className="text-xs text-gray-500 font-medium" style={{ minWidth: 120 }}>
                  {f.label}
                </label>
                <div
                  className="flex-1 flex items-center px-3 py-2.5 rounded-2xl"
                  style={{ border: '2px solid #f3f4f6', background: '#fafafa' }}
                >
                  <span className="text-gray-400 text-sm mr-1">¥</span>
                  <input
                    type="number"
                    placeholder={f.ph}
                    className="flex-1 outline-none text-sm bg-transparent text-gray-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="btn-primary">👨 {t.tutorRegBtn}</button>
      </div>
    </div>
  )
}
