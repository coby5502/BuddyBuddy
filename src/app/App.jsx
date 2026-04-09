import { AppProvider } from '@/context/AppContext'
import AppLayout from '@/app/AppLayout'

export default function App() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  )
}
