import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const Product = ({ product }) => {
  const { name, desc, price, img } = product;
  return (
    <React.Fragment>
      <Grid item xs={4} sm={8} md={4}>
        <Card sx={{ boxShadow: "1px 2px 10px rgba(0,0,0,0.1)", p: 1 }}>
          <CardActionArea>
            <CardMedia component="img" sx={{ width: 1 }} image={img} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {desc.slice(0, 149)}...
              </Typography>
              <Typography variant="h6">Price: ${price}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button sx={{ width: 1, display: "block", color: "white" }} className="btn-custom">
              Buy Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default Product;
