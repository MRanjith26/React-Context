import React from 'react'

//  creating context
const LanguageContext = React.createContext({
  activeLanguage: 'TE',
  changeLanguage: () => {},
})
export default LanguageContext
