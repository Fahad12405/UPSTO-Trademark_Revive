import React from 'react';
import Navbar from '../Navbar'; // Adjust the import paths as necessary
import Footer from '../Footer';
import Contact from '../Contact';
import Service from '../Service';
import Header from '../Header';
import Category from '../Category';



const Statementofuse = () => {
  return (
    <div>
      <Navbar />
      <Header name="Statement of Use"/>
      <Service />
      <Category />
      <Contact />
     
      <Footer />
    </div>
  );
};

export default Statementofuse;
