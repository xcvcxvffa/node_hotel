const express = require("express");
const app = express();
const port = 1000;
const db = require("./db.js");
const bodyParser = require("body-parser");
const personRouter = require("./routes/personRoutes.js");
const menuRouter = require("./routes/menuRoutes.js");

// Body parsing
app.use(bodyParser.json());

// Routes
app.get("/", function (req, res) {
  res.send("welcome to the node");
});

app.use("/person", personRouter);
app.use("/menu", menuRouter);

// comment added

app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
