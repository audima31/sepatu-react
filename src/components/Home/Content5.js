import React, { Component } from "react";
import Iklan from "../../assets/images/2modelsepatu.png";
import CardKecil from "./CardKecil";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getListProduct } from "../../store/actions/ProductAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CardContent5 from "./CardContent5";

class Content5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataAdidasDoang: "",
    };
  }
  componentDidMount() {
    this.props.dispatch(getListProduct());
    this.dataAdidasSaja();
  }

  dataAdidasSaja() {
    const { getListProductResult } = this.props;

    if (getListProductResult.brand === "Adidas") {
      console.log("Data", getListProductResult);

      this.setState({
        dataAdidasDoang: getListProductResult,
      });
    }
  }

  render() {
    const { getListProductResult } = this.props;
    const { dataAdidasDoang } = this.state;
    console.log("Data adidas doang", dataAdidasDoang);

    return (
      <div style={{ backgroundColor: "#02021d" }}>
        <label className="pt-3 text-center"></label>
        <div className="d-flex justify-content-center">
          <p
            className="text-center p-2 "
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
            }}
          >
            New
          </p>
        </div>
        <h1 className="text-center pt-2 mb-4" style={{ color: "white" }}>
          Latest Adidas Collection
        </h1>
        <div className="d-flex justify-content-center container">
          <img
            className="d-flex justify-align-center"
            src={Iklan}
            alt=""
            style={{ width: "100%" }}
          />
        </div>

        <div className="container mt-4">
          <p
            style={{ fontSize: "16px", color: "white" }}
            className="fw-semibold"
          >
            New Arrival
          </p>
          <div className="d-none d-lg-block">
            <div className="row d-flex justify-content-center mb-5 ">
              <div className="col-sm-12 col-lg-3">
                {getListProductResult ? (
                  getListProductResult
                    .filter((dataAdidas) => dataAdidas.brand === "Adidas")
                    .slice(0, 2)
                    .map((dataAdidas) => {
                      return (
                        <div key={dataAdidas.id}>
                          <CardContent5
                            id={dataAdidas.id}
                            image={dataAdidas.image[0]}
                            brand={dataAdidas.brand}
                            type={dataAdidas.type}
                            price={dataAdidas.price}
                          />
                        </div>
                      );
                    })
                ) : (
                  <p>error</p>
                )}
              </div>
              <div className="d-none d-lg-block col-lg-8 ms-4 d-flex align-self-center">
                {getListProductResult ? (
                  getListProductResult
                    .filter((dataAdidas) => dataAdidas.brand === "Adidas")
                    .slice(2, 3) // Menggunakan slice(-1) untuk mendapatkan satu data terakhir
                    .map((dataAdidas) => (
                      <div key={dataAdidas.id}>
                        <CardKecil
                          id={dataAdidas.id}
                          brand={dataAdidas.brand}
                          type={dataAdidas.type}
                          price={dataAdidas.price}
                          sepatu={dataAdidas.image[0]}
                        />
                      </div>
                    ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>

          <div className="d-block d-lg-none mb-5">
            <Carousel
              showThumbs={false}
              emulateTouch={true}
              infiniteLoop={true}
            >
              {getListProductResult ? (
                getListProductResult
                  .filter((product) => product.brand === "Adidas")
                  .slice(0, 3)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="col mt-4 d-flex justify-content-center mx-auto"
                      style={{ width: "18rem" }}
                    >
                      <Link
                        to={`/product/detail/${product.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="card cardEdit">
                          <div className="card-body">
                            <img
                              src={product.image}
                              className="card-img-top mt-5 mb-5 gambarSepatu"
                              alt="..."
                            />
                            <p className="fw-semibold">{product.brand}</p>
                            <div className="d-flex justify-content-between">
                              <label style={{ fontSize: "0.85em" }}>
                                {product.type}
                              </label>
                              <label
                                style={{ fontSize: "0.85em" }}
                                className="fw-semibold"
                              >
                                Rp. {product.price}
                              </label>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
              ) : (
                <p className="text-danger">Error</p>
              )}
            </Carousel>
          </div>
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
export default connect(mapStateToProps, null)(Content5);
