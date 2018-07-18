import React, { Component } from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
  
  render() {

    return (
      <nav className="navigation">
        <NavLink to="/" className="menu-item" href="/">Home</NavLink>
        <NavLink to="/about" className="menu-item" href="/about">About</NavLink>
        <NavLink to="/contact" className="menu-item" href="/contact">Contact</NavLink>
      </nav>
    )

  }
}
