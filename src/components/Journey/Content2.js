import React, { Component } from "react";
import Foto4 from "../../assets/images/Journey/Foto4.jpg";
import Foto5 from "../../assets/images/Journey/Foto5.jpg";

class Content2 extends Component {
  render() {
    return (
      <div className="container mt-5">
        <p
          className="text-center captionJourney fw-semibold"
          style={{ fontSize: "1.4em" }}
        >
          Shoes a fundamental element woven into the fabric of our daily lives.
          From the doorstep to the boardroom, they stride with us through every
          step of our journey
        </p>

        <div className="row mt-5">
          <div className="col-6">
            <img className="w-100" src={Foto4} alt="" />
          </div>
          <div className="col-6">
            <img className="w-100" src={Foto5} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Content2;
