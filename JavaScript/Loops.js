console.log("I am a tutorial on loops")

// for loop
for (let i=0;i<=50;i++){
    console.log(i);
}

let obj = {
    name:"Prateek",
    role:"Programmer",
    company:"CodeWithHarry AI"
}

// for in loop
for (const key in obj) {
        // const element = obj[key];
        console.log(key);
}

//for of loop
for (const c of "Prateek") {
    console.log(c);
}

// while loop
let x = 0;
while(x<6){
    console.log(x);
    x++;
}

// do while loop
let z = 10;
do{
    console.log(z);
    z++;
}while(z<6);