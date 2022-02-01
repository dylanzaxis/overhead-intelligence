import React, { Fragment } from "react";
import Header from "../items/Header";
import Helmet from "../common/Helmet";

function App() {
  return (
    <Fragment>
      <Helmet pageTitle="Studio Agency" />
      <Header />
    </Fragment>
  );
}

export default App;
