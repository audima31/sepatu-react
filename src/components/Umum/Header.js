import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Keranjang from "../../assets/images/Icon/shopping-bag.png";
import User from "../../assets/images/Icon/user.png";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { totalCartUser } from "../../store/actions/CartAction";

export default function Header() {
  const [status, setStatus] = useState(false);
  const [totalCart, setTotalCart] = useState(0);

  const dispatch = useDispatch();

  const { totalKeranjangResult, totalKeranjangLoading, totalKeranjangError } =
    useSelector((state) => state.CartReducer);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Swal.fire({
          title: "Logout telah berhasil",
          icon: "success",
          timer: 2000,
        });
      })
      .catch((error) => {
        // An error happened.
        Swal.fire({
          title: "Gagal logout!",
          icon: "error",
          timer: 2000,
        });
      });
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setStatus(true);
      } else {
        // User is signed out
        setStatus(false);
      }
    });
  }, []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(totalCartUser(user.uid));
        setTotalCart(totalKeranjangResult);
      }
    });
  }, [dispatch, totalKeranjangResult]);

  const location = useLocation();
  return (
    <nav
      class="navbar navbar-expand-lg mt-1"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div class="container-fluid ">
        <a class="navbar-brand" href="/">
          <label style={{ color: "#212529", fontWeight: "lighter" }}>
            okta
            <label style={{ color: "#fa9200", fontWeight: "lighter" }}>S</label>
            hoes
            <label style={{ color: "#fa9200", fontWeight: "bold" }}>.</label>
          </label>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto text-center">
            <li class="nav-item">
              <a
                className={
                  location.pathname === "/"
                    ? "nav-link active fw-bold akses"
                    : "nav-link fw-bold beforeAkses "
                }
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                className={
                  location.pathname === "/shop"
                    ? "nav-link active fw-bold akses"
                    : "nav-link fw-bold beforeAkses "
                }
                href="/shop"
              >
                Shop
              </a>
            </li>
            <li class="nav-item">
              <a
                className={
                  location.pathname === "/journey"
                    ? "nav-link active fw-bold akses"
                    : "nav-link fw-bold beforeAkses "
                }
                href="/journey"
              >
                Journey
              </a>
            </li>
            {/* <li class="nav-item">
              <a
                className={
                  location.pathname === "/payment"
                    ? "nav-link active fw-bold akses"
                    : "nav-link fw-bold beforeAkses "
                }
                href="/payment"
              >
                Payment
              </a>
            </li> */}

            <li class="nav-item d-block d-lg-none">
              <a
                className={
                  location.pathname === "/keranjang"
                    ? "nav-link active fw-bold akses"
                    : "nav-link fw-bold beforeAkses "
                }
                href="/keranjang"
              >
                Keranjang
              </a>
            </li>
            <li class="nav-item d-block d-lg-none">
              <a
                className={
                  location.pathname === "/test"
                    ? "nav-link active fw-bold akses"
                    : "nav-link fw-bold beforeAkses "
                }
                href="/logout"
              >
                Logout
              </a>
            </li>
          </ul>
          <div className="d-none d-lg-block">
            {/*  */}
            <div class="dropdown">
              <button
                className="ms-4 buttonIconNavbar dropbtn"
                style={{ backgroundColor: "transparent", border: 0 }}
              >
                <img src={User} alt="User" />
              </button>
              {status === true ? (
                <>
                  <div class="dropdown-content">
                    <a href="/editProfile">Edit Profile</a>
                    <a onClick={handleLogout}>Logout</a>
                  </div>
                </>
              ) : (
                <>
                  <div class="dropdown-content">
                    <a href="/login">Login</a>
                  </div>
                </>
              )}
            </div>
            {/*  */}

            <button
              className="ms-4 me-4 buttonIconNavbar"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              style={{ backgroundColor: "transparent", border: 0 }}
            >
              <img src={Keranjang} alt="Keranjang" />
              {totalCart > 0 && (
                <span className="notification-badge">{totalCart}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
