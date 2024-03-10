import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { NavbarAuth as Auth } from "./NavbarAuth";
import { NavbarUnAuth as UnAuth } from "./NavbarUnAuth";
const Navbar = ({ session }) => (
  <nav>
    <Flex align="center" justify="space-between" p="4">
      <Box>
        <Link href="/" fontWeight="bold" fontSize="xl" color="blue.500">
          Autocar
        </Link>
      </Box>
      <Box>{session && session.getCurrentUser ? <Auth /> : <UnAuth />}</Box>
    </Flex>
  </nav>
);

export default Navbar;
