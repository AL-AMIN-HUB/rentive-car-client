import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import { AppBar, Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const Menubar = () => {
  const { user, logOut } = useAuth();
  return (
    <AppBar fixed={true.toString()}>
      <MuiNavbar logo="https://i.ibb.co/PxLTsjB/logo-rentive-fix-white.png" background="#111" navItemPosition="right">
        <NavItem to="/home">Home</NavItem>
        <NavItem to="/explore">Explore</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>

        {user?.email ? (
          <>
            <NavItem to="/dashboard">Dashboard</NavItem>
            <NavItem to="/login">
              <Button onClick={logOut} variant="contained">
                Logout
              </Button>
            </NavItem>
          </>
        ) : (
          <NavItem to="/login">
            <Button variant="contained">Login</Button>
          </NavItem>
        )}
      </MuiNavbar>
    </AppBar>
  );
};

export default Menubar;
