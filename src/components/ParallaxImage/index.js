import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ParallaxImage extends Component {

    static contextTypes = {
        parallaxController: PropTypes.object.isRequired,
    };
 

    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.context.parallaxController.update();
    };
 
    render() {
        return <img src={this.props.src} onLoad={this.handleLoad} />;
    }
}
