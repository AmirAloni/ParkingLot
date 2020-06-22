const express = require("express");
const ocr = require("../../service/api/ocr");
const plateValidator = require("../../service/validator/plateValidator");
const router = express.Router();
const db = require("../../service/db/db");

// @route    GET /trypark
// @desc     Get a parking decision
// @access   public
router.get("/", async (req, res) => {
  try {
    const plateNumber = await ocr(req.body.path);

    if (plateNumber !== null && plateNumber.length > 0) {
      const options = {
        government: true,
        taxi: true,
        specialDigits: true,
        gas: true,
      };

      const decision = plateValidator(plateNumber, options);

      db.writeDecision(decision);
      res.status(200).send();
    } else res.status(400).send();
  } catch (err) {
    res.status(500).send("Server Error " + err.message);
  }
});

module.exports = router;
