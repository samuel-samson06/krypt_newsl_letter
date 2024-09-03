import React, { useState } from 'react'
import Krypto from './Krypto'
import {MyContext} from "./context/Context"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const value = {darkMode, setDarkMode}
  return (
    <React.Fragment>
      <MyContext.Provider value={value}>
        <Krypto/>
      </MyContext.Provider>
    </React.Fragment>
  )
}

export default App