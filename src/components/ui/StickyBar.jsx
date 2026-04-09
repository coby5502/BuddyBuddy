export default function StickyBar({ children }) {
  return (
    <div className="sticky-bar">
      <div className="sticky-bar__inner">{children}</div>
    </div>
  )
}
