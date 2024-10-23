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
import DropdownServiceCards from '../DropdownServiceCards';
import RegistrationForm from "../RegistrationForm";



const FillingRenewal = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Inline styles with improved responsiveness
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
    
    <Header name="Filing a Renewal"  onButtonClick={handleButtonClick} />
  
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        
        {/* Left Column: FAQ Section */}
        <div style={styles.faqSection}>
          <h2 style={styles.faqHeading}>Frequently Asked Questions</h2>
  
          <h3 style={styles.faqQuestion}> Why is filing a renewal important?</h3>
          <p>Filing a renewal is necessary to maintain the protection of your trademark. Without renewing, your trademark can expire, putting your brand at risk.</p>
  
          <h3 style={styles.faqQuestion}> When should I file a trademark renewal?</h3>
          <p>Trademark renewals should be filed between the 5th and 6th year after registration, and again between the 9th and 10th year. Subsequent renewals are required every 10 years.</p>
  
          <h3 style={styles.faqQuestion}> What happens if I miss the renewal deadline?</h3>
          <p>If you miss the deadline, your trademark could be canceled or become vulnerable to infringement. However, in some cases, a grace period may be available with additional fees.</p>
  
          <h3 style={styles.faqQuestion}> Can Trademark Genius assist with late filings?</h3>
          <p>Yes, we can help with late filings within the allowed grace period and guide you through the process to avoid losing your trademark rights.</p>
  
          <p style={styles.ctaText}>
            Don’t risk losing your trademark protection. Let Trademark Genius manage your renewals and ensure your brand remains secure. Get in touch with us today!
          </p>
        </div>
  
        {/* Right Column: DropdownServiceCards */}
        <div style={styles.serviceCard}>
          <DropdownServiceCards 
            title="Filing a Renewal" 
            description={
              <>
                Protecting your trademark is an ongoing process. Filing a renewal is essential to keep your trademark rights intact.<br />
                Our team ensures that your renewal application is filed correctly and on time to avoid any lapse in protection.<br />
                Let us handle the complexities of the renewal process so you can focus on growing your brand.
              </>
            } 
            price="$190.00 + USPTO Fee(s) of $225 - $725 " 
            image="/img/cat-2.jpg" 
          imageStyle={{ height: '100%', objectFit: 'cover' }} 
          />
        </div>
        
      </div>
    </div>
  
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

export default FillingRenewal;
