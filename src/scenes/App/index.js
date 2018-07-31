import React, { Component } from 'react';
import './style.css';
import { Switch, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

import Navigation from '../../components/Navigation'
import Landing from '../Landing'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'
import Services from '../Services'
import Photo from '../Services/scenes/Photo'
import Video from '../Services/scenes/Video'
import Web from '../Services/scenes/Web'
import NotFound from '../../components/NotFound'

library.add(faTimes)
library.add(faBars)

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="wrapper parallax">
          <Landing />
          <About />
          <Services />
          <Photo />
          <Video />
          <Web />
          <Projects />
          <Contact />
        </div>
        <Navigation />
      </div>
    );
  }
}

export default App;