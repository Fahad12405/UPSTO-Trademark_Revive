import React from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "b9fd69e0-c307-4f57-b90f-9c4106746fcb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
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
          <div className="col-lg-4 col-md-12 wow fadeInUp d-flex flex-column" data-wow-delay="0.5s" style={{ height: "100%" }}>
            <form onSubmit={onSubmit} style={{ flex: "1" }}>
              <input type="hidden" name="from_name" value="eLearning" />

              <div className="row g-3">
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
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
                      id="email"
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
                      id="phone"
                      name="phone"
                      placeholder="Mobile No"
                      required
                    />
                    <label htmlFor="subject">Mobile No</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      name="message"
                      style={{ height: "150px" }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from contact page"
                />

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
