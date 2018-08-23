import React, { Component } from 'react'

export default class SocialIcon extends Component {
    render() {
        return (
            <a href={this.props.link}>
                <img src={this.props.image} alt={this.props.name} />
            </a>
        )
    }
}
