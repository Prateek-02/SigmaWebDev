// if else

/*
const isUSerloggedIn = true;
if(isUSerloggedIn){
    console.log("User logged in");
}

if(2 == "2"){         // it only checks the value
    console.log("Executed");
}

if(2 === "2"){       // it checks the value as well as the data type
    console.log("Executed");
}
else{
    console.log("Not Executed");
}
*/


/*
const temperature = 33;
if(temperature < 50){
    console.log("Temperatue is less than 50");
}
else{
    console.log("Temperature is greater than 50");
}
*/


/*
const score = 200;

if(score > 100){
    const power = "fly";
    console.log(`User Power ${power}`);   // it will work inside this block only because variable is const, if the variable is var then we can use it globally
}
*/

/*
const balance = 1000;

// if(balance > 500) console.log("test"),console.log("test2");

if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if (balance < 900){
    console.log("less than 900");
}
else{
    console.log(`balance is ${balance}`);
}
*/

/*
const userLoggedIn = true;
const debitCard = true;

const loggedInFromGoogle = false;
const loggedInFromEmail = true;


if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}

if(userLoggedIn && debitCard){
    console.log("Allowed to buy courses");
}

else{
    console.log("Not allowed");
}
*/


// Switch Case

/*

const month = 9;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Please enter a valid number");
        break;

}
*/


// Truthy and falasy value

/*
const userEmail = [];

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// Falasy values:- False, 0, -0, "", BigInt 0n, null, undefined, NaN

//Truthy values:- True, 1, "abc", "0", 'false', [], " ", {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}
else{
    console.log("Array is not empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length == 0){
    console.log("Object is empty");
}
else{
    console.log("Object is not empty");
}
*/


// Nullish Coalescing Operator (??): null undefined

/*
let val1;

// val1 = 5 ?? 10;            // output = 5;
// val1 = null ?? 10;         // output = 10; (if the values is null then assign it null otherwise the given number)
// val1 = undefined ?? 15;    // output = 15; (if the values is undefined then assign it undefined otherwise the given number)
val1 = null ?? 10 ?? 15;      // output = 10;

console.log(val1);
*/


// Ternery Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More then 80")