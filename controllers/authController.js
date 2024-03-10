const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Dealership = require("../models/dealership");
const validationResult = require("express-validator");
const generateJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password, userType } = req.body;
  let Model;

  try {
    // Check the user type and select the appropriate model
    if (userType === "user") {
      Model = User;
    } else if (userType === "dealership") {
      Model = Dealership;
    } else {
      return res.status(400).json({ message: "Invalid user type" });
    }

    // Check if user exists
    const user = await Model.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = generateJWT({ userId: user._id, userType });
    res.json({ token });
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ message: "Login failed" });
  }
};
