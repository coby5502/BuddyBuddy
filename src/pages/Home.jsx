import { useState } from 'react'
import { useApp } from '../context/AppContext'
import TutorCard from '../components/TutorCard'
import tutors from '../data/tutors'

const SORT_KEYS = ['popular', 'rating', 'sales', 'newest']
const FILTER_KEYS = ['beginner', 'freetalk', 'love', 'offline']

export default function Home() {
  const { lang, t } = useApp()
  const [sort, setSort] = useState('popular')
  const [showSort, setShowSort] = useState(false)
  const [activeFilters, setActiveFilters] = useState([])

  const toggleFilter = (f) =>
    setActiveFilters((p) => (p.includes(f) ? p.filter((x) => x !== f) : [...p, f]))

  return (
    <div className="pb-2">
      {/* Hero */}
      <div
        className="px-4 pt-5 pb-7"
        style={{ background: 'linear-gradient(135deg,#fff5f7,#fce7f3,#fdf4ff)' }}
      >
        <p className="text-xs text-gray-400 mb-1">✨ {t.subtagline}</p>
        <h1 className="text-[22px] font-extrabold text-gray-800 leading-tight mb-4">
          {t.tagline}
        </h1>
        {/* Search */}
        <div
          className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white"
          style={{ border: '1px solid #fecdd3', boxShadow: '0 2px 8px rgba(244,63,94,0.07)' }}
        >
          <span className="text-gray-400">🔍</span>
          <input
            placeholder={t.searchPh}
            className="flex-1 outline-none text-sm text-gray-600 bg-transparent"
          />
        </div>
      </div>

      {/* Sort + Filter */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="relative">
            <button
              onClick={() => setShowSort((s) => !s)}
              className="flex items-center gap-1.5 bg-white text-sm text-gray-700 font-semibold px-3 py-1.5 rounded-2xl"
              style={{ border: '1.5px solid #fecdd3' }}
            >
              <span>↕️</span>
              <span>{t.sortOpts[sort]}</span>
              <span className="text-gray-400 text-xs">▾</span>
            </button>

            {showSort && (
              <div
                className="absolute top-11 left-0 z-30 bg-white rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  border: '1px solid #fecdd3',
                  minWidth: 144,
                }}
              >
                {SORT_KEYS.map((k) => (
                  <button
                    key={k}
                    onClick={() => { setSort(k); setShowSort(false) }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-pink-50 ${
                      sort === k ? 'text-rose-500 font-bold bg-pink-50' : 'text-gray-700'
                    }`}
                  >
                    {t.sortOpts[k]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <span className="text-xs text-gray-400">
            {tutors.length}{t.tutorCount}
          </span>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {FILTER_KEYS.map((f) => (
            <button
              key={f}
              onClick={() => toggleFilter(f)}
              className={`filter-chip ${activeFilters.includes(f) ? 'active' : ''}`}
            >
              {t.filters[f]}
            </button>
          ))}
        </div>

        {/* Tutor list */}
        {tutors.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </div>
  )
}
