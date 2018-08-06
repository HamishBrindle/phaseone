import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'

import { NavLink } from 'react-router-dom'

// import { NavLink } from 'react-router-dom'
import logo from '../../assets/Navigation/nav-brand.svg'
import menu from '../../assets/Navigation/nav-menu.svg'
import exit from '../../assets/Navigation/nav-exit.svg'

import { showMenu, hideMenu } from '../../redux/actions'

class Navigation extends Component {

  render() {

    return (
      <div className="navigation">
        <nav className='navigation-bar going-dark'>
          <a href='/'><img src={logo} alt="Logo" className='nav-brand' /></a>
          <div
            className='nav-menu'
            onClick={
              (this.props.open) ? this.props.hideMenu : this.props.showMenu
            }>
            {
              this.props.open ?
                <img className="nav-menu-close" src={exit} alt="Menu Close"/>
                :
                <img className="nav-menu-open" src={menu} alt="Menu Open"/>
            }
          </div>
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