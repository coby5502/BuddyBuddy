export default function SectionCard({ title, titleExtra, children, className = '' }) {
  return (
    <section className={`card p-4 ${className}`}>
      {(title || titleExtra) && (
        <div className="mb-3 flex items-start justify-between gap-2">
          {title && <h3 className="section-title mb-0">{title}</h3>}
          {titleExtra}
        </div>
      )}
      {children}
    </section>
  )
}
