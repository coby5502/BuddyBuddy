export default function Stars({ rating }) {
  return (
    <span className="text-yellow-400 font-bold text-sm">
      ⭐ {rating.toFixed(1)}
    </span>
  )
}
