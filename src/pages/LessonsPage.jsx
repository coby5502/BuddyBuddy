import { Link } from 'react-router-dom'
import { useApp } from '@/context/AppContext'
import { ROUTE_PATHS } from '@/config/routes'
import SectionCard from '@/components/ui/SectionCard'

export default function LessonsPage() {
  const { t } = useApp()

  return (
    <div className="page-stack page-stack--narrow !gap-5 !pb-24 !pt-6 lg:!pb-24">
      <div className="text-center">
        <h1 className="text-xl font-extrabold text-gray-800 lg:text-2xl">{t.lessonsTitle}</h1>
        <p className="mt-2 text-sm text-gray-500">{t.lessonsSub}</p>
      </div>

      <SectionCard title={t.lessonsCardTitle}>
        <p className="text-center text-sm leading-relaxed text-gray-600">{t.lessonsEmptyBody}</p>
        <div className="mt-6 flex justify-center">
          <Link
            to={ROUTE_PATHS.HOME}
            className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:opacity-95"
          >
            {t.lessonsBrowseCta}
          </Link>
        </div>
      </SectionCard>
    </div>
  )
}
