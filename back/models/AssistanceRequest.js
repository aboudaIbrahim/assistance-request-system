const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  urgency: {
    type: String,
    enum: ["Normal", "Urgent", "Critique"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
  adminComment: { type: String },
});

module.exports = mongoose.model("Request", requestSchema);
