import React from 'react'
import { ThemeProvider } from 'styled-components'
import { shallow, mount } from 'enzyme'

export const shallowWithTheme = theme => tree => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext()

  return shallow(tree, { context })
}

export const mountWithTheme = theme => tree => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext()

  return mount(tree, {
    context,
    childContextTypes: ThemeProvider.childContextTypes,
  })
}
