import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { DESTINATIONS, MOCK_LABEL } from '../data/destinations'

// HTK - 0396241674 - Trang chủ: vấn đề Bình Định 2026
export default function Home() {
  const red = DESTINATIONS.filter((d) => d.alert === 'red').length
  const yellow = DESTINATIONS.filter((d) => d.alert === 'yellow').length
  const green = DESTINATIONS.filter((d) => d.alert === 'green').length
  return (
    <>
      <section className="hero">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Du lịch thông minh <span className="grad">Bình Định 2026</span>
        </motion.h1>
        <p className="hero-sub">
          Gợi ý lịch trình theo sở thích · Bản đồ 15 điểm đến · Cảnh báo mưa bão theo thời gian thực (mô phỏng)
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/lich-trinh">✨ Lập lịch trình ngay</Link>
          <Link className="btn btn-ghost" to="/ban-do">🗺️ Xem bản đồ 15 điểm</Link>
        </div>
        <p className="updated">Cập nhật: 09/11/2026</p>
      </section>

      <section className="card problem">
        <h2>⚠️ Bối cảnh du lịch Bình Định tháng 11/2026</h2>
        <p>
          Du lịch Bình Định năm 2026 đang chịu ảnh hưởng nặng của mùa mưa lũ và bão số 9, 10/2026 đổ bộ
          Quy Nhơn – Phù Cát – Hoài Nhơn. Biển động cấp 7–8 khiến các điểm biển, đảo như Kỳ Co, Eo Gió,
          Cù Lao Xanh, Nhơn Hải phải tạm dừng đón khách, nhiều tàu cá đã gặp nạn ngoài khơi. Lũ sông Kôn
          dâng cao và xói lở bờ biển Nhơn Lý, Cát Tiến làm thay đổi hoàn toàn trải nghiệm du lịch so với
          mùa khô. Du khách thiếu thông tin thời tiết theo từng điểm đến nên dễ đặt tour ra đảo rồi bị
          hủy, vừa mất tiền vừa nguy hiểm. Công cụ này gợi ý lịch trình theo sở thích, số ngày và ngân
          sách, đồng thời tự động loại điểm đang cảnh báo đỏ và đề xuất điểm trong đất liền thay thế.
        </p>
      </section>

      <section className="stats">
        {[
          { n: DESTINATIONS.length, label: 'Điểm đến thật', cls: 'stat-blue' },
          { n: red, label: 'Cảnh báo đỏ (biển/đảo)', cls: 'stat-red' },
          { n: yellow, label: 'Cảnh báo vàng', cls: 'stat-yellow' },
          { n: green, label: 'Điểm an toàn', cls: 'stat-green' },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            className={`card stat ${s.cls}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="stat-n">{s.n}</div>
            <div className="stat-label">{s.label}</div>
          </motion.div>
        ))}
      </section>

      <section className="grid-3">
        <div className="card feature">
          <h3>🎯 Lịch trình theo sở thích</h3>
          <p>Chọn biển, văn hóa – lịch sử, ẩm thực, thiên nhiên hoặc tâm linh; nhập số ngày và ngân sách — nhận lịch trình từng ngày kèm chi phí ước tính.</p>
          <Link to="/lich-trinh" className="link">Lập lịch trình →</Link>
        </div>
        <div className="card feature">
          <h3>🗺️ Bản đồ SVG 15 điểm</h3>
          <p>Kỳ Co, Eo Gió, Tháp Đôi, Tháp Bánh Ít, Hầm Hô, Cù Lao Xanh… hiển thị trên bản đồ mô phỏng với màu cảnh báo theo từng điểm.</p>
          <Link to="/ban-do" className="link">Mở bản đồ →</Link>
        </div>
        <div className="card feature">
          <h3>🌧️ Cảnh báo mưa bão</h3>
          <p>Điểm biển/đảo đang biển động cấp 7–8 tháng 11/2026 được đánh dấu đỏ và tự thay bằng điểm trong đất liền an toàn.</p>
          <Link to="/ban-do" className="link">Xem cảnh báo →</Link>
        </div>
      </section>

      <p className="mock-label">📊 {MOCK_LABEL}</p>
    </>
  )
}