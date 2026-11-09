import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DESTINATIONS, ALERT_META, MOCK_LABEL, categoryLabel, formatVND } from '../data/destinations'

// HTK - 0396241674 - Bản đồ SVG 15 điểm đến Bình Định (mô phỏng)
export default function MapPage() {
  const [selected, setSelected] = useState(DESTINATIONS[0])
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? DESTINATIONS : DESTINATIONS.filter((d) => d.alert === filter)
  const inland = DESTINATIONS.filter((d) => d.alert === 'green')

  return (
    <>
      <h1>🗺️ Bản đồ 15 điểm đến Bình Định</h1>
      <p className="subtitle">Bản đồ SVG mô phỏng vị trí tương đối — chạm vào điểm để xem chi tiết và cảnh báo.</p>

      <div className="alert alert-red">
        🚨 <strong>Cảnh báo tháng 11/2026:</strong> Nhơn Lý (Kỳ Co, Eo Gió), Cù Lao Xanh, Nhơn Hải đang
        biển động cấp 7–8 sau bão số 9, 10/2026 — tàu/cano ngừng hoạt động. Điểm đỏ KHÔNG nên đến.
        Thay thế an toàn trong đất liền: {inland.map((d) => d.name).join(', ')}.
      </div>

      <div className="map-filters">
        <button className={`chip ${filter === 'all' ? 'chip-on' : ''}`} onClick={() => setFilter('all')}>Tất cả (15)</button>
        {Object.entries(ALERT_META).map(([k, m]) => (
          <button key={k} className={`chip ${filter === k ? 'chip-on' : ''}`} onClick={() => setFilter(k)}>
            <span className={`dot dot-${k}`} /> {m.label} ({DESTINATIONS.filter((d) => d.alert === k).length})
          </button>
        ))}
      </div>

      <div className="map-layout">
        <div className="card map-card">
          <svg viewBox="0 0 560 680" role="img" aria-label="Bản đồ mô phỏng 15 điểm đến Bình Định">
            {/* Biển Đông */}
            <rect x="0" y="0" width="560" height="680" fill="#0b2a4a" />
            {/* Đất liền Bình Định (phác họa) */}
            <path
              d="M60,60 L300,40 L360,90 L330,140 L370,160 L360,210 L400,240 L390,300 L430,330 L420,380 L450,400 L470,430 L440,455 L465,470 L430,500 L420,540 L360,560 L300,620 L200,640 L120,560 L80,420 L40,260 Z"
              fill="#123c2e" stroke="#2dd4a7" strokeWidth="2"
            />
            {/* Cù Lao Xanh */}
            <ellipse cx="486" cy="590" rx="26" ry="16" fill="#123c2e" stroke="#2dd4a7" strokeWidth="2" />
            <text x="120" y="120" fill="#7dd3c0" fontSize="15" fontWeight="700">VĨNH THẠNH</text>
            <text x="90" y="300" fill="#7dd3c0" fontSize="15" fontWeight="700">AN LÃO · HOÀI NHƠN</text>
            <text x="150" y="220" fill="#a7f3d0" fontSize="13">Tây Sơn</text>
            <text x="280" y="290" fill="#a7f3d0" fontSize="13">An Nhơn</text>
            <text x="270" y="190" fill="#a7f3d0" fontSize="13">Phù Cát</text>
            <text x="330" y="470" fill="#a7f3d0" fontSize="14" fontWeight="700">TP. QUY NHƠN</text>
            <text x="470" y="120" fill="#60a5fa" fontSize="16" fontStyle="italic">Biển Đông</text>
            <text x="440" y="640" fill="#60a5fa" fontSize="12" fontStyle="italic">Gió cấp 7–8 🌊</text>
            {/* Điểm đến */}
            {shown.map((d, i) => (
              <motion.g
                key={d.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelected(d)}
              >
                {d.alert === 'red' && (
                  <motion.circle
                    cx={d.x} cy={d.y} r="14" fill="none" stroke="#ef4444" strokeWidth="2"
                    animate={{ r: [10, 20], opacity: [0.8, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  />
                )}
                <circle
                  cx={d.x} cy={d.y} r={selected?.id === d.id ? 10 : 7}
                  fill={ALERT_META[d.alert].color}
                  stroke="#fff" strokeWidth={selected?.id === d.id ? 3 : 1.5}
                />
                <text x={d.x + 12} y={d.y + 4} fill="#e2e8f0" fontSize="11" fontWeight={selected?.id === d.id ? 700 : 400}>
                  {d.name.replace('Khu du lịch ', '').replace('Khu dã ngoại ', '').replace(' (Linh Phong Thiền Tự)', '').replace(' (xã đảo Nhơn Châu)', '').replace(' & cầu vượt biển', '')}
                </text>
              </motion.g>
            ))}
          </svg>
          <div className="legend">
            {Object.entries(ALERT_META).map(([k, m]) => (
              <span key={k}><span className={`dot dot-${k}`} /> {m.label}</span>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            className={`card detail detail-${selected.alert}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <span className={`badge badge-${selected.alert}`}>{ALERT_META[selected.alert].label}</span>
            <h2>{selected.name}</h2>
            <p className="muted">📍 {selected.area}</p>
            <p>{selected.desc}</p>
            <p><strong>Thể loại:</strong> {selected.categories.map(categoryLabel).join(' · ')}</p>
            <p><strong>Chi phí tham khảo:</strong> {selected.cost === 0 ? 'Miễn phí' : formatVND(selected.cost)} · <strong>Thời gian:</strong> {selected.hours} giờ</p>
            <div className={`alert alert-${selected.alert === 'green' ? 'green' : selected.alert === 'red' ? 'red' : 'yellow'}`}>
              {selected.alert === 'red' ? '🚨 ' : selected.alert === 'yellow' ? '⚠️ ' : '✅ '}{selected.alertNote}
            </div>
            {selected.alert === 'red' && (
              <p className="alt-suggest">💡 Thay thế trong đất liền: {inland.slice(0, 3).map((d) => d.name).join(', ')}.</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <h2 className="list-title">Danh sách 15 điểm đến</h2>
      <div className="grid-3">
        {DESTINATIONS.map((d) => (
          <button key={d.id} className={`card spot-card spot-${d.alert}`} onClick={() => setSelected(d)}>
            <span className={`dot dot-${d.alert}`} /> <strong>{d.name}</strong>
            <span className="muted">{d.area}</span>
          </button>
        ))}
      </div>
      <p className="mock-label">📊 {MOCK_LABEL} · Vị trí trên bản đồ là phác họa tương đối, không dùng cho định vị.</p>
    </>
  )
}