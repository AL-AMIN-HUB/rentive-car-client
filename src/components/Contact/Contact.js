import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextareaAutosize from "@mui/core/TextareaAutosize";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <React.Fragment>
      <Box className="contact" sx={{ my: 5 }}>
        <Container sx={{ color: "white" }}>
          <Grid container spacing={5}>
            <Grid sx={{ mt: "10%" }} item xs={12} md={7}>
              <Box>
                <Box>
                  <Typography sx={{ color: "#ffdd00", my: 2 }} variant="body2">
                    NEED A CAR RENTAL?
                  </Typography>{" "}
                  <Typography sx={{ fontWeight: "bold", mb: 3 }} variant="h3">
                    Don't Hesitate To Contact Us
                  </Typography>
                  <Typography variant="p">
                    Huracan has several personalities. The Corsa mode radicalizes absolutely everything (work of the car box, suspensions, direction,
                    sensitivity of the accelerator, sound of the exhaust). The Sport mode, almost as radical as the other, but that leaves the ESP
                    active, while making it more permissive
                  </Typography>
                </Box>
                <Box sx={{ my: 5 }}>
                  <Grid container spacing={5}>
                    <Grid item xs={6} md={6}>
                      <Typography sx={{ fontWeight: "500", mb: 3 }} variant="h5">
                        Khulna Branch
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="fas fa-map-marker-alt"></i>Sesetan East ST.1919, Khulna City
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="fas fa-phone-alt"></i>+888 019062215552
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="far fa-envelope"></i>alaminsbl502@gmail.com
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="far fa-clock"></i>10:00 AM -- 06:00 PM
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography sx={{ fontWeight: "500", mb: 3 }} variant="h5">
                        Dhaka Branch
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="fas fa-map-marker-alt"></i>Sesetan East ST.1919, Dhaka City
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="fas fa-phone-alt"></i>+888 019062215552
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="far fa-envelope"></i>alaminsbl502@gmail.com
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="far fa-clock"></i>10:00 AM -- 06:00 PM
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ background: "white", boxShadow: "1px 2px 10px rgba(0,0,0,0.1)", p: 3, color: "black" }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: "500" }}>
                    Contact Form
                  </Typography>
                  <Typography variant="p" color="text.secondary">
                    For more information or any booking, our reservation team is available 24/7 by phone +33 (0)4 22 46 15 15 or by email
                    reservation@aaarentcars.com.
                  </Typography>
                </Box>
                <TextField id="outlined-basic" type="text" sx={{ width: 1, my: 1 }} label="Your Name" variant="outlined" />{" "}
                <TextField id="outlined-basic" type="text" sx={{ width: 1, my: 1 }} label="Your Email" variant="outlined" />{" "}
                <TextField id="outlined-basic" type="text" sx={{ width: 1, my: 1 }} label="Phone" variant="outlined" />{" "}
                <TextareaAutosize minRows={7} placeholder="Your Message" style={{ width: "98%" }} />
                <Button type="submit" sx={{ width: 1, background: "#ffdd00", color: "black", mt: 3 }}>
                  SUBMIT
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
