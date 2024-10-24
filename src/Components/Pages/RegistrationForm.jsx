import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './RegistrationForm.css'; // Import your CSS file for styles
import { Card, CardContent, CardActions, Typography, Radio, FormControlLabel, Button, Grid  } from '@mui/material';


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
                {...register("email", { required: "Email is required" })}
                placeholder="Enter email"
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            <div className="input-label">
              <span>Phone</span>
              <input
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
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
    <button type="button" onClick={nextStep} className="continue-button">
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

    <Grid container spacing={2} justifyContent="center" className="package-selection">
      {/* First Card */}
<Grid item xs={12} sm={6} md={4}> {/* Changed from md={4} to md={6} for wider cards */}
  <Card variant="outlined" sx={{ borderRadius: '16px', boxShadow: 3, width: '100%' }}>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ fontSize: '1rem', color: '#1976d2', fontWeight: 'bold' }}>
        Basic
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '0.85rem', color: '#333' }}>$99 + Federal USPTO fees</Typography>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>14 day processing time</Typography>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>
        We will complete your search within 14 business days, and file the application after you have approved it.
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>Trademark Monitoring</Typography>
     
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>
        Prepared & Reviewed by Our Specialists
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>
        Have peace of mind knowing our specialists will research your mark.
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>
        100% Satisfaction Guaranteed
      </Typography>
    </CardContent>
    <CardActions>
      <FormControlLabel
        control={
          <Radio
            value="basic"
            {...register("packageType", { required: "Please select a package" })}
          />
        }
        label="Select"
      />
    </CardActions>
  </Card>
</Grid>


    {/* Second Card */}
<Grid item xs={12} sm={6} md={4}> {/* Changed from md={4} to md={6} for wider cards */}
  <Card variant="outlined" sx={{ borderRadius: '16px', boxShadow: 3, width: '100%' }}>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ fontSize: '1rem', color: '#1976d2', fontWeight: 'bold' }}>
        Standard
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '0.85rem', color: '#333' }}>$199 + Federal USPTO fees</Typography>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>Cease & Desist Letter</Typography>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>
        In the event that you find an infringing mark, we will provide a  Desist template for you to deliver to your infringing party.
      </Typography>
     
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>
        1 Month of free trademark monitoring included to ensure no infringements on your mark are filed.
      </Typography>
      
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>
        Have peace of mind knowing our specialists will research your mark.
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>
        100% Satisfaction Guaranteed
      </Typography>
    </CardContent>
    <CardActions>
      <FormControlLabel
        control={
          <Radio
            value="standard"
            {...register("packageType", { required: "Please select a package" })}
          />
        }
        label="Select"
      />
    </CardActions>
  </Card>
</Grid>


    {/* Third Card */}
<Grid item xs={12} sm={6} md={4}> {/* Changed from md={4} to md={6} for wider cards */}
  <Card variant="outlined" sx={{ borderRadius: '16px', boxShadow: 3, width: '100%' }}>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ fontSize: '1rem', color: '#1976d2', fontWeight: 'bold' }}>
        Premier
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '0.85rem', color: '#333' }}>$299 + Federal USPTO fees</Typography>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>Handle Additional Filings</Typography>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>
        60% of trademark applications require additional filings for approval. We handle additional filings.
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>Trademark Monitoring</Typography>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>
        1 Month of free trademark monitoring included to ensure no infringements on your mark.
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>
        Prepared & Reviewed by Our Specialists
      </Typography>
        
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>
        100% Satisfaction Guaranteed
      </Typography>
    </CardContent>
          <CardActions>
            <FormControlLabel
              control={
                <Radio
                  value="premier"
                  {...register("packageType", { required: "Please select a package" })}
                />
              }
              label="Select"
            />
          </CardActions>
        </Card>
      </Grid>
    </Grid>

    {/* Error message for package selection */}
    {errors.packageType && <p className="error-message">{errors.packageType.message}</p>}

    <Button onClick={prevStep} variant="contained" className="prev-button">
      Back
    </Button>
    <button type="button" onClick={nextStep} className="continue-button">
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
    <button type="button" onClick={nextStep} className="continue-button">
      Continue
    </button>
  </div>
)}













      </form>
    </div>
  );
};

export default RegistrationForm;
