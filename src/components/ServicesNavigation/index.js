import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './style.css'

export class ServicesNavigation extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }
    constructor(props) {
        super(props)
        this.state = {
            parent: props.parent
        }
    }

  render() {

    return (
      <div className="services-navigation">
        <div className="navigation">
            <ul className="navigation-items">
                <li className="navigation-item"><a className={this.state.parent === 'photo' ? "photo-strike" : ""} href="#photo">PHOTO</a></li>
                <li className="navigation-item"><a className={this.state.parent === 'video' ? "video-strike" : ""} href="#video">VIDEO</a></li>
                <li className="navigation-item"><a className={this.state.parent === 'web' ? "web-strike" : ""} href="#web">WEB</a></li>
            </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesNavigation)
