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


// Switch

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