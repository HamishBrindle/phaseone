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
          <a href='/'><img src={logo} alt="Logo" className='nav-brand'/></a>
          <button onClick={
            (this.props.open) ? this.props.hideMenu : this.props.showMenu
            } className='nav-menu'><FontAwesomeIcon icon="bars" color={iconColor}/></button>
        </nav>
        <div className={(this.props.open) ? "slider slider-active" : "slider"}>
          <button className='btn btn-exit' onClick={this.props.hideMenu}>
            <FontAwesomeIcon icon="times" color={iconColor}/>
          </button>
          <div className="slider-navigation">
            <NavLink to="/" className="slider-navigation-link">Home</NavLink>
            <NavLink to="/about" className="slider-navigation-link">About</NavLink>
            <NavLink to="/services" className="slider-navigation-link">Services</NavLink>
            <NavLink to="/projects" className="slider-navigation-link">Projects</NavLink>
            <NavLink to="/contact" className="slider-navigation-link">Contact</NavLink>
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