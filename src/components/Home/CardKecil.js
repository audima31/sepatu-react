import React, { Component } from "react";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../utils";

class CardKecil extends Component {
  render() {
    return (
      <div className="mt-4">
        <div>
          <Link
            to={`/product/detail/${this.props.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="card cardKecil">
              <div className="card-body">
                <img
                  src={this.props.sepatu}
                  className="card-img-top mt-5 mb-5"
                  alt="..."
                />
                <label className="fw-semibold">{this.props.brand}</label>
                <div className="d-flex justify-content-between">
                  <label style={{ fontSize: "0.85em" }}>
                    {this.props.type}
                  </label>
                  <label
                    style={{ fontSize: "0.85em" }}
                    className="fw-semibold mb-2"
                  >
                    Rp. {numberWithCommas(this.props.price)}
                  </label>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default CardKecil;
