import React, { Component } from "react";
import rating from "../../assets/images/Rating.png";
import Ulasan from "./Ulasan";
import Ulasan2 from "./Ulasan2";
import Ulasan3 from "./Ulasan3";
import Ulasan4 from "./Ulasan4";
import Ulasan5 from "./Ulasan5";

class Content2 extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h3 className="fw-semibold mt-5">Ratings and Reviews</h3>
          <label className="text-center" style={{ fontSize: "2em" }}>
            4.7
          </label>
          <div className="mt-1 d-flex justify-content-center">
            <img className="" src={rating} alt="" />
          </div>
          <p
            className="mt-2"
            style={{ fontSize: "0.7em", fontWeight: "lighter" }}
          >
            Based on 91 reviews
          </p>
        </div>

        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <p>91 reviews</p>
            </div>
            <div>
              <select
                class="form-select-sm"
                aria-label="Small select example"
                style={{ border: "0px solid #ffffff" }}
              >
                <option selected>Latest Review</option>
                <option value="1">Highest Rating</option>
                <option value="2">Lowest Rating</option>
              </select>
            </div>
          </div>
          <hr style={{ marginTop: "-0.5em" }} />

          <Ulasan />
          <hr />
          <Ulasan2 />
          <hr />
          <Ulasan3 />
          <hr />
          <Ulasan4 />
          <hr />
          <Ulasan5 />
          <hr />
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn fw-semibold button1  " type="button">
            Show more
          </button>
        </div>
      </div>
    );
  }
}

export default Content2;
