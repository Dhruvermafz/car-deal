import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Error = ({ error }) => {
  return (
    <Box textAlign="center">
      <Text>{error.message}</Text>
    </Box>
  );
};

export default Error;
