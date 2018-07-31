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
      <div id="video" className="video-container parallax__group">
        <ServicesNavigation className="parallax__layer parallax__layer--base" parent="video" />
        <div className="art parallax__layer parallax__layer--close parallax__group">
          <img className="art-far-pixels" src={farPixels} alt="Far Pixels" />
          <img className="art-close-pixels" src={closePixels} alt="Close Pixels" />
        </div>
        <div className="content parallax__layer parallax__layer--base">
          <div className="content-text">
            <div className="page-indicator">
              SERVICES
              </div>
            <h2 className="page-header">VIDEO</h2>
            <div className="page-number">
              3.2
              </div>
            <p className="page-content">
              Our videos are beautiful works of art and expression packaged elegantly 
              inside your brand identity. Let us create something unique for you, 
              that will capture your customers attention and interest.
            </p>

          </div>
          <img className="content-artwork" src={artwork} alt="Artwork" />
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
