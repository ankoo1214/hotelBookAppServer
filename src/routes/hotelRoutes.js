const express = require("express");
const {
  registerHotel,
  getHotels,
  deleteAllHotels,
  insertManyHotels,
} = require("../controllers/hotelController");

const router = express.Router();

router.post("/register", registerHotel);
router.get("/", getHotels);
router.delete("/deleteAll", deleteAllHotels);
router.post("/insert/many", insertManyHotels);

module.exports = router;
