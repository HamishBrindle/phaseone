import React, { Component } from 'react'
import { ServicesNavigation } from '../../../../components/ServicesNavigation'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import farPixels from '../../../../assets/Video/pixels-background.svg'
import closePixels from '../../../../assets/Video/pixels-midground.svg'
import artwork from '../../../../assets/Video/video-artwork.png'

import './style.css'

export class Video extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    return (
      <div id="video" className="video-container">
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
          <div className="artwork">
            <img className="content-artwork drop-shadow-close" src={artwork} alt="Artwork" />
            {/* <div className="underlay drop-shadow-far"></div> */}
          </div>
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
