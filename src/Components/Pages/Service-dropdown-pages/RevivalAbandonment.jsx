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


const RevivalAbandonment = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
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
       
      </CardActions>

    </Card>
  );

  return (
    <div>
      {showForm && <RegistrationForm />}
      {!showForm && <>




        <Spinner />
        <Header name="Revival for Abandonment" onButtonClick={handleButtonClick} />

        {/* Cards section */}
        <Container sx={{ py: 4 }}> {/* Optional Container for spacing */}
          <Grid container spacing={2} justifyContent="center"> {/* Use Grid to align items horizontally */}
            <Grid item xs={12} sm={6} md={4}> {/* Each card occupies 4 columns on medium screens */}
              {renderCard(
                "img/revival1.jpg",
                "Restore Your Abandoned Trademark",
                "Trademark Revive assists in restoring applications that were  abandoned, guiding you through  entire process efficiently.",
                "$299.00 per application + USPTO government fees"
              )}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              {renderCard(
                "/img/revival2.jpg",
                "Reclaim Your Brand's Identity",
                "Don't let an abandoned application hinder your brand. Trademark Revive will help you reclaim it and continue your registration journey seamlessly.",
                "$299.00 per application + USPTO government fees"
              )}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              {renderCard(
                "/img/revival3.webp",
                "Get Your Trademark Back on Track",
                "With Trademark Revive, revive your trademark application without the hassle of starting from scratch, ensuring quick and efficient reactivation.",
                "$299.00 per application + USPTO government fees"
              )}
            </Grid>
          </Grid>
        </Container>


        <Service />
        <Contact />
        <Category />
        <MidBanner onButtonClick={handleButtonClick} />
        <Scroll />
      </>
      }
    </div>
  );
};

export default RevivalAbandonment;
