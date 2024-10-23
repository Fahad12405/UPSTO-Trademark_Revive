import React from "react";
import "../../assets/css/Slide.css"; // Ensure your CSS has rules for reduced height
import { Link } from "react-router-dom";
import FormButton from "./FormButton";
import { Padding } from "@mui/icons-material";

export default function Slide({ onButtonClick }) { // Accepting the prop
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          {[...Array(3)].map((_, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="/img/carousel-2.jpg" alt="" style={{ height: "500px", objectFit: "cover" }} />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                  style={{ background: "rgba(24, 29, 56, .7)" }}
                >
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-sm-10 col-lg-8">
                        <h6 className="text-primary text-uppercase mb-2 animated slideInDown">
                          File Your Trademark Online
                        </h6>
                        <h1 className="display-4 text-white animated slideInDown">
                          Official USPTO Registration Process
                        </h1>
                        <p className="fs-5 text-white mb-4 pb-2">
                          Protect Your Brand Today. Already know your Trademark is available?
                        </p>
                       
                        <FormButton
                        to="/about"
                          onClick={onButtonClick}
                          name={'Read More'}
                        sx={ {margin: '10px'} } 
                        />
                        <FormButton
                          onClick={onButtonClick}
                          sx={ {margin: '10px'} } 
                        // cssClass={ height: 'auto', width: 'auto' } 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
