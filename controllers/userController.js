const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Function to authenticate user
const authenticateUser = async (user_email, password) => {
  try {
    // Find user by email
    const user = await User.findOne({ user_email });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // Generate JWT token
    const token = jwt.sign(
      { user_email: user.user_email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to register a new user
const registerUser = async (userData) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create a new user
    const newUser = new User({
      user_email: userData.user_email,
      user_id: userData.user_id,
      user_location: userData.user_location,
      user_info: userData.user_info,
      password_hash: hashedPassword,
      vehicle_info: userData.vehicle_info,
    });

    // Save the user to the database
    const user = await newUser.save();

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to get user by email
const getUserByEmail = async (user_email) => {
  try {
    const user = await User.findOne({ user_email });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to update user information
const updateUser = async (user_email, newData) => {
  try {
    const updatedUser = await User.findOneAndUpdate({ user_email }, newData, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to delete user by email
const deleteUser = async (user_email) => {
  try {
    await User.findOneAndDelete({ user_email });
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  authenticateUser,
  registerUser,
  getUserByEmail,
  updateUser,
  deleteUser,
};
