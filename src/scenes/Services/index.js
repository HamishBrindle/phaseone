import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Art Components
import Background from './Art/Background'
import Building2 from './Art/Building2'
import Building3 from './Art/Building3'
import Building4 from './Art/Building4'
import Close from './Art/Close'
import Far from './Art/Far'
import Gears from './Art/Gears'
import Midground from './Art/Midground'

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
      <div className='wrapper'>
        <div className="services-grid-container">
          <div className="lang">
          </div>
          <div className="content">
            <div className="content-top-bottom">
              <div className="top">
                <div className="top-art">
                  <Close id="close"/>
                  <Far id="far"/>
                </div>
                <div className="top-left">
                  <div className="vertical-text-and-box">
                    <p className="vertical-text">WHAT WE DO</p>
                    <div className="page-number-box"><p>02</p></div>
                  </div>
                  <h1 className="page-header">SERVICES</h1>
                  <div className="page-content">
                    <p>
                      We offer a wide range of services and expertise. With Phase One,
                      the look and feel of your product will remain constant across the board,
                      giving a cohesive and complete final product.
                    </p>
                  </div>
                </div>
                <div className="top-right">
                  <Gears />
                </div>
              </div>
              <div className="bottom">
                <div className="background">
                  <Background className="background-1"/>
                  <Midground className="background-2"/>
                </div>
                <div className="buildings">
                  <Building2 className="building-2"/>
                  <Building3 className="building-3" />
                  <Building4 className="building-4" />
                </div>
                <div className="building-labels">
                  <p onClick={this.clicked} className="label-2">PHOTO</p>
                  <p className="label-3">VIDEO</p>
                  <p className="label-4">WEB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar">
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
