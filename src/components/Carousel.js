import "slick-carousel/slick/slick-theme.css"; 
import "slick-carousel/slick/slick.css"; 

import React, { Component } from "react";
import Slider from "react-slick";

import bannerImg1 from '../images/site-banner-cover.jpg'

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      };
      return (
        
          <Slider {...settings}>
           <div className="each-banner">
            
            <img src={bannerImg1} alt=""/>
           </div>

           <div className="each-banner">
            
            <img src={bannerImg1} alt=""/>
           </div>

           <div className="each-banner">
            
            <img src={bannerImg1} alt=""/>
           </div>
          </Slider>
       
      );
    }
  }