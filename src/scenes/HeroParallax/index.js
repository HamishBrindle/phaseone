import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './style.css'

import ReactTooltip from 'react-tooltip'
import Fade from 'react-reveal/Fade';
import Lottie from 'react-lottie'
import * as animationData from './data.json'
import { scroller } from 'react-scroll'
import { Parallax } from 'react-scroll-parallax';
import ParallaxImage from '../../components/ParallaxImage'

import background from '../../assets/HeroParallax/background.svg'
import midground from '../../assets/HeroParallax/midground.svg'
import foreground from '../../assets/HeroParallax/foreground.svg'
import foremost from '../../assets/HeroParallax/foremost.svg'
import buildingBeige from '../../assets/HeroParallax/building-beige.svg'
import buildingBlue from '../../assets/HeroParallax/building-blue.svg'
import buildingGrey from '../../assets/HeroParallax/building-grey.svg'
import buildingGreen from '../../assets/HeroParallax/building-green.svg'
import scrollIcon from '../../assets/HeroParallax/scroll-icon.svg'

import headerMedium from '../../assets/HeroParallax/header-md.svg'
import header from '../../assets/HeroParallax/landing-title.svg'
import subheader from '../../assets/HeroParallax/landing-subtitle.svg'

export class HeroParallax extends Component {

  //   static propTypes = {
  //     prop: PropTypes
  //   }

  constructor(props) {
    super(props)
    this.scrollTo = this.scrollTo.bind(this);
    this.state = {}
  }

  scrollTo(event) {
    const goTo = event.target.attributes.getNamedItem("data-goto").nodeValue
    scroller.scrollTo(goTo, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 55
    })
  }

  render() {

    const tooltips = [
      "projects",
      "photo",
      "video",
      "web"
    ]

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <div id="home" name="home" className="dope-bg landing-container">

        <div className="header">
          <Parallax
            offsetYMax={100}
            offsetYMin={-100}
            slowerScrollRate
          >
            <Fade top>
              <ParallaxImage id="header-lg" src={header} alt="header" />
              <ParallaxImage id="header-md" src={headerMedium} alt="header" />
              <ParallaxImage id="subheader-lg" src={subheader} alt="subheader" className="subheader" />
            </Fade >
          </Parallax>
        </div>

        <div className="artwork">
          <Parallax
            className="art"
            offsetYMax={80}
            offsetYMin={-10}
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
            <ParallaxImage src={buildingGrey} alt="buildingGrey" onClick={this.scrollTo} goesTo="projects" />
            <ParallaxImage src={buildingGreen} alt="buildingGreen" onClick={this.scrollTo} goesTo="photo" />
            <ParallaxImage src={buildingBlue} alt="buildingBlue" onClick={this.scrollTo} goesTo="web" />
            <ParallaxImage src={buildingBeige} alt="buildingBeige" onClick={this.scrollTo} goesTo="video" />
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
            id="train"
            className="art train"
            offsetYMax={-20}
            offsetYMin={70}
            slowerScrollRate
          >
            <Lottie options={defaultOptions} />
          </Parallax>


          <Parallax
            className="art grey foremost"
            offsetYMax={-10}
            offsetYMin={80}
            slowerScrollRate
          >
            <ParallaxImage src={foremost} alt="foremost" />
          </Parallax>

        </div>

        {tooltips.map((name) =>
          <ReactTooltip id={`tooltip-${name}`} className='tooltip'>
            <span>{name.toUpperCase()}</span>
          </ReactTooltip>
        )}
        <div className="box-shadow"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.navigation[0].open
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HeroParallax)
