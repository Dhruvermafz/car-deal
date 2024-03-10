import React from "react";

// Mock session object with fake user data
const mockSession = {
  loading: false,
  currentUser: {
    username: "exampleUser",
    email: "user@example.com",
    // Add other user data as needed
  },
  refetch: () => {},
};

const withSession = (Component) => (props) =>
  <Component {...props} session={mockSession} />;

export default withSession;
