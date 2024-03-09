// models/Dealership.js

import mongoose from "mongoose";

const dealershipSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  dealershipId: { type: String, required: true, unique: true },
  name: { type: String },
  location: { type: String },
  password: { type: String, required: true },
  dealershipInfo: { type: Object }, // You may need to specify a schema for dealership info
  cars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Car" }],
  deals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Deal" }],
  soldVehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: "SoldVehicle" }],
});

const Dealership = mongoose.model("Dealership", dealershipSchema);

export default Dealership;