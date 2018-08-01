import React, { Component } from 'react'
import { ServicesNavigation } from '../../../../components/ServicesNavigation'

// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './style.css'

import farPixels from '../../../../assets/Web/pixels-background.svg'
import closePixels from '../../../../assets/Web/pixels-midground.svg'
import artwork from '../../../../assets/Web/artwork.png'

export class Web extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    return (
      <div id="web" className="web-container parallax__group">
        <ServicesNavigation className="parallax__layer parallax__layer--base" parent="web" />
        <div className="art parallax__layer parallax__layer--close parallax__group">
          <img className="art-far-pixels" src={farPixels} alt="Far Pixels" />
          <img className="art-close-pixels" src={closePixels} alt="Close Pixels" />
        </div>
        <div className="content parallax__layer parallax__layer--base">
          <div className="content-text">
            <div className="page-indicator">
              SERVICES
              </div>
            <h2 className="page-header">WEB DESIGN</h2>
            <div className="page-number">
              3.3
              </div>
            <p className="page-content">
              A website is crucial in the gaining and maintaining of customers - 
              it's your companies portal to the world! Therefore its of the utmost 
              importance you 'wow' everyone who comes through, all the while educating 
              them on your business and what it is you can do for them. We can help with this.
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

export default connect(mapStateToProps, mapDispatchToProps)(Web)
