import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { getListProduct } from "../../store/actions/ProductAction";

class Content3 extends Component {
  componentDidMount() {
    this.props.dispatch(getListProduct());
  }
  render() {
    const { getListProductResult } = this.props;
    console.log("Data Content 3 :", getListProductResult);

    return (
      <div className="container" style={{ marginTop: "3em" }}>
        <div className="container d-flex justify-content-between">
          <div>
            <p className="fw-semibold" style={{ fontSize: "18px" }}>
              Explore Model
            </p>
          </div>
          <div>
            <a href="/shop" style={{ fontSize: "14px", color: "black" }}>
              Shop now
            </a>
          </div>
        </div>

        <div className="d-block d-md-none">
          {/* <CaraoselContent3 data={getListProductResult} /> */}
          <div className="row">
            {getListProductResult ? (
              getListProductResult.slice(0, 6).map((product) => {
                return (
                  <>
                    <Card
                      id={product.id}
                      image={product.image[0]}
                      brand={product.brand}
                      type={product.type}
                      price={product.price}
                    />
                  </>
                );
              })
            ) : (
              <p className="text-center" style={{ color: "#fa9200" }}>
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </p>
            )}
          </div>
        </div>

        <div className="d-none d-md-block">
          <div className="row ">
            {getListProductResult ? (
              getListProductResult.slice(0, 6).map((product) => {
                return (
                  <>
                    <Card
                      id={product.id}
                      image={product.image[0]}
                      brand={product.brand}
                      type={product.type}
                      price={product.price}
                    />
                  </>
                );
              })
            ) : (
              <p className="text-center" style={{ color: "#fa9200" }}>
                <div class="spinner-border " role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </p>
            )}
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn fw-semibold button1" type="button">
            Shop Now
          </button>
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
export default connect(mapStateToProps, null)(Content3);
