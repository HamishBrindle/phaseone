import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'

// import { NavLink } from 'react-router-dom'
import logo from '../../assets/Navigation/no-type.svg'
import menu from '../../assets/Navigation/nav-menu.svg'
import exit from '../../assets/Navigation/nav-exit.svg'

import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll'

import { showMenu, hideMenu } from '../../redux/actions'

class Navigation extends Component {


  componentDidMount() {
    scrollSpy.update();
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  scrollMore() {
    scroll.scrollMore(100);
  }

  handleSetActive(to) {
    // console.log(to);
  }

  render() {

    const links = [
      "home",
      "about",
      "services",
      "projects",
      "contact"
    ]

    return (
      <div className="navigation">
        <nav className='navigation-bar'>
          <a href='/'><img src={logo} alt="Logo" className='nav-brand' /></a>
          <div
            className='nav-menu'
            onClick={
              (this.props.open) ? this.props.hideMenu : this.props.showMenu
            }>
            {
              this.props.open ?
                <img className="nav-menu-close" src={exit} alt="Menu Close" />
                :
                <img className="nav-menu-open" src={menu} alt="Menu Open" />
            }
          </div>
        </nav>
        <div className={(this.props.open) ? "underlay underlay-active" : "underlay"}></div>
        <div className={(this.props.open) ? "slider slider-active" : "slider"}>
          <div className="slider-navigation">
            { links.map((link) =>
              <Link
                key={link}
                className="slider-navigation-link"
                activeClass="active"
                onClick={this.props.hideMenu}
                to={link}
                spy={true}
                smooth="easeOutQuad"
                offset={0}
                duration={1000}
                onSetActive={this.handleSetActive}
              >
                {link}
              </Link>
            )}
          </div>
        </div>
      </div>
    )

  }
}

const mapStateToProps = (state) => {
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