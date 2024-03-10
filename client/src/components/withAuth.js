import React from "react";
import faker from "faker";
import { redirect as Redirect } from "react-router-dom";

const withAuth = (conditionFunc) => (Component) => (props) => {
  const fakeUserData = {
    currentUser: {
      username: faker.internet.userName(),
      email: faker.internet.email(),
    },
    loading: false,
  };

  return conditionFunc(fakeUserData) ? (
    <Component {...props} />
  ) : (
    <Redirect to="/" />
  );
};

export default withAuth;
