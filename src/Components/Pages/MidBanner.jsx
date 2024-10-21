import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Banner = () => {
  return (
    <Box
  sx={{
    position: 'relative',
    width: '100%',
    height: '70vh', // Height of the entire banner
    backgroundImage: 'url(/img/MidBanner.webp)', // Correct path for the public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // Optional overlay for better readability
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%', // Set height to 100% to match the height of the container
      backgroundImage: 'inherit',
      backgroundSize: 'inherit',
      backgroundPosition: 'inherit',
      filter: 'blur(3px)', // Adjust the blur strength as needed
      zIndex: 1,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%', // Cover the entire height with overlay
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay for readability
      zIndex: 2,
    },
  }}
>
    <Box
      sx={{
        position: 'relative',
        zIndex: 3, // Ensures the content is on top of both the image and overlay
        textAlign: 'center',
        color: 'white',
      }}
    >
       <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
        Don't wait, Protect Your Brand now
        </Typography>
       
        <Button
  variant="contained"
  color="primary"
  sx={{ padding: '10px 20px', fontSize: '1.2rem', textTransform: 'none' }}
>
  Start Filling
</Button>

      </Box>
    </Box>
  );
};

export default Banner;
