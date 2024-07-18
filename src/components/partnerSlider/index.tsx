"use client";
import Image from "next/image";
import React from 'react';
import "./style.scss";
import Slider from 'react-slick';
import yahoo from "@/assets/images/yahoo.png";
import bloomberg from "@/assets/images/bloomberg.png";
import forbes from "@/assets/images/forbes.png";
import nbc from "@/assets/images/nbc.png";

export default function Partnerslider() {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
    
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
    
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
      };
  return (
    <div className="slider-wrapper">
            <Slider {...settings}>
              <div className="img-slide">
                <Image src={yahoo} alt="yahoo" />
              </div>
              <div className="img-slide">
                <Image src={bloomberg} alt="bloomberg" />
              </div>
              <div className="img-slide">
                <Image src={forbes} alt="forbes" />
              </div>
              <div className="img-slide">
                <Image src={nbc} alt="nbc" />
              </div>
              <div className="img-slide">
                <Image src={yahoo} alt="yahoo" />
              </div>
              <div className="img-slide">
                <Image src={bloomberg} alt="bloomberg" />
              </div>
            </Slider>
    </div>
       
  )
}
