import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import worker from "../../assets/images/client/testimonial-1.jpg";
class Testimonial extends Component {
  render() {
    let items = [0, 1, 2, 3, 4, 5, 6];

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <TabPanel key={item}>
                      <div className="rn-testimonial-content text-left">
                        <div className="inner">
                          <p>
                            I love this career because it is a career that I
                            love {item}
                          </p>
                        </div>
                        <div className="author-info">
                          <h6>
                            <span>Thomas Frey </span> - Drone Operator
                          </h6>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </div>
                <div className="col-lg-6 mt_md--40 mt_sm--40">
                  <TabList className="testimonial-thumb-wrapper">
                    {items.map((item) => (
                      <Tab>
                        <div className="testimonial-thumbnai">
                          <div className="thumb">
                            <img src={worker} alt="Worker Images" />
                          </div>
                        </div>
                      </Tab>
                    ))}
                  </TabList>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Testimonial;
