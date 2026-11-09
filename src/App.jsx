import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Planner from './pages/Planner'
import MapPage from './pages/MapPage'
import About from './pages/About'
import NotFound from './pages/NotFound'

// HTK - 0396241674 - Du lịch thông minh Bình Định 2026
const pageMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.28, ease: 'easeOut' },
}

export function PageWrap({ children }) {
  return <motion.main className="page" {...pageMotion}>{children}</motion.main>
}

export default function App() {
  const location = useLocation()
  return (
    <div className="app">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrap><Home /></PageWrap>} />
          <Route path="/lich-trinh" element={<PageWrap><Planner /></PageWrap>} />
          <Route path="/ban-do" element={<PageWrap><MapPage /></PageWrap>} />
          <Route path="/about" element={<PageWrap><About /></PageWrap>} />
          <Route path="*" element={<PageWrap><NotFound /></PageWrap>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}