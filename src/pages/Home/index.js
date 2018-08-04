import React, { PureComponent } from 'react'

import { Either } from '~/components/common'
import { Ghost } from '~/containers'

class Home extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    this.renderLoading()
  }

  renderLoading = () => {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000)
  }

  render() {
    return <Either when={this.state.isLoading} right={'...'} left={<Ghost />} />
  }
}

export default Home
