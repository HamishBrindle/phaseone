import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Lottie from 'react-lottie'
import * as animationData from './data.json'
import pixels from '../../assets/Contact/contact-pixels.svg'

import Fade from 'react-reveal/Fade';

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

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <div id="services" name="services"className="dope-bg services-container">
        <img className="artwork-pixels" src={pixels} alt="Pixel Art"/>

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
                Our team will put together and fine tune a package to fit your needs,
                with our wide range of expertise and design elements to get you where
                you need to go. From deciding on a name and logo, building your website,
                and providing renders, video and photo content to fill your online and boots
                on the ground presence. Providing materials and design for physical spaces
                for shops or Sales centers of new developments, signage and more.

                <br/><br/>
                Let us know what you need and let's get the <strong>gears turning</strong>!
              </p>
            </div>
          </div>
          <Fade left>
            <div className="artwork">
              <Lottie className="gears"  options={defaultOptions} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Services)
