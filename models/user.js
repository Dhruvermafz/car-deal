const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_email: {
    type: String,
    required: true,
    unique: true,
  },
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  user_location: String,
  user_info: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  password_hash: {
    type: String,
    required: true,
  },
  vehicle_info: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SoldVehicle",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
