import React, { Component } from "react";
import { connect } from "react-redux";
import { getListProduct } from "../../store/actions/ProductAction";
import Card from "./Card";
import CaraoselShop from "./CaraoselShop";
import Keranjang from "../Keranjang/Modal";

class Content1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGender: "all",
    };
  }

  componentDidMount() {
    this.props.dispatch(getListProduct());
  }

  handleGanderChange = (event) => {
    this.setState({ selectedGender: event.target.value });
  };

  render() {
    const { getListProductResult, getListProductLoading, getListProductError } =
      this.props;

    const { selectedGender } = this.state;

    const filteredProducts =
      selectedGender === "all"
        ? getListProductResult
        : getListProductResult.filter(
            (product) => product.gender === selectedGender
          );

    console.log("Select :", selectedGender);
    return (
      <div className="container">
        {/* OffCanvas sebelah kanan */}
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
          style={{ width: "30%" }}
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
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

        <CaraoselShop />
        <div className="container d-none d-lg-block">
          <div className="container d-flex justify-content-between align-items-center mt-4 ">
            <div style={{ fontSize: "12px" }}>SHOP</div>
            <select
              className="form-select w-25"
              aria-label="Default select example"
              style={{ fontSize: "12px" }}
              value={selectedGender}
              onChange={this.handleGanderChange}
            >
              <option value="all">Select all product</option>
              <option value="man">Man</option>
              <option value="women">Women</option>
            </select>
          </div>
        </div>

        <div className="container d-block d-lg-none">
          <div style={{ fontSize: "12px" }}>SHOP</div>
          <select
            className="form-select w-100"
            aria-label="Default select example"
            style={{ fontSize: "12px" }}
            value={selectedGender}
            onChange={this.handleGanderChange}
          >
            <option value="all">Select all product</option>
            <option value="man">Man</option>
            <option value="women">Women</option>
          </select>
        </div>

        <div className="row">
          {filteredProducts ? (
            filteredProducts.map((product) => {
              return (
                <>
                  <Card
                    key={product.id}
                    id={product.id}
                    image={product.image[0]}
                    brand={product.brand}
                    type={product.type}
                    price={product.price}
                  />
                </>
              );
            })
          ) : getListProductLoading ? (
            <p className="text-center" style={{ color: "#fa9200" }}>
              <div class="spinner-border " role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </p>
          ) : getListProductError ? (
            <p>Error</p>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getListProductLoading: state.ProductReducer.getListProductLoading,
  getListProductResult: state.ProductReducer.getListProductResult,
  getListProductError: state.ProductReducer.getListProductError,
});
export default connect(mapStateToProps, null)(Content1);
