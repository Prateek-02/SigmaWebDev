console.log("Hello i am conditional tutorial")

let age = 17;
let grace = 2;

age += grace; 
console.log("New age is: "+age);
console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age % grace);
console.log(age ** grace);


// conditions
if(age>18){
    console.log("You can drive");
}
else if(age == 0){
    console.log("Are you kidding?");
}
else{
    console.log("You cannot drive");
}

// Ternary operator

let c = age>grace ? (age-grace):(grace-age);
console.log(c);

