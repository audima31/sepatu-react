import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Foto1 from "../../assets/images/Journey/Foto1.png";
import Foto2 from "../../assets/images/Journey/Foto2.png";
import Foto3 from "../../assets/images/Journey/Foto3.png";

class Content1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [Foto1, Foto2, Foto3],
    };
  }
  render() {
    const { images } = this.state;
    console.log("Data : ", images);
    return (
      <div>
        <h4
          className="text-center mt-4 fw-semibold"
          style={{ color: "#fa9200" }}
        >
          Our Journey
        </h4>
        <hr className="mb-4 container" />

        <div className="container d-none d-lg-block">
          <div className="row ">
            <div
              className="col d-flex align-items-center"
              style={{ fontWeight: "100" }}
            >
              <p style={{ textAlign: "justify" }}>
                Okta
                <label className="fw-semibold " style={{ color: "#ff7140" }}>
                  S
                </label>
                hoes was first established in 2020. The idea to create this
                store crossed our minds during the peak of the sneaker trend.
                However, at that time, sneakers were mainly enjoyed by the
                upper-class society due to their high prices. Therefore, Okta
                <label className="fw-semibold" style={{ color: "#ff7140" }}>
                  S
                </label>
                hoes Urban Soles aims to offer shoes from various renowned
                brands at more affordable prices. This shop collaborates closely
                with manufacturers and distributors to obtain an exclusive
                collection, creating an image that shoes are not just
                accessories but also expressions of personal style
                <label className="fw-semibold" style={{ color: "#ff7140" }}>
                  .
                </label>
              </p>
            </div>
            <div className="col">
              <Carousel
                showThumbs={false}
                emulateTouch={true}
                infiniteLoop={true}
              >
                {images ? (
                  images.map((image) => (
                    <div className="row">
                      <div className="col mb-3">
                        <img className="w-100" src={image} alt="data" />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-danger">Error</p>
                )}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="container d-block d-lg-none">
          <div className="row ">
            <div
              className="col-12 d-flex align-items-center"
              style={{ fontWeight: "100" }}
            >
              <p style={{ textAlign: "justify" }}>
                Okta
                <label className="fw-semibold " style={{ color: "#ff7140" }}>
                  S
                </label>
                hoes was first established in 2020. The idea to create this
                store crossed our minds during the peak of the sneaker trend.
                However, at that time, sneakers were mainly enjoyed by the
                upper-class society due to their high prices. Therefore, Okta
                <label className="fw-semibold" style={{ color: "#ff7140" }}>
                  S
                </label>
                hoes Urban Soles aims to offer shoes from various renowned
                brands at more affordable prices. This shop collaborates closely
                with manufacturers and distributors to obtain an exclusive
                collection, creating an image that shoes are not just
                accessories but also expressions of personal style
                <label className="fw-semibold" style={{ color: "#ff7140" }}>
                  .
                </label>
              </p>
            </div>
            <div className="col-12">
              <Carousel
                showThumbs={false}
                emulateTouch={true}
                infiniteLoop={true}
              >
                {images ? (
                  images.map((image) => (
                    <div className="row">
                      <div className="col mb-3">
                        <img className="w-100" src={image} alt="data" />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-danger">Error</p>
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content1;
