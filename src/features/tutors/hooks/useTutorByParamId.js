import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import tutors from '@/data/tutors'

/**
 * Resolves the tutor for the current :id route param with a safe fallback.
 */
export function useTutorByParamId() {
  const { id } = useParams()
  return useMemo(() => tutors.find((t) => t.id === Number(id)) ?? tutors[0], [id])
}
