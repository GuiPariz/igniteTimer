import { useState } from 'react'
import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/Default'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
    <div className="App">
      oi
    </div>
    <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
