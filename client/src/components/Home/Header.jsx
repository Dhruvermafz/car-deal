import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" className="masthead" bg="blue.500" color="white" py="10">
      <Container maxW="container.lg">
        <Box textAlign="center">
          <Heading as="h1" fontSize="4xl" fontWeight="light" mb="5">
            Select Your Dreamy Shiny Next Car
          </Heading>
          <Text fontSize="xl">A great place to buy & sell cars</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
