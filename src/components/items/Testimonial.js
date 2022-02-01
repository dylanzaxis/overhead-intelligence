import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import worker_1 from "../../assets/images/client/eric.png";
import worker_2 from "../../assets/images/client/sam.png";
import worker_3 from "../../assets/images/client/juan.png";
import worker_4 from "../../assets/images/client/owner.png";
class Testimonial extends Component {
  render() {
    let items = [
      {
        name: "Eric Cao",
        image: worker_1,
        position: "Software Development",
      },
      {
        name: "Sam Davis",
        image: worker_2,
        position: "Hardware Design Engineer",
      },
      {
        name: "Juan Torres",
        image: worker_3,
        position: "Client Support Specialist",
      },
      {
        name: "Roger O'Neill",
        image: worker_4,
        position: "Founder",
      },
    ];

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  {items.map((item) => (
                    <TabPanel key={item}>
                      <div className="rn-testimonial-content text-left">
                        <div className="inner">
                          <p>
                            I love this career because it is a career that I
                            love
                          </p>
                        </div>
                        <div className="author-info">
                          <h6>
                            <span>{item.name} </span> - {item.position}
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
                            <img src={item.image} alt="Worker Images" />
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
