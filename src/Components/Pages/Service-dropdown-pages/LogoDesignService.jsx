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




const LogoDesignService = () => {
  return (
    <div>
      <Spinner />
      <Navbar />
      <Header name="Logo Design Service"/>
      <Service />
      <Category />
      <MidBanner />

      <Contact />
     
      <Footer />
      <Scroll />
      </div>
  );
};

export default LogoDesignService;
