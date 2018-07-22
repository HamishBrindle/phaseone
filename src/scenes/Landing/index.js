import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './style.css'

import background from '../../assets/Landing/BACKGROUND.svg'
import midground from '../../assets/Landing/MIDGROUND.svg'
import foreground from '../../assets/Landing/FOREGROUND.svg'

export class Landing extends Component {

//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <div className='wrapper'>
        <div className="grid-container">
          <div className={(this.props.open) ? "art at-the-back" : "art"}>
            <div className="art-background">
              <div className="bg" >
                <img src={background} alt="Background Art 1" />
              </div>
              <div className="mg" >
                <img src={midground} alt="Background Art 2" />
              </div>
              <div className="fg" >
                <div className="fg-interacts">
                  <div className="fg-interact-1"></div>
                  <div className="fg-interact-2"></div>
                  <div className="fg-interact-3"></div>
                  <div className="fg-interact-4"></div>
                </div>
                <img src={foreground} alt="Background Art 3" />
              </div>
            </div>
          </div>
          <div className={(this.props.open) ? "header at-the-back" : "header"}>
            <div className="header-content">
              <h1 className="header-title">PHASE ONE</h1>
              <h3 className="subheader-1">Helping you pick</h3>
              <h3 className="subheader-2">a new direction</h3>
            </div>
          </div>
          <div className="lang">
          </div>
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
