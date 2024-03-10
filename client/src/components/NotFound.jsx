import { Box, Button, Link, Text } from "@chakra-ui/react";
import React from "react";

const NotFound = () => {
  return (
    <Box textAlign="center">
      <Text fontSize="4xl" fontWeight="bold" color="red.500">
        404
      </Text>
      <Text fontSize="xl" mt="2">
        Sorry, the page you visited does not exist.
      </Text>
      <Link to="/">
        <Button colorScheme="blue" mt="4">
          Back Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
