import React from "react";
import rating from "../../assets/images/Rating5.png";

export default function Ulasan3() {
  return (
    <div>
      <div>
        <div>
          <div className="d-flex justify-content-between">
            <img
              className=""
              src={rating}
              alt=""
              style={{ width: "6em", height: "1em" }}
            />
            <label style={{ fontSize: "0.8em", color: "#75869c" }}>
              5 months ago
            </label>
          </div>
          <p style={{ fontSize: "0.7em" }} className="mt-1 fw-semibold">
            Oleh : Messi
          </p>
          <p
            className="fw-light"
            style={{ marginTop: "-0.8em", fontSize: "0.8em" }}
          >
            I opted for the Gray color and I am absolutely in love with it! This
            amazing brand and its supportive community have exceeded my
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
}
