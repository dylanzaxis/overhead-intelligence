import React, { Component } from "react";
import PageHelmet from "../common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import GoogleMapReact from "google-map-react";
import ContactTwo from "../items/Contact";
import BrandTwo from "../items/BrandTwo";
import Header from "../items/Header";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Contact" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--15"
          data-black-overlay="6"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Contact With Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Contact Top Area  */}
        <div className="rn-contact-top-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title mb--30 text-center">
                  <span className="subtitle">Our contact address</span>
                  <h2 className="title">Quick Contact Address</h2>
                  <p className="description">
                    Please contact us and let's talk Overhead Intelligence
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiHeadphones />
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact Phone Number</h4>
                    <p>
                      <a href="tel:(863) 251-5248">(863) 251-5248</a>
                    </p>
                    <p>
                      <a href="tel:863-204-6118">(863) 204-6118</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Email Address</h4>
                    <p>
                      <a href="mailto:admin@overheadintel.com">
                        admin@overheadintel.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:business@overheadintel.com">
                        business@overheadintel.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Location</h4>
                    <p>
                      199 Avenue B NW Suite 240, <br /> Winter Haven, FL 33881
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}
            </div>
          </div>
        </div>
        {/* End Contact Top Area  */}

        {/* Start Contact Page Area  */}
        <div className="rn-contact-page ptb--120 bg_color--1">
          <ContactTwo />
        </div>
        {/* End Contact Page Area  */}

        {/* Start Contact Map  */}
        <div className="rn-contact-map-area position-relative">
          <div style={{ height: "650px", width: "100%" }}>
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={77.4977}
                lng={27.2046}
                text="Overhead Intelligence"
              />
            </GoogleMapReact>
          </div>
        </div>
        {/* End Contact Map  */}

        {/* Start Brand Area */}
        <div className="rn-brand-area bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />{" "}
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}
      </React.Fragment>
    );
  }
}
export default Contact;
