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





const RevivalAbandonment = () => {
  return (
    <div>
      <Spinner />
      <Navbar />
      <Header name="Revival for Abandonment"/>
      <Service />
      <Contact />
     <Category />
     <MidBanner />
      <Footer />
      <Scroll />
      </div>
  );
};

export default RevivalAbandonment;
