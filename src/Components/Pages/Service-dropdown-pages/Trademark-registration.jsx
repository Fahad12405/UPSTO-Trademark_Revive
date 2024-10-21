import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Contact from '../Contact';
import Service from '../Service';
import Header from '../Header';
import Category from '../Category';
import MidBanner from '../MidBanner';
import Spinner from '../Spinner';
import { Button, Typography, List, ListItem, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton } from '@mui/material';
import { blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Scroll from '../Scroll';


const TrademarkRegistration = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Spinner />
      <Navbar />
      <Header name="Trademark Registration" />

      <div style={{ position: 'relative', margin: '20px 0 100px 0', display: 'flex', justifyContent: 'center' }}>
        {/* Background Color with Blur */}
        <div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("/img/Trademark-register-banner.jpeg")', // Your image path
    backgroundSize: 'cover', // Cover the entire area
    backgroundPosition: 'center', // Center the image
    zIndex: 0, // Behind the content
    filter: 'blur(1px)', // Apply the blur effect
  }}
/>



    {/* MUI Card  */}
<div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1, padding: '40px', borderRadius: '8px', width: '100%', maxWidth: '1200px' }}>
  
  <Card 
    sx={{ 
      maxWidth: 400, 
      height: 600, 
      marginLeft: '20px', 
      position: 'relative', 
      zIndex: 1, 
      padding: '10px', 
      borderRadius: '16px', // Increased border radius for rounded corners
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Added box shadow for depth
      transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition for hover effects
      '&:hover': {
        transform: 'scale(1.05)', // Scale up on hover for effect
        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)', // Deeper shadow on hover
      },
    }}
  >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Trademark Registration"
    />
    <CardMedia
      component="img"
      height="280" // Adjusted height to be smaller
      image="/img/Trademark-register-card.png" // Ensure this path is correct
      alt="Trademark registration"
      sx={{ borderRadius: '16px 16px 0 0' }} // Rounded corners for the top of the card
    />
    <CardContent sx={{ padding: '10px' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
        $99.00 + USPTO gov fees
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '5px' }}>
        Registering your trademark ensures protection and adds value to your brand.<br />
        Professional assembly, formatting and review done by specialists. Electronic delivery.<br />
        Transparent updates in all information secured and organized in one place.
      </Typography>
      <Button 
        variant="contained" 
        color="primary"
        sx={{ marginTop: '10px' }}
      >
        Register Now
      </Button>
    </CardContent>
  </Card>
</div>

        
      </div>

      <Service />
      <Category />
      <MidBanner />
      <Contact />
      <Footer />
      <Scroll />
      </div>
  );
};

export default TrademarkRegistration;
