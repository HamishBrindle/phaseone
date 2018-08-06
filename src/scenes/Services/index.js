import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import artwork from '../../assets/Services/services-gears.svg'
import closePixels from '../../assets/Services/pixels-close.svg'
import farPixels from '../../assets/Services/pixels-far.svg'

import farBuildings from '../../assets/Services/far-buildings.svg'
import midBuildings from '../../assets/Services/mid-buildings.svg'
import frontBuildings from '../../assets/Services/front-buildings.svg'
import green from '../../assets/Services/building-green.svg'
import blue from '../../assets/Services/building-blue.svg'
import beige from '../../assets/Services/building-beige.svg'

import './style.css'

export class Services extends Component {

  //   static propTypes = {
  //     prop: PropTypes
  //   }

  constructor() {
    super()
    this.clicked = this.clicked.bind(this)
  }

  clicked(e) {
    this.props.history.push('/services/photo');
  }

  render() {
    return (
      <div id="services" className="dope-bg services-container">
        {/* <img className="art-close-pixels" src={closePixels} alt="Close Pixels" />
        <img className="art-far-pixels" src={farPixels} alt="Close Pixels" /> */}
        <div className="content flex-center text-right">
          <div className="content-section">
            <div className="content-section-indicator">
              <div className="description">
              THE OFFER
              </div>
              <div className="number">
                02
              </div>
            </div>
            <h2 className="content-section-header">SERVICES</h2>
            <div className="content-section-body">
              <p>
                We offer a wide range of services and expertise. With Phase One,
                the look and feel of your product will remain constant across the
                board, giving a cohesive and complete final product.
              </p>
            </div>
          </div>
          <div className="artwork">
            <img className="content-artwork" src={artwork} alt="Artwork" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Services)
