const removeFromArray = function (array, ...fjern) {
  
  return array.filter((item) => !fjern.includes(item));
};

console.log(removeFromArray([1, 2, 3, 4], 3, 4));

/*

filter = gennemgår alle elementerne, og tjekker om funktionen inde i filter returner true, 
hvis den gør, så returner den kun de tilfælde der er returneret true. 
Vi har !fjern.includes(item))
Hvis elementerne fra fjern er inkluderet i item, return false (!). 


*/

// Do not edit below this line
module.exports = removeFromArray;
