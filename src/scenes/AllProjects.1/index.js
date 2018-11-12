import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import MasonryItem from '../../components/MasonryItem'

import ReactPlayer from 'react-player'
import Footer from '../../components/Footer'
import Lightbox from 'lightbox-react';

import './style.css'
import newProjects from './projects'

export class AllProjects extends Component {

    constructor() {
        super()
        this.selectMasonryItem = this.selectMasonryItem.bind(this)
        this.state = {
            itemIndex: 0,
            isOpen: false,
        }
    }

    selectMasonryItem(e) {
        const itemIndex = e.target.attributes['data-index'].nodeValue
        this.setState({ itemIndex: itemIndex, isOpen: true })
    }


    render() {
        console.log(newProjects);
        const { itemIndex, isOpen } = this.state
        return (
            <div className="dope-bg wrapper">
                <div className="gallery-container">
                    <div className="gallery-jumbotron">
                        <div>
                            <img src={require('../../assets/landing-title.svg')} alt="Logo"/>
                            <h1>Projects</h1>
                            <p>Have a look at our previous work, and feel free to contact us with any ideas - we love new ideas.</p>
                            <br/>
                            <Link to="/">
                                <button style={{ marginBottom: '24px' }} className="button-light">go back</button>
                            </Link>
                        </div>
                    </div>
                    <div className="gallery-content">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                        >
                            <Masonry>
                                {newProjects.map((project) =>
                                    <MasonryItem key={project.index} project={project} onClick={this.selectMasonryItem} />
                                )}
                            </Masonry>
                        </ResponsiveMasonry>

                    </div>

                    {isOpen && (
                        <Lightbox
                            mainSrc={newProjects[itemIndex].type === 'video' ? <ReactPlayer url={newProjects[itemIndex].src} volume={0.75} width='100%' height='100%' /> : newProjects[itemIndex].src}
                            nextSrc={newProjects[(itemIndex + 1) % newProjects.length].src}
                            prevSrc={newProjects[(itemIndex + newProjects.length - 1) % newProjects.length].src}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    itemIndex: (itemIndex + newProjects.length - 1) % newProjects.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    itemIndex: (itemIndex + 1) % newProjects.length,
                                })
                            }
                        />
                    )}

                </div>
                <Footer />
            </div>
        )
    }
}

export default AllProjects
