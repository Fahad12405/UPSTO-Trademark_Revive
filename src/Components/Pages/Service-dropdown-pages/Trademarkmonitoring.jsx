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


const Trademarkmonitoring = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
  
  const styles = {
    container: {
      
      margin: '0', 
      flexWrap: 'wrap',
      // Ensure there's no extra margin around the page
    },
    contentContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      margin: '20px 0',
      flexDirection: 'row', // Default for larger screens
      justifyContent: 'space-between',
      '@media (max-width: 768px)': { // For mobile screens
        flexDirection: 'column', // Stack columns vertically on mobile
       
        
      },
    },
    serviceCard: {
      flex: 1,
      background: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
     
      display: 'flex',
      flexDirection: 'column',
      height: '100%', // Make the card height equal to the container
      '@media (max-width: 768px)': { // Mobile responsiveness
        marginBottom: '20px',
        width:'50%',
      },
    },
    faqSection: {
      flex: 1,
      background: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      '@media (max-width: 768px)': { // Mobile responsiveness
        marginTop: '20px', // Add some margin on mobile
      },
    },
    faqHeading: {
      marginBottom: '40px',
      fontFamily: 'Arial, sans-serif',
      color: '#2c3e50',
    },
    faqQuestion: {
      color: '#2980b9',
      marginTop: '30px',
    },
    ctaText: {
      fontWeight: 'bold',
      marginTop: '20px',
    },
    bodyReset: {
      margin: '0', // Remove body margin
      padding: '0', // Remove body padding
      boxSizing: 'border-box', // Ensure consistent sizing across elements
    },
  };

  return (
    <div style={styles.bodyReset}>
      {showForm && <RegistrationForm />}
      {!showForm && <>
      <Spinner />
      
      <Header name="Trademark Monitoring"onButtonClick={handleButtonClick} />

      <div style={styles.container}>
        <div style={styles.contentContainer}>
          {/* Left Column: DropdownServiceCards */}
          <div style={styles.serviceCard}>
            <DropdownServiceCards 
              title="Trademark Monitoring" 
              description={
                <>
                  Regular monitoring of your trademark ensures protection against infringement.<br />
                  Our team tracks potential conflicts and alerts you to unauthorized use of your brand.<br />
                  Stay proactive and safeguard your brand's integrity with our comprehensive monitoring service.
                </>
              } 
              price="$149.00 quarterly" 
              image="/img/cat-1.jpg" 
              imageStyle={{ height: '100%', objectFit: 'cover' }} 
            />
          </div>

          {/* Right Column: FAQ Section */}
          <div style={styles.faqSection}>
            <h2 style={styles.faqHeading}>Frequently Asked Questions</h2>
            
            <h3 style={styles.faqQuestion}> Why is trademark monitoring important?</h3>
            <p>Trademark monitoring is crucial to protect your brand's identity and reputation. It prevents unauthorized usage, brand dilution, and counterfeiting.</p>

            <h3 style={styles.faqQuestion}> How does Trademark Genius detect trademark infringements?</h3>
            <p>We use a combination of advanced technology and legal expertise to monitor trademarks and identify potential infringements.</p>

            <h3 style={styles.faqQuestion}> Can small businesses benefit from trademark monitoring services?</h3>
            <p>Absolutely. We offer pricing packages that cater to businesses of all sizes, ensuring that even small businesses can protect their brands.</p>

            <h3 style={styles.faqQuestion}> What sets Trademark Genius apart from other trademark monitoring companies?</h3>
            <p>Our client-centric approach, expertise, and dedication to our clients make us stand out in the industry.</p>

           
            
            <p style={styles.ctaText}>
              Don't leave your brand's future to chance. Partner with Trademark Genius and secure the legacy of your brand. Get started today!
            </p>
          </div>
        </div>
      </div>

      <Service />
      <Category />
      <MidBanner  onButtonClick={handleButtonClick} />
      <Contact />
      
      <Scroll />
      </>
}
    </div>
  );
};

export default Trademarkmonitoring;
