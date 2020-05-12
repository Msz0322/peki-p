import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { IPage } from '_ITF/index'

import Welcome from '@/components/Welcome'

// import { ApiTest } from './../../api/test';

@inject('store')
@observer
class Index extends Component<IPage> {
  componentDidMount() {
    console.log(this.props.store)
    // ApiTest()
  }

  render() {
    return (
      <Welcome />
    )
  }
}

export default Index
