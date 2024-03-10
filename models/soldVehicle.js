const mongoose = require("mongoose");
const soldVehicleSchema = new mongoose.Schema({
  carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
  vehicleInfo: { type: Object },
});

const SoldVehicle = mongoose.model("SoldVehicle", soldVehicleSchema);

export default SoldVehicle;
