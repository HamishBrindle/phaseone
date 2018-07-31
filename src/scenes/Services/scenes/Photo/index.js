import React, { Component } from 'react'
import { ServicesNavigation } from '../../../../components/ServicesNavigation'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import farPixels from '../../../../assets/Photo/pixels-background.svg'
import closePixels from '../../../../assets/Photo/pixels-midground.svg'
import artwork from '../../../../assets/Photo/photo-artwork.png'


import './style.css'

export class Photo extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    return (
      <div id="photo" className="photo-container parallax__group">
        <ServicesNavigation className="parallax__layer parallax__layer--base" parent="photo"/>
        <div className="art parallax__layer parallax__layer--close parallax__group">
          <img className="art-far-pixels" src={farPixels} alt="Far Pixels" />
          <img className="art-close-pixels" src={closePixels} alt="Close Pixels" />
        </div>
        <div className="content parallax__layer parallax__layer--base">
          <div className="content-text">
            <div className="page-indicator">
              SERVICES
              </div>
            <h2 className="page-header">PHOTO</h2>
            <div className="page-number">
              3.1
              </div>
            <p className="page-content">
              Phase One photography will capture what it is that embodies
              your brand as we venture into what makes your company unique.
              A unique look comes recognizable features, and with that we have
              identity. Identity will keep them coming back.
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

export default connect(mapStateToProps, mapDispatchToProps)(Photo)
