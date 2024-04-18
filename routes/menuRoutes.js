const express = require("express");
const routes = express.Router();
const MenuItem = require("./../model/MenuItem.js");

// POST route to add a new menu item
routes.post("/", async (req, res) => {
  try {
    const menudata = req.body;
    const newItem = new MenuItem(menudata);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error("Error adding menu item:", err);
    res.status(400).json({ message: err.message });
  }
});

routes.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json(menuItems);
  } catch (err) {
    console.error("Error fetching menu items:", err);
    res.status(500).json({ error: "Internal Server Error aave 6 bhai" });
  }
});

routes.put("/:id", async (req, res) => {
  try {
    const menuid = req.params.id;
    const updatemenu = req.body;

    const response = await MenuItem.findByIdAndUpdate(menuid, updatemenu, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ error: "menu not found" });
    }
    res.status(200).json(response);
  } catch (err) {
    console.error("Error fetching menu items:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

routes.delete("/:id", async (req, res) => {
  try {
    const menuid = req.params.id;
    const response = await MenuItem.findByIdAndDelete(menuid);
    if (!response) {
      return res.status(404).json({ error: "menu not found" });
    }

    res.status(200).json({ message: "menu deleted successfully" });
  } catch (err) {
    console.error("Error fetching menu items:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = routes;
