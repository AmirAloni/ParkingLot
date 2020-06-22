const express = require("express");
const router = express.Router();
const Decision = require("../../models/Decision");

// @route    GET /decisions
// @desc     Get all decisions
// @access   public
router.get("/", async (req, res) => {
  try {
    const decisions = await Decision.find();

    res.json(decisions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE /decisions
// @desc     DELETE all decisions
// @access   public
router.delete("/", async (req, res) => {
  try {
    const deleted = await Decision.deleteMany();

    res.json(deleted);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
