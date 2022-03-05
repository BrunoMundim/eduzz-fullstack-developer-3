import React, { useState, useEffect } from 'react'
import { ThemeContext, themes } from './components/theme/Theme'
import Card from './components/Card/Card'

function App () {
  const [token, setToken] = useState();

  useEffect(() => {
    setTimeout(() => {
      setToken('321JanePedrosa')
    }, 4000)
  }, [setToken])

  return (
    <ThemeContext.Provider value={{ ...themes.primary, token }}>
      <Card />
    </ThemeContext.Provider>
  )
}

export default App;