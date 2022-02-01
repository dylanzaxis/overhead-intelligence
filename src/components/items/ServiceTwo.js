import React, { Component } from "react";
import {
  FiUsers,
  FiTrendingUp,
  FiStar,
  FiBatteryCharging,
  FiSettings,
  FiShield,
} from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiSettings />,
    title: "Engineering",
    description:
      "Inhouse and contracted engineers work diligently to develop advanced UAV systems that will increase system reliability, system efficiency, and system automation. The products produced by the engineering teams are consumed by our own operations teams and are available to our partners to utilize on our drones. ",
  },
  {
    icon: <FiShield />,
    title: "Regulatory",
    description:
      "The FAA imposes substantial regulatory barriers to large scale commercial drone operations. Our team of inhouse UAV regulatory specialists produce comprehensive compliance documentation, safety management systems, and standard procedures that ensure that our operations team is held to airline-like safety standards",
  },
  {
    icon: <FiUsers />,
    title: "Operations",
    description:
      "Overhead Intelligence not only designs UAV systems, but we also operate our own systems to collect data and provide aerial support. Our operations team has access to all the latest advancements developed by our engineers, and can take advantage of the robust structure built by the regulatory team.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Data Collection",
    description:
      "Airborne datasets can provide priceless insight to a wide range of industries. We are always working to streamline data management and post processing workflows.",
  },
  {
    icon: <FiStar />,
    title: "Certifications & Waivers",
    description:
      " Our thorough approach to regulatory compliance ensures the best possible outcome in pursuing waivers and special certificates issued by Civil aviation authorities.",
  },
  {
    icon: <FiBatteryCharging />,
    title: "Long Endurance",
    description:
      "Our systems are primarily geared toward long endurance aerial support missions that will allow us to cover large swaths of land in a single deployment. ",
  },
];

class ServiceTwo extends Component {
  render() {
    let title = "WHO WE ARE",
      description =
        "Overhead Intelligence is a research and development company that designs enhanced industrial drones with a focus on system robustness and automation. OI develops software and hardware for vertically integrated mapping systems capable of executing large-scale aerial mapping missions. ",
      subtitle = "What we can do for you";
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle">{subtitle}</span>
                <h2 className="title">{title}</h2>
                <p
                  className="description"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-12 mt--30">
              <div className="row service-main-wrapper">
                {ServiceList.map((val, i) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <a href="/service-details">
                      <div className="service service__style--2 text-left">
                        <div className="icon">{val.icon}</div>
                        <div className="content">
                          <h3 className="title">{val.title}</h3>
                          <p>{val.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceTwo;
