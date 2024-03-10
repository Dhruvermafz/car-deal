import { Box, Link, Menu, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Signout from "../Auth/SignOut";

const NavbarAuth = () => {
  return (
    <Menu>
      <MenuList>
        <MenuItem>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/car/add" exact>
            Add Car
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/profile" exact>
            Profile
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/search" exact>
            Search
          </NavLink>
        </MenuItem>
        <MenuItem>
          <Signout />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavbarAuth;
