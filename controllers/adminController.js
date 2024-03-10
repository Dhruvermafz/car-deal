const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Admin } = require("../models");

// Function to authenticate admin
const authenticateAdmin = async (admin_id, password) => {
  try {
    // Find admin by admin_id
    const admin = await Admin.findOne({ admin_id });

    if (!admin) {
      throw new Error("Invalid credentials");
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password_hash);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // Generate JWT token
    const token = jwt.sign(
      { admin_id: admin.admin_id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  authenticateAdmin,
};
