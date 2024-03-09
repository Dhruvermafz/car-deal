// models/SoldVehicle.js

import mongoose from "mongoose";

const soldVehicleSchema = new mongoose.Schema({
  carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
  vehicleInfo: { type: Object }, // You may need to specify a schema for vehicle info
});

const SoldVehicle = mongoose.model("SoldVehicle", soldVehicleSchema);

export default SoldVehicle;
