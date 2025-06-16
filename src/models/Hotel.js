const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  hotelId: {
    type: String,
    require: true,
  },
  name: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  image: String,
});

module.exports = mongoose.model("Hotel", hotelSchema);
