/**
 * Pure tutor list query (filter + sort). Keeps UI components free of business rules.
 */

export const TUTOR_SORT_KEYS = ['popular', 'rating', 'sales', 'newest']

export const TUTOR_FILTER_KEYS = ['beginner', 'freetalk', 'love', 'offline']

export function normalizeSearchQuery(s) {
  return s.toLowerCase().trim()
}

export function tutorMatchesSearch(tutor, query, lang) {
  if (!query) return true
  const n = normalizeSearchQuery(query)
  const intro = lang === 'ja' ? tutor.intro.ja : tutor.intro.ko
  const tags = lang === 'ja' ? tutor.tags.ja : tutor.tags.ko
  const blob = [tutor.nameKr, tutor.nameJp, tutor.nameEn, intro, ...tags].join(' ').toLowerCase()
  return blob.includes(n)
}

export function tutorMatchesFilters(tutor, filters, lang) {
  if (!filters.length) return true
  const tags = lang === 'ja' ? tutor.tags.ja : tutor.tags.ko
  return filters.every((f) => {
    if (f === 'offline') {
      return tags.some((tag) => tag.includes('オフライン') || tag.includes('오프라인'))
    }
    return tutor.styles.includes(f)
  })
}

export function sortTutorList(list, sortKey) {
  const copy = [...list]
  if (sortKey === 'popular') {
    copy.sort((a, b) => Number(b.popular) - Number(a.popular) || b.rating - a.rating)
  } else if (sortKey === 'rating') {
    copy.sort((a, b) => b.rating - a.rating)
  } else if (sortKey === 'sales') {
    copy.sort((a, b) => b.reviewCount - a.reviewCount)
  } else if (sortKey === 'newest') {
    copy.sort((a, b) => b.joinedYear - a.joinedYear || b.id - a.id)
  }
  return copy
}

export function queryTutorDirectory(tutors, { lang, sort, filters, search }) {
  const base = tutors.filter(
    (t) => tutorMatchesSearch(t, search, lang) && tutorMatchesFilters(t, filters, lang),
  )
  return sortTutorList(base, sort)
}

export function averageTutorRating(tutors) {
  if (!tutors.length) return '0.0'
  const sum = tutors.reduce((acc, t) => acc + t.rating, 0)
  return (sum / tutors.length).toFixed(2)
}
