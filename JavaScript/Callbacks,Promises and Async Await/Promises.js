// Promise is dor "eventual" completion of task. It is an object in JS.
// It is a solution to callback hell.

// let promise = new Promise(resolve,reject => {...})   (function with two handlers)
// Promise has 3 states:- Pending, Resolve and Reject

/*
let promise = new Promise((resolve,reject)=>{
    console.log("I am a Promise");
    resolve("success");  
    reject("some error")
});

console.log(promise);
*/

// Creation of promise
/*
function getData(dataId,getNextData){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("sucess")
            if(getNextData){
                getNextData();
            }
        }, 5000);
    })


let finalVal = getData(123);
console.log(finalVal);
*/

// use of promise
//promise.then() -- resolve & promise.catch() -- reject

/*
const getPromise = () =>{
    return new Promise((resolve,reject) =>{
        console.log("I am a Promise");
        resolve("success")
        // reject("Network error")
    })
}

let promise = getPromise();

promise.then((res) =>{
    console.log("Promise fulfilled",res);
})

promise.catch((err)=>{
    console.log("Rejected",err);
})
*/


//Promise chain

function asyncFunc1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success")
        }, 4000);
    })
}

function asyncFunc2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success")
        }, 4000);
    })
}

console.log("fetching data1....");
let p1 = asyncFunc1();

p1.then((res) =>{
    console.log(res);
    console.log("fetching data2....");
    
    let p2 = asyncFunc2();
    p2.then((res) =>{
        console.log(res);
    });
});








