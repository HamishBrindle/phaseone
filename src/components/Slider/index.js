import React, { Component } from 'react'
import Slider from "react-slick"

import './style.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " arrow next-arrow"}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " arrow prev-arrow"}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

export default class CustomSlider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: this.props.images
        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            lazyLoad: true,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            adaptiveHeight: true
        };
        return (
            <div className="slider">
                <Slider {...settings}>
                    {this.state.images.map((image) =>
                        <div key={image} className="slide">
                            <img src={image} alt="Slide" />
                        </div>
                    )}
                </Slider>
            </div>
        );
    }
}
