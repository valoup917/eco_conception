import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"

import { Carousel } from "react-responsive-carousel"

import './SliderFullAndHalfSize.css'

const SliderFullSize = ({ pictures }) => {
  return (
    <Carousel
        interval={3000} autoPlay={true} infiniteLoop
        showIndicators={false} showStatus={false} showArrows={false}
        showThumbs={false} transitionTime={600}
        >
        {pictures.map((slide, index) => (
            <img src={slide.image} key={index} alt=""/>
        ))}
    </Carousel>
  )
}

export default SliderFullSize