// Bộ sinh lịch trình từ dữ liệu mô phỏng – cập nhật 09/11/2026
// HTK - 0396241674
import { DESTINATIONS } from './destinations'

const MEAL_PER_DAY = 250000 // ăn uống + đi lại mỗi ngày (mô phỏng)

export function generateItinerary({ interests, days, budget }) {
  const picked = interests.length ? interests : ['vanhoa', 'amthuc', 'thiennhien', 'tamlinh', 'bien']

  const matches = DESTINATIONS.filter((d) => d.categories.some((c) => picked.includes(c)))
  const blocked = matches.filter((d) => d.alert === 'red')
  const safe = matches.filter((d) => d.alert !== 'red')

  // Ưu tiên điểm xanh trước, điểm vàng sau; điểm khớp nhiều sở thích hơn xếp trước
  const score = (d) => d.categories.filter((c) => picked.includes(c)).length
  safe.sort((a, b) => {
    if (a.alert !== b.alert) return a.alert === 'green' ? -1 : 1
    return score(b) - score(a)
  })

  // Gợi ý thay thế trong đất liền khi sở thích biển bị chặn
  const wantsBeach = picked.includes('bien')
  const alternatives = wantsBeach
    ? DESTINATIONS.filter((d) => d.alert !== 'red' && !d.categories.includes('bien')).slice(0, 4)
    : []

  // Chia tối đa 3 điểm/ngày, không vượt quá số điểm khả dụng
  const maxSpots = Math.min(safe.length, days * 3)
  const chosen = safe.slice(0, maxSpots)
  const perDay = Math.max(1, Math.ceil(chosen.length / days))

  const plan = []
  for (let i = 0; i < days; i++) {
    const spots = chosen.slice(i * perDay, (i + 1) * perDay)
    plan.push({
      day: i + 1,
      spots,
      meals: MEAL_PER_DAY,
      cost: spots.reduce((s, d) => s + d.cost, 0) + MEAL_PER_DAY,
    })
  }

  const totalCost = plan.reduce((s, p) => s + p.cost, 0)
  return { plan, blocked, alternatives, totalCost, overBudget: totalCost > budget, empty: chosen.length === 0 }
}