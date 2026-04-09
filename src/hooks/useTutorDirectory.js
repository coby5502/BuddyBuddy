import { useCallback, useMemo, useState } from 'react'
import { useApp } from '@/context/AppContext'
import tutors from '@/data/tutors'
import { queryTutorDirectory } from '@/domain/tutors/tutorDirectoryQuery'

/**
 * Tutor list state + derived filtered/sorted list (Open/Closed: list rules live in domain).
 */
export function useTutorDirectory(initialSort = 'popular') {
  const { lang } = useApp()
  const [sort, setSort] = useState(initialSort)
  const [activeFilters, setActiveFilters] = useState([])
  const [search, setSearch] = useState('')

  const filtered = useMemo(
    () => queryTutorDirectory(tutors, { lang, sort, filters: activeFilters, search }),
    [lang, sort, activeFilters, search],
  )

  const toggleFilter = useCallback((key) => {
    setActiveFilters((prev) =>
      prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key],
    )
  }, [])

  return {
    allTutors: tutors,
    filtered,
    sort,
    setSort,
    activeFilters,
    toggleFilter,
    search,
    setSearch,
  }
}
