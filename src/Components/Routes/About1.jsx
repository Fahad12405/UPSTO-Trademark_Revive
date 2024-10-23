import React, { useState } from 'react'
import Header from '../Pages/Header'
import About from '../Pages/About'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import Service from '../Pages/Service'
import Contact from '../Pages/Contact'
import Testimonial from '../Pages/Testimonial'
import Spinner from '../Pages/Spinner'
import Category from '../Pages/Category'
import MidBanner from '../Pages/MidBanner'
import Scroll from '../Pages/Scroll'
import RegistrationForm from "../Pages/RegistrationForm";







export default function About1() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <>
      {showForm && <RegistrationForm />}
      {!showForm && <>

        <Spinner />

        <Header name="About" onButtonClick={handleButtonClick} />
        <About />
        <Service />
        <Category />
        <MidBanner onButtonClick={handleButtonClick} />
        <Testimonial />
        <Contact />
        <Scroll />
      </>
      }
    </>
  )
}
