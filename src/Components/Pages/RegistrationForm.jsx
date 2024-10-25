import React, { useState } from "react";
import './RegistrationForm.css'; // Import your CSS file for styles
import { Controller, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, control, formState: { errors }, watch, trigger } = useForm();
  const [selectedPackageDetails, setSelectedPackageDetails] = useState({ type: '', price: '' });

  const getPackageDetails = (type) => {
    if (type === 'basic') {
      return {
        plan: 'basic',
        price: 99,
        description: `
          14 day processing time.
          We will complete your search within 14 business days, and file the application after you have approved it.
          100% Satisfaction Guaranteed.`,
      };
    }
    if (type === 'standard') {
      return {
        plan: 'standard',
        price: 199,
        description: `
          Cease & Desist Letter.
          1 Month of free trademark monitoring included to ensure no infringements on your mark are filed.
          100% Satisfaction Guaranteed.`,
      };
    }
    if (type === 'premier') {
      return {
        plan: 'premier',
        price: 299,
        description: `
          Handle Additional Filings.
          60% of trademark applications require additional filings for approval. We handle additional filings.
          100% Satisfaction Guaranteed.`,
      };
    }
    return {};
  };


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

  // Single onValid function for both form submission and Stripe payment
  const onValid = async (data) => {
    const selectedPackage = data.packageType;
    const selectedPackagePrice = getPackageDetails(selectedPackage);
    console.log(selectedPackagePrice)
    // Save the package details in a variable
    setSelectedPackageDetails(selectedPackagePrice);

    // console.log("Selected Package:", selectedPackageDetails);

    if (step === 5) {
      // console.log(data);
      await createCheckoutSession(data);  // Create a checkout session for Stripe payment
    } else {
      nextStep();
    }
  };





  const createCheckoutSession = async (data) => {

    // console.log(data)
    const { protectionType, nameToProtect, livingPerson, foreignWords, trademarkUsage, logoDescription, logoFile, colorProtection, ownerType, firstName, lastName, address, city, state, postalCode, email, phone, sellingType, goodsServicesDescription } = data;

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
      selectedPakeges: selectedPackageDetails
    }
    console.log("formData=>", formData)
    console.log("selectedPackageDetails=>", selectedPackageDetails)
    try {
      const response = await fetch('http://localhost:7100/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({formData}), // Pass package details in body
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const sessionData = await response.json();
      console.log('Session ID:', sessionData.id);

      // Load Stripe.js and redirect to the Stripe checkout page
      const stripe = await loadStripe('pk_test_51Q5CQjBSRlxFwzyWZZr67eMkwml3WUCZdRg4bcW5mtBx1NffoI3wDxNJ7QPAzEVUczP8ntAnMPmlDYeTyWEBpjl100xLHDUUps'); // Replace with your own Stripe publishable key



      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionData.id, // Pass the session ID from the backend
      });

      if (error) {
        console.error('Error redirecting to checkout:', error);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }

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
                <option value="CA">California</option>
                <option value="NY">New York</option>
                {/* Add more states as needed */}
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
                <label>
                  <input
                    type="radio"
                    value="goods"
                    {...register("sellingType", { required: "This field is required" })}
                  />
                  Goods
                </label>
                <label>
                  <input
                    type="radio"
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
              All packages include lifetime customer support and our 100% satisfaction guaranteed.
            </p>

            <div className="package-selection">
              {['basic', 'standard', 'premier'].map((type) => (
                <div className="package-card"  style={{ width: "100%", padding: "10px" }}  key={type}>
                  <div className="package-header">
                    <h3 style={{ color: '#1976d2', fontWeight: 'bold' }}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </h3>
                    <p>
                      {type === 'basic' && '$99'}
                      {type === 'standard' && '$199'}
                      {type === 'premier' && '$299'}
                    </p>
                  </div>
                  <div className="package-details">
                    <p>
                      {type === 'basic' && '14 day processing time'}
                      {type === 'standard' && 'Cease & Desist Letter'}
                      {type === 'premier' && 'Handle Additional Filings'}
                    </p>
                    <p>
                      {type === 'basic' && 'We will complete your search within 14 business days, and file the application after you have approved it.'}
                      {type === 'standard' && '1 Month of free trademark monitoring included to ensure no infringements on your mark are filed.'}
                      {type === 'premier' && '60% of trademark applications require additional filings for approval. We handle additional filings.'}
                    </p>
                    <p>100% Satisfaction Guaranteed</p>
                  </div>
                  <div className="package-selection-control">
                    <Controller
                      control={control}
                      name="packageType"
                      rules={{ required: "Please select a package" }}
                      render={({ field }) => (
                        <label>
                          <input
                            type="radio"
                            value={type || ""}
                            checked={field.value === type}  // Ensures correct radio button selection
                            onChange={() => {
                              field.onChange(type);
                              const packageDetails = getPackageDetails(type);
                              setSelectedPackageDetails({
                                type,
                                price: packageDetails.price,
                                description: packageDetails.description
                              });
                            }} // Update form state when clicked
                          />
                          Select
                        </label>
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Error message for package selection */}
            {errors.packageType && <p className="error-message">{errors.packageType.message}</p>}

            <button type="button" onClick={prevStep} className="prev-button">
              Back
            </button>
            <button type="button" onClick={handleSubmit(onValid)} className="continue-button">
              Continue
            </button>
          </div>
        )}





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
            <Button type="submit" variant="contained" color="secondary"  >Submit</Button>

          </div>
        )}













      </form>
    </div>
  );
};

export default RegistrationForm;
