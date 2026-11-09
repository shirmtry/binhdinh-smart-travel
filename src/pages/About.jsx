// HTK - 0396241674 - Trang giới thiệu
export default function About() {
  return (
    <>
      <h1>ℹ️ Giới thiệu dự án</h1>
      <section className="card">
        <h2>Du lịch thông minh Bình Định 2026</h2>
        <p>
          Dự án giúp du khách lập lịch trình Bình Định theo sở thích (biển, văn hóa – lịch sử, ẩm thực,
          thiên nhiên, tâm linh), số ngày và ngân sách, dựa trên dữ liệu mô phỏng 15 điểm đến thật.
          Trong bối cảnh <strong>mùa mưa lũ 2026</strong> — bão số 9, 10/2026 đổ bộ Quy Nhơn – Phù Cát –
          Hoài Nhơn, lũ sông Kôn dâng cao (Tuy Phước, An Nhơn), sạt lở An Lão – Vĩnh Thạnh – Tây Sơn,
          ngập úng đô thị Quy Nhơn, xói lở bờ biển Nhơn Lý – Cát Tiến – Mỹ Thành và mất điện diện rộng
          3–7 ngày — công cụ tự động loại các điểm biển/đảo đang biển động cấp 7–8 (Kỳ Co, Eo Gió,
          Cù Lao Xanh, Nhơn Hải, Vịnh Quy Nhơn) và gợi ý điểm trong đất liền thay thế.
        </p>
        <p>Cập nhật: 09/11/2026</p>
      </section>

      <section className="card contact-block">
        <h2>📞 Liên hệ HTK – 0396241674</h2>
        <ul className="contact-list">
          <li>Tác giả: <a href="https://zalo.me/0396241674" target="_blank" rel="noreferrer">HTK</a></li>
          <li>Hotline: <a href="tel:0396241674">0396241674</a></li>
          <li>Zalo: <a href="https://zalo.me/0396241674" target="_blank" rel="noreferrer">https://zalo.me/0396241674</a></li>
          <li>Email: <a href="mailto:htk.contact@gmail.com">htk.contact@gmail.com</a></li>
        </ul>
        <p className="updated">Cập nhật: 09/11/2026</p>
      </section>

      <section className="card">
        <h2>Công nghệ & dữ liệu</h2>
        <ul>
          <li>ReactJS + Vite + React Router + Framer Motion (chuyển cảnh mượt mà).</li>
          <li>Bản đồ SVG tự vẽ, 15 điểm đến thật của Bình Định.</li>
          <li>Dữ liệu mô phỏng – cập nhật 09/11/2026; không thay thế thông tin chính thức từ chính quyền và đài khí tượng.</li>
          <li>Responsive: điện thoại 375px đến desktop 1440px.</li>
        </ul>
      </section>
    </>
  )
}