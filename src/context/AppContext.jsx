import { createContext, useContext, useState } from 'react'
import { getDictionary } from '@/locales'
import tutors from '@/data/tutors'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [lang, setLang] = useState('ja')
  const [selectedTutor, setSelectedTutor] = useState(tutors[0])

  const t = getDictionary(lang)
  const toggleLang = () => setLang((l) => (l === 'ja' ? 'ko' : 'ja'))

  return (
    <AppContext.Provider
      value={{ lang, setLang, t, toggleLang, selectedTutor, setSelectedTutor }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) {
    throw new Error('useApp must be used within AppProvider')
  }
  return ctx
}
