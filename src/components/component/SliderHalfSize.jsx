import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"

import { Carousel } from "react-responsive-carousel"

import './SliderFullAndHalfSize.css'

const SliderHaldSize = ({ pictures }) => {
  return (
    <Carousel
        interval={5000} autoPlay={true} infiniteLoop
        showIndicators={false} showStatus={false} showArrows={false}
        showThumbs={false} transitionTime={600}
        >
        {pictures.map((slide, index) => (
            <img loading="lazy" src={slide.image} key={index} alt=""/>
        ))}
    </Carousel>
  )
}

export default SliderHaldSize