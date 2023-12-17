import React, { Component } from "react";
import Sepatu from "../../assets/images/5sepatu.png";
import { connect } from "react-redux";
import { getListKeranjang } from "../../store/actions/CartAction";
import { getAuth, onAuthStateChanged } from "firebase/auth";

class Modal extends Component {
  componentDidMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log("Data User : ", user);
      this.props.dispatch(getListKeranjang(user.uid));
    });
  }
  render() {
    const { getListKeranjangResult } = this.props;
    console.log("Data Keranjang : ", getListKeranjangResult);
    return (
      <div>
        {/* Cara .map nya beda, karena data /cart berupa OBJECT bukan ARRAY */}
        {getListKeranjangResult ? (
          Object.keys(getListKeranjangResult).map((data) => {
            return (
              <div key={getListKeranjangResult[data].idCart}>
                <div className="row d-flex align-items-center">
                  <div className="col-5">
                    <img
                      src={getListKeranjangResult[data].image}
                      alt=""
                      style={{
                        width: "100%",
                        backgroundColor: "#f2f2f2",
                        borderRadius: "1em",
                      }}
                    />
                  </div>
                  <div className="col-7">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <label style={{ fontSize: "1em" }}>
                          {getListKeranjangResult[data].brand}
                        </label>
                        <br />
                        <label style={{ fontSize: "0.85em", color: "#7e7e7e" }}>
                          {getListKeranjangResult[data].price}
                        </label>
                      </div>
                      <div>
                        <button
                          style={{
                            backgroundColor: "#FFFFFF",
                            border: "0px solid black",
                          }}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })
        ) : (
          <>
            <p className="text-center">No products in the cart.</p>
          </>
        )}

        {getListKeranjangResult ? (
          <div className="text-center">
            <div className="mt-4 mb-3">
              <label className="fw-semibold" style={{ fontSize: "1em" }}>
                Subtotal:{" "}
              </label>{" "}
              <label>Rp. 150.000</label>
            </div>
            <a href="/keranjang">
              <button type="submit" className="btn fw-semibold button1 w-100">
                CHECKOUT
              </button>
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getListKeranjangLoading: state.CartReducer.getListKeranjangLoading,
  getListKeranjangResult: state.CartReducer.getListKeranjangResult,
  getListKeranjangError: state.CartReducer.getListKeranjangError,
});
export default connect(mapStateToProps, null)(Modal);
