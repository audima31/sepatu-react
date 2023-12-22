import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CaraoselContent3({ data }) {
  return (
    <Carousel showThumbs={false} emulateTouch={true}>
      {data ? (
        data.map((product) => (
          <div
            key={product.id}
            className="col mt-4 d-flex justify-content-center"
          >
            <a
              href={`/product/detail/${product.id}`}
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
                    <label style={{ fontSize: "0.85em" }}>{product.type}</label>
                    <label
                      style={{ fontSize: "0.85em" }}
                      className="fw-semibold"
                    >
                      Rp. {product.price}
                    </label>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))
      ) : (
        <p className="text-danger">Error</p>
      )}
    </Carousel>
  );
}
