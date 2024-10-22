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




const OfficeActionResponse = () => {
  return (
    <div>
      <Spinner />
      <Navbar />
      <Header name="Office Action Response"/>
      <DropdownServiceCards 
  title="Office Action Response" 
  description={
    <>
      Responding to an Office Action is crucial for the success of your trademark application.<br />
      Our experienced team will help you prepare a comprehensive response to overcome the issues raised by the USPTO.<br />
      Ensure your trademark's approval with our expert guidance through this important process.
    </>
  } 
  price="$199.00 per filing" 
  image="/img/search-banner-img1.jpg" // Ensure this path is correct
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

export default OfficeActionResponse;
