"use client";
import Image from "next/image";
import React from "react";
import "./style.scss";
import Slider from "react-slick";
import yahoo from "@/assets/images/yahoo.png";
import bloomberg from "@/assets/images/bloomberg.png";
import forbes from "@/assets/images/forbes.png";
import nbc from "@/assets/images/nbc.png";
import clientImg from "../assets/images/leo.jpg";

export default function Testimonialslider() {
  const Testimonal = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    centerPadding: "0px",

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
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="testimonal-wrapper">
      <Slider {...Testimonal}>
        <div className="Testimonal-slide">
          <div className="client-details">
            <Image src={clientImg} alt="clientImage" />
            <div className="client-name-description">
              <h4>Leo</h4>
              <p>Lead Designer</p>
            </div>
          </div>
          <div className="client-review">
            <h3>It was a very good experience</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu. pretium
              in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat
              duis diam lacus arcu.
            </p>
          </div>
        </div>
        <div className="Testimonal-slide">
          <div className="client-details">
            <Image src={clientImg} alt="clientImage" />
            <div className="client-name-description">
              <h4>Leo</h4>
              <p>Lead Designer</p>
            </div>
          </div>
          <div className="client-review">
            <h3>It was a very good experience</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu. pretium
              in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat
              duis diam lacus arcu.
            </p>
          </div>
        </div>
        <div className="Testimonal-slide">
          <div className="client-details">
            <Image src={clientImg} alt="clientImage" />
            <div className="client-name-description">
              <h4>Leo</h4>
              <p>Lead Designer</p>
            </div>
          </div>
          <div className="client-review">
            <h3>It was a very good experience</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu. pretium
              in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat
              duis diam lacus arcu.
            </p>
          </div>
        </div>
        <div className="Testimonal-slide">
          <div className="client-details">
            <Image src={clientImg} alt="clientImage" />
            <div className="client-name-description">
              <h4>Leo</h4>
              <p>Lead Designer</p>
            </div>
          </div>
          <div className="client-review">
            <h3>It was a very good experience</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu. pretium
              in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat
              duis diam lacus arcu.
            </p>
          </div>
        </div>
        <div className="Testimonal-slide">
          <div className="client-details">
            <Image src={clientImg} alt="clientImage" />
            <div className="client-name-description">
              <h4>Leo</h4>
              <p>Lead Designer</p>
            </div>
          </div>
          <div className="client-review">
            <h3>It was a very good experience</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu. pretium
              in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat
              duis diam lacus arcu.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
