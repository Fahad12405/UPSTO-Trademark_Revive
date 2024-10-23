import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './RegistrationForm.css'; // Import your CSS file for styles

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors }, watch, trigger } = useForm();
  
  // Watch for selected protection type (name, slogan, logo)
  const protectionType = watch("protectionType");

  const nextStep = async () => {
    // Trigger validation for the current step
    const valid = await trigger();
    if (valid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = (data) => {
    // Handle final submission of the form (on the last step)
    console.log("Final Data:", data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="multi-step-form">
        {step === 1 && (
          <div className="step-content">
            <h2>Select What You Are Trying to Protect</h2>
            <div className="checkbox-group">
              <label>
                <input
                  type="radio"
                  {...register("protectionType", { required: "At least one option must be selected" })}
                  value="name"
                />
                Name
              </label>
              <label>
                <input
                  type="radio"
                  {...register("protectionType")}
                  value="slogan"
                />
                Slogan
              </label>
              <label>
                <input
                  type="radio"
                  {...register("protectionType")}
                  value="logo"
                />
                Logo
              </label>
              {errors.protectionType && <p className="error-message">{errors.protectionType.message}</p>}
            </div>

            {protectionType === "logo" && (
  <div className="logo-section">
    {/* Small text description */}
    <p className="small-text">
      Please provide a complete and accurate description of your logo, including any words that may appear in the logo. 
      An example of a description is: ‘a red cat wrapped around a blue outline of a globe’. 
      Leave out the colors if you want to protect your logo in all colors.
    </p>

    {/* Input field for logo description */}
    <div className="input-label">
      <textarea
        {...register("logoDescription", { required: "Logo description is required" })}
        placeholder="Enter your logo description"
        rows="4"
        className="logo-description-input"
      />

                  {errors.logoDescription && <p className="error-message">{errors.logoDescription.message}</p>}
                </div>

                <div className="radio-group">
                  <span>Do you want to be able to protect your logo in a variety of colors?</span>
                  <label>
                    <input
                      type="radio"
                      {...register("colorProtection", { required: "Please select an option" })}
                      value="yes"
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      {...register("colorProtection")}
                      value="no"
                    />
                    No
                  </label>
                  {errors.colorProtection && <p className="error-message">{errors.colorProtection.message}</p>}
                </div>

                <div className="input-label">
                  <span>Upload logo file</span>
                  <input
                    type="file"
                    {...register("logoFile", { required: "Please upload a logo file" })}
                  />
                  {errors.logoFile && <p className="error-message">{errors.logoFile.message}</p>}
                </div>
              </div>
            )}

            <div className="input-label">
              <span>Enter the name you wish to protect</span>
              <input
                type="text"
                {...register("nameToProtect", { required: "Name is required" })}
                placeholder="Enter the name"
              />
              {errors.nameToProtect && <p className="error-message">{errors.nameToProtect.message}</p>}
            </div>

            <div className="radio-group">
              <span>Does your mark include a living person’s name?</span>
              <label>
                <input
                  type="radio"
                  {...register("livingPerson", { required: "Please select an option" })}
                  value="yes"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  {...register("livingPerson")}
                  value="no"
                />
                No
              </label>
              {errors.livingPerson && <p className="error-message">{errors.livingPerson.message}</p>}
            </div>

            <div className="radio-group">
              <span>Does your mark include any words other than English?</span>
              <label>
                <input
                  type="radio"
                  {...register("foreignWords", { required: "Please select an option" })}
                  value="yes"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  {...register("foreignWords")}
                  value="no"
                />
                No
              </label>
              {errors.foreignWords && <p className="error-message">{errors.foreignWords.message}</p>}
            </div>

            <div className="radio-group">
              <span>Are you currently using this trademark in your business?</span>
              <label>
                <input
                  type="radio"
                  {...register("trademarkUsage", { required: "Please select an option" })}
                  value="yes"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  {...register("trademarkUsage")}
                  value="no"
                />
                No
              </label>
              {errors.trademarkUsage && <p className="error-message">{errors.trademarkUsage.message}</p>}
            </div>

            <p>If you do not have proof now, you can submit proof later after your trademark is submitted to the Trademark office. If you do it later, you will need to pay a $100 government fee (for US trademarks).</p>

            <button type="button" onClick={nextStep} className="continue-button">
              Continue
            </button>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="button-group">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="nav-button">
              Previous
            </button>
          )}
          {step < 4 && (
            <button type="button" onClick={nextStep} className="nav-button">
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
