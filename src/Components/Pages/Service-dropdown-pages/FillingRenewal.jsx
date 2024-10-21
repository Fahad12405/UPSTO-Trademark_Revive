import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Contact from '../Contact';
import Service from '../Service';
import Header from '../Header';
import Category from '../Category';
import MidBanner from '../MidBanner';
import Spinner from '../Spinner';
import Scroll from '../Scroll';


const FillingRenewal = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    console.log('Scroll position:', window.scrollY); // Add this line
    if (window.scrollY > 300) {
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
      <Scroll />

    </div>
  );
};

export default FillingRenewal;
