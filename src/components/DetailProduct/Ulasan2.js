import React, { Component } from "react";
import rating from "../../assets/images/Rating5.png";

class Ulasan2 extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div className="d-flex justify-content-between">
              <img
                className=""
                src={rating}
                alt=""
                style={{ width: "6em", height: "1em" }}
              />
              <label style={{ fontSize: "0.8em", color: "#75869c" }}>
                4 months ago
              </label>
            </div>
            <p style={{ fontSize: "0.7em" }} className="mt-1 fw-semibold">
              Oleh : Ronaldo
            </p>
            <p
              className="fw-light"
              style={{ marginTop: "-0.8em", fontSize: "0.8em" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Ulasan2;
