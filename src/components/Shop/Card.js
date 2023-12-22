import React, { Component } from "react";
import { numberWithCommas } from "../../utils";

class Card extends Component {
  render() {
    return (
      <div className="col mt-4 d-flex justify-content-center">
        <a
          href={`/product/detail/${this.props.id}`}
          style={{ textDecoration: "none" }}
        >
          <div
            className="card cardEdit d-none d-md-block"
            style={{
              width: `${this.props.width ? this.props.width : "18rem"}`,
            }}
          >
            <div className="card-body">
              <img
                src={this.props.image}
                className="card-img-top mt-5 mb-5 gambarSepatu"
                alt="..."
              />
              <label className="fw-semibold">{this.props.brand}</label>
              <div className="d-flex justify-content-between mt-2">
                <label style={{ fontSize: "0.85em" }}>{this.props.type}</label>
                <label style={{ fontSize: "0.85em" }} className="fw-semibold">
                  Rp. {numberWithCommas(this.props.price)}
                </label>
              </div>
            </div>
          </div>

          <div
            className="card cardEdit d-block d-md-none"
            style={{
              width: `${this.props.width ? this.props.width : "9rem"}`,
            }}
          >
            <div className="p-2">
              <p
                className="fw-semibold text-center"
                style={{ fontSize: "0.8em", marginBottom: "-0.5em" }}
              >
                {this.props.brand}
              </p>
              <hr />

              <img
                src={this.props.image}
                className="card-img-top gambarSepatu"
                alt="..."
              />
              <div className="text-center">
                <hr />
                <p style={{ fontSize: "0.7em", color: "#fa9200" }}>
                  {this.props.type}
                </p>
                <p style={{ fontSize: "0.85em" }}>
                  Rp. {numberWithCommas(this.props.price)}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Card;
