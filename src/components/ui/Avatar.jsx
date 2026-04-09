export default function Avatar({ tutor, size = 56, className = '', ring = false }) {
  const ringCls = ring ? 'ring-4 ring-white/90' : ''

  if (tutor.photoUrl) {
    return (
      <div
        className={`flex-shrink-0 overflow-hidden rounded-full ${ringCls} ${className}`}
        style={{
          width: size,
          height: size,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
      >
        <img
          src={tutor.photoUrl}
          alt=""
          className="h-full w-full object-cover"
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center rounded-full font-bold text-white ${ringCls} ${className}`}
      style={{
        width: size,
        height: size,
        background: tutor.avatarBg,
        fontSize: size * 0.32,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      }}
    >
      {tutor.avatar}
    </div>
  )
}
