import React, { Fragment, useState } from "react";
import { Mutation } from "react-apollo";
import { SIGNIN_USER } from "../../queries";
import Error from "../Error";
import { withRouter } from "../../router";

import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

const Signin = ({ history }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, signinUser) => {
    e.preventDefault();
    try {
      const { data } = await signinUser();
      localStorage.setItem("token", data.signinUser.token);
      history.push("/profile");
    } catch (err) {
      setError(err.message);
      // Clear password field on error
      setFormData({ ...formData, password: "" });
    }
  };

  const validateForm = () => {
    const { username, password } = formData;
    return !username || !password;
  };

  const { username, password } = formData;

  return (
    <Fragment>
      <Text fontSize="xl" textAlign="center" mt={5}>
        Signin Today!
      </Text>
      <Stack
        maxWidth="400px"
        mt={4}
        mx="auto"
        p={4}
        borderRadius="md"
        boxShadow="md"
      >
        <Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
          {(signinUser, { loading }) => (
            <form onSubmit={(e) => handleSubmit(e, signinUser)}>
              <FormControl isInvalid={error}>
                <Icon
                  as={Icon}
                  name="user"
                  fontSize="2xl"
                  color="blue.500"
                  mx="auto"
                />
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={handleChange}
                  mt={3}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                  mt={3}
                />
                <Checkbox mt={3}>Remember me next time</Checkbox>
                <Button
                  type="submit"
                  colorScheme="blue"
                  mt={4}
                  isLoading={loading}
                  disabled={loading || validateForm()}
                >
                  Submit
                </Button>
                {error && <FormErrorMessage>{error}</FormErrorMessage>}
              </FormControl>
            </form>
          )}
        </Mutation>
      </Stack>
    </Fragment>
  );
};

export default withRouter(Signin);
