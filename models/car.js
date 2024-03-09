// models/Car.js

import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  type: { type: String },
  name: { type: String },
  model: { type: String },
  carInfo: { type: Object }, // You may need to specify a schema for car info
});

const Car = mongoose.model("Car", carSchema);

export default Car;
