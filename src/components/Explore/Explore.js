import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Product from "../Product/Product";
import Menubar from "../../Shared/Menubar/Menubar";
import Footer from "../Footer/Footer";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-mountain-47357.herokuapp.com/carExplore")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <React.Fragment>
      <Menubar />
      <Container sx={{ py: 5 }}>
        <Typography variant="p" sx={{ fontWeight: "bold", mt: 5, color: "orange" }} component="div">
          WHAT WE OFFER
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: "500", my: 2 }} color="text.secondary" component="div">
          All New Cars Collection
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Explore;
