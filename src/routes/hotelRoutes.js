const express = require("express");
const {
  registerHotel,
  getHotels,
  deleteAllHotels,
} = require("../controllers/hotelController");

const router = express.Router();

router.post("/register", registerHotel);
router.get("/", getHotels);
router.delete("deletAll", deleteAllHotels);

module.exports = router;
