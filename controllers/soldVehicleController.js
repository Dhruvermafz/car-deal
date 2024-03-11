const SoldVehicle = require("../models/soldVehicle"); // Import the SoldVehicle model

// Function to add a sold vehicle
const addSoldVehicle = async (soldVehicleData) => {
  try {
    // Create a new sold vehicle entry
    const newSoldVehicle = new SoldVehicle({
      vehicle_id: soldVehicleData.vehicle_id,
      car_id: soldVehicleData.car_id,
      vehicle_info: soldVehicleData.vehicle_info,
    });

    // Save the sold vehicle to the database
    const soldVehicle = await newSoldVehicle.save();

    return soldVehicle;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to get sold vehicle by vehicle_id
const getSoldVehicleById = async (vehicle_id) => {
  try {
    const soldVehicle = await SoldVehicle.findOne({ vehicle_id });
    return soldVehicle;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to update sold vehicle information
const updateSoldVehicle = async (vehicle_id, newData) => {
  try {
    const updatedSoldVehicle = await SoldVehicle.findOneAndUpdate(
      { vehicle_id },
      newData,
      { new: true }
    );
    return updatedSoldVehicle;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to delete sold vehicle by vehicle_id
const deleteSoldVehicle = async (vehicle_id) => {
  try {
    await SoldVehicle.findOneAndDelete({ vehicle_id });
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  addSoldVehicle,
  getSoldVehicleById,
  updateSoldVehicle,
  deleteSoldVehicle,
};
