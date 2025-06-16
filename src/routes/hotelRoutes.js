const express = require("express");
const {
  registerHotel,
  getHotels,
  deleteAllHotels,
} = require("../controllers/hotelController");

const router = express.Router();

router.post("/register", registerHotel);
router.get("/", getHotels);
router.delete("/deleteAll", deleteAllHotels);

module.exports = router;
