import React, { Component } from "react";
import Logo1 from "../../assets/images/1logo.png";
import Logo2 from "../../assets/images/2logo.png";
import Logo3 from "../../assets/images/3logo.png";

class Content2 extends Component {
  render() {
    return (
      <div>
        <div
          className="container w-75 d-none d-md-block"
          style={{
            backgroundColor: "#f2f2f2",
            borderRadius: "1em",
            marginTop: "2em",
          }}
        >
          <div className="text-center">
            <h3 className="fw-semibold pt-5">
              "These are the most thoughtfully designed sneakers on the market."
            </h3>
            <div className="row mt-4 pb-4">
              <div className="col">
                <img alt="logo" src={Logo1} style={{ width: "60%" }} />
              </div>
              <div className="col">
                <img alt="logo" src={Logo2} style={{ width: "50%" }} />
              </div>
              <div className="col">
                <img alt="logo" src={Logo3} style={{ width: "45%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="container d-block d-md-none">
          <h4
            className="fw-semibold mt-4 text-center p-3"
            style={{ backgroundColor: "#f2f2f2", borderRadius: "1em" }}
          >
            "These are the most thoughtfully designed sneakers on the market."
          </h4>

          <div className="d-flex justify-content-between">
            <img alt="logo" src={Logo1} style={{ width: "20%" }} />
            <img alt="logo" src={Logo2} style={{ width: "20%" }} />
            <img alt="logo" src={Logo3} style={{ width: "20%" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Content2;
