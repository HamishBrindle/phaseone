import React, { Component } from 'react'
import { ServicesNavigation } from '../../../../components/ServicesNavigation'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Parallax } from 'react-scroll-parallax';

import ReactPlayer from 'react-player'

import farPixels from '../../../../assets/Photo/pixels-background.svg'
import closePixels from '../../../../assets/Photo/pixels-midground.svg'
import artwork from '../../../../assets/Video/video-artwork.png'

import './style.css'

import Fade from 'react-reveal/Fade';

export class Video extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    return (
      <div id="video" className="video-container">
        <ServicesNavigation parent="video" />
      
          <Parallax
            className="floating-pixels vertical-flip"
            offsetYMax={30}
            offsetYMin={-30}
            slowerScrollRate
          >
            <img src={closePixels} alt="Close Pixels"/>
            {/* <div className="floating-pixels close"></div> */}
          </Parallax>
          <Parallax
            className="floating-pixels vertical-flip"          
            offsetYMax={10}
            offsetYMin={-10}
            slowerScrollRate
          >
            <img src={farPixels} alt="Far Pixels"/>            
            {/* <div className="floating-pixels far"></div> */}
          </Parallax>
        {/* <ServicesNavigation parent="video" /> */}
        {/* <img className="pixels art-far-pixels" src={farPixels} alt="Far Pixels" />
        <img className="pixels art-close-pixels" src={closePixels} alt="Close Pixels" /> */}
        <div className="content flex-center text-right">
          <div className="content-section text-light">
            <div className="content-section-indicator">
              <div className="description">
                SERVICES
              </div>
              <div className="number">
                3.2
              </div>
            </div>
            <h2 className="content-section-header">VIDEO</h2>
            <div className="content-section-body">
              <p>
                Our videos are beautiful works of art and expression packaged elegantly
                inside your brand identity. Let us create something unique for you,
                that will capture your customers attention and interest.
              </p>
            </div>
          </div>
          <Fade bottom>
            <div className="artwork">
              <ReactPlayer url='https://vimeo.com/252632691' volume={0.5} muted width='100%' height='100%' />
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Video)
