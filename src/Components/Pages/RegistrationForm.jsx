// MultiStepForm.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const [step, setStep] = useState(1); // Track current step
  const { register, handleSubmit, formState: { errors }, watch } = useForm(); // Use react-hook-form

  const nextStep = () => setStep(step + 1); // Go to next step
  const prevStep = () => setStep(step - 1); // Go to previous step

  const onSubmit = (data) => {
    // Handle final submission of the form (on the last step)
    console.log("Final Data:", data);
  };

  // Watch all form data for current step
  const formData = watch();

  return (
    <div className="multi-step-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div>
            <h2>Step 1: Personal Information</h2>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
            />
            {errors.name && <p>{errors.name.message}</p>}

            <input
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Step 2: Business Information</h2>
            <input
              {...register("businessName", { required: "Business name is required" })}
              placeholder="Business Name"
            />
            {errors.businessName && <p>{errors.businessName.message}</p>}

            <input
              {...register("businessType", { required: "Business type is required" })}
              placeholder="Business Type"
            />
            {errors.businessType && <p>{errors.businessType.message}</p>}
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Step 3: Contact Information</h2>
            <input
              {...register("phone", { required: "Phone number is required" })}
              placeholder="Phone"
            />
            {errors.phone && <p>{errors.phone.message}</p>}

            <input
              {...register("address", { required: "Address is required" })}
              placeholder="Address"
            />
            {errors.address && <p>{errors.address.message}</p>}
          </div>
        )}

        {step === 4 && (
          <div>
            <h2>Step 4: Review Details</h2>
            <div>
              <strong>Name: </strong> {formData.name || "Not provided"}
            </div>
            <div>
              <strong>Email: </strong> {formData.email || "Not provided"}
            </div>
            <div>
              <strong>Business Name: </strong> {formData.businessName || "Not provided"}
            </div>
            <div>
              <strong>Business Type: </strong> {formData.businessType || "Not provided"}
            </div>
            <div>
              <strong>Phone: </strong> {formData.phone || "Not provided"}
            </div>
            <div>
              <strong>Address: </strong> {formData.address || "Not provided"}
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2>Step 5: Confirmation</h2>
            <p>Thank you! Your registration is complete.</p>
            <button type="submit">Submit</button>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="button-group mt-3">
          {step > 1 && (
            <button type="button" onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 4 && (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          )}
          {step === 4 && (
            <button type="button" onClick={nextStep}>
              Confirm
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
