import React from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import theme from './theme'

injectGlobal`
  body {
    margin: 0;
    background: #FFF;
    font-weight: 300;
    text-shadow: 1px 1px 1px rgba(0,0,0,.004);
  }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <h1>Boilerplate</h1>
  </ThemeProvider>
)

export default App
