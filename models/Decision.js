const mongoose = require("mongoose");

const DecisionSchema = new mongoose.Schema({
  decision: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Decision = mongoose.model("decision", DecisionSchema);
