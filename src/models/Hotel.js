const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  hotelId: {
    type: Number,
    require: true,
  },
  name: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  image: String, // storing image as string
});

module.exports = mongoose.model("Hotel", hotelSchema);
