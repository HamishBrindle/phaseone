import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Link } from 'react-scroll'


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

    const links = [
        "photo",
        "video",
        "web"
      ]

    return (
      <div className="services-navigation">
        <div className="navigation">
            <ul className="navigation-items">
                { links.map((link) => 
                <Link 
                    key={link} 
                    className="navigation-item"
                    activeClass="active"
                    onClick={this.props.hideMenu}
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                >
                    <span className={this.state.parent === link ? `strike ${link}-strike` : ""}>{link}</span>
                </Link>
                )}
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
