import React from 'react';
import Navbar from '../Navbar'; // Adjust the import paths as necessary
import Footer from '../Footer';
import Contact from '../Contact';
import Service from '../Service';
import Header from '../Header';
import Category from '../Category'; 



const RevivalAbandonment = () => {
  return (
    <div>
      <Navbar />
      <Header name="Revival for Abandonment"/>
      <Service />
      <Contact />
     <Category />
      <Footer />
    </div>
  );
};

export default RevivalAbandonment;
