import React from 'react';
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

const LogoDesignService = () => {
 // Function to render each card
// Function to render each card
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
      <Button size="small" variant="contained" color="primary">
        Register Now
      </Button>
    </CardActions>
  </Card>
);

return (
  <div>
    <Spinner />
    
    <Header name="Logo Design Service" />
  {/* Cards section */}
<Container sx={{ py: 4 }}> {/* Optional Container for spacing */}
  <Grid container spacing={2} justifyContent="center"> {/* Use Grid to align items horizontally */}
    <Grid item xs={12} sm={6} md={4}> {/* Each card occupies 4 columns on medium screens */}
      {renderCard(
        "/img/cat-2.jpg",  // Change this to your actual logo design image path
        "Get a Logo that Speaks for Your Brand",
        "Handling every aspect of logo creation, from concept to finalization, ensuring a polished result. Support team is available to address any inquiries or issues. If revisions are needed, we act swiftly to make adjustments, ensuring minimal disruption to your timeline. Invest in a logo that captures the essence of your brand, and consider protecting it with a trademark to secure your business's future success.",
        "$99.00"
      )}
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      {renderCard(
        "/img/cat-4.jpg",  // Change this to your actual logo design image path
        "Get a Logo that Speaks for Your Brand",
        "Handling every aspect of logo creation, from concept to finalization, ensuring a polished result. Support team is available to address any inquiries or issues. If revisions are needed, we act swiftly to make adjustments, ensuring minimal disruption to your timeline. Invest in a logo that captures the essence of your brand, and consider protecting it with a trademark to secure your business's future success.",
        "$99.00"
      )}
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      {renderCard(
        "/img/cat-1.jpg",  // Change this to your actual logo design image path
        "Get a Logo that Speaks for Your Brand",
        "Handling every aspect of logo creation, from concept to finalization, ensuring a polished result. Support team is available to address any inquiries or issues. If revisions are needed, we act swiftly to make adjustments, ensuring minimal disruption to your timeline. Invest in a logo that captures the essence of your brand, and consider protecting it with a trademark to secure your business's future success.",
        "$99.00"
      )}
    </Grid>
  </Grid>
</Container>

    
      <Service />
      <Category />
      <MidBanner />
      <Contact />
      <Scroll />
    </div>
  );
};

export default LogoDesignService;
