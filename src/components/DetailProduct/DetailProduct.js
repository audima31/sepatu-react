import React, { Component } from "react";
import Header from "../Umum/Header";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Footer from "../Umum/Footer";

class DetailProduct extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content1 />
        <Content2 />
        <Footer />
      </div>
    );
  }
}

export default DetailProduct;
