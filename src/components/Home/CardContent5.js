import numeral from "numeral";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardContent5 extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="col mt-4 d-flex justify-content-center">
        <Link to={`/product/detail/${id}`} style={{ textDecoration: "none" }}>
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
                  Rp. {numeral(this.props.price).format("0,0")}
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
                  Rp. {numeral(this.props.price).format("0,0")}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CardContent5;
