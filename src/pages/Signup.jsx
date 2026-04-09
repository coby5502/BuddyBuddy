import { useApp } from '../context/AppContext'

export default function Signup() {
  const { t } = useApp()

  return (
    <div className="px-5 pt-6 pb-10">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">💕</div>
        <h2 className="text-2xl font-extrabold text-gray-800 mb-1">{t.signupTitle}</h2>
        <p className="text-sm text-gray-400">{t.signupSub}</p>
      </div>

      {/* Social login */}
      <div className="space-y-3 mb-6">
        <button
          className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          style={{ background: '#fff', border: '2px solid #e5e7eb' }}
        >
          <span className="text-xl">🔵</span>
          {t.googleBtn}
        </button>
        <button
          className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: '#000', border: 'none' }}
        >
          <span className="text-xl">🍎</span>
          {t.appleBtn}
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">{t.orLabel}</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Form */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.nameLabel}</label>
          <input type="text" placeholder={t.namePh} className="inp" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.emailLabel}</label>
          <input type="email" placeholder={t.emailPh} className="inp" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.passLabel}</label>
          <input type="password" placeholder="••••••••" className="inp" />
        </div>
      </div>

      <button className="btn-primary mb-4">{t.signupBtn}</button>

      <p className="text-center text-xs text-gray-400 leading-relaxed">{t.privacyNote}</p>
    </div>
  )
}
