import React, { Component } from 'react'

import Train from '../../components/Train'
import HeroParallax from '../HeroParallax'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'
import Services from '../Services'
import Photo from '../Services/scenes/Photo'
import Video from '../Services/scenes/Video'
import Web from '../Services/scenes/Web'
import Footer from '../../components/Footer'

export default class Landing extends Component {
  render() {
    return (
      <div className="wrapper">
        <HeroParallax />
        <About />
        <Services />
        <Photo />
        <Video />
        <Web />
        <Projects />
        <Train />
        <Contact />
        <Footer />        
      </div>
    )
  }
}
