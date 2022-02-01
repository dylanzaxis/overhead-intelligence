import React, { Fragment, useState } from "react";
import Header from "../items/Header";
import Helmet from "../common/Helmet";
import { videoTagString, VideoTag } from "react-video-tag";
import ModalVideo from "react-modal-video";
import service_image from "../../assets/images/blog/bl-big-02.jpg";
import main_video from "../../assets/images/service/video.mp4";
import Portfolio from "../items/Portfolio";
import ServiceTwo from "../items/Portfolio";
import AboutTwo from "../items/Portfolio";
import CounterOne from "../items/Portfolio";
import Testimonial from "../items/Portfolio";
import BrandTwo from "../items/Portfolio";

videoTagString({
  src: "/assets/images/service/video.mp4",
  poster: "/assets/images/bg/bg-image-24.jpg",
});

function App() {
  const SlideList = [
    {
      textPosition: "text-center",
      category: "Drone Surveying Group",
      title: "Welcome Mapping Survey",
      description:
        "Who love mapping, I love mapping. I think flying high is life and life is life and another life is life",
      buttonText: "Learn More",
      buttonLink: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState();

  return (
    <Fragment>
      <Helmet pageTitle="Home" />
      <Header />
      {/* Start Slider Area   */}
      <div className="slider-wrapper">
        {/* Start Single Slide */}
        {SlideList.map((value, index) => (
          <div
            className="slide slide-style-2 slider-video-bg d-flex align-items-center justify-content-center"
            key={index}
            data-black-overlay="8"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className={`inner pt_sm--40 ${value.textPosition}`}>
                    {value.category ? (
                      <span className="theme-color font-700">
                        {value.category}
                      </span>
                    ) : (
                      ""
                    )}
                    {value.title ? (
                      <h1 className="title mt--20">{value.title}</h1>
                    ) : (
                      ""
                    )}
                    {value.description ? (
                      <p className="description">{value.description}</p>
                    ) : (
                      ""
                    )}
                    <a className="btn-default btn-large mt--30" href="/contact">
                      <span>{value.buttonText}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="video-background">
              <VideoTag
                autoPlay={`${true}`}
                muted={`${true}`}
                playsInline={`${true}`}
                loop={`${true}`}
                src={`${"../../assets/images/service/video.mp4"}`}
                poster={`${"/assets/images/bg/bg-image-24.jpg"}`}
                className="video_tag"
              />
            </div>
          </div>
        ))}
        {/* End Single Slide */}
        <div className="video-image-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="thumb position-relative">
                  <img
                    className="w-100"
                    src={service_image}
                    alt="Service Images"
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="Wfa_BUF19nY"
                    onClose={() => setIsOpen(false)}
                  />
                  <button
                    className="video-popup position-top-center theme-color"
                    onClick={() => setIsOpen(true)}
                  >
                    <span className="play-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Portfolio Area */}
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <Portfolio />
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start Service Area  */}
        <div className="service-area ptb--120 bg_color--5">
          <div className="container">
            <ServiceTwo />
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start About Area */}
        <div className="about-area ptb--120 bg_color--1">
          <AboutTwo />
        </div>
        {/* End About Area */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle">Experts growts</span>
                  <h2 className="title">Our Company Growth</h2>
                  <p className="description">
                    We have grown strength over the past 20 years.
                  </p>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Testimonial Area */}
        <div className="rn-testimonial-area bg_color--1 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start Brand Area */}
        <div className="rn-brand-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-center mb--30">
                  <span className="subtitle">Top clients</span>
                  <h2 className="title">We worked with brands.</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Slider Area   */}
    </Fragment>
  );
}

export default App;
