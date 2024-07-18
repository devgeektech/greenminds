import React from "react";
import "./style.scss";

import CustomizeIcon from "@/app/icons/CustomizeIcon";
import EngageIcon from "@/app/icons/EngageIcon";
import SignupIcon from "@/app/icons/SignupIcon";
import SettingIcon from "@/app/icons/SettingIcon";

function Howitworks() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 ">
          <h2
            className="text-center"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            How it <span>works</span>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="inner-works">
          <div className="row justify-content-between align-items-center circle-icon">
            <div
              className="col-md-6 left-side"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className="counter py-5 d-flex align-items-center">
                <span>01</span>
                <div className="icon-img">
                  <SignupIcon />{" "}
                </div>
              </div>
            </div>
            <div
              className="col-md-6 right-side"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <div className="icon-content my-5">
                <h3>Sign Up</h3>
                <p>
                  Create an account and get started with our easy onboarding
                  process.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-between align-items-center circle-icon">
            <div
              className="col-md-6 left-side"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className="icon-content py-5 ">
                <h3>Customize Your Training</h3>
                <p>
                  Tailor the curriculum to meet your company’s specific ESG
                  goals.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 right-side"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <div className="counter d-flex align-items-center my-5">
                <div className="icon-img">
                  <CustomizeIcon />
                </div>{" "}
                <span>02</span>
              </div>
            </div>
          </div>

          <div className="row justify-content-between align-items-center circle-icon">
            <div
              className="col-md-6 left-side"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className="counter d-flex align-items-center py-5">
                <span>03</span>
                <div className="icon-img">
                  <EngageIcon />{" "}
                </div>
              </div>
            </div>
            <div className="col-md-6 right-side">
              <div
                className="icon-content my-5"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <h3>Engage Your Workforce</h3>
                <p>
                  Launch the interactive training and keep your employees
                  engaged with gamified content.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-between align-items-center circle-icon">
            <div className="col-md-6 left-side">
              <div
                className="icon-content my-5"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <h3>Track Progress and Improve</h3>
                <p>
                  Monitor progress with detailed analytics and continuously
                  improve your training programs.
                </p>
              </div>
            </div>

            <div className=" col-md-6 right-side">
              <div
                className="counter d-flex align-items-center py-5"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <div className="icon-img">
                  <SettingIcon />
                </div>
                <span>04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitworks;
