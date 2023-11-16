import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Caraosel1 from "../../assets/images/Caraosel/Caraosel1.png";
import Caraosel2 from "../../assets/images/Caraosel/Caraosel2.png";
import Caraosel3 from "../../assets/images/Caraosel/Caraosel3.png";

export default function CaraoselShop() {
  const images = [Caraosel1, Caraosel2, Caraosel3];
  return (
    <div>
      <div className="d-none d-md-block">
        <Carousel
          className="mt-4"
          showThumbs={false}
          emulateTouch={true}
          autoPlay
          showStatus={false}
        >
          {images ? (
            images.map((image) => (
              <div className="row">
                <div className="col mb-3">
                  <img className="w-100 " src={image} alt="day1" />
                </div>
              </div>
            ))
          ) : (
            <p className="text-danger">Error</p>
          )}
        </Carousel>
      </div>

      <div className="d-block d-md-none">
        <Carousel
          className="mt-4"
          showThumbs={false}
          emulateTouch={true}
          autoPlay
          showStatus={false}
        >
          {images ? (
            images.map((image) => (
              <div className="row ">
                <div className="col mb-3">
                  <img
                    className="w-100 "
                    src={image}
                    alt="day1"
                    style={{ height: "4em" }}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-danger">Error</p>
          )}
        </Carousel>
      </div>
    </div>
  );
}
