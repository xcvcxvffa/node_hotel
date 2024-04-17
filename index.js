const express = require("express");
const app = express();
const db = require("./db.js");
const bodyParser = require("body-parser");
const personRouter = require("./routes/personRoutes.js");
const menuRouter = require("./routes/menuRoutes.js");
const PORT = process.env.PORT || 1000;

require("dotenv").config();
// Body parsing
app.use(bodyParser.json());

// Routes
app.get("/", function (req, res) {
  res.send("welcome to the node");
});

app.use("/person", personRouter);
app.use("/menu", menuRouter);

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
