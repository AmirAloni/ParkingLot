const Decision = require("../../models/Decision");

async function writeDecision(decisionJson) {
  decision = new Decision({
    decision: decisionJson.decision,
    reason: decisionJson.reason,
  });

  await decision.save();
}

module.exports = {
  writeDecision,
};
