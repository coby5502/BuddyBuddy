import { useApp } from '@/context/AppContext'
import SectionCard from '@/components/ui/SectionCard'

export default function SignupPage() {
  const { t } = useApp()

  return (
    <div className="pb-10">
      <div className="hero-gradient page-hero page-hero--tight">
        <div className="text-center">
          <span className="mb-3 inline-block rounded-full border border-pink-200 bg-white/90 px-3 py-1 text-[10px] font-bold text-rose-500">
            {t.signupHeroBadge}
          </span>
          <div className="mb-3 text-5xl">💕</div>
          <h2 className="text-2xl font-extrabold text-gray-800">{t.signupTitle}</h2>
          <p className="mt-1 text-sm text-gray-500">{t.signupSub}</p>
        </div>
      </div>

      <div className="page-stack page-stack--narrow !gap-4 !pt-2">
        <SectionCard title={t.signupPerksTitle}>
          <ul className="space-y-2">
            {t.signupPerks.map((line, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="font-bold text-rose-500">✓</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <div className="space-y-3">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-gray-200 bg-white py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            <span className="text-xl">🔵</span>
            {t.googleBtn}
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-black bg-black py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <span className="text-xl">🍎</span>
            {t.appleBtn}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400">{t.orLabel}</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <SectionCard title={t.signupFormTitle}>
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-gray-600">{t.nameLabel}</label>
              <input type="text" placeholder={t.namePh} className="inp" autoComplete="name" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-gray-600">{t.emailLabel}</label>
              <input type="email" placeholder={t.emailPh} className="inp" autoComplete="email" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-gray-600">{t.passLabel}</label>
              <input type="password" placeholder="••••••••" className="inp" autoComplete="new-password" />
            </div>
          </div>
        </SectionCard>

        <button type="button" className="btn-primary">
          {t.signupBtn}
        </button>

        <p className="px-1 text-center text-xs leading-relaxed text-gray-400">{t.privacyNote}</p>
      </div>
    </div>
  )
}
