import React, { Fragment, useState } from "react";
import { Mutation } from "react-apollo";
import { SIGNUP_USER } from "../../queries";
import Error from "../Error";
import { useNavigate as withRouter } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

const initState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const Signup = ({ history }) => {
  const [formData, setFormData] = useState({ ...initState });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event, signupUser) => {
    event.preventDefault();
    signupUser().then(async ({ data }) => {
      localStorage.setItem("token", data.signupUser.token);
      setFormData({ ...initState });
      history.push("/");
    });
  };

  const validateForm = () => {
    const { username, email, password, passwordConfirmation } = formData;
    return (
      !username || !email || !password || password !== passwordConfirmation
    );
  };

  return (
    <Fragment>
      <h2 className="t-center mt-5">Signup Today!</h2>
      <div className="cardcontainer">
        <Mutation mutation={SIGNUP_USER} variables={formData}>
          {(signupUser, { loading, error }) => (
            <form onSubmit={(e) => handleSubmit(e, signupUser)}>
              <Stack spacing={3} mt={4}>
                <FormControl isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    type="password"
                    name="passwordConfirmation"
                    value={formData.passwordConfirmation}
                    onChange={handleChange}
                  />
                </FormControl>

                <Checkbox>Send me newsletter & Offers</Checkbox>

                <Button
                  type="submit"
                  isLoading={loading}
                  disabled={validateForm()}
                  colorScheme="blue"
                >
                  Submit
                </Button>

                {error && <Error error={error} />}
              </Stack>
            </form>
          )}
        </Mutation>
      </div>
    </Fragment>
  );
};

export default withRouter(Signup);
