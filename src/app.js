import React from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Routes from './routes'
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
    <Routes />
  </ThemeProvider>
)

export default App
