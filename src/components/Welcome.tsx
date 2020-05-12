import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Maze from '@/assets/lib/Maze'

class Welcome extends Component {
  componentDidMount() {
    let canvas = ReactDOM.findDOMNode(this.refs.canvas) as HTMLCanvasElement
    let ctx = canvas.getContext('2d')
    this.setState({
      ctx,
      game: new Maze(),
    })

    this.animate()
  }

  animate() {
    console.log(this)
  }

  render() {
    return <canvas ref="canvas" />
  }
}

export default Welcome
