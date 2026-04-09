export default function BackLink({ label, onClick, variant = 'default' }) {
  const cls = variant === 'light' ? 'back-link back-link--light' : 'back-link'
  return (
    <button type="button" onClick={onClick} className={cls}>
      <span className="back-link__arrow" aria-hidden>
        ←
      </span>
      {label}
    </button>
  )
}
