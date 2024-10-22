import React from 'react';
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

import { Button, Typography } from '@mui/material';

const ComprehensiveTrademarkResearch = () => {
  return (
    <div>
      <Spinner />
      <Navbar />
      <Header name="Comprehensive Trademark Research" />

      {/* Comprehensive Trademark Search Section */}
      <div style={{
        position: 'relative',
        flexWrap: 'wrap',
        padding: '50px 20px',
        margin: '20px 0',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        paddingLeft: '20px',
      }}>
        {/* Container for Images */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: '100px',
          paddingLeft: '100px',
        }}>
          {/* Circular Images */}
          {[
            "/img/search-banner-img3.jpg",
            "/img/search-banner-img1.jpg",
            "/img/search-banner-img2.jpg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Trademark Search ${index + 1}`}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '50px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              }}
            />
          ))}
        </div>
        
        {/* Text Content */}
        <div style={{ maxWidth: '600px', color: '#000' }}>
          <Typography variant="h4" gutterBottom>
            Thorough Comprehensive Trademark Search
          </Typography>
          <Typography variant="body1" gutterBottom>
            Identify risks to avoid any unwanted nonrefundable USPTO filings fees, legal expenses, or rebranding costs upfront!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Ensure your trademark availability, compare possible variations or patterns of similar trademarks, and receive accurate reporting using official USPTO search strategies and algorithms.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our expert team ensures a thorough examination of existing trademarks, giving you peace of mind as you proceed with your application. 
          </Typography>
          <Typography variant="body1" gutterBottom>
            You will receive a detailed report that highlights any potential conflicts, allowing you to make informed decisions regarding your trademark.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Easy-to-read reports are sent electronically, making it simple to understand the status of your trademark search.
          </Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
            Start Filling
          </Button>
        </div>
      </div>

      {/* Pass props to DropdownServiceCards */}
      <DropdownServiceCards 
        title="Comprehensive Trademark Search" 
        description={
          <>
            Conducting a comprehensive trademark search helps identify potential conflicts.<br />
            Avoid costly legal issues and ensure your brand's uniqueness in the marketplace.<br />
            Our expert team provides detailed reports to guide your trademark application process.
          </>
        } 
        price="$149.00 per trademark" // Adjusted price for the comprehensive search
        image="/img/cat-3.jpg" // Ensure this path is correct
      />

      
      <Service />
      <Category />
      <MidBanner />
      <Contact />
      <Footer />
      <Scroll />
    </div>
  );
};

export default ComprehensiveTrademarkResearch;
