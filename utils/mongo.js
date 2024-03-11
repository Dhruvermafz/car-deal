const mongoose = require("mongoose");

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};

module.exports = connectToMongoDB;
