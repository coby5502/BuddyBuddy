/**
 * Pure helpers for the booking date picker (demo data).
 * @param {Date} anchorStart - calendar "today" for the demo
 * @param {number} count - number of selectable days
 * @param {number} offsetDays - first slot is anchor + offsetDays + 1 (legacy: +1 day after anchor)
 */
export function buildBookingDateStrip(anchorStart, count, offsetDays = 1) {
  const dates = []
  for (let i = 0; i < count; i++) {
    const d = new Date(anchorStart)
    d.setDate(anchorStart.getDate() + i + offsetDays)
    dates.push(d)
  }
  return dates
}
