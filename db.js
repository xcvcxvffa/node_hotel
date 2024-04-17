const mongoose = require("mongoose");

// Connect to MongoDB
const db = mongoose
  .connect("mongodb://localhost:27017/zescher")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = db;
