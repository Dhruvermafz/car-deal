import React from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "../../router";
import { useToast, Button } from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";

const handleSignout = (client, history) => {
  // clear local storage token
  localStorage.setItem("token", "");
  // Apollo client store reset->signout successfully
  client.resetStore();
  // Redirect to Home after Signout
  history.push("/");
  // Show notification
  notification.open({
    message: "Logged Out From The App",
    description: "See you soon!",
    icon: <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />,
  });
};

const Signout = ({ history }) => {
  const toast = useToast();

  return (
    <ApolloConsumer>
      {(client) => (
        <Button
          variant="link"
          colorScheme="blue"
          leftIcon={<FaSignOutAlt />}
          onClick={() => handleSignout(client, history, toast)}
        >
          Signout
        </Button>
      )}
    </ApolloConsumer>
  );
};

export default withRouter(Signout);
