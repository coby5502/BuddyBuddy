import { createContext, useContext, useState } from 'react'
import i18n from '../i18n'
import tutors from '../data/tutors'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [lang, setLang] = useState('ja')
  const [selectedTutor, setSelectedTutor] = useState(tutors[0])

  const t = i18n[lang]
  const toggleLang = () => setLang(l => (l === 'ja' ? 'ko' : 'ja'))

  return (
    <AppContext.Provider value={{ lang, t, toggleLang, selectedTutor, setSelectedTutor }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
