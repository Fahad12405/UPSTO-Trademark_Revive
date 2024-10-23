// Header.jsx
import React from "react";
import FormButton from "./FormButton"; // Import the new button component


export default function Header({ name, onButtonClick }) {
  return (
    <>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                {name}
              </h1>

              {/* New Heading */}
              <h2 className="text-white mt-3">UPSTO TRADEMARK REVIVE</h2>

              {/* Use the FormButton component */}
              <FormButton onClick={onButtonClick} /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
