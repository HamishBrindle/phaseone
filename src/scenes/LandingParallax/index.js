import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './style.css'

import Fade from 'react-reveal/Fade';

import { Parallax } from 'react-scroll-parallax';
import ParallaxImage from '../../components/ParallaxImage'

import background from '../../assets/LandingParallax/background.svg'
import midground from '../../assets/LandingParallax/midground.svg'
import foreground from '../../assets/LandingParallax/foreground.svg'
import foremost from '../../assets/LandingParallax/foremost.svg'

import header from '../../assets/LandingParallax/landing-title.svg'
import subheader from '../../assets/LandingParallax/landing-subtitle.svg'

// Single Buildings
import buildingBeige from '../../assets/LandingParallax/building-beige.svg'
import buildingBlue from '../../assets/LandingParallax/building-blue.svg'
import buildingGrey from '../../assets/LandingParallax/building-grey.svg'
import buildingGreen from '../../assets/LandingParallax/building-green.svg'

import Lottie from 'react-lottie'
import * as animationData from './data.json'

export class LandingParallax extends Component {

  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <div id="home" className="landing-container">

        <div className="header">
        <Parallax
            offsetYMax={100}
            offsetYMin={-100}
            slowerScrollRate
          >
          <Fade top>
            <img src={header} alt="header" />
          </Fade >
          </Parallax>
        </div>

        <div className="artwork">
          <Parallax
            className="art"
            offsetYMax={80}
            offsetYMin={-20}
            slowerScrollRate
          >
            <ParallaxImage src={background} alt="background" />
          </Parallax>

          <Parallax
            className="art grey"
            offsetYMax={50}
            offsetYMin={-20}
            slowerScrollRate
          >
            <ParallaxImage src={midground} alt="midground" />
          </Parallax>


            <div className="art colored">
              <ParallaxImage src={buildingGrey} alt="buildingGrey" />
              <ParallaxImage src={buildingGreen} alt="buildingGrey" />
              <ParallaxImage src={buildingBlue} alt="buildingGrey" />
              <ParallaxImage src={buildingBeige} alt="buildingGrey" />
            </div>

          <Parallax
            className="art grey foreground"
            offsetYMax={-10}
            offsetYMin={20}
            slowerScrollRate
          >
            <ParallaxImage src={foreground} alt="foreground" />
          </Parallax>

          <Parallax
            className="art train"          
            offsetYMax={-20}
            offsetYMin={60}
            slowerScrollRate
          >
              <Lottie options={defaultOptions} />
          </Parallax>

          
          <Parallax
            className="art grey foremost"
            offsetYMax={-10}
            offsetYMin={50}
            slowerScrollRate
          >
            <ParallaxImage src={foremost} alt="foremost" />
          </Parallax>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.navigation[0].open
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LandingParallax)
