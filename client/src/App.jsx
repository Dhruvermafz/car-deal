import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Home/Header";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <div>
          <h2 className="text-center text-gray myy">Get Your Dream Car</h2>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  // Define your home component here
  return <div>Home Component</div>;
};

export default App;
