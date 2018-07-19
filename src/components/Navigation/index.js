import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'

import { NavLink } from 'react-router-dom'

// import { NavLink } from 'react-router-dom'
import logo from '../../assets/LOGO-ICON.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { showMenu, hideMenu } from '../../redux/actions'

const iconColor = '#F3F0F1';

class Navigation extends Component {

  render() {

    return (
      <div className="navigation">
        <nav className='navigation-bar'>
          <a href='/'><img src={logo} alt="Logo" className='nav-brand' /></a>
          <button
            className='nav-menu'
            onClick={
              (this.props.open) ? this.props.hideMenu : this.props.showMenu
            }>
            {
              this.props.open ? <FontAwesomeIcon icon="times" color={iconColor} /> : <FontAwesomeIcon icon="bars" color={iconColor} />
            }
          </button>
        </nav>
        <div className={(this.props.open) ? "underlay underlay-active" : "underlay"}></div>
        <div className={(this.props.open) ? "slider slider-active" : "slider"}>
          <div className="slider-navigation">
            <NavLink onClick={this.props.hideMenu} to="/" className="slider-navigation-link">Home</NavLink>
            <NavLink onClick={this.props.hideMenu} to="/about" className="slider-navigation-link">About</NavLink>
            <NavLink onClick={this.props.hideMenu} to="/services" className="slider-navigation-link">Services</NavLink>
            <NavLink onClick={this.props.hideMenu} to="/projects" className="slider-navigation-link">Projects</NavLink>
            <NavLink onClick={this.props.hideMenu} to="/contact" className="slider-navigation-link">Contact</NavLink>
          </div>
        </div>
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    open: state.navigation[0].open
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showMenu: () => {
      dispatch(showMenu());
    },
    hideMenu: () => {
      dispatch(hideMenu());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)