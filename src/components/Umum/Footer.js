import React from "react";
import { useLocation } from "react-router-dom";
import LinkedIn from "../../assets/images/Icon/Linkedin.png";

export default function Footer() {
  const location = useLocation();

  return (
    <div className="mt-5 " style={{ backgroundColor: "#000000" }}>
      <div>
        <div className="text-center ">
          <label className="text-center mt-4 ">
            <label
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "1.5em",
              }}
            >
              okta
            </label>
            <label
              style={{
                color: "#fa9200",
                fontWeight: "bold",
                fontSize: "1.5em",
              }}
            >
              Shoes
            </label>
            <label
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "1.5em",
              }}
            >
              .
            </label>
          </label>
        </div>

        <div>
          <ul
            className="text-center mt-3"
            style={{
              color: "#FFFFFF",
              listStyleType: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              justifyContent: "center", // Memusatkan list secara horizontal
            }}
          >
            <li className="footerList">
              {" "}
              <a
                className={
                  location.pathname === "/"
                    ? "nav-link active fw-bold akses"
                    : "nav-link beforeAkses "
                }
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="footerList ps-3">
              {" "}
              <a
                className={
                  location.pathname === "/shop"
                    ? "nav-link active fw-bold akses"
                    : "nav-link beforeAkses "
                }
                href="/shop"
              >
                Shop
              </a>
            </li>
            <li className="footerList ps-3">
              {" "}
              <a
                className={
                  location.pathname === "/journey"
                    ? "nav-link active fw-bold akses"
                    : "nav-link beforeAkses "
                }
                href="/journey"
              >
                Journey
              </a>
            </li>
            <li className="footerList ps-3">
              {" "}
              <a
                className={
                  location.pathname === "/payment"
                    ? "nav-link active fw-bold akses"
                    : "nav-link beforeAkses "
                }
                href="/payment"
              >
                Payment
              </a>
            </li>
          </ul>
        </div>
        <hr style={{ color: "#FFFFFF" }} className="mt-4" />

        <div className="container d-flex justify-content-between">
          <div
            className="mb-4"
            style={{ fontSize: "0.85em", color: "#31363e" }}
          >
            Copyright © 2023
          </div>
          <div className="mb-4">
            <a href="https://www.linkedin.com/in/audimaoktasena/">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
