import { Box, Container, Flex, Icon, Link, Text } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py="10">
      <Container maxW="container.lg">
        <Flex justifyContent="center">
          <Link href="#" mr="4">
            <Icon as={FaFacebookF} fontSize="2xl" />
          </Link>
          <Link href="#" mr="4">
            <Icon as={FaTwitter} fontSize="2xl" />
          </Link>
          <Link href="#" mr="4">
            <Icon as={FaGooglePlusG} fontSize="2xl" />
          </Link>
          <Link href="#" mr="4">
            <Icon as={FaLinkedinIn} fontSize="2xl" />
          </Link>
          <Link href="#" mr="4">
            <Icon as={FaInstagram} fontSize="2xl" />
          </Link>
          <Link href="#">
            <Icon as={FaPinterest} fontSize="2xl" />
          </Link>
        </Flex>
        <Text textAlign="center" mt="5">
          © 2022 Copyright: Simanta <Link href="#">CarDealer</Link>
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
