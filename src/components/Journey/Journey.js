import Header from "../Umum/Header";
import React, { Component } from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Footer from "../Umum/Footer";

class Journey extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content1 />
        <Content2 />
        <Content3 />
        <Footer />
      </div>
    );
  }
}

export default Journey;
