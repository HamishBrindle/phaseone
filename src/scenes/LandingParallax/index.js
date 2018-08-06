import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './style.css'

import header from '../../assets/Landing/landing-title.svg'
import subheader from '../../assets/Landing/landing-subtitle.svg'
import farSlant from '../../assets/Landing/far-slant.svg'
import farBuildings from '../../assets/Landing/far-buildings.svg'
import midBuildings from '../../assets/Landing/mid-buildings.svg'
import frontBuildings from '../../assets/Landing/front-buildings.svg'

// Single Buildings
import buildingBeige from '../../assets/Landing/building-beige.svg'
import buildingBlue from '../../assets/Landing/building-blue.svg'
import buildingGrey from '../../assets/Landing/building-grey.svg'
import buildingGreen from '../../assets/Landing/building-green.svg'

import Lottie from 'react-lottie'
import * as animationData from './data.json'

export class Landing extends Component {

//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData
    };

    return (
      <div className="landing-container parallax__group">
        <div className="header">
          <img className="header-title" src={header} alt="Header"/>
          <img className="header-subtitle" src={subheader} alt="Subheader"/>
        </div>

        <div className="art parallax__layer parallax__layer--base parallax__group">
          <img className="far-slant" src={farSlant} alt="Far Slant"/>
          <img className="parallax__layer--deep far-buildings" src={farBuildings} alt="Far Buildings"/>
          <img className="parallax__layer--back mid-buildings" src={midBuildings} alt="Mid Buildings"/>
          <div className="colored-buildings parallax__layer--base">
            <img className="grey" src={buildingGrey} alt="Grey Building"/>
            <img className="green" src={buildingGreen} alt="Green Building"/>
            <img className="blue" src={buildingBlue} alt="Blue Building"/>
            <img className="beige" src={buildingBeige} alt="Beige Building"/>
          </div>
          <img className="front-buildings" src={frontBuildings} alt="Front Buildings"/>
          <Lottie className="train" height="600" options={defaultOptions} />
          {/* <img className="front-slant" src={frontSlant} alt="Front Slant" /> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.navigation[0].open
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
