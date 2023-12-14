import React, { Component } from "react";
import Keranjang from "./Modal";

class Content1 extends Component {
  render() {
    return (
      <div>
        {/* OffCanvas sebelah kanan */}
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
          style={{ width: "30%" }}
        >
          <div class="offcanvas-header ">
            <h5
              className="fw-semibold"
              id="offcanvasRightLabel"
              style={{ color: "#fa9200" }}
            >
              CART
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <Keranjang />
          </div>
        </div>
        {/*  */}
        <div className="container">test</div>
      </div>
    );
  }
}

export default Content1;
