import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Quick Links</h4>
              <div className="d-flex flex-column">
                <Link to="/Home" className="text-white mb-2">
                  Home
                </Link>
                <Link to="/About1" className="text-white mb-2">
                  About
                </Link>
                <Link to="/FAQ1" className="text-white mb-2">
                  FAQ
                </Link>
                <Link to="/contact" className="text-white mb-2">
                  Contact
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>

              {/* Address link to open in Google Maps */}
              <p className="mb-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=11400+West+Olympic+Blvd,+Suite+200,+Los+Angeles,+CA+9006"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <i
                    className="fa fa-map-marker-alt"
                    style={{
                      marginRight: "2rem",
                      marginTop: "0.2rem",
                      fontSize: "1.2rem",
                    }}
                  />
                  <span style={{ lineHeight: "1.4" }}>
                    11400 West Olympic Blvd,
                    <br />
                    Suite 200 Los Angeles, CA 9006
                  </span>
                </a>
              </p>

              {/* Phone link to open dialer */}
              <p className="mb-2">
                <a
                  href="tel:+17148221238"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <i className="fa fa-phone-alt me-3" />
                  +1 714 822 1238
                </a>
              </p>

              {/* Email link to open mail client */}
              <p
                className="mb-2"
                style={{ display: "flex", alignItems: "center" }}
              >
                <a
                  href="mailto:info@upstotrademarkrevive.com"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <i
                    className="fa fa-envelope"
                    style={{ marginRight: "1.5rem" }}
                  />
                  info@upstotrademarkrevive.com
                </a>
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/course-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/category2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/category3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/category4.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/category5.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/category6.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Stay Updated!</h4>
              <p>
                Subscribe to our newsletter to receive the latest news, updates,
                and tips on trademark registration and protection.
              </p>

              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <a
                  className="border-bottom"
                  href="https://usptotrademarkrevive.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TRADEMARK REVIVE &nbsp;
                </a>
                All Rights Reserved.
                <br />
                <br />
              </div>

              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link to="/Home">Home</Link>
                  <Link to="/About1">About</Link>
                  <Link to="/FAQ1">FAQ</Link>
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
