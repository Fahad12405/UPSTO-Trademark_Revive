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
            <h1 className="mb-5">See why others are choosing Trademark Genius!</h1>
          </div>

          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner position-relative">
              <div className="carousel-item active testimonial-item text-center">
                <img
                  className="border rounded-circle p-2 mx-auto mb-3"
                  src="/img/testimonial-1.jpg"
                  style={{ width: "80px", minHeight: "80px" }}
                  alt="Mark D"
                />
                <h5 className="mb-0">Mark D</h5>
                <p>Reviewed Trademark Genius</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Trademark Genius helped register my company's trademark. The process was simple, their customer service was excellent, and my trademark was registered without any issues. Highly recommend Trademark Genius.
                  </p>
                </div>
              </div>

              <div className="carousel-item text-center">
                <img
                  src="/img/testimonial-2.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="Kelly T"
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Kelly T</h5>
                <p>Reviewed Trademark Genius</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    I contacted Trademark Genius after running into many issues trying to register my company's trademark myself. They helped solve every issue I ran into. Would definitely recommend spending the money to have professionals handle this process.
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
                <p>Reviewed Trademark Genius</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Got my trademark registered with USPTO without any issues. Their dashboard is a great tool and helped me track the progress of my application all the way to completion. Will use them again for any other TM needs.
                  </p>
                </div>
              </div>

              <div className="carousel-item text-center">
                <img
                  src="/img/testimonial-4.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="Devin M"
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Devin M</h5>
                <p>Reviewed Trademark Genius</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    My experience with TMG was great. Their customer service team was friendly and helpful. The process was quick & simple. Thanks!
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
                <p>Reviewed Trademark Genius</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    My trademark registration was a unique situation that required some extra work, the team helped guide me through this daunting process and got my application submitted to USPTO (and was approved without issues). Thanks TMG!
                  </p>
                </div>
              </div>

              <div className="carousel-item text-center">
                <img
                  src="/img/testimonial-2.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="Marshall N"
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Marshall N</h5>
                <p>Reviewed Trademark Genius</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Great experience with Trademark Genius. They were knowledgeable, quick, and accurate. Helped iron out a few issues the USPTO was giving my application. I’d definitely use them again.
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
