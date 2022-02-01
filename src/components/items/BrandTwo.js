import React, { Component } from "react";
import brand_img from "../../assets/images/brand/brand-01.png";

class BrandTwo extends Component {
  render() {
    let items = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <React.Fragment>
        <ul className="brand-style-2">
          {items.map((item) => (
            <li>
              <img src={brand_img} alt="Logo Images" />
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
export default BrandTwo;
