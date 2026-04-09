/** Accessible on/off switch (presentational; state owned by parent). */
export default function FormSwitch({ on, onToggle, ariaLabel }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={ariaLabel}
      onClick={() => onToggle(!on)}
      className="relative flex-shrink-0 transition-colors"
      style={{
        width: 48,
        height: 26,
        borderRadius: 13,
        background: on ? '#f43f5e' : '#d1d5db',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 3,
          width: 20,
          height: 20,
          background: '#fff',
          borderRadius: '50%',
          boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
          transition: 'left 0.2s',
          left: on ? 25 : 3,
        }}
      />
    </button>
  )
}
