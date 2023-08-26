import React from 'react'
import TourCard from "../components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PrimarySearchAppBar from "../components/AppBar";
import cities from "../data.json";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
    <PrimarySearchAppBar />
    <Container sx={{ marginY: 5 }}>
     
      {cities.map((city) => (
        <>
          <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
          >
            Top {city.name} tours
          </Typography>
          <Grid container spacing={5}>
            {city.tours.map((tour, index) => (
              <TourCard tour={tour} key={index}></TourCard>
            ))}
          </Grid>
        </>
      ))}
    </Container>
  </>
  )
}

export default Home