const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  hotelId: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  images: [String],
});

module.exports = mongoose.model("Hotel", hotelSchema);
