import React from 'react';
import Navbar from '../Pages/Navbar';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';

import Category from '../Pages/Category';
import Testimonial from '../Pages/Testimonial';
import Contact from '../Pages/Contact';
import FAQ from '../Pages/FAQ'; 

export default function FAQ1() {
  return (
    <>
      
      <Navbar />
      <Header name="FAQ" />
      <FAQ />
      <Category/>
      <Testimonial />
      <Contact />
      <Footer /> 
      
    </>
  );
}
