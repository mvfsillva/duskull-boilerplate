import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import app from './app'

const renderApp = NextApp => {
  render(
    <AppContainer>
      <BrowserRouter>
        <NextApp />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('app'),
  )
}

renderApp(app)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
