import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CATEGORIES, MOCK_LABEL, categoryLabel, formatVND } from '../data/destinations'
import { generateItinerary } from '../data/planner'

// HTK - 0396241674 - Form chọn sở thích → sinh lịch trình
export default function Planner() {
  const [interests, setInterests] = useState(['vanhoa', 'amthuc'])
  const [days, setDays] = useState(2)
  const [budget, setBudget] = useState(2000000)
  const [result, setResult] = useState(null)

  const toggle = (id) =>
    setInterests((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  const submit = (e) => {
    e.preventDefault()
    setResult(generateItinerary({ interests, days: Number(days), budget: Number(budget) }))
  }

  return (
    <>
      <h1>✨ Lập lịch trình du lịch Bình Định</h1>
      <p className="subtitle">Chọn sở thích, số ngày và ngân sách — hệ thống tự loại điểm đang cảnh báo bão và gợi ý thay thế an toàn.</p>

      <form className="card form" onSubmit={submit}>
        <fieldset>
          <legend>1. Sở thích của bạn (chọn ít nhất 1)</legend>
          <div className="chips">
            {CATEGORIES.map((c) => (
              <button
                type="button"
                key={c.id}
                className={`chip ${interests.includes(c.id) ? 'chip-on' : ''}`}
                onClick={() => toggle(c.id)}
                aria-pressed={interests.includes(c.id)}
              >
                {c.icon} {c.label}
              </button>
            ))}
          </div>
        </fieldset>
        <div className="form-row">
          <label>
            2. Số ngày
            <select value={days} onChange={(e) => setDays(e.target.value)}>
              {[1, 2, 3, 4, 5].map((d) => <option key={d} value={d}>{d} ngày</option>)}
            </select>
          </label>
          <label>
            3. Ngân sách (₫)
            <input
              type="number" min="200000" step="100000" value={budget}
              onChange={(e) => setBudget(e.target.value)} required
            />
          </label>
        </div>
        <button className="btn btn-primary" type="submit" disabled={interests.length === 0}>
          🚀 Sinh lịch trình gợi ý
        </button>
        <p className="mock-label">📊 {MOCK_LABEL}</p>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="result"
          >
            {result.blocked.length > 0 && (
              <div className="alert alert-red">
                <h3>🚨 Cảnh báo đỏ – đã loại khỏi lịch trình</h3>
                <p>Biển động cấp 7–8 tháng 11/2026 (sau bão số 9, 10/2026), các điểm sau tạm dừng đón khách:</p>
                <ul>
                  {result.blocked.map((d) => <li key={d.id}><strong>{d.name}</strong> — {d.alertNote}</li>)}
                </ul>
              </div>
            )}
            {result.alternatives.length > 0 && (
              <div className="alert alert-info">
                <h3>💡 Gợi ý điểm trong đất liền thay thế</h3>
                <p>Vì sở thích biển/đảo đang bị chặn, hãy cân nhắc: {result.alternatives.map((d) => d.name).join(' · ')}.</p>
              </div>
            )}
            {result.empty ? (
              <div className="alert alert-yellow">Không có điểm an toàn phù hợp lựa chọn này. Hãy thêm sở thích khác (văn hóa, ẩm thực, tâm linh…).</div>
            ) : (
              <>
                <div className={`alert ${result.overBudget ? 'alert-yellow' : 'alert-green'}`}>
                  💰 Tổng chi phí ước tính: <strong>{formatVND(result.totalCost)}</strong> / ngân sách {formatVND(Number(budget))}
                  {result.overBudget && ' — vượt ngân sách, hãy giảm số ngày hoặc chọn điểm miễn phí (Chùa Ông Núi, Thành cổ Đồ Bàn).'}
                </div>
                {result.plan.map((p, i) => (
                  <motion.div
                    key={p.day}
                    className="card day-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <h3>📅 Ngày {p.day} <span className="day-cost">{formatVND(p.cost)} (gồm ăn uống, đi lại)</span></h3>
                    {p.spots.length === 0 ? (
                      <p>Ngày nghỉ tự do: dạo đường Xuân Diệu ngắm vịnh từ bờ, thưởng thức bánh xèo tôm nhảy – nem chợ Huyện (không xuống biển).</p>
                    ) : (
                      <ul className="spot-list">
                        {p.spots.map((d) => (
                          <li key={d.id}>
                            <span className={`dot dot-${d.alert}`} />
                            <div>
                              <strong>{d.name}</strong> <span className="muted">· {d.area} · {d.hours} giờ · {formatVND(d.cost)}</span>
                              <p className="spot-desc">{d.desc}</p>
                              <p className="spot-cats">{d.categories.map(categoryLabel).join(' · ')}</p>
                              {d.alert === 'yellow' && <p className="spot-warn">⚠️ {d.alertNote}</p>}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </>
            )}
            <p className="mock-label">📊 {MOCK_LABEL} · Chi phí chỉ mang tính tham khảo.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}