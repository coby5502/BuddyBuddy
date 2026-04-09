import { Routes, Route, useLocation } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Booking from './pages/Booking'
import Confirm from './pages/Confirm'
import Complete from './pages/Complete'
import Signup from './pages/Signup'
import TutorRegister from './pages/TutorRegister'

function Layout() {
  const { pathname } = useLocation()
  const isComplete = pathname === '/complete'

  return (
    <div className="app-shell">
      {!isComplete && <Header />}
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutor/:id" element={<Detail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tutor-register" element={<TutorRegister />} />
        </Routes>
      </main>
      {!isComplete && <BottomNav />}
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  )
}
