import React, { Component } from "react";
import Model1 from "../../assets/images/Model1.jpg";
import Model2 from "../../assets/images/Model2.jpg";
import Model3 from "../../assets/images/Model3.jpg";
import Model4 from "../../assets/images/Model4.jpg";
import Model5 from "../../assets/images/Model5.jpg";
import Model6 from "../../assets/images/Model6.jpg";
import Model7 from "../../assets/images/Model7.jpg";
import Model8 from "../../assets/images/Model8.jpg";
import Model9 from "../../assets/images/Model9.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Content6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Model1,
      Model2,
      Model3,
      Model4,
      Model5,
      Model6,
      Model7,
      Model8,
      Model9,
    };
  }
  render() {
    const images = [
      Model1,
      Model2,
      Model3,
      Model4,
      Model5,
      Model6,
      Model7,
      Model8,
      Model9,
    ];
    return (
      <div className="mt-5">
        <h4 className="text-center mt-5 fw-lighter">
          Everyday with okta
          <label style={{ color: "#fa9200" }}>S</label>
          hoes
          <label style={{ color: "#fa9200" }}>.</label>
        </h4>

        <p className="text-center" style={{ fontSize: "12px" }}>
          for all people
        </p>

        <Carousel
          className="d-none d-md-block"
          showThumbs={false}
          emulateTouch={true}
        >
          {images.reduce((result, image, index) => {
            if (index % 3 === 0) {
              const chunk = images.slice(index, index + 3);
              result.push(
                <div key={index} className="row">
                  {chunk.map((image, idx) => (
                    <div key={idx} className="col mb-3">
                      <img
                        className="w-100"
                        src={image}
                        alt={`slide-${index + idx}`}
                      />
                    </div>
                  ))}
                </div>
              );
            }
            return result;
          }, [])}
        </Carousel>

        <Carousel
          className="d-block d-md-none"
          showThumbs={false}
          emulateTouch={true}
        >
          {images ? (
            images.map((image) => (
              <div className="row ">
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
    );
  }
}

export default Content6;
