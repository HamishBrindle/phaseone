import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import farPixels from '../../assets/Projects/pixels-far.svg'
import closePixels from '../../assets/Projects/pixels-mid.svg'
import artwork1 from '../../assets/Projects/artwork1.png'
import artwork2 from '../../assets/Projects/artwork2.png'
import artwork3 from '../../assets/Projects/artwork3.png'

import './style.css'

export class Projects extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    return (
      <div id="projects" className='dope-bg projects-container parallax__group'>
        <div className="art parallax__layer parallax__layer--close parallax__group">
          <img className="art-far-pixels" src={farPixels} alt="Far Pixels" />
          <img className="art-close-pixels" src={closePixels} alt="Close Pixels" />
        </div>
        <div className="content parallax__layer parallax__layer--base">
          <div className="content-text">
            <div className="page-indicator">
              THE WORK
              </div>
            <h2 className="page-header">PROJECTS</h2>
            <div className="page-number">
              04
              </div>
            <p className="page-content">
              Have a look at our projects. We've curated a wide variety of work we feel proud of.
              Now that you're here, maybe we can talk about something new.
              We're always excited to talk about new ideas!
            </p>
            <button className="btn-view-projects">view projects ></button>
          </div>
          <div className="artwork">
            <img className="artwork1" src={artwork1} alt="Artwork" />
            <img className="artwork2" src={artwork2} alt="Artwork" />
            <img className="artwork3" src={artwork3} alt="Artwork" />
          </div>
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
