const express = require("express");
const dotenv = require("dotenv");
const connectToMongoDB = require("./utils/mongo");

// Load environment variables from .env file
dotenv.config();

// Create Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectToMongoDB()
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
