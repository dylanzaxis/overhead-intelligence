import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import logo_light from "../../assets/images/logo/logo-light.png";
import logo_dark from "../../assets/images/logo/logo-dark.png";
import logo_symbol_dark from "../../assets/images/logo/logo-symbol-dark.png";
import logo_symbol_light from "../../assets/images/logo/logo-symbol-light.png";
import the_logo from "../../assets/images/logo/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = logo_light;
    } else if (logo === "dark") {
      logoUrl = logo_dark;
    } else if (logo === "symbol-dark") {
      logoUrl = logo_symbol_dark;
    } else if (logo === "symbol-light") {
      logoUrl = logo_symbol_light;
    } else {
      logoUrl = the_logo;
    }

    return (
      <div
        className={`header-area header--fixed formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">
                <img src={logoUrl} alt="Drone Agency" />
              </a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              {/* <ul className="mainmenu">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul> */}
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
