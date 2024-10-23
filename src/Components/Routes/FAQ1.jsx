import React,{useState} from 'react';
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
import RegistrationForm from "../Pages/RegistrationForm";





export default function FAQ1() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <>
     {showForm && <RegistrationForm />}
     {!showForm && <>
      <Spinner />
      
      <Header name="FAQ" onButtonClick={handleButtonClick} />
      <FAQ />
      <Category/>
      <MidBanner />
      <Testimonial />
      <Contact />
     
      <Scroll />
      </>
      }
    </>
  );
}
