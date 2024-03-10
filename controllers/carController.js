const { Car } = require("../models"); // Import the Car model

const addCar = async (carData) => {
  try {
    // Create a new car entry
    const newCar = new Car({
      car_id: carData.car_id,
      type: carData.type,
      name: carData.name,
      model: carData.model,
      car_info: carData.car_info,
    });

    // Save the car to the database
    const car = await newCar.save();

    return car;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to get a car by car_id
const getCarById = async (car_id) => {
  try {
    const car = await Car.findOne({ car_id });
    return car;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to update car information
const updateCar = async (car_id, newData) => {
  try {
    const updatedCar = await Car.findOneAndUpdate({ car_id }, newData, {
      new: true,
    });
    return updatedCar;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to delete car by car_id
const deleteCar = async (car_id) => {
  try {
    await Car.findOneAndDelete({ car_id });
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  addCar,
  getCarById,
  updateCar,
  deleteCar,
};
