const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  car_id: {
    type: String,
    required: true,
    unique: true,
  },
  type: String,
  name: String,
  model: String,
  car_info: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
