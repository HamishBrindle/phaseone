import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Fade from 'react-reveal/Fade';

import artwork from '../../assets/About/ARTWORK.png'
import pixels from '../../assets/Projects/project-pixels.svg'

import './style.css'

export class About extends Component {

    //   static propTypes = {
    //     prop: PropTypes
    //   }

    render() {

        return (
            <div id="about" name="about" className="dope-bg about-container">
                <img className="artwork-pixels" src={pixels} alt="Pixel Art" />

                <div className="content flex-center">
                    <div className="content-section">
                        <div className="content-section-indicator">
                            <div className="description">
                                WE BEGIN
                            </div>
                            <div className="number">
                                01
                            </div>
                        </div>
                        <h2 className="content-section-header">BUILDING BLOCKS</h2>
                        <div className="content-section-body">
                            <p>
                                Phase One is a marketing firm based out of Vancouver, Canada. Our primary purpose
                                is bringing an elegant suite of design-tools and services to new companies,
                                developments, and brands to help find an identity that suits their needs.
                                <br /><br />
                                Think of our services like the first building blocks of your company's future!
                            </p>
                        </div>
                    </div>
                    <Fade right>
                        <div className="artwork">
                            <img className="content-artwork" src={artwork} alt="Artwork" />
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

export default connect(mapStateToProps, mapDispatchToProps)(About)