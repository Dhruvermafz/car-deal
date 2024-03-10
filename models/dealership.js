const mongoose = require("mongoose");

const dealershipSchema = new mongoose.Schema({
  dealership_email: {
    type: String,
    required: true,
    unique: true,
  },
  dealership_id: {
    type: String,
    required: true,
    unique: true,
  },
  dealership_name: String,
  dealership_location: String,
  password_hash: {
    type: String,
    required: true,
  },
  dealership_info: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  cars: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
  deals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Deal",
    },
  ],
  sold_vehicles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SoldVehicle",
    },
  ],
});

const Dealership = mongoose.model("Dealership", dealershipSchema);

module.exports = Dealership;
