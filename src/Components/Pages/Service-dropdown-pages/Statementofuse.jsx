import React, { useState } from 'react'; // Import useState
import Navbar from '../Navbar'; // Adjust the import paths as necessary
import Footer from '../Footer';
import Contact from '../Contact';
import Service from '../Service';
import Header from '../Header';
import Category from '../Category';
import MidBanner from '../MidBanner';
import Spinner from '../Spinner';
import Scroll from '../Scroll';
import DropdownServiceCards from '../DropdownServiceCards';
import RegistrationForm from "../RegistrationForm";






const Statementofuse = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
  return (
    <div>
      {showForm && <RegistrationForm />}
      {!showForm && <>
      <Spinner />

      <Header name="Statement of Use" onButtonClick={handleButtonClick} />
      <DropdownServiceCards 
           title="Statement of Use Filing" 
           description={
      <>
              Filing a Statement of Use is essential to finalize your trademark registration.<br />
              This document shows that your trademark is in use in commerce, protecting your brand.<br />
              Let our team assist you in navigating the process for a successful submission.
      </>
  } 
            price="$99.00 + $100 USPTO filing fee" 
            image="/img/cat-2.jpg" // Ensure this path is correct
      />

      <Service />
      <Category />
      <MidBanner />
      <Contact />
     
      <Scroll />
      </>
      }
      </div>
  );
};

export default Statementofuse;
