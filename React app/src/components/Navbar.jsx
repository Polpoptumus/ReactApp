import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "/public/assets/logo.png";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} alt="Logo" className="logo" width="80px" />
        <Typography variant="h6" component={Link} to="/" className="menu-item">
          HOME
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/products"
          className="menu-item"
        >
          PRODUCTS
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/team"
          className="menu-item"
        >
          TEAM
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/contact"
          className="menu-item"
        >
          CONTACT
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
