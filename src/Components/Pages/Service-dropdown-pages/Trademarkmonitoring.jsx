import React from 'react';
import Navbar from '../Navbar'; // Adjust the import paths as necessary
import Footer from '../Footer';
import Contact from '../Contact';
import Service from '../Service';
import Header from '../Header';
import Category from '../Category';
import MidBanner from '../MidBanner';
import Spinner from '../Spinner';




const Trademarkmonitoring = () => {
  return (
    <div>
      <Spinner />
      <Navbar />
      <Header name="Trademark Monitoring"/>
      <Service />
      <Category />
      <MidBanner />
      <Contact />
     
      <Footer />
      <a href="#" className="btn btn-primary back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  );
};

export default Trademarkmonitoring;
