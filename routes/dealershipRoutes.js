const express = require("express");
const router = express.Router();
const dealershipController = require("../controllers/dealershipController");

// Define dealership routes
router.post("/dealership", dealershipController.registerDealership);
router.get("/dealership/:id", dealershipController.getDealershipByEmail);
router.put("/dealership/:id", dealershipController.updateDealership);
router.delete("/dealership/:id", dealershipController.deleteDealership);

module.exports = router;
