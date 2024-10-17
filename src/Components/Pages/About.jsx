import React from "react";

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5">
      <div
        className="col-lg-6 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ minHeight: "400px" }}
      >
        <div className="position-relative h-100">
          <img
            className="img-fluid position-absolute w-100 h-100"
            src="/img/about.jpg"
            alt="about trademark"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
        <h6 className="section-title bg-white text-start text-primary pe-3">
          About Us
        </h6>
        <h1 className="mb-4">Welcome to Trademark Services</h1>
        <p className="mb-4">
          We are committed to providing small business owners with proven, efficient, and affordable solutions for trademark registration and protection. Our mission is to simplify the USPTO registration process and guide you step-by-step.
        </p>
        <p className="mb-4">
          From trademark searches to application filings, we offer a full range of services to safeguard your brand. Our goal is to help you secure the protection you need without the complexity or cost of a full-service attorney.
        </p>
        <div className="row gy-2 gx-4 mb-4">
          <div className="col-sm-6">
            <p className="mb-0">
              <i className="fa fa-arrow-right text-primary me-2" />
              Trademark Registration
            </p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0">
              <i className="fa fa-arrow-right text-primary me-2" />
              Comprehensive Trademark Search
            </p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0">
              <i className="fa fa-arrow-right text-primary me-2" />
              Statement of Use Filing
            </p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0">
              <i className="fa fa-arrow-right text-primary me-2" />
              Trademark Monitoring
            </p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0">
              <i className="fa fa-arrow-right text-primary me-2" />
              Office Action Responses
            </p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0">
              <i className="fa fa-arrow-right text-primary me-2" />
              Brand Protection Solutions
            </p>
          </div>
        </div>
        {/* <a className="btn btn-primary py-3 px-5 mt-2" href>Learn More</a> */}
      </div>
    </div>
  </div>
</div>

    </>
  );
}
