import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Stars from './ui/Stars'
import TagChip from './ui/TagChip'

export default function TutorCard({ tutor }) {
  const { lang, t, setSelectedTutor } = useApp()
  const navigate = useNavigate()

  const handleView = () => {
    setSelectedTutor(tutor)
    navigate(`/tutor/${tutor.id}`)
  }

  const tags = lang === 'ja' ? tutor.tags.ja : tutor.tags.ko

  return (
    <article className="card mb-4 flex overflow-hidden">
      <div className="relative h-auto min-h-[172px] w-[132px] flex-shrink-0 overflow-hidden">
        <img
          src={tutor.photoUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
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
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-1.5 pb-2.5 pt-8">
          <span className="max-w-[120px] truncate text-center text-[11px] font-bold text-white drop-shadow-md">
            {tutor.type}
          </span>
          <span className="mt-0.5 text-[10px] font-medium text-white/90">{tutor.area}</span>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between p-3.5">
        <div>
          <div className="mb-1 flex items-start justify-between gap-2">
            <h3 className="text-[15px] font-bold leading-tight text-gray-800">
              {lang === 'ja' ? tutor.nameJp : tutor.nameKr}
            </h3>
            <span className="flex-shrink-0 text-xs text-gray-400">
              {tutor.age}
              {t.age}
            </span>
          </div>
          <p className="mb-2 line-clamp-2 text-[11px] leading-relaxed text-gray-500">
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
          <div className="mb-2.5 flex items-center gap-3 text-xs">
            <span className="text-gray-500">
              💻 ¥{tutor.onlinePrice.toLocaleString()}
            </span>
            <span className="font-bold text-rose-500">
              🏠 ¥{tutor.offlinePrice.toLocaleString()}
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
