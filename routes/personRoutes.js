const express = require("express");
const routes = express.Router();
const Person = require("./../model/person.js");

routes.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    console.error("Error saving person:", error);
    res.status(500).json({ error: "Invalid data" });
  }
});

routes.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    res.status(201).json(data);
  } catch (error) {
    console.error("Error fetching persons:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

routes.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ role: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

routes.put("/:id", async (req, res) => {
  try {
    const personid = req.params.id;
    const updatedpersondata = req.body;

    const response = await Person.findByIdAndUpdate(
      personid,
      updatedpersondata,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }
    res.status(200).json(response);
    res.status(200).json({ message: "Person udated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

routes.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const deletedPerson = await Person.findByIdAndDelete(personId);
    if (!deletedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }

    res.status(200).json({ message: "Person deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = routes;
