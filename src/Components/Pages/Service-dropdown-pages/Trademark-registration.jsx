// TrademarkRegistration.jsx
import React, { useState } from 'react'; // Import useState
import Navbar from '../Navbar';
import Footer from '../Footer';
import Contact from '../Contact';
import Service from '../Service';
import Header from '../Header';
import Category from '../Category';
import MidBanner from '../MidBanner';
import Spinner from '../Spinner';
import Scroll from '../Scroll';
import DropdownServiceCards from '../DropdownServiceCards';
import RegistrationForm from "../RegistrationForm";

const TrademarkRegistration = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      {showForm && <RegistrationForm />}
      {!showForm && <>
        <Spinner />

        <Header name="Trademark Registration" onButtonClick={handleButtonClick} />

        {/* Use the DropdownServiceCards component with props */}
        <DropdownServiceCards
          title="Trademark Registration"
          description={<>Registering your trademark with the USPTO provides exclusive rights to use your brand.<br /> This ensures protection against unauthorized use and adds significant value to your business identity. Our services guide you through the application process for a smooth experience.</>}
          price="$99.00"
          image="/img/Trademark-register-card.png"
        />

        <Service />
        <Category />
        <MidBanner />
        <Contact />

        <Scroll />
      </>
      }
    </div>
  );
};

export default TrademarkRegistration;
