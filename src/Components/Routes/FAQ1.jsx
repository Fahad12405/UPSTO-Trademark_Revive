import React from 'react';
import Navbar from '../Pages/Navbar';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
import MidBanner from '../Pages/MidBanner'
import Category from '../Pages/Category';
import Testimonial from '../Pages/Testimonial';
import Contact from '../Pages/Contact';
import FAQ from '../Pages/FAQ'; 
import Spinner from '../Pages/Spinner'; 
import Scroll from '../Pages/Scroll';




export default function FAQ1() {
  return (
    <>
      <Spinner />
      <Navbar />
      <Header name="FAQ" />
      <FAQ />
      <Category/>
      <MidBanner />
      <Testimonial />
      <Contact />
      <Footer /> 
      <Scroll />
    </>
  );
}
