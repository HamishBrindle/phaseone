import React, { Component } from 'react'
import VideoThumbnail from 'react-video-thumbnail'

import './style.css'

export default class MasonryItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: this.props.project.index
        }
    }

    render() {

        const project = this.props.project

        return (
            <div className="masonry-item" onClick={this.props.onClick} style={{ margin: '8px'}}>
                <img style={{ width: '100%', height: '100%'}} src={project.thumbnail} alt={project.caption} data-index={project.index}/>
            </div>
        )
    }
}
