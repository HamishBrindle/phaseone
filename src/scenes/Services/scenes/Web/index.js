import React, { Component } from 'react'
import { ServicesNavigation } from '../../../../components/ServicesNavigation'

import { Parallax } from 'react-scroll-parallax';

// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './style.css'

import Fade from 'react-reveal/Fade';

import farPixels from '../../../../assets/Photo/pixels-background.svg'
import closePixels from '../../../../assets/Photo/pixels-midground.svg'
import artwork from '../../../../assets/Web/artwork.png'

export class Web extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    return (
      <div id="web" name="web" className="web-container">
        <ServicesNavigation parent="web" />
        <Parallax
            className="floating-pixels horizontal-flip"
            offsetYMax={30}
            offsetYMin={-30}
            slowerScrollRate
          >
            <img src={closePixels} alt="Close Pixels"/>
            {/* <div className="floating-pixels close"></div> */}
          </Parallax>
          <Parallax
            className="floating-pixels horizontal-flip"          
            offsetYMax={10}
            offsetYMin={-10}
            slowerScrollRate
          >
            <img src={farPixels} alt="Far Pixels"/>            
            {/* <div className="floating-pixels far"></div> */}
          </Parallax>
        <div className="content flex-center">
          <div className="content-section text-left text-light">
            <div className="content-section-indicator">
              <div className="description">
                SERVICES
              </div>
              <div className="number">
                3.3
              </div>
            </div>
            <h2 className="content-section-header">WEB DESIGN</h2>
            <div className="content-section-body">
              <p>
                A website is crucial in the gaining and maintaining of customers - 
                it's your companies portal to the world! Therefore its of the utmost 
                importance you 'wow' everyone who comes through, all the while educating 
                them on your business and what it is you can do for them. We can help with this.
              </p>
            </div>
          </div>
          <Fade bottom>
            <div className="artwork">
              {/* <div className="underlay drop-shadow-far"></div> */}
              <img className="content-artwork drop-shadow-close" src={artwork} alt="Artwork" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Web)
