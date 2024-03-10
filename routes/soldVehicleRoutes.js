const express = require("express");
const router = express.Router();
const soldVehicleController = require("../controllers/soldVehicleController");

// Define sold vehicles routes
router.post("/sold-vehicle", soldVehicleController.addSoldVehicle);
router.get("/sold-vehicle/:id", soldVehicleController.getSoldVehicleById);
router.put("/sold-vehicle/:id", soldVehicleController.updateSoldVehicle);
router.delete("/sold-vehicle/:id", soldVehicleController.deleteSoldVehicle);

module.exports = router;
