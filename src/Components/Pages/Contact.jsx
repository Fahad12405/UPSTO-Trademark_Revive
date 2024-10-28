import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    emailjs
      .sendForm(
        "service_0l5hyz5", // Replace with your Email.js service ID
        "template_zlsefcu", // Replace with your Email.js template ID
        event.target,
        "MoyHHg2UuMHrvHDbg"   // Replace with your Email.js public key
      )
      .then(
        (response) => {
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          event.target.reset(); // Reset the form after submission
        },
        (error) => {
          Swal.fire({
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            icon: "error",
            confirmButtonText: "OK",
          });
          console.error("Error:", error);
        }
      );
  };

  return (
    <div className="container-xxl py-5 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Contact Us
          </h6>
          <h1 className="mb-5">We're Here to Help</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <h5>Get In Touch</h5>
            <p className="mb-4">
              If you have any questions regarding trademark registration, feel free to reach out to us. Our team is ready to assist you!
            </p>
            <h5>Need Assistance?</h5>
            <p className="mb-4">
              Whether you need help with filing a trademark application or understanding the registration process.
            </p>
            <h5>Protect Your Brand</h5>
            <p className="mb-4">
              Protecting your brand is essential for your business. Contact us for guidance on securing trademark.
            </p>
            <h5>Quick Response</h5>
            <p className="mb-4">
              We value your time and aim to respond to your inquiries as quickly as possible.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s d-flex flex-column">
            <img
              src="/img/carousel-1.jpg" // Replace with your image URL
              alt="Get In Touch"
              className="img-fluid mb-3"
              style={{ height: "100%", maxHeight: "450px", objectFit: "cover" }} // Adjust height as needed
            />
          </div>
          <div className="col-lg-4 col-md-12 wow fadeInUp d-flex flex-column" data-wow-delay="0.5s">
            <form onSubmit={onSubmit} style={{ flex: "1" }}>
              <div className="row g-3">
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      name="phone"
                      placeholder="Mobile No"
                      required
                    />
                    <label htmlFor="phone">Mobile No</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      name="message"
                      style={{ height: "150px" }}
                      required
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
