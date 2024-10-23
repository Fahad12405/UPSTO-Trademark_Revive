// FormButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const FormButton = ({ onClick, to, name, sx }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick} // This will be called when the button is clicked
      component={Link} // Use Link component for navigation
      to={to} // This will be the link destination
      sx={{
        ...sx, // Spread any additional styles
      }}
    >
      {name ? name : 'Start Register'}
    </Button>
  );
};

export default FormButton;
