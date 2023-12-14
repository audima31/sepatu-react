/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Caraosel from "./Caraosel";
import Image from "./Image";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../../store/actions/ProductAction";
import numeral from "numeral";
import Image2 from "./Image2";
import alertIcon from "../../assets/images/Icon/alert-circle.png";
import Keranjang from "../Keranjang/Modal";
// import Swal from "sweetalert2";

export default function Content1() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    getDetailProductResult,
    getDetailProductLoading,
    getDetailProductError,
  } = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    dispatch(getDetailProduct(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
      <div>
        <div className="bgCont">
          <div className="container mt-5">
            <div className="row">
              <div className="d-block d-lg-none">
                {getDetailProductResult ? (
                  <>
                    <Caraosel
                      image={
                        getDetailProductResult.image
                          ? getDetailProductResult.image
                          : ""
                      }
                    />
                  </>
                ) : getDetailProductLoading ? (
                  <p className="text-center" style={{ color: "#fa9200" }}>
                    <div class="spinner-border " role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </p>
                ) : (
                  <>{getDetailProductError}</>
                )}
              </div>

              <div className="col-lg-8 d-none d-lg-block">
                {getDetailProductResult ? (
                  <>
                    <div className="row">
                      <div className="col-6">
                        <Image image={getDetailProductResult.image[0]} />
                      </div>
                      <div className="col-6">
                        <Image image={getDetailProductResult.image[1]} />
                      </div>
                      <div className="col-6 mt-2">
                        <Image2 image={getDetailProductResult.image[2]} />
                      </div>
                      <div className="col-6 mt-2">
                        <Image2 image={getDetailProductResult.image[3]} />
                      </div>
                    </div>
                  </>
                ) : getDetailProductLoading ? (
                  <p className="text-center" style={{ color: "#fa9200" }}>
                    <div class="spinner-border " role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </p>
                ) : (
                  <>{getDetailProductError}</>
                )}
              </div>
              <div className="col-lg-4">
                {getDetailProductResult ? (
                  <>
                    <div className="row">
                      <div className="col ">
                        <label
                          className="fw-semibold"
                          style={{ fontSize: "1em" }}
                        >
                          {getDetailProductResult.brand}
                        </label>
                        <br />
                        <label style={{ fontSize: "0.85em" }}>
                          {getDetailProductResult.type}
                        </label>
                      </div>
                      <div className="col d-flex align-items-center justify-content-center mt-2">
                        <p
                          className="fw-semibold"
                          style={{ fontSize: "1.2em" }}
                        >
                          Rp.{" "}
                          {numeral(getDetailProductResult.price).format("0,0")}
                        </p>
                      </div>
                    </div>
                    <label
                      className="fw-semibold mt-2"
                      style={{ fontSize: "0.85em" }}
                    >
                      Color: {getDetailProductResult.color}
                    </label>
                    <div className="d-flex justify-content-between mt-2">
                      <div>
                        <p
                          className="fw-semibold"
                          style={{ fontSize: "0.85em" }}
                        >
                          Select Size
                        </p>
                      </div>

                      <div>
                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          style={{
                            backgroundColor: "transparent",
                            fontSize: "0.85em",
                            border: "none",
                            outline: "none",
                            color: "#9ea1af",
                          }}
                        >
                          Size Guide{" "}
                          <img
                            className="ms-1"
                            src={alertIcon}
                            alt="guide"
                            style={{ width: "12%" }}
                          />
                        </button>

                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <p
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  Tabel Ukuran
                                </p>

                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <label
                                  className="fw-semibold"
                                  style={{ fontSize: "0.75em" }}
                                >
                                  Tabel Ukuran
                                </label>
                                <br />
                                <label
                                  className="mb-1"
                                  style={{
                                    fontSize: "0.65em",
                                    color: "#9ea1af",
                                  }}
                                >
                                  Semua nilai konversi adalah perkiraan. Ukuran
                                  bisa bervariasi mengikuti pabrik.
                                </label>
                                <table
                                  class="table table-bordered table-striped"
                                  style={{ fontSize: "0.75em" }}
                                >
                                  <thead>
                                    <tr
                                      className="text-center"
                                      style={{ backgroundColor: "#fa9200" }}
                                    >
                                      <th scope="col">EU</th>
                                      <th scope="col">FOOT LENGTH</th>
                                      <th scope="col">UK</th>
                                      <th scope="col">US</th>
                                    </tr>
                                  </thead>
                                  <tbody className="text-center">
                                    <tr>
                                      <th scope="row">38</th>
                                      <td>23.4</td>
                                      <td>5</td>
                                      <td>5.5</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">38.7</th>
                                      <td>23.9</td>
                                      <td>5.5</td>
                                      <td>6</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">40</th>
                                      <td>24.6</td>
                                      <td>6.5</td>
                                      <td>7</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">41</th>
                                      <td>25</td>
                                      <td>7.5</td>
                                      <td>8</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">42</th>
                                      <td>25.9</td>
                                      <td>8</td>
                                      <td>8.5</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">42.5</th>
                                      <td>26.4</td>
                                      <td>8.5</td>
                                      <td>9</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">43</th>
                                      <td>26.7</td>
                                      <td>9</td>
                                      <td>9.5</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">44</th>
                                      <td>27.2</td>
                                      <td>9.5</td>
                                      <td>10</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      style={{ marginTop: "-0.1em" }}
                    >
                      <option selected value="1">
                        US 6
                      </option>
                      <option value="2">US 7</option>
                      <option value="3">US 8</option>
                      <option value="4">US 9</option>
                    </select>

                    <button
                      className="btn fw-semibold button1 w-100 mt-3"
                      type="button"
                    >
                      Add to bag
                    </button>
                    <p
                      className="text-center mt-3"
                      style={{
                        fontSize: "0.7em",
                        fontWeight: "lighter",
                        color: "#9ea1af",
                      }}
                    >
                      Free shipping on orders over Rp.500.000
                    </p>
                    <label className="fw-semibold" style={{ fontSize: "1em" }}>
                      Description
                    </label>
                    <p style={{ fontSize: "0.75em", fontWeight: "lighter" }}>
                      {getDetailProductResult.caption}
                    </p>
                  </>
                ) : getDetailProductLoading ? (
                  <p className="text-center" style={{ color: "#fa9200" }}>
                    <div class="spinner-border " role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
