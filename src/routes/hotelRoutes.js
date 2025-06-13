const express = require("express");
const { registerHotel } = require("../controllers/hotelController");

const router = express.Router();

router.post("/register", registerHotel);

module.exports = router;
