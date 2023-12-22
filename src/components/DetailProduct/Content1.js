/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Caraosel from "./Caraosel";
import Image from "./Image";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../../store/actions/ProductAction";
import Image2 from "./Image2";
import alertIcon from "../../assets/images/Icon/alert-circle.png";
import Keranjang from "../Keranjang/Modal";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import { tambahCartBelanja } from "../../store/actions/CartAction";
import { numberWithCommas } from "../../utils";

export default function Content1() {
  const [cart, setCart] = useState(1);
  const [size, setSize] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [loginChecked, setLoginChecked] = useState(false);
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log("id : ", id);
  const {
    getDetailProductResult,
    getDetailProductLoading,
    getDetailProductError,
  } = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    console.log("USE EFFECT JALAN");
    dispatch(getDetailProduct(id));
  }, [id, dispatch]);

  const handleKurangBarang = (event) => {
    if (cart === 1) {
      setCart(cart);
    } else {
      let angka = parseInt(cart) - 1;
      setCart(angka);
    }
  };

  const handleTambahBarang = (event) => {
    if (cart < 10) {
      let angka = parseInt(cart) + 1;
      setCart(angka);
    } else {
      setCart(cart);
    }
  };

  const handleSize = (event) => {
    setSize(event.target.value);
    setSelectedSize(event.target.value);
  };

  const handleSubmitCart = (event) => {
    event.preventDefault();

    //Cek udah login apa belum
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      //Kalo udah login, maka tambahin data ke '/cart'
      if (user) {
        // Kalo user udah milih size dan jumlah barang
        if (cart && size) {
          const data = {
            brand: getDetailProductResult.brand,
            caption: getDetailProductResult.caption,
            color: getDetailProductResult.color,
            gender: getDetailProductResult.gender,
            idProduct: getDetailProductResult.id,
            image: getDetailProductResult.image[0],
            price: getDetailProductResult.price * cart,
            priceAwal: getDetailProductResult.price,
            type: getDetailProductResult.type,
            jumlahBarang: cart,
            idCart: new Date().getTime() + "-" + user.uid,
            idUser: user.uid,
            size: size,
          };

          dispatch(tambahCartBelanja(data));

          Swal.fire({
            title: "Barang berhasil ditambahkan!",
            icon: "success",
          });
        } else {
          // Belom milih size dan jumlah barang
          Swal.fire({
            title: "Pilih size terlebih dahulu!",
            icon: "error",
          });
        }
      } else {
        // Kalo belom login, maka tampilin swal alert
        Swal.fire({
          title: "Login terlebih dahulu!",
          icon: "error",
        });
      }
    });

    setLoginChecked(true);
  };

  return (
    <div>
      {/* OffCanvas sebelah kanan */}
      <div
        class="offcanvas offcanvas-end"
        tabIndex="-1"
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
                      <div className="col-6 ">
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
                          Rp. {numberWithCommas(getDetailProductResult.price)}
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
                    {/* Form */}
                    <form onSubmit={handleSubmitCart}>
                      <div className="mb-4 mt-2">
                        <button
                          type="button"
                          className={
                            selectedSize === "38"
                              ? "buttonSelectSize selected"
                              : "buttonSelectSize"
                          }
                          style={{ marginLeft: "0em" }}
                          onClick={() =>
                            handleSize({ target: { value: "38" } })
                          }
                        >
                          38
                        </button>

                        <button
                          type="button"
                          className={
                            selectedSize === "39"
                              ? "buttonSelectSize selected"
                              : "buttonSelectSize"
                          }
                          onClick={() =>
                            handleSize({ target: { value: "39" } })
                          }
                        >
                          39
                        </button>

                        <button
                          type="button"
                          className={
                            selectedSize === "40"
                              ? "buttonSelectSize selected"
                              : "buttonSelectSize"
                          }
                          onClick={() =>
                            handleSize({ target: { value: "40" } })
                          }
                        >
                          40
                        </button>

                        <button
                          type="button"
                          className={
                            selectedSize === "41"
                              ? "buttonSelectSize selected"
                              : "buttonSelectSize"
                          }
                          onClick={() =>
                            handleSize({ target: { value: "41" } })
                          }
                        >
                          41
                        </button>

                        <button
                          type="button"
                          className={
                            selectedSize === "42"
                              ? "buttonSelectSize selected"
                              : "buttonSelectSize"
                          }
                          onClick={() =>
                            handleSize({ target: { value: "42" } })
                          }
                        >
                          42
                        </button>

                        <button
                          type="button"
                          className={
                            selectedSize === "43"
                              ? "buttonSelectSize selected"
                              : "buttonSelectSize"
                          }
                          onClick={() =>
                            handleSize({ target: { value: "43" } })
                          }
                        >
                          43
                        </button>

                        <button
                          type="button"
                          className={
                            selectedSize === "44"
                              ? "buttonSelectSize selected"
                              : "buttonSelectSize"
                          }
                          onClick={() =>
                            handleSize({ target: { value: "44" } })
                          }
                        >
                          44
                        </button>
                      </div>

                      <div className="input-group mt-3">
                        <button
                          onClick={handleKurangBarang}
                          className="btn btn-outline-secondary"
                          type="button"
                          id="button-addon1"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="form-control text-center"
                          placeholder={cart}
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                          readOnly
                        />
                        <button
                          onClick={handleTambahBarang}
                          className="btn btn-outline-secondary"
                          type="button"
                          id="button-addon1"
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="btn fw-semibold button1 w-100 mt-3"
                        type="submit"
                      >
                        Add to bag
                      </button>
                    </form>

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
