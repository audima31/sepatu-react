import React, { Component } from "react";
import Header from "../Umum/Header";
import Content1 from "./Content1";
import Footer from "../Umum/Footer";

class Shop extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content1 />
        <Footer />
      </div>
    );
  }
}

export default Shop;
