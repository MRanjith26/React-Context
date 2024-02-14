import {Component} from 'react'
import LanguageContext from './context/LanguageContext'

import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'

class App extends Component {
  state = {activeLanguage: 'EN'}

  changeLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state
    return (
      <LanguageContext.Provider
        // pass all key value pairs that are inside the react context (new Context value)
        value={{activeLanguage, changeLanguage: this.changeLanguage}}
      >
        <Header />
        <LandingSection />
        <FeaturesSection />
      </LanguageContext.Provider>
    )
  }
}

export default App
