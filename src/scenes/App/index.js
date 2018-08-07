import React, { Component } from 'react';
import './style.css';
import { Switch, Route } from 'react-router-dom'

import { ParallaxProvider } from 'react-scroll-parallax';

import Navigation from '../../components/Navigation'
import Train from '../../components/Train'
import LandingParallax from '../LandingParallax'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'
import Services from '../Services'
import Photo from '../Services/scenes/Photo'
import Video from '../Services/scenes/Video'
import Web from '../Services/scenes/Web'
import NotFound from '../../components/NotFound'

class App extends Component {
  render() {

    return (
      <ParallaxProvider>
        <div className="app">
          <div className="wrapper">
            <LandingParallax />
            <About />
            <Services />
            <Photo />
            <Video />
            <Web />
            <Projects />
            <Train />
            <Contact />
          </div>
          <Navigation />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;