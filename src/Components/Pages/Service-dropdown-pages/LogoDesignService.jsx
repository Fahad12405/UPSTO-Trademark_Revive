import React, { useState } from 'react'; // Import useState
import Navbar from '../Navbar'; // Adjust the import paths as necessary
import Footer from '../Footer';
import Contact from '../Contact';
import Service from '../Service';
import Header from '../Header';
import Category from '../Category';
import MidBanner from '../MidBanner';
import Spinner from '../Spinner';
import Scroll from '../Scroll';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Importing Grid from MUI
import Container from '@mui/material/Container';
import RegistrationForm from "../RegistrationForm";


const LogoDesignService = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
const renderCard = (image, title, description, price) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt={title}
      height="200"
      image={image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {price}
      </Typography>
    </CardContent>
    <CardActions sx={{ marginBottom: 1 }}>
      
    </CardActions>
  </Card>
);

return (
  <div>
     {showForm && <RegistrationForm />}
     {!showForm && <>
    <Spinner />
    
    <Header name="Logo Design Service" onButtonClick={handleButtonClick} />
  {/* Cards section */}
  <Container sx={{ py: 4 }}> {/* Optional Container for spacing */}
  <Grid container spacing={2} justifyContent="center"> {/* Use Grid to align items horizontally */}
    <Grid item xs={12} sm={6} md={4}> {/* Each card occupies 4 columns on medium screens */}
      {renderCard(
        "/img/office logos-04.png",  // Update this to the actual logo design image path
        "Unique Brand Identity with Logo Design",
        "Trademark Revive creates impactful logos that reflect your brand’s personality. Our designers craft visuals that communicate your brand’s essence, setting it apart from competitors. Enjoy a streamlined process with full support and rapid revisions if needed.",
        "$99.00"
      )}
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      {renderCard(
        "/img/office logos-05.png",  // Update this to the actual logo design image path
        "Stand Out with Professional Logo Design",
        "Create a lasting impression with a professionally designed logo that encapsulates your brand’s mission and values. Trademark Revive’s team ensures each design element speaks directly to your target audience and business goals.",
        "$99.00"
      )}
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      {renderCard(
        "/img/office logos-13 (1).png",  // Update this to the actual logo design image path
        "Secure Your Brand with a Distinctive Logo",
        "Trademark Revive offers a comprehensive logo design service to visually define your business. Each logo is crafted with a strategic approach, ensuring your brand’s visual presence is impactful, memorable, and ready for trademark protection.",
        "$99.00"
      )}
    </Grid>
  </Grid>
</Container>


    
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

export default LogoDesignService;
