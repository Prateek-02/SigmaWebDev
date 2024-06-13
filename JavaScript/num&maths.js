const score = 300
console.log(score);

const balance = new Number(100.123)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));     // 2 integer value after the decimal

const otherNum = 123.8966;
console.log(otherNum.toPrecision(4));   // round of to given decimal places

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));   // convert into indian number system

// ++++++++++++++++  MATHS  ++++++++++++++++++

console.log((Math.abs(-2)));    // converts -ve to +ve
console.log(Math.round(4.3));   // roundoff to nearest decimal place
console.log(Math.ceil(4.3));    // roundoff to upper value (5)
console.log(Math.floor(4.9));   // roundoff to lower value (4)

console.log(Math.max(3,4,5,6));  // returns the max value of array
console.log(Math.min(3,4,5,6));  // returns the min value of array

console.log(Math.random());    // gives a random value b/w 0 and 1 each time


let min = 10;
let max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);