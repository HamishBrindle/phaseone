import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import frontSlant from '../../assets/Landing/front-slant.svg'
import farPixels from '../../assets/About/far-pixels.svg'
import midPixels from '../../assets/About/mid-pixels.svg'
import grey from '../../assets/About/grey.svg'
import green from '../../assets/About/green.svg'
import blue from '../../assets/About/blue.svg'
import beige from '../../assets/About/beige.svg'
import artwork from '../../assets/About/ARTWORK.png'

import './style.css'

export class About extends Component {

    //   static propTypes = {
    //     prop: PropTypes
    //   }

    render() {
        return (
            <div id="about" className="dope-bg about-container">
                <img className="front-slant" src={frontSlant} alt="Front Slant" />
                <div className="art">
                    <div className="front-pixels parallax__layer parallax__layer--base">
                        <img src={grey} alt="Grey Pixels" />
                        <img src={green} alt="Green Pixels" />
                        <img src={blue} alt="Blue Pixels" />
                        <img src={beige} alt="Beige Pixels" />
                    </div>
                </div>
                <div className="content flex-center">
                    <div className="content-section">
                        <div className="content-section-indicator">
                            <div className="description">
                                LET'S BEGIN
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
                    <div className="artwork">
                        <img className="content-artwork" src={artwork} alt="Artwork" />
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

export default connect(mapStateToProps, mapDispatchToProps)(About)