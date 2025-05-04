const express = require("express");
const router = express.Router();
const Request = require("../models/AssistanceRequest");

router.post("/add-new-request", async (req, res) => {
  try {
    const { title, description, category, urgency } = req.body;
    const newRequest = new Request({ title, description, category, urgency });
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
