const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connection");
const hotelRoutes = require("./routes/hotelRoutes");

const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/hotels", hotelRoutes);


module.exports = app;
