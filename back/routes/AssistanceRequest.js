const express = require("express");
const router = express.Router();
const Request = require("../models/AssistanceRequest");
const authMiddleWare = require("../middleware/auth");
const mongoose = require("mongoose");

router.post("/add-new-request", authMiddleWare, async (req, res) => {
  try {
    const { title, description, category, urgency } = req.body;
    const userId = req.user.id;
    const newRequest = new Request({
      title,
      description,
      category,
      urgency,
      createdAt: new Date(),
      userId,
    });
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("", authMiddleWare, async (req, res) => {
  try {
    const userId = req.user.id;
    const isAdmin = req.user.role === "admin";
    const search = req.query.search || "";

    const searchCriteria = {
      $or: [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    };

    let baseQuery = isAdmin ? {} : { userId };

    const query = search ? { ...baseQuery, ...searchCriteria } : baseQuery;

    const requests = await Request.find(query).sort({ createdAt: -1 });

    const returnedRequests = requests.map((request) => ({
      id: request.id,
      title: request.title,
      status: request.status,
      category: request.category,
      description: request.description,
      urgency: request.urgency,
      adminComment: request.adminComment,
      createdAt: request.createdAt,
    }));

    res.status(200).json(returnedRequests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/:id", authMiddleWare, async (req, res) => {
  try {
    const { status, adminComment } = req.body;

    if (!["Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Statut invalide" });
    }
    const requestId = req.params.id;
    console.log(requestId);
    if (!mongoose.Types.ObjectId.isValid(requestId)) {
      return res.status(400).json({ message: "ID invalide" });
    }
    const updated = await Request.findByIdAndUpdate(
      requestId,
      { status, adminComment },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Demande non trouvée" });
    }

    res.status(200).json(updated);
  } catch (error) {
    console.error("Error in update request:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
