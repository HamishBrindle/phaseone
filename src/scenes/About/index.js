import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Buildings from './Buildings/Buildings'
import FallingBlocks from './Buildings/FallingBlocks'
import artwork from '../../assets/About/ARTWORK.png'

import './style.css'

export class About extends Component {

    //   static propTypes = {
    //     prop: PropTypes
    //   }

    render() {
        return (
            <div className='wrapper'>
                <div className="about-container">
                    <div className="lang"></div>
                    <div className="main">
                        <div className="art">
                            <Buildings />
                        </div>
                        <div className="content">
                            <div className="content-text">
                                <div className="vertical-text-and-box">
                                    <p className="vertical-text">Let's Begin</p>
                                    <div className="page-number-box"><p>01</p></div>
                                </div>
                                <h1 className="page-header">BUILDING BLOCKS</h1>
                                <div className="page-content">
                                    <p>
                                        Phase One is a marketing firm based out of Vancouver, Canada. 
                                        Our primary purpose is bringing an elegant suite of design-tools 
                                        and services to new companies, developments, and brands to help 
                                        find an identity that suits their needs.
                                        <br /><br />
                                        Think of our services like the first building blocks of your 
                                        company's future!
                                    </p>
                                </div>
                            </div>                       
                            <div className="content-image">
                                <img className="artwork" src={artwork} alt="About-Artwork"/>
                            </div>                       
                        </div>
                    </div>
                    <div className="side-nav"></div>
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