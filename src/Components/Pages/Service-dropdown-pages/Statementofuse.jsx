import React from 'react';
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





const Statementofuse = () => {
  return (
    <div>
      <Spinner />
      <Navbar />
      <Header name="Statement of Use"/>
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
     
      <Footer />
      <Scroll />
      </div>
  );
};

export default Statementofuse;
