import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Gallery from 'react-grid-gallery';

import './style.css'
import projects from './projects'

export class AllProjects extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="dope-bg wrapper">
                <div></div>
                <div className="gallery-container">
                    <div className="gallery-content">
                        <h1>Projects</h1>
                        <Link to="/">
                            <button className="button-dark">go back</button>
                        </Link>
                        <Gallery images={projects} enableImageSelection={false} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AllProjects)
