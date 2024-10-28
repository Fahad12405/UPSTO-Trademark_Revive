import React from "react";
import "../../assets/css/Slide.css";
import FormButton from "./FormButton";

export default function Slide({ onButtonClick }) {
  const slides = [
    {
      image: "/img/carousel-3-small.jpg", // Default for smaller screens
      srcSet: "/img/carousel-3-small.jpg 480w, /img/carousel-3-medium.jpg 800w, /img/carousel-3-large.jpg 1200w",
      heading: "File Your Trademark Online",
      subheading: "Official USPTO Registration Process",
      description: "Protect Your Brand Today. Already know your Trademark is available?",
    },
    
    {
      image: "/img/carousel-2-small.jpg", // Default for smaller screens
      srcSet: "/img/carousel-2-small.jpg 480w, /img/carousel-2-medium.jpg 800w, /img/carousel-2-large.jpg 1200w",
      heading: "Trademark Monitoring Service",
      subheading: "Protect Your Trademark from Infringements",
      description: "Get notified of any potential infringements and take action immediately.",
    },
    {
      image: "/img/carousel-4-small.jpg", // Default for smaller screens
      srcSet: "/img/carousel-4-small.jpg 480w, /img/carousel-4-medium.jpg 800w, /img/carousel-4-large.jpg 1200w",
      heading: "Cease & Desist Services",
      subheading: "Safeguard Your Brand Effectively",
      description: "We help you handle cease & desist letters to protect your brand legally.",
    },
  ];


  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="owl-carousel-item position-relative">
                <img
                  className="img-fluid"
                  src={slide.image}
                  alt=""
                  style={{ height: "500px", objectFit: "cover" }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                  style={{ background: "rgba(24, 29, 56, .7)" }}
                >
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-sm-10 col-lg-8">
                        <h6 className="text-white text-uppercase mb-4 animated slideInDown">
                          {slide.heading}
                        </h6>
                        <h1 className="display-4 text-white animated slideInDown">
                          {slide.subheading}
                        </h1>
                        <p className="fs-5 text-white mb-4 pb-2">
                          {slide.description}
                        </p>
                        <FormButton
                          to="/about"
                          onClick={onButtonClick}
                          name="Learn More About Our Trademark Services"
                          sx={{ margin: "10px" }}
                        />

                        <FormButton
                          onClick={onButtonClick}
                          sx={{ margin: "10px" }}
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
