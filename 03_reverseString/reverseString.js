const reverseString = function (string) {
  let newString = "";

  for (let n = string.length - 1; n >= 0; n--) {
    newString += string[n];
  }
  return newString;
};

console.log(reverseString("Hello world"));

// Do not edit below this line
module.exports = reverseString;
