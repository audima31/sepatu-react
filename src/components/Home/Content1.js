import React, { Component } from "react";
import Vans1 from "../../assets/images/1vans.png";
import Keranjang from "../Keranjang/Modal";
import { getAuth, onAuthStateChanged } from "firebase/auth";

class Content1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginChecked: false,
    };
  }
  handleCheckLogin() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log("Data User : ", user);
      if (user) {
      } else {
        // User is signed out
        window.location = "/login";
      }
    });
    this.setState({
      loginChecked: true,
    });
  }

  componentDidMount() {
    if (this.state.loginChecked === false) {
      this.handleCheckLogin();
    }
  }

  render() {
    return (
      <div className="bgCont">
        <div className="container">
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
          <div className="row">
            <div className="col-sm-12 col-lg-5 d-flex flex-column align-items-left justify-content-center">
              <label className="ps-3">
                <label className="fw-lighter stroked-text-1">
                  okta
                  <label style={{ color: "#fa9200" }}>S</label>
                  hoes
                  <label style={{ color: "#fa9200" }}>.</label>
                </label>
              </label>
              <label
                className="ps-3 mt-1"
                style={{ marginTop: "-0.5em", fontWeight: "lighter" }}
              >
                Step inside, for comfort and magic await you!
              </label>

              <a href="/shop" className="mt-2 ps-3">
                <button className="btn fw-semibold button1" type="button">
                  Shop Now
                </button>
              </a>
            </div>
            <div className="col-7 col-lg-7 d-none d-lg-block d-flex align-items-center justify-content-center position-relative">
              <div className=" bgCaptions">
                <p className="captionLogo fw-semibold">VANS</p>
                <p className="captionLogo2 fw-light">
                  U Old Skull, Black/White
                </p>
              </div>
              <div className="sepatuCaptions">
                <img
                  className="col-sm-12 col-md-7 mt-5 mb-5 gambarCaptions"
                  alt=""
                  src={Vans1}
                />
              </div>
              <div style={{ marginTop: "32em" }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content1;
