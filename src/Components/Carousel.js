import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

export default class CarouselHome extends Component {

  render () {
    return (
      <Carousel className="carousel-container">
        <div className="image-carousel"><img src={require("../images/login.svg")} className="carousel-image" alt="" /></div>
        <div className="image-carousel"><img src={require("../logo.svg")} alt="" className="carousel-image" /></div>
      </Carousel>
    )
  }
}