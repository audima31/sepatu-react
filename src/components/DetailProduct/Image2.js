import React, { Component } from "react";

class Image2 extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#f2f2f2" }}
        >
          <img
            src={this.props.image}
            alt=""
            style={{ width: "16rem" }}
            className="p-4"
          />
        </div>
      </div>
    );
  }
}

export default Image2;
