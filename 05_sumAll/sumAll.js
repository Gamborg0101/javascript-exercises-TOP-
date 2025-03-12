const sumAll = function (num1, num2) {
  let finalSum = 0;
  let temp = 0;
  
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }

  if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
  }

  for (let n = num1; n <= num2; n++) {
    finalSum = finalSum + n;
  }
  return finalSum;
};

console.log(sumAll(5, 1));

// Do not edit below this line
module.exports = sumAll;

/*

sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10



Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop
*/
