import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Stars from './ui/Stars'
import TagChip from './ui/TagChip'
import Avatar from './ui/Avatar'

export default function TutorCard({ tutor }) {
  const { lang, t, setSelectedTutor } = useApp()
  const navigate = useNavigate()

  const handleView = () => {
    setSelectedTutor(tutor)
    navigate(`/tutor/${tutor.id}`)
  }

  return (
    <div className="flex overflow-hidden mb-4 card">
      {/* Image area */}
      <div
        className="relative flex-shrink-0 flex flex-col items-center justify-center gap-2"
        style={{ width: 128, background: tutor.gradient }}
      >
        <Avatar tutor={tutor} size={64} />
        <span
          className="text-xs text-gray-500 rounded-full px-2 py-0.5"
          style={{ background: 'rgba(255,255,255,0.7)' }}
        >
          {tutor.type}
        </span>
        {tutor.popular && (
          <div className="absolute top-2 left-2 bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
            {t.popBadge}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 p-3 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-0.5">
            <h3 className="font-bold text-gray-800 text-[15px]">
              {lang === 'ja' ? tutor.nameJp : tutor.nameKr}
            </h3>
            <span className="text-xs text-gray-400">
              {tutor.age}{t.age}
            </span>
          </div>
          <p className="text-[11px] text-gray-500 mb-2 leading-relaxed">
            {lang === 'ja' ? tutor.intro.ja : tutor.intro.ko}
          </p>
          <div className="flex flex-wrap gap-1 mb-2">
            {(lang === 'ja' ? tutor.tags.ja : tutor.tags.ko).slice(0, 2).map((tag, i) => (
              <TagChip key={i} label={tag} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Stars rating={tutor.rating} />
            <span className="text-[11px] text-gray-400">({tutor.reviewCount}{t.reviews})</span>
          </div>
          <div className="flex items-center gap-3 mb-2 text-xs">
            <span className="text-gray-500">💻 ¥{tutor.onlinePrice.toLocaleString()}</span>
            <span className="text-rose-500 font-bold">🏠 ¥{tutor.offlinePrice.toLocaleString()}</span>
          </div>
          <button
            onClick={handleView}
            className="btn-primary text-xs py-2"
          >
            {t.viewProfile}
          </button>
        </div>
      </div>
    </div>
  )
}
