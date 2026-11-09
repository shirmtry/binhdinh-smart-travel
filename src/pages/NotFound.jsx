import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// HTK - 0396241674 - Trang 404
export default function NotFound() {
  return (
    <div className="notfound">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }}>
        <div className="nf-code">404</div>
        <h1>Lạc đường rồi! 🧭</h1>
        <p>Trang bạn tìm không tồn tại — như tour ra Cù Lao Xanh mùa biển động cấp 7–8 tháng 11/2026 vậy.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/">← Về trang chủ</Link>
          <Link className="btn btn-ghost" to="/ban-do">Xem bản đồ</Link>
        </div>
        <p className="nf-hotline">
          Cần hỗ trợ? Gọi HTK: <a href="tel:0396241674">0396241674</a> ·{' '}
          <a href="https://zalo.me/0396241674" target="_blank" rel="noreferrer">Zalo</a> ·{' '}
          <a href="mailto:htk.contact@gmail.com">htk.contact@gmail.com</a>
        </p>
      </motion.div>
    </div>
  )
}