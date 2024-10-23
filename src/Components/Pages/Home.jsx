import React, { useState } from 'react';
import Navbar from './Navbar'
import Slide from './Slide'
import Service from './Service'
import About from './About'
import Testimonial from './Testimonial'  
import Footer from './Footer' 
import Spinner from './Spinner'
import Contact from './Contact'
import Category from './Category'
import MidBanner from './MidBanner'
import FAQ from './FAQ'
import Scroll from './Scroll'
import RegistrationForm from "./RegistrationForm";


export default function Home() {
    const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <>
      {showForm && <RegistrationForm />}
      {!showForm && <>
            <Spinner/>
            
            <Slide onButtonClick={handleButtonClick}/>
            <Service/>
            <About/>
            <Category/>
            <MidBanner/>
            <FAQ/>
           


            
            <Testimonial/>
            <Contact/>
            
           <Scroll />
           </>
      }
        </>
    )
}
