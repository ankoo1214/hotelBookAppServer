const Hotel = require("../models/Hotel");

const registerHotel = async (req, res) => {
  try {
    const { name, phone, address, city, state, image } = req.body;
    console.log("Incoming Body:", req.body);

    const existing = await Hotel.findOne({ phone });
    if (existing) {
      return res.status(400).json({ message: "Hotel already exists" });
    }

    const hotel = new Hotel({
      name,
      phone,
      address,
      city,
      state,
      image,
    });

    await hotel.save();
    res.status(201).json({ hotel });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.log("Error getting hotels->", error);
  }
};
const deleteAllHotels = async (req, res) => {
  try {
    const result = await Hotel.deleteMany({});
    res.status(200).json({
      message: "All hotels deleted successfully",
      deletedHotels: result.deletedCount,
    });
  } catch (error) {
    console.log("Error deleting hotels ->", error);
    res.status(500).json({ error: "Failed to delete hotels" });
  }
};
module.exports = { registerHotel, getHotels, deleteAllHotels };
