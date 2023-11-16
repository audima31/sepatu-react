import React, { Component } from "react";
import Footer from "../Umum/Footer";
import Header from "../Umum/Header";
import Content1 from "./Content1";

class Payment extends Component {
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

export default Payment;
