import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./components/Auth/Signin.jsx";
import Signup from "./components/Auth/Signup.jsx";
import Navbar from "./components/Navbar/index.jsx";
const Root = () => (
  <Router>
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={<App />} />
        <Route path="/signin" render={() => <Signin />} />
        <Route path="/signup" render={() => <Signup />} />
      </Routes>
    </>
  </Router>
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
