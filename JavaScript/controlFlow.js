// if

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


const userLoggedIn = true;
const debitCard = false;

if(userLoggedIn && debitCard){
    console.log("Allowed to buy courses");
}

else{
    console.log("Not allowed");
}

