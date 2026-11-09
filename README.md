# 🧭 binhdinh-smart-travel — Du lịch thông minh Bình Định 2026

> HTK – 0396241674 – Cập nhật: 09/11/2026

## Vấn đề

Du lịch Bình Định 2026 cần gợi ý lịch trình theo sở thích **và thời tiết**. Tháng 11/2026, Bình Định đang trong cao điểm **mùa mưa lũ 2026**: bão số 9, 10/2026 đổ bộ Quy Nhơn – Phù Cát – Hoài Nhơn; lũ sông Kôn dâng cao (Tuy Phước, An Nhơn); sạt lở An Lão – Vĩnh Thạnh – Tây Sơn; ngập úng đô thị Quy Nhơn; xói lở bờ biển Nhơn Lý – Cát Tiến – Mỹ Thành; mất điện diện rộng 3–7 ngày. Biển động cấp 7–8 khiến Kỳ Co, Eo Gió, Cù Lao Xanh, Nhơn Hải phải tạm dừng đón khách — du khách thiếu thông tin theo từng điểm nên dễ đặt tour rồi bị hủy, vừa tốn kém vừa nguy hiểm.

## Tính năng

- **Form chọn sở thích** (biển / văn hóa–lịch sử / ẩm thực / thiên nhiên / tâm linh) + số ngày (1–5) + ngân sách → **sinh lịch trình gợi ý từng ngày** từ mock data, kèm chi phí ước tính và cảnh báo vượt ngân sách.
- **Bản đồ SVG 15 điểm đến thật**: Kỳ Co, Eo Gió, Tháp Đôi, Tháp Bánh Ít, Ghềnh Ráng, Hầm Hô, Bảo tàng Quang Trung, Chùa Ông Núi, Cù Lao Xanh, Nhơn Hải, Vịnh Quy Nhơn, Tháp Dương Long, Thành cổ Đồ Bàn, Đầm Thị Nại, Suối Tiên.
- **Cảnh báo mưa bão**: điểm biển/đảo (Nhơn Lý, Cù Lao Xanh…) đang biển động cấp 7–8 tháng 11/2026 → hiển thị **cảnh báo đỏ**, tự loại khỏi lịch trình và **gợi ý điểm trong đất liền thay thế** (Tháp Đôi, Tháp Bánh Ít, Bảo tàng Quang Trung, Tháp Dương Long, Thành cổ Đồ Bàn…).
- **Framer Motion**: chuyển cảnh giữa các trang, stagger card, marker bản đồ pulse.
- Trang: `/` (Home), `/lich-trinh` (planner), `/ban-do` (bản đồ), `/about`, 404 (có hotline HTK).
- UI tiếng Việt, responsive 375px → 1440px.
- Dữ liệu mô phỏng – cập nhật 09/11/2026 (ghi rõ trong UI).

## Công nghệ

- ReactJS 18 + Vite 5
- react-router-dom 6 (SPA, Vercel rewrite)
- Framer Motion 11
- CSS thuần, không UI framework

## Cách chạy

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run preview  # xem bản build
```

## Deploy

- Vercel (static + SPA rewrite): xem `deploy_url.txt`
- Link deploy: https://binhdinh-smart-travel.vercel.app

## 📞 Liên hệ HTK – 0396241674 – 09/11/2026

- Tác giả: **HTK**
- Hotline/Zalo: **0396241674** — https://zalo.me/0396241674
- Email: **htk.contact@gmail.com**

© 2026 HTK · Hotline/Zalo: 0396241674 · Email: htk.contact@gmail.com