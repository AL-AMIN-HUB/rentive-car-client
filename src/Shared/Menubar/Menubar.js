import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import { AppBar, Button } from "@mui/material";

const Menubar = () => {
  return (
    <AppBar fixed={true.toString()}>
      <MuiNavbar logo="https://i.ibb.co/PxLTsjB/logo-rentive-fix-white.png" background="#111" navItemPosition="right">
        <NavItem to="/home">Home</NavItem>
        <NavItem to="/explore">Explore</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/dashboard">Dashboard</NavItem>
        <NavItem to="/login">
          <Button variant="inherit">Login</Button>
        </NavItem>
      </MuiNavbar>
    </AppBar>
  );
};

export default Menubar;
