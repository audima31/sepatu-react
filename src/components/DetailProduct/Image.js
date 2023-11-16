import React, { Component } from "react";

class Image extends Component {
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
            style={{
              width: "16rem",
              paddingTop: "4.5em",
              paddingBottom: "4.55em",
            }}
          />
        </div>
      </div>
    );
  }
}

export default Image;
