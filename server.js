const express = require("express");
const dotenv = require("dotenv");
const connectToMongoDB = require("./utils/mongo");
const userRoutes = require("./routes/userRoutes");
const dealershipRoutes = require("./routes/dealershipRoutes");
const soldVehicleRoutes = require("./routes/soldVehicleRoutes");
const errorHandler = require("./utils/errorMiddleware");
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

    // Routes
    app.use("/api", userRoutes);
    app.use("/api", dealershipRoutes);
    app.use("/api", soldVehicleRoutes);

    // Error handling middleware
    app.use(errorHandler);
    // Start the server
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.error(
      "Failed to connect to MongoDB and Server is not running!",
      err
    );
  });
