const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Dealership } = require("../models");

// Function to authenticate dealership
const authenticateDealership = async (dealership_email, password) => {
  try {
    // Find dealership by email
    const dealership = await Dealership.findOne({ dealership_email });

    if (!dealership) {
      throw new Error("Invalid credentials");
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, dealership.password_hash);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // Generate JWT token
    const token = jwt.sign(
      { dealership_email: dealership.dealership_email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to register a new dealership
const registerDealership = async (dealershipData) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(dealershipData.password, 10);

    // Create a new dealership
    const newDealership = new Dealership({
      dealership_email: dealershipData.dealership_email,
      dealership_id: dealershipData.dealership_id,
      dealership_name: dealershipData.dealership_name,
      dealership_location: dealershipData.dealership_location,
      password_hash: hashedPassword,
      dealership_info: dealershipData.dealership_info,
      cars: dealershipData.cars,
      deals: dealershipData.deals,
      sold_vehicles: dealershipData.sold_vehicles,
    });

    // Save the dealership to the database
    const dealership = await newDealership.save();

    return dealership;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to get dealership by email
const getDealershipByEmail = async (dealership_email) => {
  try {
    const dealership = await Dealership.findOne({ dealership_email });
    return dealership;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to update dealership information
const updateDealership = async (dealership_email, newData) => {
  try {
    const updatedDealership = await Dealership.findOneAndUpdate(
      { dealership_email },
      newData,
      { new: true }
    );
    return updatedDealership;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to delete dealership by email
const deleteDealership = async (dealership_email) => {
  try {
    await Dealership.findOneAndDelete({ dealership_email });
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  authenticateDealership,
  registerDealership,
  getDealershipByEmail,
  updateDealership,
  deleteDealership,
};
