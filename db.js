const mongoose = require("mongoose");
require("dotenv").config();

const dbUrl = process.env.MONGODB_URI;

const db = mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = db;
