import { useNavigate } from 'react-router-dom'
import { useApp } from '@/context/AppContext'
import { tutorDetailPath } from '@/config/routes'
import Stars from '@/components/ui/Stars'
import TagChip from '@/components/ui/TagChip'

export default function TutorCard({ tutor }) {
  const { lang, t, setSelectedTutor } = useApp()
  const navigate = useNavigate()

  const handleView = () => {
    setSelectedTutor(tutor)
    navigate(tutorDetailPath(tutor.id))
  }

  const tags = lang === 'ja' ? tutor.tags.ja : tutor.tags.ko

  return (
    <article className="group card mb-4 flex h-full flex-row overflow-hidden transition-all duration-300 lg:mb-0 lg:flex-col lg:hover:-translate-y-1 lg:hover:shadow-lg">
      <div className="relative h-auto min-h-[172px] w-[132px] flex-shrink-0 overflow-hidden lg:aspect-[4/5] lg:w-full lg:min-h-0">
        <img
          src={tutor.photoUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] lg:group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.55) 100%), linear-gradient(135deg, rgba(255,255,255,0.08), transparent 45%)',
          }}
        />
        {tutor.popular && (
          <div className="absolute left-2 top-2 rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
            {t.popBadge}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-1.5 pb-2.5 pt-8 lg:hidden">
          <span className="max-w-[120px] truncate text-center text-[11px] font-bold text-white drop-shadow-md">
            {tutor.type}
          </span>
          <span className="mt-0.5 text-[10px] font-medium text-white/90">{tutor.area}</span>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between p-3.5 lg:p-4">
        <div>
          <div className="mb-1 hidden items-center justify-between gap-2 lg:flex">
            <span className="rounded-full bg-sand-100 px-2 py-0.5 text-[10px] font-bold text-rose-600">
              {tutor.type}
            </span>
            <span className="text-xs text-gray-400">{tutor.area}</span>
          </div>
          <div className="mb-1 flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="text-[15px] font-bold leading-tight text-gray-800 lg:text-base">
                {lang === 'ja' ? tutor.nameJp : tutor.nameKr}
              </h3>
              <p className="mt-0.5 truncate text-[11px] text-gray-400">{tutor.nameEn}</p>
            </div>
            <span className="flex-shrink-0 text-xs text-gray-400">
              {tutor.age}
              {t.age}
            </span>
          </div>
          <p className="mb-2 line-clamp-2 text-[11px] leading-relaxed text-gray-500 lg:text-xs">
            {lang === 'ja' ? tutor.intro.ja : tutor.intro.ko}
          </p>
          <div className="mb-2 flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag, i) => (
              <TagChip key={i} label={tag} />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] text-gray-400">
            <span>{t.lessonsTpl.replace('{n}', String(tutor.lessonsDone))}</span>
            <span aria-hidden>·</span>
            <span>{t.responseTimeTpl.replace('{n}', String(tutor.responseMins))}</span>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <Stars rating={tutor.rating} />
            <span className="text-[11px] text-gray-400">
              ({tutor.reviewCount}
              {t.reviews})
            </span>
          </div>
          <div className="mb-2.5 flex flex-col gap-1 text-[11px] lg:text-xs">
            <span className="text-gray-600">
              💻 <span className="font-semibold">{t.cardPriceOnline}</span>{' '}
              <span className="tabular-nums">¥{tutor.onlinePrice.toLocaleString()}</span>
            </span>
            <span className="font-bold text-rose-500">
              🏠 <span className="font-semibold">{t.cardPriceOffline}</span>{' '}
              <span className="tabular-nums">¥{tutor.offlinePrice.toLocaleString()}</span>
            </span>
          </div>
          <button type="button" onClick={handleView} className="btn-primary py-2.5 text-xs">
            {t.viewProfile}
          </button>
        </div>
      </div>
    </article>
  )
}
