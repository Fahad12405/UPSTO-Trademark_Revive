import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Avatar, IconButton, Button, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const DropdownServiceCards = ({ title, description, price, image }) => {
  return (
    <div style={{ position: 'relative', margin: '20px 0 60px 0', display: 'flex', justifyContent: 'center' }}>
      {/* Background with Blur Effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/img/Trademark-register-banner.jpeg")', // Your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          filter: 'blur(1px)',
        }}
      />

      {/* MUI Card */}
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1, padding: '20px', borderRadius: '8px', width: '100%', maxWidth: '1200px' }}>
        <Card
          sx={{
            maxWidth: { xs: '100%', sm: 350 },
            minHeight: { xs: 400, sm: 500 },
            marginLeft: '20px',
            position: 'relative',
            zIndex: 1,
            padding: '10px',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
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
            title={<Typography variant="h6" fontWeight="bold">{title}</Typography>} // Use props for title
          />
          <CardMedia
            component="img"
            height="220" // Adjusted height to be smaller
            image={image} // Use props for image
            alt="Trademark registration"
            sx={{ borderRadius: '16px 16px 0 0' }}
          />
          <CardContent sx={{ padding: '10px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
              {price} 
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '5px' }}>
              {description} {/* Use props for description */}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: '10px',
                width: '100%', // Full width for the button
              }}
            >
              Register Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DropdownServiceCards;
