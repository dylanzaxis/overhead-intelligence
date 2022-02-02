import React from "react";
import PageHelmet from "../common/Helmet";
import Header from "../items/Header";

export default function Contact() {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Contact" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
    </React.Fragment>
  );
}
