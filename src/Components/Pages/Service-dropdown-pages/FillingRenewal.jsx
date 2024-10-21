import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Contact from '../Contact';
import Service from '../Service';
import Header from '../Header';
import Category from '../Category';
import MidBanner from '../MidBanner';
import Spinner from '../Spinner';

const FillingRenewal = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show/hide the scroll button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 300) { // Adjust the threshold as necessary
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup the listener
  }, []);

  return (
    <div>
      <Spinner />
      <Navbar />
      <Header name="Filling a Renewal" />
      <Service />
      <Category />
      <MidBanner />
      <Contact />
      <Footer />
      {showScrollButton && (
        <a 
          href="#"
          className="btn btn-primary back-to-top"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      )}
    </div>
  );
};

export default FillingRenewal;
