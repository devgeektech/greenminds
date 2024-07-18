"use client";
import Image from "next/image";

import "./style.scss";

//import Icons
import ArrowIcon from "./icons/ArrowIcon";
import TrainingIcon from "./icons/TrainingIcon";
import ListingIcon from "./icons/ListingIcon";
import LearningIcon from "./icons/LearningIcon";
import GamingIcom from "./icons/gamingIcon";
import AnalyticIcon from "./icons/AnalyticIcon";
import Onboarding from "./icons/Onboarding";

//Import slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//IMPORT Images
import bannerVideo from "@/assets/images/bannerVideo.png";
import yahoo from "@/assets/images/yahoo.png";
import bloomberg from "@/assets/images/bloomberg.png";
import forbes from "@/assets/images/forbes.png";
import nbc from "@/assets/images/nbc.png";
import MissionImg from "@/assets/images/Mission.jpg";
import VissionImg from "@/assets/images/Vision.jpg";
import clientImg from "../assets/images/leo.jpg";

import Howitworks from "@/components/howitworks";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Partnerslider from "@/components/partnerSlider";
import { PAGEDESCRIPTION, PAGETITLE } from "@/const/utils";
import { Features } from "@/const/features";
export default function () {
  // const settings = {
  //   dots: false,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   infinite: true,
  //   autoplay: false,
  //   autoplaySpeed: 1000,

  //   responsive: [
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },

  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 4,
  //       },
  //     },
  //   ],
  // };

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

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: true,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 500,
      easing: "linear",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <div className="homePage">
      <section className="smartAi_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="banner_text text-center">
                <h1 data-aos="fade-down" data-aos-duration="500">
                  {PAGETITLE}
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="banner-txt-sml"
                >
                 {PAGEDESCRIPTION}
                </p>
                <div className="d-flex mt-3 justify-content-center mob-banner">
                  <div
                    className="mob-banner-btn"
                    data-aos="fade-right"
                    data-aos-duration="500"
                  >
                    <button type="button" className="btnprimary chatbotBtn d-flex justify-content-center align-items-center">
                      Get Started <ArrowIcon />
                    </button>
                  </div>
                  <button
                    className="btndefault chatbotBtn"
                    data-aos="fade-left"
                    data-aos-duration="500"
                    type="button"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div
                className="videoWrapper"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-easing="ease-out-back"
                data-aos-delay="0"
              >
                <Image className="h-auto" src={bannerVideo} alt="bannerVideo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="powerfulFeatures">
        <div className="container">
          <h3
            className="text-center"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Powerful <span>Features</span>
          </h3>
          <div className="row mt-5">
            {Features.map((items:any) => 
              <div key={items.index} className="col-md-4 mb-4">
                <div
                  className="feature-content justify-content-start d-flex flex-column"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  {items.icon}
                  <h3>{items.title}</h3>
                  <div className="feature-description ">
                    {items.listing.map((items:any) => (<p className="d-flex align-items-start justify-content-start">
                        {" "}
                        <span>
                          {items.checkicon}
                        </span>{" "}
                        { items.listOne || items.listTwo }
                      </p>
                    ))}
                    {/* <p className="d-flex align-items-starr justify-content-start">
                      <span>
                        {" "}
                        <ListingIcon />
                      </span>{" "}
                      Example of an interactive module
                    </p> */}
                  </div>
                </div>
              </div>
            )}
            {/* <div className="col-md-4 mb-4">
              <div
                className="feature-content justify-content-start d-flex flex-column"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <LearningIcon />
                <h3>Personalized Learning Paths:</h3>
                <div className="feature-description">
                  <p className="d-flex align-items-start justify-content-start">
                    {" "}
                    <span>
                      <ListingIcon />
                    </span>
                    Explanation of how the AI customizes training for each user
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="feature-content d-flex justify-content-start flex-column"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <GamingIcom />

                <h3>Gamification and Rewards:</h3>
                <div className="feature-description">
                  <p className="d-flex align-items-start justify-content-start">
                    {" "}
                    <span>
                      <ListingIcon />
                    </span>{" "}
                    Details on how gamification keeps users engaged
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="feature-content d-flex justify-content-start flex-column"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <AnalyticIcon />
                <h3>Comprehensive Analytics:</h3>
                <div className="feature-description">
                  <p className="d-flex align-items-start justify-content-start">
                    <span>
                      {" "}
                      <ListingIcon />
                    </span>{" "}
                    Overview of analytics available to administrators
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="feature-content d-flex justify-content-start flex-column"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <Onboarding />
                <h3>Easy Onboarding:</h3>
                <div className="feature-description">
                  <p className="d-flex align-items-start justify-content-start">
                    {" "}
                    <span>
                      <ListingIcon />
                    </span>{" "}
                    Step-by-step guide on onboarding new users
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="logosWrapper">
        <div className="container">
          <h3
            className="text-center"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            See our <span> prominent partners</span>
          </h3>
          <div className="row">
            <div
              className="col-sm-12"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              {/* <div className="slider-wrapper">
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
              </div> */}
              <Partnerslider/>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutus_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <h2
                className="text-center"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                About <span>Us</span>
              </h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <div
                className="about_block"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <div className="about_block_text">
                  <h3 className="">
                    Our <span>Mission</span>
                  </h3>
                  <p>
                    At GreenMinds, we are committed to fostering a culture of
                    sustainability and responsibility in the workplace through
                    innovative ESG training solutions.
                  </p>
                </div>
                <div className="img_block">
                  <Image
                    className="w-100 h-100"
                    src={MissionImg}
                    alt="blockOne"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div
                className="about_block"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <div className="about_block_text">
                  <h3>
                    <span>Our </span>Vision:
                  </h3>
                  <p>
                    To be the leading provider of ESG education, empowering
                    companies to create a better future for all.
                  </p>
                </div>
                <div className="img_block">
                  <Image
                    className="w-100 h-100"
                    src={VissionImg}
                    alt="blockTwo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <Howitworks />
      </section>

      {/* <section className="TestimonalsWrapper">
        <div className="container">
          <h2
            className="text-center"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Testimonials
          </h2>

          <div className="row mt-4">
            <div
              className="col-sm-12"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris, nec turpis orci lectus maecenas.
                        Suspendisse sed magna eget nibh in turpis. Consequat
                        duis diam lacus arcu. pretium in tincidunt. Suspendisse
                        sed magna eget nibh in turpis. Consequat duis diam lacus
                        arcu.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris, nec turpis orci lectus maecenas.
                        Suspendisse sed magna eget nibh in turpis. Consequat
                        duis diam lacus arcu. pretium in tincidunt. Suspendisse
                        sed magna eget nibh in turpis. Consequat duis diam lacus
                        arcu.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris, nec turpis orci lectus maecenas.
                        Suspendisse sed magna eget nibh in turpis. Consequat
                        duis diam lacus arcu. pretium in tincidunt. Suspendisse
                        sed magna eget nibh in turpis. Consequat duis diam lacus
                        arcu.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris, nec turpis orci lectus maecenas.
                        Suspendisse sed magna eget nibh in turpis. Consequat
                        duis diam lacus arcu. pretium in tincidunt. Suspendisse
                        sed magna eget nibh in turpis. Consequat duis diam lacus
                        arcu.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris, nec turpis orci lectus maecenas.
                        Suspendisse sed magna eget nibh in turpis. Consequat
                        duis diam lacus arcu. pretium in tincidunt. Suspendisse
                        sed magna eget nibh in turpis. Consequat duis diam lacus
                        arcu.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
