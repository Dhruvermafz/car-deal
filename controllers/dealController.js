const { Deal } = require("../models");
// Function to add a new deal
const addDeal = async (dealData) => {
  try {
    // Create a new deal entry
    const newDeal = new Deal({
      deal_id: dealData.deal_id,
      car_id: dealData.car_id,
      deal_info: dealData.deal_info,
    });

    // Save the deal to the database
    const deal = await newDeal.save();

    return deal;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to get a deal by deal_id
const getDealById = async (deal_id) => {
  try {
    const deal = await Deal.findOne({ deal_id });
    return deal;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to update deal information
const updateDeal = async (deal_id, newData) => {
  try {
    const updatedDeal = await Deal.findOneAndUpdate({ deal_id }, newData, {
      new: true,
    });
    return updatedDeal;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to delete deal by deal_id
const deleteDeal = async (deal_id) => {
  try {
    await Deal.findOneAndDelete({ deal_id });
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  addDeal,
  getDealById,
  updateDeal,
  deleteDeal,
};
