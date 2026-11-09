import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

// HTK - 0396241674
export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-icon">🧭</span>
          <span>
            Bình Định <strong>Smart Travel</strong>
            <small>Du lịch thông minh 2026</small>
          </span>
        </Link>
        <button className="menu-btn" aria-label="Mở menu" onClick={() => setOpen(!open)}>☰</button>
        <nav className={`nav ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={close}>Trang chủ</NavLink>
          <NavLink to="/lich-trinh" onClick={close}>Lập lịch trình</NavLink>
          <NavLink to="/ban-do" onClick={close}>Bản đồ 15 điểm</NavLink>
          <NavLink to="/about" onClick={close}>Giới thiệu</NavLink>
          <a className="cta-phone" href="tel:0396241674" onClick={close}>📞 Liên hệ HTK</a>
        </nav>
      </div>
    </header>
  )
}