const mongoose = require("mongoose");

const soldVehicleSchema = new mongoose.Schema({
  vehicle_id: {
    type: String,
    required: true,
    unique: true,
  },
  car_id: {
    type: String,
    required: true,
  },
  vehicle_info: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
});

const SoldVehicle = mongoose.model("SoldVehicle", soldVehicleSchema);

module.exports = SoldVehicle;
