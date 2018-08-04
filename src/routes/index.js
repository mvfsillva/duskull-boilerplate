import React from 'react'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'

import { Home } from '~/pages'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default withRouter(Routes)
