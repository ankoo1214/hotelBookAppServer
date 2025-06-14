const express = require("express");
const { registerHotel, getHotels } = require("../controllers/hotelController");

const router = express.Router();

router.post("/register", registerHotel);
router.get("/", getHotels);

module.exports = router;
