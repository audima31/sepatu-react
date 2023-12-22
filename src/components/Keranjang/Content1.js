import React, { Component } from "react";
import Keranjang from "./Modal";
import { connect } from "react-redux";
import { getListKeranjang } from "../../store/actions/CartAction";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { numberWithCommas } from "../../utils";
import ShopeePay from "../../assets/images/pay/Shopee.svg.png";
import Swal from "sweetalert2";

class Content1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      city: "",
      address: "",
      postCode: "",
      phoneNumber: "",
      metodh: "",
    };
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  hadleFirstName(event) {
    this.setState({
      firstName: event.target.value,
    });
  }
  hadleCity(event) {
    this.setState({
      city: event.target.value,
    });
  }
  hadleLastName(event) {
    this.setState({
      lastName: event.target.value,
    });
  }
  hadleAddress(event) {
    this.setState({
      address: event.target.value,
    });
  }
  hadlePhoneNumber(event) {
    this.setState({
      phoneNumber: event.target.value,
    });
  }

  handlePilihMetode(event) {
    this.setState({
      metodh: event.target.value,
    });
  }

  handleSubmit(event) {
    const { getListKeranjangResult } = this.props;
    const { email, firstName, lastName, city, address, phoneNumber, metodh } =
      this.state;
    event.preventDefault();

    if ((email, firstName, lastName, city, address, phoneNumber)) {
      if (!getListKeranjangResult) {
        Swal.fire(
          "Pemesanan gagal!",
          "Mohon pilih barang terlebih dahulu",
          "error"
        );
      } else if (metodh) {
        Swal.fire(
          "Pemesanan berhasil",
          "Mohon segera melakukan pembayaran",
          "success"
        );
      } else {
        Swal.fire(
          "Pemesanan gagal!",
          "Pilih metode pembayaran terlebih dahulu",
          "error"
        );
      }
    } else {
      Swal.fire("Pemesanan gagal!", "Isi semua data terlebih dahulu", "error");
    }
  }

  componentDidMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.props.dispatch(getListKeranjang(user.uid));
    });
  }

  render() {
    const { getListKeranjangResult } = this.props;
    // Menghitung total harga dari getListKeranjangResult
    const totalHarga = getListKeranjangResult
      ? Object.keys(getListKeranjangResult).reduce(
          (acc, data) =>
            acc + parseFloat(getListKeranjangResult[data].price || 0),
          0
        )
      : 0;

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

        <div className="container-lg">
          <hr className="mb-4 container-lg " />

          <div>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <div className="row mt-5  ">
                <div className="col-12 col-md-7">
                  <h3 className="text-center mb-4">BILLING & SHIPPING</h3>
                  <div class="input-group input-group-sm mb-3">
                    <input
                      type="email"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="Email Address"
                      onChange={(event) => this.handleEmail(event)}
                    />
                  </div>

                  <div className="d-flex justify-content-between">
                    <div class="input-group input-group-sm mb-3 me-1">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="First name"
                        onChange={(event) => this.hadleFirstName(event)}
                      />
                    </div>
                    <div class="input-group input-group-sm mb-3 ms-1">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Last name"
                        onChange={(event) => this.hadleLastName(event)}
                      />
                    </div>
                  </div>

                  <div>
                    <div class="input-group input-group-sm mb-3">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="City"
                        onChange={(event) => this.hadleCity(event)}
                      />
                    </div>
                    <div class="input-group input-group-sm mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Address"
                        onChange={(event) => this.hadleAddress(event)}
                      ></textarea>
                    </div>

                    <div class="input-group input-group-sm mb-3">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Postcode / ZIP"
                      />
                    </div>

                    <div class="input-group input-group-sm mb-3">
                      <input
                        type="number"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Phone number"
                        onChange={(event) => this.hadlePhoneNumber(event)}
                      />
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label fw-semibold"
                        for="defaultCheck1"
                        style={{ fontSize: "0.8em" }}
                      >
                        Subscribe to the newsletter
                      </label>
                    </div>

                    <div class="input-group input-group-sm mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="4"
                        placeholder="Notes about your order, e.g. special notes for delivery. (optional)"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="col-12 col-md border border-secondary mx-md-2 mt-5 mt-md-0">
                  <p
                    style={{ fontSize: "1.2em" }}
                    className="text-center mt-3 fw-semibold"
                  >
                    YOUR ORDER
                  </p>

                  <div
                    className="d-flex justify-content-between "
                    style={{
                      fontSize: "0.8em",
                      lineHeight: "0em",
                      marginTop: "2.6em",
                    }}
                  >
                    <p className="fw-semibold" style={{ color: "#9ea1af" }}>
                      PRODUCT
                    </p>
                    <p className="fw-semibold" style={{ color: "#9ea1af" }}>
                      SUBTOTAL
                    </p>
                  </div>
                  <hr style={{ margin: "0", borderTop: "3px solid #9ea1af" }} />

                  {getListKeranjangResult ? (
                    Object.keys(getListKeranjangResult).map((data) => {
                      return (
                        <div key={getListKeranjangResult[data].idCart}>
                          <div
                            className="d-flex justify-content-between align-items-center py-2"
                            style={{ fontSize: "0.7em" }}
                          >
                            <div>
                              <label>
                                {getListKeranjangResult[data].brand}
                              </label>
                              <p style={{ marginBottom: "0" }}>
                                {getListKeranjangResult[data].jumlahBarang}
                                {" x "}
                                Rp.{" "}
                                {numberWithCommas(
                                  getListKeranjangResult[data].priceAwal
                                )}
                              </p>
                            </div>
                            <div>
                              Rp.{" "}
                              {numberWithCommas(
                                getListKeranjangResult[data].price
                              )}
                            </div>
                          </div>
                          <hr
                            style={{
                              margin: "0",
                              borderTop: "3px solid #9ea1af",
                            }}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <></>
                  )}

                  <div
                    className="d-flex justify-content-between mt-1 mb-3 fw-semibold"
                    style={{ fontSize: "0.8em" }}
                  >
                    <p>Subtotal</p>
                    <p>Rp. {numberWithCommas(totalHarga)}</p>
                  </div>

                  {/* Pembayaran E-Money */}
                  <div
                    className="border border-secondary-subtle mx-md-2 mt-5 mt-md-0"
                    style={{ fontSize: "0.8em" }}
                  >
                    <p
                      className="text-center m-2 p-2 "
                      style={{ backgroundColor: "#7a7a7a", color: "#ffffff" }}
                    >
                      PEMBAYARAN VIA SHOPEEPAY, GOPAY, DANA, LINKAJA
                    </p>

                    <div className="m-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          onChange={(event) => this.handlePilihMetode(event)}
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          ShopeePay
                          <img
                            className="ms-1"
                            src={ShopeePay}
                            style={{ width: "4em" }}
                            alt=""
                          />
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                          onChange={(event) => this.handlePilihMetode(event)}
                        />
                        <label class="form-check-label" for="exampleRadios2">
                          GoPay
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios3"
                          value="option3"
                          onChange={(event) => this.handlePilihMetode(event)}
                        />
                        <label class="form-check-label" for="exampleRadios3">
                          DANA
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios4"
                          value="option4"
                          onChange={(event) => this.handlePilihMetode(event)}
                        />
                        <label class="form-check-label" for="exampleRadios4">
                          LinkAja
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Bank */}
                  <div className="mt-4"></div>
                  <div
                    className="border border-secondary-subtle mx-md-2 mt-5 mt-md-0"
                    style={{ fontSize: "0.8em" }}
                  >
                    <p
                      className="text-center m-2 p-2 "
                      style={{ backgroundColor: "#7a7a7a", color: "#ffffff" }}
                    >
                      PEMBAYARAN VIA BANK VIRTUAL ACCOUNT (VERIFIKASI OTOMATIS)
                    </p>

                    <div className="m-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          onChange={(event) => this.handlePilihMetode(event)}
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Bank Transfer - Mandiri
                          <img
                            className="ms-1"
                            src={ShopeePay}
                            style={{ width: "4em" }}
                            alt=""
                          />
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                          onChange={(event) => this.handlePilihMetode(event)}
                        />
                        <label class="form-check-label" for="exampleRadios2">
                          Bank Transfer - BNI
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios3"
                          value="option3"
                          onChange={(event) => this.handlePilihMetode(event)}
                        />
                        <label class="form-check-label" for="exampleRadios3">
                          Bank Transfer - BCA
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios4"
                          value="option4"
                          onChange={(event) => this.handlePilihMetode(event)}
                        />
                        <label class="form-check-label" for="exampleRadios4">
                          Bank Transfer - BRI
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn fw-semibold button1 w-100 mb-3 mt-3"
                    style={{ borderRadius: "5px" }}
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getListKeranjangLoading: state.CartReducer.getListKeranjangLoading,
  getListKeranjangResult: state.CartReducer.getListKeranjangResult,
  getListKeranjangError: state.CartReducer.getListKeranjangError,
});
export default connect(mapStateToProps, null)(Content1);
