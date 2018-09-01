import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import artwork1 from '../../assets/Projects/artwork1.png'
import artwork2 from '../../assets/Projects/artwork2.png'
import artwork3 from '../../assets/Projects/artwork3.png'
import pixels from '../../assets/Projects/project-pixels.svg'

import './style.css'

export class Projects extends Component {

  constructor(props) {
    super(props)
    this.goToProjects = this.goToProjects.bind(this)
  }

  goToProjects() {

  }
 
  render() {
    return (
      <div id="projects" name="projects" className='dope-bg projects-container'>
          <img className="artwork-pixels" src={pixels} alt="Pixel Art" />
        {/* <img className="pixels art-far-pixels" src={farPixels} alt="Far Pixels" />
        <img className="pixels art-close-pixels" src={closePixels} alt="Close Pixels" /> */}
        <div className="content flex-center text-right">
          <div className="content-section">
            <div className="content-section-indicator">
              <div className="description">
                THE WORK
            </div>
              <div className="number">
                04
            </div>
            </div>
            <h2 className="content-section-header">PROJECTS</h2>
            <div className="content-section-body">
              <p>
                Have a look at our projects. We've curated a wide variety of work we feel proud of.
                Now that you're here, maybe we can talk about something new.
                We're always excited to talk about new ideas!
              </p>
              <Link to="/projects"><button className="button-dark" onClick={this.goToProjects}>view projects</button></Link>
            </div>
          </div>
          <Fade bottom>
            <div className="artwork">
              <img className="artwork-1" src={artwork1} alt="Artwork 1" />
              <img className="artwork-2" src={artwork2} alt="Artwork 2" />
              <img className="artwork-3" src={artwork3} alt="Artwork 3" />
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
