import { useMemo, useState } from 'react'
import { useApp } from '../context/AppContext'
import TutorCard from '../components/TutorCard'
import tutors from '../data/tutors'

const SORT_KEYS = ['popular', 'rating', 'sales', 'newest']
const FILTER_KEYS = ['beginner', 'freetalk', 'love', 'offline']

function normalize(s) {
  return s.toLowerCase().trim()
}

function tutorMatchesSearch(tutor, q, lang) {
  if (!q) return true
  const n = normalize(q)
  const intro = lang === 'ja' ? tutor.intro.ja : tutor.intro.ko
  const tags = lang === 'ja' ? tutor.tags.ja : tutor.tags.ko
  const blob = [tutor.nameKr, tutor.nameJp, tutor.nameEn, intro, ...tags].join(' ').toLowerCase()
  return blob.includes(n)
}

function tutorMatchesFilters(tutor, filters, lang) {
  if (filters.length === 0) return true
  const tags = lang === 'ja' ? tutor.tags.ja : tutor.tags.ko
  return filters.every((f) => {
    if (f === 'offline') {
      return tags.some((tag) => tag.includes('オフライン') || tag.includes('오프라인'))
    }
    return tutor.styles.includes(f)
  })
}

function sortTutors(list, key) {
  const copy = [...list]
  if (key === 'popular') {
    copy.sort((a, b) => Number(b.popular) - Number(a.popular) || b.rating - a.rating)
  } else if (key === 'rating') {
    copy.sort((a, b) => b.rating - a.rating)
  } else if (key === 'sales') {
    copy.sort((a, b) => b.reviewCount - a.reviewCount)
  } else if (key === 'newest') {
    copy.sort((a, b) => b.joinedYear - a.joinedYear || b.id - a.id)
  }
  return copy
}

export default function Home() {
  const { lang, t } = useApp()
  const [sort, setSort] = useState('popular')
  const [showSort, setShowSort] = useState(false)
  const [activeFilters, setActiveFilters] = useState([])
  const [search, setSearch] = useState('')

  const toggleFilter = (f) =>
    setActiveFilters((p) => (p.includes(f) ? p.filter((x) => x !== f) : [...p, f]))

  const filtered = useMemo(() => {
    const base = tutors.filter(
      (tu) => tutorMatchesSearch(tu, search, lang) && tutorMatchesFilters(tu, activeFilters, lang),
    )
    return sortTutors(base, sort)
  }, [activeFilters, lang, search, sort])

  const avgRating = useMemo(() => {
    const s = tutors.reduce((acc, tu) => acc + tu.rating, 0)
    return (s / tutors.length).toFixed(2)
  }, [])

  return (
    <div className="pb-2">
      <div className="hero-gradient px-4 pb-8 pt-6 lg:px-10 lg:pb-10 lg:pt-8 xl:px-12">
        <p className="mb-1 text-xs text-gray-400 lg:text-sm">✨ {t.subtagline}</p>
        <h1 className="mb-2 text-[22px] font-extrabold leading-tight text-gray-800 lg:text-3xl xl:text-[2rem]">
          {t.tagline}
        </h1>
        <p className="mb-3 max-w-2xl text-xs font-medium leading-relaxed text-rose-500/90 lg:text-sm">
          {t.conceptMood}
        </p>
        <p className="mb-4 text-[11px] font-medium text-gray-500 lg:text-xs">{t.homeIntroHint}</p>

        <div className="search-shell mb-5 lg:max-w-xl">
          <span className="text-gray-400" aria-hidden>
            🔍
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchPh}
            className="flex-1 bg-transparent text-sm text-gray-600 outline-none"
            type="search"
            autoComplete="off"
          />
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-3 gap-2 lg:gap-4">
          <div className="stat-pill">
            <span className="text-[10px] text-gray-400 lg:text-xs">{t.homeStatSatisfaction}</span>
            <span className="text-sm font-bold text-gray-800 lg:text-lg">98%</span>
          </div>
          <div className="stat-pill">
            <span className="text-[10px] text-gray-400 lg:text-xs">{t.homeStatRating}</span>
            <span className="text-sm font-bold text-gray-800 lg:text-lg">{avgRating}</span>
          </div>
          <div className="stat-pill">
            <span className="text-[10px] text-gray-400 lg:text-xs">{t.homeStatTeachers}</span>
            <span className="text-sm font-bold text-gray-800 lg:text-lg">{tutors.length}</span>
          </div>
        </div>
      </div>

      <div className="page-stack gap-5 !px-4 !pb-24 pt-5 lg:!px-10 lg:!pb-24 xl:!px-12">
        <section className="lg:mx-auto lg:max-w-5xl">
          <h2 className="section-title">{t.homeTrustTitle}</h2>
          <ul className="space-y-2 rounded-3xl border border-pink-100/80 bg-brand-50/60 p-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:space-y-0 lg:p-5">
            {t.homeTrustItems.map((line, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="font-bold text-rose-500">✓</span>
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="lg:mx-auto lg:max-w-5xl">
          <h2 className="section-title">{t.homeHowTitle}</h2>
          <ol className="flex gap-2 lg:gap-4">
            {t.homeHowSteps.map((label, i) => (
              <li
                key={i}
                className="flex flex-1 flex-col items-center gap-2 rounded-2xl border border-pink-100/90 bg-white px-2 py-3 text-center shadow-sm lg:gap-3 lg:py-5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-xs font-extrabold text-white lg:h-10 lg:w-10 lg:text-sm">
                  {i + 1}
                </span>
                <span className="text-[11px] font-semibold leading-snug text-gray-700 lg:text-sm">
                  {label}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="lg:mx-auto lg:max-w-7xl">
          <div className="mb-3 flex flex-wrap items-center gap-2 lg:mb-4 lg:gap-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowSort((s) => !s)}
                className="flex items-center gap-1.5 rounded-2xl border-[1.5px] border-pink-200/90 bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm lg:px-4 lg:py-2"
              >
                <span>↕️</span>
                <span>{t.sortOpts[sort]}</span>
                <span className="text-xs text-gray-400">▾</span>
              </button>

              {showSort && (
                <div
                  className="absolute left-0 top-11 z-30 min-w-[160px] overflow-hidden rounded-2xl border border-pink-200 bg-white shadow-xl"
                >
                  {SORT_KEYS.map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => {
                        setSort(k)
                        setShowSort(false)
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-pink-50 ${
                        sort === k ? 'bg-pink-50 font-bold text-rose-500' : 'text-gray-700'
                      }`}
                    >
                      {t.sortOpts[k]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="text-xs text-gray-400 lg:text-sm">
              {filtered.length}/{tutors.length}
              {t.tutorCount}
            </span>
          </div>

          <div className="mb-4 flex flex-wrap gap-2 lg:mb-6 lg:gap-3">
            {FILTER_KEYS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => toggleFilter(f)}
                className={`filter-chip ${activeFilters.includes(f) ? 'active' : ''}`}
              >
                {t.filters[f]}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-pink-200 bg-brand-50/50 py-10 text-center text-sm text-gray-500 lg:py-16">
              {t.searchEmpty}
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3">
              {filtered.map((tutor) => (
                <TutorCard key={tutor.id} tutor={tutor} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
