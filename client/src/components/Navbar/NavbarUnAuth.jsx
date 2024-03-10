import { Box, Menu, MenuItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React from "react";

const NavbarUnAuth = () => {
  return (
    <Menu>
      <MenuItem>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/search" exact>
          Search
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/signin" exact>
          Signin
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/signup" exact>
          Signup
        </NavLink>
      </MenuItem>
    </Menu>
  );
};

export default NavbarUnAuth;
