const check = require("./check");

const taxiVerify = (plateNumber) => check.taxiVerify(plateNumber);
const governmentVerify = (plateNumber) => check.governmentVerify(plateNumber);
const specialDigitsVerify = (plateNumber) =>
  check.specialDigitsVerify(plateNumber);
const gasVerify = (plateNumber) => check.gasVerify(plateNumber);

const optionsConfig = {
  government: governmentVerify,
  taxi: taxiVerify,
  specialDigits: specialDigitsVerify,
  gas: gasVerify,
};

const verifyPlate = (plateNumber, options) => {
  let stopCheckFlag = false;
  let decision = {
    decision: true,
    reason: plateNumber + " Valid",
  };

  if (plateNumber.length > 1) {
    Object.keys(options).forEach((key) => {
      if (!stopCheckFlag) {
        if (optionsConfig[key](plateNumber)) {
          stopCheckFlag = true;
          const decision = {
            decision: false,
            reason: plateNumber + " " + key,
          };
        }
      }
    });
  }
  return decision;
};

module.exports = (plateNumber, options) => verifyPlate(plateNumber, options);
