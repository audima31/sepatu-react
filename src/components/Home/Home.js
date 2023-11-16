import React, { Component } from "react";
import Header from "../Umum/Header";
import Content1 from "./Content1";
// import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Content5 from "./Content5";
import Content6 from "./Content6";
import Footer from "../Umum/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content1 />
        <Content3 />
        <Content4 />
        <Content5 />
        <Content6 />
        <Footer />
      </div>
    );
  }
}

export default Home;
