import React, { Component } from "react";
import { Link } from "react-router-dom";
import image_1 from "../../assets/images/portfolio/portfolio-10.jpg";
const Portfolio_image = (
  <img src={image_1} alt="React Creative Agency" style={{ width: "100%" }} />
);
const Portfolio_image2 = (
  <img src={image_1} alt="React Creative Agency" style={{ width: "100%" }} />
);
const Portfolio_image3 = (
  <img src={image_1} alt="React Creative Agency" style={{ width: "100%" }} />
);

const PortfolioList = [
  {
    image: Portfolio_image,
    title: "ToDo Dylan: Missing Info",
    description:
      "Inhouse and contracted engineers work diligently to develop advanced UAV.",
  },
  {
    image: Portfolio_image2,
    category: "Info",
    title: "ToDo Dylan: Missing Info",
    description:
      "Pursue waivers and special certificates issued by Civil aviation authorities.",
  },
  {
    image: Portfolio_image3,
    category: "Info",
    title: "ToDo Dylan: Missing Info",
    description:
      "We operate our own systems to collect data and provide aerial support.",
  },
];

class Portfolio extends Component {
  render() {
    let title = "FULL VERTICAL INTEGRATION",
      description =
        "Engineer Data Collection Platforms → Deploy Systems that Generate the Data → Store and Process the Data → Deliver Data Driven Solutions";
    return (
      <React.Fragment>
        <div className="portfolio-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle">Map that Meter</span>
                  <h2 className="title">{title}</h2>
                  <p
                    className="description"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></p>
                </div>
              </div>
            </div>
            <div className="row mt--30">
              {PortfolioList.map((value, index) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                  key={index}
                >
                  <div className="im_portfolio">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">{value.image}</div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <h4 className="title">{value.title}</h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>{value.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Portfolio;
