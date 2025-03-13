const convertToCelsius = function (fahrenheitTemp) {
  return Math.round((fahrenheitTemp - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celciusTemp) {
  return Math.round((celciusTemp * (9 / 5) + 32) * 10) / 10;
};

console.log(convertToCelsius(100)); // fahrenheit to celsius, should return 0.

console.log(convertToFahrenheit(0)); // celsius to fahrenheit, should return 32

/*
We want to just return 1 decimal:
37.1 for example.
Use Math.round(num * 10) / 10

*/

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
