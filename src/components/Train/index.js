import React, { Component } from 'react'
import Lottie from 'react-lottie'
import * as animationData from './data.json'
import logo from '../../assets/Train/tagline-dark.svg'

import Fade from 'react-reveal/Fade';

import './style.css'

export default class Train extends Component {

  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }

  render() {

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div className="train-container">
        <Fade top>
          <div className="logo">
            <img src={logo} alt="Brand Title White"/>
          </div>
        </Fade>
        <Fade bottom>
          <Lottie options={defaultOptions}
          height="400"
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}/>
        </Fade>
      </div>
    )
  }
}
