const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }
  let result = "";

  for (let n = 0; n < num; n++) {
    result += string;
  }
  return result;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
