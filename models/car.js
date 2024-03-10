const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
  type: { type: String },
  name: { type: String },
  model: { type: String },
  carInfo: { type: Object },
});

const Car = mongoose.model("Car", carSchema);

export default Car;
