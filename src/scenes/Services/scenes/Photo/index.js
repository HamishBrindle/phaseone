import React, { Component } from 'react'
import { ServicesNavigation } from '../../../../components/ServicesNavigation'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import farPixels from '../../../../assets/Photo/pixels-background.svg'
import closePixels from '../../../../assets/Photo/pixels-midground.svg'
import artwork from '../../../../assets/Photo/photo-artwork.png'

import Fade from 'react-reveal/Fade';

import './style.css'

export class Photo extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    return (
      <div id="photo" className="photo-container">
        {/* <ServicesNavigation parent="photo" /> */}
        {/* <img className="art-far-pixels" src={farPixels} alt="Far Pixels" />
        <img className="art-close-pixels" src={closePixels} alt="Close Pixels" /> */}
        <div className="content flex-center">
          <div className="content-section text-light">
            <div className="content-section-indicator">
              <div className="description">
                SERVICES
              </div>
              <div className="number">
                3.1
              </div>
            </div>
            <h2 className="content-section-header">PHOTO</h2>
            <div className="content-section-body">
              <p>
                Phase One photography will capture what it is that embodies
                your brand as we venture into what makes your company unique.
                A unique look comes recognizable features, and with that we have
                identity. Identity will keep them coming back.
              </p>
            </div>
          </div>
          <Fade bottom>
            <div className="artwork">
              <img className="content-artwork" src={artwork} alt="Artwork" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Photo)
