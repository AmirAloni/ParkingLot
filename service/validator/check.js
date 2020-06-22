const isAlpha = (ch) => {
  return (
    typeof ch === "string" &&
    ch.length === 1 &&
    ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))
  );
};

const sumLetters = (str) => {
  let sum = 0;
  let splitStr = str.split("");
  for (let i = 0; i < splitStr.length; i++) {
    sum += parseInt(splitStr[i]);
  }
  return sum;
};

const taxiVerify = (plateNumber) => {
  const last = plateNumber.length - 1;
  return ["25", "26"].includes(plateNumber.slice(-2));
};

const governmentVerify = (plateNumber) => {
  let isGovernment = false;
  plateNumber.split("").map((char) => {
    if (isAlpha(char)) isGovernment = true;
  });
  return isGovernment;
};

const specialDigitsVerify = (plateNumber) => {
  const last = plateNumber.length - 1;
  return (
    plateNumber.length === 7 &&
    ["85", "86", "87", "88", "89", "00"].includes(plateNumber.slice(-2))
  );
};

const gasVerify = (plateNumber) => {
  return (
    (plateNumber.length === 7 || plateNumber.length === 8) &&
    sumLetters(plateNumber) % 7 === 0
  );
};

module.exports = {
  taxiVerify,
  governmentVerify,
  specialDigitsVerify,
  gasVerify,
};
