import React from 'react';
import Navbar from '../Navbar'; // Adjust the import paths as necessary
import Footer from '../Footer';
import Contact from '../Contact';
import Service from '../Service';
import Header from '../Header';
import Category from '../Category';
import MidBanner from '../MidBanner';
import Spinner from '../Spinner';
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
  display: 'flex', // Use flexbox for layout
  alignItems: 'center', // Center items vertically
  backgroundColor: '#f8f8f8', // Light gray for subtle contrast
  borderRadius: '8px',
  paddingLeft: '20px', // Add left padding here
}}>
  {/* Container for Images */}
  <div style={{
    display: 'flex',
    
    flexDirection: 'column', // Stack images vertically
    marginRight: '100px', // Space between images and content
    paddingLeft: '100px', // Add left padding here for the images container
  }}>

          {/* Circular Images */}
          {[
            "/img/search-banner-img3.jpg",
            "/img/search-banner-img1.jpg", // Replace with actual image URLs
            "/img/search-banner-img2.jpg", // Replace with actual image URLs
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Trademark Search ${index + 1}`}
              style={{
                width: '100px', // Set a width
                height: '100px', // Set a height
                borderRadius: '50%', // Make it circular
                objectFit: 'cover', // Cover the container
                marginBottom: '50px', // Space between images
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)', // Add a shadow for depth
              }}
            />
          ))}
        </div>
        
        {/* Text Content */}
        <div style={{ maxWidth: '600px', color: '#000' }}> {/* Changed text color to black */}
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

      <Service />
      <Category />
      <MidBanner />
      <Contact />
      <Footer />
      <a href="#" className="btn btn-primary back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  );
};

export default ComprehensiveTrademarkResearch;
