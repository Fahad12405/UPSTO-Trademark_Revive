import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="container-xxl py-5 category">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Categories
          </h6>
          <h1 className="mb-5">Protect Your Business with Our Services</h1>
        </div>

        <div className="row g-4">
          {/* Row 1 */}
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <Link className="position-relative d-block overflow-hidden" to="/trademark-registration">
              <img className="img-fluid" src="/img/category1.jpg" alt="" />
              <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                <h5 className="m-0">Trademark Registration</h5>
                <p className="m-0">Secure your brand with our trademark registration services.</p>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <Link className="position-relative d-block overflow-hidden" to="/trademark-alert">
              <img className="img-fluid" src="/img/category2.jpg" alt="" />
              <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                <h5 className="m-0">Trademark Alert Monitoring</h5>
                <p className="m-0">Stay informed about any potential trademark conflicts.</p>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.5s">
            <Link className="position-relative d-block overflow-hidden" to="/trademark-renewals">
              <img className="img-fluid" src="/img/category3.jpg" alt="" />
              <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                <h5 className="m-0">Trademark Renewals</h5>
                <p className="m-0">Ensure continuous protection with timely trademark renewals.</p>
              </div>
            </Link>
          </div>

          {/* Row 2 */}
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.7s">
            <Link className="position-relative d-block overflow-hidden" to="/trademark-declarations">
              <img className="img-fluid" src="/img/category4.webp" alt="" />
              <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                <h5 className="m-0">Trademark Declarations</h5>
                <p className="m-0">File your Declarations of Continued Use on time.</p>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <Link className="position-relative d-block overflow-hidden" to="/trademark-genius">
              <img className="img-fluid" src="/img/category5.webp" alt="" />
              <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                <h5 className="m-0">Trademark Revive</h5>
                <p className="m-0">Utilize our services for seamless trademark management.</p>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="1.1s">
            <Link className="position-relative d-block overflow-hidden" to="/consultation">
              <img className="img-fluid" src="/img/category6.jpg" alt="" />
              <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                <h5 className="m-0">Consultation Services</h5>
                <p className="m-0">Get expert advice on your trademark strategies.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
