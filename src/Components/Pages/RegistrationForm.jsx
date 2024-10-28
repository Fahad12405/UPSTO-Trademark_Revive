import React, { useState } from "react";
import './RegistrationForm.css'; // Import your CSS file for styles
import { Controller, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Import SweetAlert

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, control, formState: { errors }, watch, trigger } = useForm();
  const [selectedPackageDetails, setSelectedPackageDetails] = useState({ type: '', price: '', description: '' });

  const getPackageDetails = (type) => {
    if (type === 'basic') {
      return {
        plan: 'basic',
        price: 99,
        description: '14 day processing time. We will complete your search within 14 business days, and file the application after you have approved it. 100% Satisfaction Guaranteed.',
      };
    }
    if (type === 'standard') {
      return {
        plan: 'standard',
        price: 199,
        description: 'Cease & Desist Letter. 1 Month of free trademark monitoring included to ensure no infringements on your mark are filed. 100% Satisfaction Guaranteed.',
      };
    }
    if (type === 'premier') {
      return {
        plan: 'premier',
        price: 299,
        description: 'Handle Additional Filings. 60% of trademark applications require additional filings for approval. We handle additional filings. 100% Satisfaction Guaranteed.',
      };
    }
    return {};
  };
  

  const protectionType = watch("protectionType");

  const nextStep = async () => {
    const valid = await trigger(); // Validate the current step inputs
    if (valid) {
      setStep(prevStep => prevStep + 1); // Update step state correctly
    } else {
      console.log('Validation errors:', errors); // Log errors for debugging
    }
  };

  const prevStep = () => setStep(step - 1);

  const onValid = (data) => {
    if (step === 5) {
      sendEmail(data); // Send email when form is submitted at the last step
    } else {
      nextStep();
    }
  };

  const sendEmail = (data) => {
    // Destructure the necessary fields from data
    const {
      protectionType,
      nameToProtect,
      livingPerson,
      foreignWords,
      trademarkUsage,
      logoDescription,
      logoFile,
      colorProtection,
      ownerType,
      firstName,
      lastName,
      address,
      city,
      state,
      postalCode,
      email,
      phone,
      sellingType,
      goodsServicesDescription,
      packageType // Get the selected package type
    } = data;

    // Get the selected package details based on packageType
    const selectedPackage = getPackageDetails(packageType);
    setSelectedPackageDetails(selectedPackage); // Update state with selected package details

    // Log selected package details for debugging
    console.log("Selected Package on Submit:", selectedPackage);

    // Combine data and selected package details for email
    const formData = {
      protectionType,
      nameToProtect,
      livingPerson,
      foreignWords,
      trademarkUsage,
      logoDescription,
      logoFile,
      colorProtection,
      ownerType,
      firstName,
      lastName,
      address,
      city,
      state,
      postalCode,
      email,
      phone,
      sellingType,
      goodsServicesDescription,
      selectedPackage: {
        type: selectedPackage.plan, // Package type
        price: selectedPackage.price, // Package price
        description: selectedPackage.description, // Package description
      },
    };

    // Log the formData to see what's being sent
    console.log("Sending email with the following data:", formData);

    emailjs.send(
      'service_0l5hyz5',
      'template_556v7h8',
      formData,
      'MoyHHg2UuMHrvHDbg'
    )
    .then((result) => {
      console.log("Email sent successfully:", result.text);
      // Show success alert with SweetAlert
      Swal.fire({
        title: 'Success!',
        text: 'Your form has been successfully submitted!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send email. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  };

    return (
      <div className="form-container">
        <form onSubmit={handleSubmit(onValid)} className="multi-step-form">

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
                  <p className="small-text">
                    Please provide a complete and accurate description of your logo, including any words that may appear in the logo.
                    An example of a description is: ‘a red cat wrapped around a blue outline of a globe’.
                    Leave out the colors if you want to protect your logo in all colors.
                  </p>
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

        {step === 2 && (
          <div className="step-content">
            <h2>Owner of Trademark Name</h2>
            <h3>Will the trademark be owned by an individual or an entity such as a corporation or LLC?</h3>
            <p>Identify the owner of the trademark. This is the person or organization who will be the owner of record. If you choose individuals, you can enter as many names as you want who own the mark. With an organization, you will have to identify someone to be the person of contact for the organization.</p>
            <div className="checkbox-group">
              <label>
                <input
                  type="radio"
                  {...register("ownerType", { required: "Please select an option" })}
                  value="individual"
                />
                Individual
              </label>
              <label>
                <input
                  type="radio"
                  {...register("ownerType")}
                  value="organization"
                />
                Organization
              </label>
              {errors.ownerType && <p className="error-message">{errors.ownerType.message}</p>}
            </div>

            <div className="input-label">
              <span>First Name</span>
              <input
                type="text"
                {...register("firstName", { required: "First name is required" })}
                placeholder="Enter first name"
              />
              {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
            </div>

            <div className="input-label">
              <span>Last Name</span>
              <input
                type="text"
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Enter last name"
              />
              {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
            </div>

            <div className="input-label">
              <span>Address</span>
              <input
                type="text"
                {...register("address", { required: "Address is required" })}
                placeholder="Enter address"
              />
              {errors.address && <p className="error-message">{errors.address.message}</p>}
            </div>

            <div className="input-label">
              <span>City</span>
              <input
                type="text"
                {...register("city", { required: "City is required" })}
                placeholder="Enter city"
              />
              {errors.city && <p className="error-message">{errors.city.message}</p>}
            </div>

            <div className="input-label">
  <span>State/Province/Region</span>
  <select {...register("state", { required: "Please select a state" })}>
    <option value="">Select a state</option>
    <option value="AL">Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option>
    <option value="CA">California</option>
    <option value="CO">Colorado</option>
    <option value="CT">Connecticut</option>
    <option value="DE">Delaware</option>
    <option value="FL">Florida</option>
    <option value="GA">Georgia</option>
    <option value="HI">Hawaii</option>
    <option value="ID">Idaho</option>
    <option value="IL">Illinois</option>
    <option value="IN">Indiana</option>
    <option value="IA">Iowa</option>
    <option value="KS">Kansas</option>
    <option value="KY">Kentucky</option>
    <option value="LA">Louisiana</option>
    <option value="ME">Maine</option>
    <option value="MD">Maryland</option>
    <option value="MA">Massachusetts</option>
    <option value="MI">Michigan</option>
    <option value="MN">Minnesota</option>
    <option value="MS">Mississippi</option>
    <option value="MO">Missouri</option>
    <option value="MT">Montana</option>
    <option value="NE">Nebraska</option>
    <option value="NV">Nevada</option>
    <option value="NH">New Hampshire</option>
    <option value="NJ">New Jersey</option>
    <option value="NM">New Mexico</option>
    <option value="NY">New York</option>
    <option value="NC">North Carolina</option>
    <option value="ND">North Dakota</option>
    <option value="OH">Ohio</option>
    <option value="OK">Oklahoma</option>
    <option value="OR">Oregon</option>
    <option value="PA">Pennsylvania</option>
    <option value="RI">Rhode Island</option>
    <option value="SC">South Carolina</option>
    <option value="SD">South Dakota</option>
    <option value="TN">Tennessee</option>
    <option value="TX">Texas</option>
    <option value="UT">Utah</option>
    <option value="VT">Vermont</option>
    <option value="VA">Virginia</option>
    <option value="WA">Washington</option>
    <option value="WV">West Virginia</option>
    <option value="WI">Wisconsin</option>
    <option value="WY">Wyoming</option>
    {/* Add U.S. territories if needed */}
  </select>
  {errors.state && <p className="error-message">{errors.state.message}</p>}
</div>

            <div className="input-label">
              <span>Zip/Postal Code</span>
              <input
                type="text"
                {...register("postalCode", { required: "Postal code is required" })}
                placeholder="Enter postal code"
              />
              {errors.postalCode && <p className="error-message">{errors.postalCode.message}</p>}
            </div>

            <div className="input-label">
              <span>Email</span>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",

                })}

                placeholder="Enter email"
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            <div className="input-label">
              <span>Phone</span>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    message: "Phone number must be 10 digits"
                  }
                })}
                placeholder="Enter phone number"
              />
              {errors.phone && <p className="error-message">{errors.phone.message}</p>}
            </div>

            <button type="button" onClick={prevStep} className="prev-button">
              Back
            </button>
            <button type="button" onClick={nextStep} className="continue-button">
              Continue
            </button>
          </div>
        )}

{step === 3 && (
  <div className="step-content">
    <h2>Choose Your Trademark Class</h2>
    <p>
      Start describing the goods and services related to your mark. Trademark Genius compares the description you provide and automatically provides descriptions from the USPTO ID Manual for your consideration.
    </p>

    <div className="input-label">
      <span>Do you sell, or intend to sell, goods or services?</span>
      <div className="radio-group">
        <label htmlFor="goods">
          <input
            type="radio"
            id="goods"
            value="goods"
            {...register("sellingType", { required: "This field is required" })}
          />
          Goods
        </label>
        <label htmlFor="services">
          <input
            type="radio"
            id="services"
            value="services"
            {...register("sellingType", { required: "This field is required" })}
          />
          Services
        </label>
      </div>
      {errors.sellingType && <p className="error-message">{errors.sellingType.message}</p>}
    </div>

    <div className="input-label">
      <span>Please provide a description of your goods or services</span>
      <textarea
        {...register("goodsServicesDescription", { required: "This field is required" })}
        placeholder="Describe the goods/services"
        rows="4"
      />
      {errors.goodsServicesDescription && <p className="error-message">{errors.goodsServicesDescription.message}</p>}
    </div>

    <button type="button" onClick={prevStep} className="prev-button">
      Back
    </button>
    <button type="button" onClick={handleSubmit(onValid)} className="continue-button">
      Continue
    </button>
  </div>
)}
{step === 4 && (
  <div className="step-content">
    <h2>Choose a Package</h2>
    <p>
      All packages include lifetime customer support and our 100% satisfaction guarantee.
    </p>

    <div className="package-selection">
      {['basic', 'standard', 'premier'].map((type) => {
        const packageDetails = getPackageDetails(type); // Get package details

        return (
          <div className="package-card" key={type}>
            <div className="package-header">
              <h3 style={{ color: '#1976d2', fontWeight: 'bold' }}>
                {type.charAt(0).toUpperCase() + type.slice(1)} {/* Capitalizes the package name */}
              </h3>
              <p>${packageDetails.price}</p> {/* Display the package price */}
            </div>
            <div className="package-details">
              <p>{packageDetails.description}</p> {/* Package description */}
              <p>100% Satisfaction Guaranteed</p>
            </div>
            <div className="package-selection-control">
              <Controller
                control={control} // Ensure 'control' is passed to the Controller
                name="packageType"
                rules={{ required: "Please select a package" }} // Validation rule
                render={({ field }) => (
                  <label>
                    <input
                      type="radio"
                      value={type}
                      checked={field.value === type} // Check if the current package is selected
                      onChange={() => {
                        field.onChange(type); // Update the form state
                        setSelectedPackageDetails({
                          type, // Package type
                          price: packageDetails.price, // Set package price
                          description: packageDetails.description, // Set package description
                        });
                      }} // Update the selected package details when clicked
                    />
                    Select
                  </label>
                )}
              />
            </div>
          </div>
        );
      })}
    </div>

    {/* Display error message for package selection if any */}
    {errors.packageType && (
      <p className="error-message">{errors.packageType.message}</p>
    )}

    <div style={{ marginTop: '20px' }}>
      <button type="button" onClick={prevStep} className="prev-button">
        Back
      </button>
      <button type="button" onClick={handleSubmit(onValid)} className="continue-button">
        Continue
      </button>
    </div>
  </div>
)}








 


{/* Step 5 */}
{step === 5 && (
        <div className="step-content">
          {/* Rush Processing Section */}
          <h2>Add Rush Processing to Expedite Your Application</h2>

          <div className="rush-content">
            <h3>You’re nearly finished!</h3>
            <h4>Do you need your order processed faster?</h4>

            <div className="rush-description">
              <strong>RUSH PROCESSING.</strong> COMPLETED NEXT DAY WHEN TIME IS OF THE ESSENCE.
              <p>
                We know time is critical. With Rush Processing, we will complete your search results by the next business day, and file the application immediately after you have approved it.
              </p>
            </div>
            <div className="input-label">
              <label>
                <input type="checkbox" {...register("rushProcessing")} />
                24-hour Expedited Processing (Next Business Day): $49.00 USD
              </label>
            </div>
          </div>

          <button type="button" onClick={prevStep} className="prev-button">
            Back
          </button>
          <Button type="submit" variant="contained" color="secondary">
            Submit
          </Button>
        </div>
      )}
    </form>
    </div>
  );
};

export default RegistrationForm;