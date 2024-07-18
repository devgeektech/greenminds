"use client";
import Image from "next/image";
import React from "react";
import footerLogo from "../../assets/images/logo.png";
//import  arrowRightGradientIcon from '../../assets/images/arrowRightGradientIcon.svg';
import "./style.scss";
// import { Button } from "react-bootstrap";
import Link from "next/link";
// import TwitterIcon from "@/app/icons/TwitterIcon";
// import InstagramIcon from "@/app/icons/InstagramIcon";
// import FacebookIcon from "@/app/icons/FacebookIcon";
// import EmailIcon from "@/app/icons/EmailIcon";
// import TiktokIcon from "@/app/icons/TiktokIcon";
// import LinkedinIcon from "@/app/icons/LinkedinIcon";
// import YoutubeIcon from "@/app/icons/youtubeIcon";
// import ArrowIcon from "@/app/icons/ArrowIcon";
import SubscribeBtn from "@/app/icons/SubscribeIcon";

import { Menu } from "@/const/menu";
import { Socialmenu } from "@/const/socialMenu";
import { copyRightMenu } from "@/const/copyRightMenu";
import { Copyright } from "@/const/utils";
export default function footer() {
  return (
    <footer className="footer">
      <div className="container footer-sec">
        <div className="row">
          <div className="col-md-4">
            <div className="Greenmind-footer-sec">
              <Link data-aos="fade-right" data-aos-duration="500" href={"/"}>
                <Image src={footerLogo} alt="logo" />
              </Link>
              <p data-aos="fade-right" data-aos-duration="500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
              <ul
                className="socialMenu"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                {Socialmenu.map((items:any) => 
                  <li key={items.index}>
                    <Link href={items.url} target={items.target}>
                      {items.icon}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="footerMenu"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <h3 data-aos="fade-right" data-aos-duration="500">
                Quick links
              </h3>
              <ul
                className="mainMenu"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                { Menu.map((items:any) => 
                <li key={items.index}>
                  <Link href={items.url}>{items.name}</Link>
                </li>
                )}
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="footer-subscribe"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <h3 className="mb-3" data-aos="fade-left" data-aos-duration="500">
                Subscribe to our newsletter
              </h3>
              <p className="pb-3" data-aos="fade-left" data-aos-duration="500">
                Join our community for Blockchain, news, and special offer s
                tailored just for you!
              </p>
              <form
                className="mt-3"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <div className="form-group d-flex">
                  <input
                    type="email"
                    className="form-control border-0"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email address"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary d-flex justify-content-start align-items-center"
                  >
                    <SubscribeBtn />
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 copy-right-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 copyright-text">
              <p> {Copyright}</p>
            </div>
            <div className="col-md-6 copyright-menu">
              <ul>
                { copyRightMenu.map((items:any) =>
                <li key={items.index}>
                  <Link href={items.url}>{items.name}</Link>
                </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
