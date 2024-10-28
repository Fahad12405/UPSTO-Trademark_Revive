import React from "react";
import Header from "./Header";

export default function Testimonial() {
  return (
    <>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Customer Reviews & Testimonials
            </h6>
            <h1 className="mb-5">See why others are choosing Trademark Revive!</h1>
          </div>

          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner position-relative">
              <div className="carousel-item active testimonial-item text-center">
                <img
                  className="border rounded-circle p-2 mx-auto mb-3"
                  src="/img/team-1.jpg"
                  style={{ width: "80px", minHeight: "80px" }}
                  alt="Mark D"
                />
                <h5 className="mb-0">Mark D</h5>
                <p>Reviewed Trademark Revive</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Trademark Revive made my trademark registration effortless. The entire process was straightforward, and their customer service was top-notch. I highly recommend Trademark Revive!
                  </p>
                </div>
              </div>

              <div className="carousel-item text-center">
                <img
                  src="/img/testimonial-1.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="Kelly T"
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Kelly T</h5>
                <p>Reviewed Trademark Revive</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    I faced numerous challenges while trying to register my company's trademark. Trademark Revive stepped in and resolved every issue. I strongly recommend their professional services!
                  </p>
                </div>
              </div>

              <div className="carousel-item text-center">
                <img
                  src="/img/testimonial-3.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="Terry F"
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Terry F</h5>
                <p>Reviewed Trademark Revive</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    I successfully registered my trademark with the help of Trademark Revive. Their user-friendly dashboard allowed me to track my application seamlessly. I’ll definitely use their services again!
                  </p>
                </div>
              </div>

              <div className="carousel-item text-center">
                <img
                  src="/img/team-3.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="Devin M"
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Devin M</h5>
                <p>Reviewed Trademark Revive</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    My experience with Trademark Revive was excellent. The team was friendly and efficient. The trademark registration process was quick and hassle-free. Thank you!
                  </p>
                </div>
              </div>

              <div className="carousel-item text-center">
                <img
                  src="/img/testimonial-4.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="Lisa N"
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Lisa N</h5>
                <p>Reviewed Trademark Revive</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    I had a unique trademark registration situation that required extra guidance. The Trademark Revive team walked me through every step and helped me submit my application to the USPTO successfully. Thanks, Trademark Revive!
                  </p>
                </div>
              </div>

              <div className="carousel-item text-center">
                <img
                  src="/img/team-2.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="Sarah N"
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Marshall N</h5>
                <p>Reviewed Trademark Revive</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    I had a great experience with Trademark Revive. Their team was knowledgeable, responsive, and helped resolve a few issues with my application. I would definitely choose them again for future needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
