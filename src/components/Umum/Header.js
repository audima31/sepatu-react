import React from "react";
import { useLocation } from "react-router-dom";
import Keranjang from "../../assets/images/Icon/shopping-bag.png";
import User from "../../assets/images/Icon/user.png";

export default function Header() {
  const location = useLocation();
  return (
    <nav
      class="navbar navbar-expand-lg "
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
            <li class="nav-item">
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
            </li>

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
            <li class="nav-item">
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
              <div class="dropdown-content">
                <a href="/editProfile">Edit Profile</a>
                <a href="/login">Login</a>
                <a href="#">Logout</a>
              </div>
            </div>
            {/*  */}

            <button
              className="ms-4 buttonIconNavbar"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              style={{ backgroundColor: "transparent", border: 0 }}
            >
              {/* <a
                className={
                  location.pathname === "/keranjang"
                    ? "nav-link active fw-bold akses"
                    : "nav-link fw-bold beforeAkses "
                }
                href="/keranjang"
              > */}
              <img src={Keranjang} alt="Keranjang" />
              {/* </a> */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
