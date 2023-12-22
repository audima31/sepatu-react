import React, { Component } from "react";
import Model4 from "../../assets/images/4modelsepatu.jpg";
import Model6 from "../../assets/images/2sepatu.png";
import Rates from "../../assets/images/starsRate.png";
import { numberWithCommas } from "../../utils";

class Content4 extends Component {
  render() {
    return (
      <div className="">
        <div className="container mt-5 w-100 mb-5 d-none d-lg-block">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 bgContent4">
              <div className="row ">
                <div className="col-7 d-flex flex-column align-items-center justify-content-top mt-4">
                  <h3
                    className="text-center pt-4 mb-4 fw-semibold"
                    style={{
                      color: "#fa9200",
                      textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    TRENDING NOW!!
                  </h3>
                  <img src={Rates} alt=".." style={{ width: "25%" }} />
                  <p className="text-center mt-3 w-75">
                    "These stylishly simple and incredibly comfortable shoes
                    have become such a staple in my daily wardrobe that I'm
                    already buying a second pair." - Audima
                  </p>
                </div>
                <div className="col-5 p-0">
                  <img
                    alt="trend"
                    src={Model4}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 ms-lg-4 ms-0 cardEdit2">
              <img
                src={Model6}
                className="card-img-top mt-5 mb-5"
                alt="..."
                style={{ width: "100%" }}
              />
              <label className="fw-semibold">Dr. Martens</label>
              <div className="d-flex justify-content-between mt-2">
                <div style={{ fontSize: "0.85em" }}>Core 1461 </div>
                <div style={{ fontSize: "0.85em" }} className="fw-semibold">
                  Rp. {numberWithCommas(2300000)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 d-none mb-5 d-md-block d-lg-none ">
          <div className="row ">
            <div className="col-md-8 bgContent4MD d-flex align-self-center ">
              <div>
                <h3
                  className="text-center fw-semibold "
                  style={{
                    color: "#fa9200",
                    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  TRENDING NOW!!
                </h3>
                <div className="row">
                  <div className="col-7 d-flex flex-column align-items-center justify-content-top mt-4">
                    <img src={Rates} alt=".." style={{ width: "25%" }} />
                    <p className="text-center mt-3 w-100">
                      "These stylishly simple and incredibly comfortable shoes
                      have become such a staple in my daily wardrobe that I'm
                      already buying a second pair." - Audima
                    </p>
                  </div>
                  <div className="col-5 p-0 ">
                    <img
                      alt="trend"
                      src={Model4}
                      style={{
                        width: "100%",
                        borderRadius: "0.6em",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-center mt-4">
                <div className=" ms-0 cardEdit2 p-2">
                  <img
                    src={Model6}
                    className="card-img-top  mt-5 mb-5"
                    alt="..."
                    style={{ width: "100%" }}
                  />
                  <label className="fw-semibold">Dr. Martens</label>
                  <div className="d-flex justify-content-between mt-2">
                    <div style={{ fontSize: "0.85em" }}>Core 1461</div>
                    <div
                      style={{ fontSize: "0.85em" }}
                      className="fw-semibold pb-2"
                    >
                      Rp. {numberWithCommas(2300000)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" container mt-5  mb-5  d-block d-md-none ">
          <hr />
          <h2
            className="text-center pt-4 fw-bold"
            style={{
              color: "#fa9200",
              textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
            }}
          >
            TRENDING NOW!!
          </h2>

          <div className="d-flex justify-content-center mt-4">
            <div className="col-lg-4 ms-lg-4 ms-0 cardEdit2 p-2">
              <img
                src={Model6}
                className="card-img-top  mt-5 mb-5"
                alt="..."
                style={{ width: "100%" }}
              />
              <label className="fw-semibold">Dr. Martens</label>
              <div className="d-flex justify-content-between">
                <div style={{ fontSize: "0.85em" }}>Core 1461 </div>
                <div style={{ fontSize: "0.85em" }} className="fw-semibold">
                  Rp. 2.300.000
                </div>
              </div>
              <button
                type="button"
                className=" btn fw-semibold button1 w-100 mt-3 "
              >
                Shop Now
              </button>
            </div>
          </div>

          <p
            className="text-center fw-regular mt-4"
            style={{ fontStyle: "italic" }}
          >
            "These stylishly simple and incredibly comfortable shoes have become
            such a staple in my daily wardrobe that I'm already buying a second
            pair." - Audima
          </p>
          <hr />
        </div>
      </div>
    );
  }
}

export default Content4;
