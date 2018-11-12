import React, { Component } from 'react'

import ReactPlayer from 'react-player'

export default class Video extends Component {
  render() {
    return (
        <ReactPlayer url='https://vimeo.com/252632691' volume={0.5} muted width='100%' height='100%' />
    )
  }
}
