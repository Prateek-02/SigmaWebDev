// CallBack Hell:- Nested callbacks staked below one another forming a pyramid structure.(Pyramid doom)
// This style of programming becomoes difficult to understand & manange

const { get } = require("mongoose");


// nesting

// nested if-else
/*
let age = 19;
if(age>=18){
    if(age>=60){
        console.log("Senior");
    }
    else{
        console.log("middle");
    }
}
else{
    console.log("child");
}
*/

// nested loop
/*
for(let i=0;i<5;i++){
    let str = "";
    for(let j=0; j<5;j++){
        str = str+j;
    }
    console.log(i,str);
}
*/


function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

// callback hell
getData(1,() => {
    console.log("getting data2...");
    getData(2, () => {
        console.log("getting data3...");
        getData(3, () => {
            console.log("getting data4...");
            getData(4);
        });
    });
});

