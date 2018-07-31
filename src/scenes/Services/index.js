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
      <div className="dope-bg services-container parallax__group">
        <div className="top-art parallax__layer parallax__layer--close parallax__group">
          <img className="art-close-pixels" src={closePixels} alt="Close Pixels"/>
          <img className="art-far-pixels" src={farPixels} alt="Close Pixels"/>
        </div>
        <div className="bottom-art">
          <img className="far-buildings" src={farBuildings} alt=""/>
          <img className="mid-buildings" src={midBuildings} alt=""/>
          <img className="front-buildings" src={frontBuildings} alt="Front Buildings"/>
          <div className="colored-buildings">
            <img className="colored-building green" src={green} alt="Green Building"/>
            <img className="colored-building blue" src={blue} alt="Blue Building"/>
            <img className="colored-building beige" src={beige} alt="Beige Building"/>
          </div>
        </div>
        <div className="content parallax__layer--base">
          <img className="content-artwork" src={artwork} alt="Artwork" />
          <div className="content-text">
              <div className="page-indicator">
                  WHAT WE DO
              </div>
              <h2 className="page-header">SERVICES</h2>
              <div className="page-number">
                  02
              </div>
              <p className="page-content">
                We offer a wide range of services and expertise. With Phase One, 
                the look and feel of your product will remain constant across the 
                board, giving a cohesive and complete final product.
              </p>
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
