import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/items/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/screens/home";
import Contact from "./components/screens/home";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path={`/`} element={<Home />} />

        <Route exact path={`/contact`} component={<Contact />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
