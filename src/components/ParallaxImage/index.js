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

        const styles = {
            cursor: "pointer"
        }
        
        return (
            <img
                src={this.props.src}
                onLoad={this.handleLoad}
                alt="Parallax"
                data-goto={this.props.goesTo}
                data-tip
                data-for={`tooltip-${this.props.goesTo}`}
                onClick={this.props.onClick}
                style={styles}
                className={this.props.className}
                id={this.props.id}
            />
        )
    }
}
