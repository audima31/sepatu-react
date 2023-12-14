import React, { Component } from "react";
import Sepatu from "../../assets/images/5sepatu.png";

class Modal extends Component {
  render() {
    return (
      <div>
        <div className="row d-flex align-items-center">
          <div className="col-5">
            <img
              src={Sepatu}
              alt=""
              style={{
                width: "100%",
                backgroundColor: "#f2f2f2",
                borderRadius: "1em",
              }}
            />
          </div>
          <div className="col-7">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <label style={{ fontSize: "1em" }}>Merek</label>
                <br />
                <label style={{ fontSize: "0.85em", color: "#7e7e7e" }}>
                  Rp. 150000
                </label>
              </div>
              <div>X</div>
            </div>
          </div>
        </div>
        <hr />

        <div className="text-center">
          <div className="mt-4 mb-3">
            <label className="fw-semibold" style={{ fontSize: "1em" }}>
              Subtotal:{" "}
            </label>{" "}
            <label>Rp. 150.000</label>
          </div>
          <a href="/keranjang">
            <button type="submit" className="btn fw-semibold button1 w-100">
              CHECKOUT
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Modal;
