import React, { Component } from "react";
import Model1 from "../../assets/images/1model.jpg";
import Model2 from "../../assets/images/2model.jpg";
import Model3 from "../../assets/images/3model.jpg";

class ContentGaje extends Component {
  render() {
    return (
      <div className="bgCont">
        <div className="container">
          <h2>Captured Moments</h2>
        </div>
        <div className="flexRow">
          <div id="column1">
            <img
              alt="model"
              src={Model2}
              style={{ width: "100%", height: "65%" }}
            />
          </div>
          <div id="column3">
            <img
              alt="image2"
              src={Model1}
              style={{ width: "100%", height: "65%" }}
            />
          </div>
          <div id="column3">
            <img
              alt="image3"
              src={Model3}
              style={{ width: "100%", height: "65%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentGaje;
