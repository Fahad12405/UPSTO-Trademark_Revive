import React, { useState } from 'react'; // Import useState
import Navbar from '../Pages/Navbar';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
import Contact from '../Pages/Contact';
import Spinner from '../Pages/Spinner';
import Service from '../Pages/Service';
import MidBanner from '../Pages/MidBanner';
import Scroll from '../Pages/Scroll';
import RegistrationForm from "../Pages/RegistrationForm";

export default function ContactPage() { // Give a name to the function component
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <>
      {showForm && <RegistrationForm />}
      {!showForm && <>

        <Spinner />

        <Header name="Contact" onButtonClick={handleButtonClick} />
        <Contact />
        <Service />
        <MidBanner  onButtonClick={handleButtonClick} />
        <Scroll />
        <Footer />
      </>
      }
    </>
  );
}
