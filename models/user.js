const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true },
  location: { type: String },
  userInfo: { type: Object }, // You may need to specify a schema for user info
  password: { type: String, required: true },
  vehicleInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: "SoldVehicle" }],
});

const User = mongoose.model("User", userSchema);

export default User;
