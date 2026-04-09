export default function Avatar({ tutor, size = 56 }) {
  return (
    <div
      className="rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
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
