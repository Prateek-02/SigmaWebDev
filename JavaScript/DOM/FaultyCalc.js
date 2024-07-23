/* Create a faulty calcualtor using javaSCript

This faulty calc does following:
1. It takes two numbers as input from the User
2. It performs wrong operations as follows:

+ --> -
* --> +
- -> /
/ --> **

It performs wrong operations 20% of the times

*/

let random = Math.random();
let a = prompt("Enter 1st number: ");
let c = prompt("Enter the operator: ");
let b = prompt("Enter 2nd number: ");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}


if(random > 0.2){
    // Perform correct calculation
    document.write(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    // Perform wrong calculation
    c = obj[c]
    document.write(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
