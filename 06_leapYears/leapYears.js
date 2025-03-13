const leapYears = function (year) {
  let leapDivededFourhundred = year / 400;
  let leapDivdedHundred = year / 100;
  let leapDivideFour = year / 4;

  //If divisible by 100, and ends with 00, then it is not leap

  if (Number.isInteger(leapDivededFourhundred)) {
    return true;
  } else if (Number.isInteger(leapDivdedHundred)) {
    return false;
  } else if (Number.isInteger(leapDivideFour)) {
    return true;
  }
  return false;
};

console.log(leapYears(1900));

// Do not edit below this line
module.exports = leapYears;
